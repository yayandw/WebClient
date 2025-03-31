import React from "react";

interface WorksProps {
    className: string | undefined;
    images: string[];
}

const Works: React.FC<WorksProps> = ({className, images}) => {
    const copiedObjects: string[] = Array(6).fill(images).flat();
    return (
        <section className="w-full">
            <div className="w-full flex justify-center">
                <div className="overflow-hidden relative">
                    <div className={"flex flex-row gap-10 " + className}>
                        {
                            copiedObjects.map((image, index) => (
                                <img key={index} className="w-full ps-12 pt-14 pe-12 pb-14 bg-[#C7D0D9]"
                                     src={image} alt="..."/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Works