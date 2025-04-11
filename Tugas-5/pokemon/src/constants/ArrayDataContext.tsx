import React, {createContext, useState, useContext} from "react";
import initialData from "../assets/pokemon.json"

interface ArrayDataContextType {
    items: any[];
    clearSearch: () => void;
    filter: (item: string) => void;
    sort: (item: string) => void;
}

const ArrayDataContext = createContext<ArrayDataContextType | undefined>(undefined);

export const useArrayData = () => {
    const context = useContext(ArrayDataContext);
    if (!context) {
        throw new Error("useArrayData must be used within an ArrayDataProvider");
    }
    return context;
};

export const ArrayDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<any[]>(initialData);

    const clearSearch = () => {
        setItems(initialData);
    };

    const filter = (itemToRemove: string) => {
        if (!itemToRemove) {
            setItems(initialData);
            return;
        }

        setItems((prevItems) =>
            prevItems.filter((item) => item.name.toLowerCase().includes(itemToRemove.toLowerCase()))
        );
    };

    const sort = (type: string)=> {
        switch (type) {
            case '1':
                setItems((prevItems) =>
                    [...prevItems].sort((a, b) => a.number.localeCompare(b.number))
                )
                break
            case '2':
                setItems((prevItems) =>
                    [...prevItems].sort((a, b) => b.number.localeCompare(a.number))
                )
                break
            case '3':
                setItems((prevItems) =>
                    [...prevItems].sort((a, b) => a.name.localeCompare(b.name))
                )
                break
            case '4':
                setItems((prevItems) =>
                    [...prevItems].sort((a, b) => b.name.localeCompare(a.name))
                )
                break
            default: {
                throw Error('Unknown action: ' + type);
            }
        }
    }

    return (
        <ArrayDataContext.Provider value={{ items, clearSearch, filter, sort }}>
            {children}
        </ArrayDataContext.Provider>
    );
};