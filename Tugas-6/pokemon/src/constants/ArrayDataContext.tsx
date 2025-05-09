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

export const ArrayDataProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const getInitialData = (): any[] => {
        let storedData = localStorage.getItem('_local_data_');
        if (storedData) {
            try {
                return JSON.parse(storedData);
            } catch (error) {
                console.error('Error parsing localStorage data:', error);
                return [];
            }
        }
        else {
            localStorage.setItem('_local_data_', JSON.stringify(initialData));
        }
        storedData = localStorage.getItem('_local_data_');
        if (storedData) {
            try {
                return JSON.parse(storedData);
            } catch (error) {
                console.error('Error parsing localStorage data:', error);
                return [];
            }
        }
        return [];
    };

    const [items, setItems] = useState<any[]>(getInitialData);

    const clearSearch = () => {
        setItems(initialData);
    };

    const filter = (keyword: string) => {
        if (!keyword) {
            setItems(initialData);
            return;
        }
        const filteredItems = initialData.filter((item) =>
            item.name.toLowerCase().includes(keyword.toLowerCase())
        );
        setItems(filteredItems);
    };

    const sort = (type: string) => {
        let sortedItems;

        switch (type) {
            case '1': // Sort by number (ascending)
                sortedItems = [...items].sort((a, b) => a.number.localeCompare(b.number));
                break;
            case '2': // Sort by number (descending)
                sortedItems = [...items].sort((a, b) => b.number.localeCompare(a.number));
                break;
            case '3': // Sort by name (ascending)
                sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
                break;
            case '4': // Sort by name (descending)
                sortedItems = [...items].sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                throw new Error('Unknown action: ' + type);
        }

        setItems(sortedItems);
    }

    return (
        <ArrayDataContext.Provider value={{items, clearSearch, filter, sort}}>
            {children}
        </ArrayDataContext.Provider>
    );
};