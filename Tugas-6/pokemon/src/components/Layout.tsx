import * as React from "react";
import Header from "./Header.tsx";
import {ArrayDataProvider} from "../constants/ArrayDataContext.tsx";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
    return (
        <ArrayDataProvider>
            <div className="w-full bg-[#252A3E] flex flex-col items-center justify-center">
                <Header/>
                <main className="w-full h-full flex-grow">{children}</main>
            </div>
        </ArrayDataProvider>
    )
}
export default Layout