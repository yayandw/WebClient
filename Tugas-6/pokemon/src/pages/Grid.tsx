import Toolbar from "../components/Toolbar.tsx";
import {useNavigate} from "react-router-dom";
import {useArrayData} from "../constants/ArrayDataContext.tsx";


const Grid = () => {
    const {items, sort} = useArrayData();

    const navigate = useNavigate();

    function handleClick(id: string) {
        navigate(`/pokemon/${id}`);
    }

    return (
        <div
            className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ps-[20px] pt-4 pe-[21px] pb-4 gap-4 place-items-center">
            <Toolbar onSort={sort} className="col-span-2 md:col-span-3 lg:col-span-4"/>
            {
                items.map((item, index) => (
                    <div
                        className="h-[180] aspect-[128/180] box-border p-[19px] bg-[#F0F3FF] rounded-[8px] relative flex items-center justify-center"
                        key={index} onClick={() => handleClick(item.number)}>
                        <img className="object-cover" src={item.image}
                             alt="..."/>
                        <label
                            className="absolute text-center start-[21px] end-[21px] bottom-[15px] text-[#212E4C] text-[14px] font-bold leading-3.5 line-clamp-2">{item.name}</label>
                    </div>
                ))
            }
        </div>
    )
}
export default Grid