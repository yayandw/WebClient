import Toolbar from "../components/Toolbar.tsx";
import {colorMap} from "../constants/ColorType.tsx";
import {useNavigate} from "react-router-dom";
import {useArrayData} from "../constants/ArrayDataContext.tsx";


const Timeline = () => {
    const {items, sort} = useArrayData();

    const navigate = useNavigate();

    function handleClick(id: string) {
        navigate(`/pokemon/${id}`);
    }

    return (
        <div className="w-full h-full flex flex-col ps-[20px] pt-4 pe-[21px] pb-4 gap-4">
            <Toolbar onSort={sort}/>
            {
                items.map((item: any, index: any) => (
                    <div className="w-full bg-[#F0F3FF] rounded-[8px] relative flex items-center justify-center"
                         key={index} onClick={() => handleClick(item.number)}>
                        <label
                            className={`absolute start-[11px] top-[13px] text-[16px] font-bold leading-3`}><span
                            className={colorMap[item.type]}>{item.type}</span> <span
                            className={colorMap[item.sub_type]}>{item.sub_type}</span></label>
                        <img className="w-full h-full ps-[50px] pt-[30px] pe-[50px] pb-[37px] object-cover"
                             src={item.image}
                             alt="..."/>
                        <label
                            className="absolute end-[11px] top-[13px] text-[#263156] text-[16px] font-bold">#{item.number}</label>
                        <label
                            className="absolute text-center bottom-[15px] text-[#212E4C] text-[18px] font-bold line-clamp-1">{item.name}</label>
                    </div>
                ))
            }
        </div>
    )
}
export default Timeline