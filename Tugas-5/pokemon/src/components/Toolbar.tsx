import {useState} from "react";
import {Link} from "react-router-dom";

interface Props {
    className?: string | undefined;
    onSort?: any;
}

function Toolbar({className, onSort}: Props) {
    const [selectedOption, setSelectedOption] = useState("0");
    const handleChange = (event: any) => {
        setSelectedOption(event.target.value);
        onSort(event.target.value);
    };
    return (
        <div
            className={className + " w-full flex flex-row items-center justify-between gap-[23px] font-normal text-[16px] text-[#97A0CC]"}>
            <select value={selectedOption} onChange={handleChange}
                    className="flex-grow bg-[#3D4466] h-8 rounded-[8px] ps-2 pe-2 focus:outline-none"
                    name="sort"
                    id="sort"
                    aria-label="Sort by">
                <option value="0" disabled hidden>Sort by</option>
                <option value="1">Lowest Number (First)</option>
                <option value="2">Highest Number (First)</option>
                <option value="3">A-Z</option>
                <option value="4">Z-A</option>
            </select>
            <ul className="flex flex-row w-[70px] h-8 justify-around items-center bg-[#3D4466] rounded-[8px]">
                <li><Link to="/timeline"><img src="/timeline_1.svg" alt="timeline"/></Link></li>
                <li><Link to="/grid"><img src="/grid_1.svg" alt="grid"/></Link></li>
            </ul>
        </div>
    )
}

export default Toolbar