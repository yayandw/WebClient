import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useArrayData} from "../constants/ArrayDataContext.tsx";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearchBar = () => {
        setIsSearchVisible((prev) => !prev);
        if (!isSearchVisible) {
            clearSearch();
        }
    };

    const { clearSearch, filter } = useArrayData();
    const [searchValue, setSearchValue] = useState<string>("");
    return (
        <header
            className="w-full sticky top-0 z-50 shadow-md bg-[#252A3E] h-12 border-b-[1px] border-b-[#3D4466] flex flex-row items-center justify-between">
            <img className="ps-[21px]" src="/pokemon.svg" alt="logo" onClick={handleGoBack}/>
            {
                (!isSearchVisible && !location.pathname.startsWith("/pokemon/") && (
                    <img className={`pe-[25px]`} src="/search.svg"
                         alt="search" onClick={toggleSearchBar}/>
                ))
            }
            {
                (isSearchVisible && (
                    <div className="pe-[25px]">
                        <div className="relative">
                            <input
                                value={searchValue}
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    filter(e.target.value);
                                    setSearchValue(e.target.value);
                                }}
                                type="text"
                                placeholder="Search..."
                                className="w-full ps-2 pe-10 py-[2px] border rounded-[8px] focus:outline-none bg-white"
                            />
                            <svg
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                onClick={toggleSearchBar}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M7 17L16.8995 7.10051" stroke="#000000" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                ))
            }
        </header>
    )
}
export default Header