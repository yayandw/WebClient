import {useParams} from "react-router-dom";
import initialData from "../assets/pokemon.json"

export default function Detail() {
    const {id} = useParams();
    const item: any = initialData.find(i => i.number === id);
    return (
        <div className="relative flex flex-col items-center justify-center">
            <label
                className="self-start ps-[26px] pt-[25px] text-[#97A0CC] text-[18px] font-normal">#{item.number}</label>
            <img className="absolute top-[33px] w-[200px] h-[200px] object-cover" src={item.image} alt="..."/>
            <img className="absolute w-[127px] h-[127px] top-[190px] end-0 object-cover" src="/image_27.png" alt="..."/>
            <div className="absolute w-full h-full top-[245px]">
                <div className="w-full h-full flex flex-col ps-6 pe-6 gap-4">
                    <label
                        className="text-white text-4xl font-bold">{item.name}</label>
                    <div
                        className="w-full h-auto bg-[#05091B] rounded-[8px] ps-[16px] pt-[17px] pe-[16px] pb-[17px] flex flex-col gap-2">
                        <label
                            className="text-[#97A0CC] text-[16px] font-normal">Health</label>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="w-1/2 bg-gradient-to-r from-[#6CF0A1] to-[#2AE3B7] h-2 rounded-full"></div>
                        </div>
                        <label
                            className="text-white"><span className="text-2xl leading-7 font-bold">144</span> <span
                            className="text-[16px] leading-7 font-normal">from 1000</span></label>
                        <div className="w-full h-[1px] bg-[#3D4466]"/>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col">
                                <label
                                    className="text-[#97A0CC] text-[16px] font-normal">Attack</label>
                                <label
                                    className="text-white text-2xl font-bold">32</label>
                            </div>
                            <div className="flex flex-col">
                                <label
                                    className="text-[#97A0CC] text-[16px] font-normal">Defense</label>
                                <label
                                    className="text-white text-2xl font-bold">50</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}