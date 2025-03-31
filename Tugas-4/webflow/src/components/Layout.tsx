import Header from "./Header.tsx";
import HelloTip from "./HelloTip.tsx";
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="w-auto h-auto flex flex-col gap-40">
            <Header/>
            <div className="h-[700px] bg-[#C7D0D9] flex relative items-center justify-center">
                <img src="/person.svg" alt="Person" className="absolute bottom-0 object-cover"/>
                <p className="absolute w-full bottom-20 left-0 right-0 p-4 text-8xl font-bold overflow-hidden text-[#F4F7FA]">—
                    Webflow Developer — UI/UX Designer — Web Designer —</p>
                <HelloTip className="group absolute right-0 object-cover"/>
            </div>
            <main>{children}</main>
            <footer className=" bg-[#0B0C0E] h-[440px] relative">
                <div className="absolute w-auto start-20 top-20 end-20 flex items-center justify-between">
                    <div className="flex flex-col">
                        <p className="text-6xl font-medium text-[#F4F7FA]">Have something in mind?</p>
                        <div className="flex flex-row items-center">
                            <img src="/avatar.png" className="w-20 m-3" alt="..."/>
                            <p className="text-6xl font-medium text-[#F4F7FA]">let’s build it together.</p>
                        </div>
                    </div>
                    <a href="#"
                       className="bg-[#F4F7FA] rounded-full w-[190px] h-[70px] text-[#0B0C0E] text-[18px] font-bold flex items-center justify-center shadow-xs hover:text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                        in touch
                    </a>
                </div>
                <div className="absolute w-auto start-20 bottom-8 end-20 flex justify-between">
                    <p className="text-[18px] text-[#C7D0D9]">Build with 💖 by Brightscout & Ayush</p>
                    <ul className="w-auto flex gap-8">
                        <li className="text-[#F4F7FA]"><a href="#">LinkedIn</a></li>
                        <li className="text-[#F4F7FA]"><a href="#">Twitter</a></li>
                        <li className="text-[#F4F7FA]"><a href="#">Instagram</a></li>
                        <li className="text-[#F4F7FA]"><a href="#">Webflow</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Layout
