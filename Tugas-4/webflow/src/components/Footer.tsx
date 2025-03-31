import React from "react";

interface Props {
    className?: string
}

const Footer: React.FC<Props> = ({className}) => {
    return (
        <footer className={className + " bg-[#0B0C0E] h-[190px] relative"}>
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
    )
}
export default Footer