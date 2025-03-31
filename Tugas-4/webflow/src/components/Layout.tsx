import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="w-auto h-auto relative">
            <div className="w-auto h-auto">
                <Header className="absolute"/>
                <div className="flex flex-col gap-12">
                    <main className="top-0">{children}</main>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Layout
