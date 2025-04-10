import Toolbar from "../components/Toolbar.tsx";
import initialData from "../assets/pokemon.json"
import {useReducer} from "react";
import taskReducer from "../functions/TaskReducer.tsx";
import {useNavigate} from "react-router-dom";


const Grid = () => {
    const [data, dispatch] = useReducer(
        taskReducer,
        initialData
    )

    function sort(text: any) {
        dispatch({
            type: 'sort',
            text: text,
        })
    }

    const navigate = useNavigate();

    function handleClick(id: string) {
        navigate(`/pokemon/${id}`);
    }

    return (
        <div
            className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ps-[20px] pt-4 pe-[21px] pb-4 gap-4 place-items-center">
            <Toolbar onSort={sort} className="col-span-2 md:col-span-3 lg:col-span-4"/>
            {
                data.map((item, index) => (
                    <div
                        className="h-[calc(100vh/3)] aspect-[128/180] box-border p-[19px] bg-[#F0F3FF] rounded-[8px] relative flex items-center justify-center"
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