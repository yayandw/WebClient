import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

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

    const location = useLocation();

    const [activeSection, setActiveSection] = useState(location.pathname);

    const navigate = useNavigate();

    function handleClick(path: string) {
        setActiveSection(path);
        navigate(path);
    }

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
            <div className="grid grid-cols-2 w-[70px] h-8 justify-around items-center bg-[#3D4466] rounded-[8px]">
                <div
                    className={`w-[36px] h-8 border-r-[1px] border-[#97A0CC] flex items-center justify-center rounded-l-[8px] ${activeSection === "/timeline" || activeSection === "/" ? "" : "bg-[#0C1231]"}`}
                    onClick={() => handleClick("/timeline")}><img src="/timeline_1.svg" alt="timeline"/></div>
                <div
                    className={`w-[36px] h-8 border-l-[1px] border-[#97A0CC] flex items-center justify-center rounded-r-[8px] ${activeSection === "/grid" ? "" : "bg-[#0C1231]"}`}
                    onClick={() => handleClick("/grid")}><img src="/grid_1.svg" alt="grid"/></div>
            </div>
        </div>
    )
}

export default Toolbar