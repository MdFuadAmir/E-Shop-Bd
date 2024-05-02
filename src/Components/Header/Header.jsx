import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";

const menueList = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Shop",
        link: "/shop"
    },
    {
        id: 3,
        name: "About",
        link: "/about"
    },
    {
        id: 4,
        name: "Blogs",
        link: "/blogs"
    },
]

const dropdownLinks = [
    {
        id: 1,
        name: "Tranding Products",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#"
    },

]

const Header = () => {
    return (
        <>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container flex items-center justify-between">
                    {/* logo and links sections  */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-primary font-semibold text-2xl tracking-wide uppercase sm:text-3xl">E-Shop</a>
                        {/* menu items */}
                        <div className="hidden lg:block">
                            <ul className="flex gap-4 item-center">
                                {
                                    menueList.map((data,index) =>(
                                        <li key={index}><a className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white" href={data.link}>{data.name}</a></li>
                                ))}
                                {/* Dropdeown */}
                                <li className="relative cursor-pointer group">
                                    <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white">Quick Links <span><FaCaretDown className="group-hover:rotate-180 duration-300"/></span></a>
                                    {/* dropdown links */}
                                    <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2">
                                        <ul className="space-y-2">
                                            {
                                                dropdownLinks.map((data,index) =>(
                                                    <li key={index}>
                                                        <a className="text-gray-500 hover:text-black dark:hover:text-white duration-200 p-2 hover:bg-primary/20 w-full inline-block rounded-md" href={data.link}>{data.name}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Navber Right  sections  */}
                    <div className="flex justify-between items-center gap-4">
                        {/* search bar sevction */}
                        <div className="relative group hidden sm:block">
                            <input type="text" placeholder="Search" className="search-bar" /><IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200"/>
                        </div>
                        {/* order btn */}
                        <div>
                            <button className="relative p-3">
                                <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400"/>
                                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                                    6
                                </div>
                            </button>
                        </div>
                        {/* dark mode section */}
                        <div>
                            <DarkMode></DarkMode>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    
    );
};

export default Header;