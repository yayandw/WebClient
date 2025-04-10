import React, { createContext, useState, useContext } from "react";
import initialData from "../assets/pokemon.json"

interface ArrayDataContextType {
    items: any[];
    clearSearch: () => void;
    filter: (item: string) => void;
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
        setItems((prevItems) => prevItems.filter((item) => item.name !== itemToRemove));
    };

    return (
        <ArrayDataContext.Provider value={{ items, clearSearch, filter }}>
            {children}
        </ArrayDataContext.Provider>
    );
};