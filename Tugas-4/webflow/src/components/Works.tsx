import React from "react";
import {Link} from "react-router-dom";

interface WorksProps {
    className: string | undefined;
    images: string[];
}

const Works: React.FC<WorksProps> = ({className, images}) => {
    const copiedObjects: string[] = Array(6).fill(images).flat();
    return (
        <section className="overflow-hidden">
            <div className={"flex flex-row gap-10 " + className}>
                {
                    copiedObjects.map((image, index) => (
                        <div key={index} className="group relative w-full h-auto ps-12 pt-14 pe-12 pb-14 bg-[#C7D0D9]">
                            <img className="max-w-none" src={image} alt="..."/>
                            <div className="absolute hidden group-hover:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-white shadow-2xl rounded-[6px]">
                                <Link className="flex flex-row justify-center items-center" to="#">
                                    <p>Visit the website</p>
                                    <svg
                                        className="fill-black"
                                        width="26" height="26" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.8301 15.4575L15.8301 18.1162L26.3612 18.1257L14.8873 29.5997L16.7729 31.4853L28.2469 20.0113L28.2563 30.5425L30.915 30.5425V15.4575H15.8301Z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>

    )
}
export default Works