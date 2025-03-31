import React from "react";

interface RecentWorkProps {
    title: string;
    description: string;
}

const RecentWork: React.FC<RecentWorkProps> = ({title, description}) => {
    return (
        <div className="group w-full flex items-center justify-between cursor-pointer">
            <div className="flex flex-col gap-7">
                <div className="text-6xl text-[#0B0C0E] font-normal">{title}</div>
                <p className="text-[18px] text-[#3C3D3E] font-normal">{description}</p>
            </div>
            <svg
                className="size-20 p-4 rounded-full border justify-end fill-[#3C3D3E] group-hover:bg-[#0B0C0E] group-hover:fill-white"
                width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.8301 15.4575L15.8301 18.1162L26.3612 18.1257L14.8873 29.5997L16.7729 31.4853L28.2469 20.0113L28.2563 30.5425L30.915 30.5425V15.4575H15.8301Z"/>
            </svg>
        </div>
    )
}
export default RecentWork