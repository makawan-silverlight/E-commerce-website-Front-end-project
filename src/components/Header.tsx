import { Link, useLocation } from "react-router-dom"
import { linkData } from "../interface/links"
import { useEffect, useState } from "react";

import { Tooltip } from "@material-tailwind/react";

// icon component
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingBag4Line, RiShoppingBag4Fill } from "react-icons/ri";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const location = useLocation();
    useEffect(() => {
        setOpenMenu(false);
    }, [location.pathname])

    const links: linkData[] = [
        { name: "home", path: "/" },
        { name: "product", path: "/product" },
        { name: "about", path: "/about" },
        { name: "favorite", path: "/favorite" },
        { name: "checkout", path: "/checkout" }
    ]
    return (
        <>
            <header className="fixed w-full bg-thirdary flex items-center justify-center py-8 text-header shadow-xl z-[999]">
                <div className="container flex justify-between items-center">

                    <Link to={"/"} id="logo" className="text-3xl font-black">
                        <h1>SILVER</h1>
                    </Link>

                    <nav className="capitalize text-lg font-semibold hidden md:flex justify-center items-center gap-20">
                        {links.map((link, index) => {
                            if (index >= 3) { return }
                            return (<div className="relative group" key={index}>
                                <Link className={`${location.pathname === link.path ? "" : "group-hover:text-primary"} duration-300`} to={link.path} >{link.name}</Link>
                                <div className={`${location.pathname === link.path ? "w-full bg-header" : "w-0 group-hover:w-full duration-300 bg-primary    "} absolute -bottom-2 h-[2.5px]  rounded-full `}></div>
                            </div>)
                        })}
                    </nav>

                    <div id="icon" className="flex justify-center items-center gap-6 text-2xl">

                        <div className="block md:hidden text-3xl cursor-pointer hover:text-primary duration-300" onClick={() => { setOpenMenu(!openMenu) }}>
                            <IoMenu />
                        </div>
                        <Link to={"/favorite"} className="cursor-pointer hover:text-primary duration-300">

                            <Tooltip
                                placement="bottom"
                                className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                                content={<div className="text-header capitalize font-semibold relative z-[9999]">favorite</div>}
                            >
                                <div className="cursor-pointer">
                                    <FaRegHeart />
                                </div>
                            </Tooltip>


                        </Link>
                        <div className="cursor-pointer hover:text-primary duration-300">
                            <Tooltip
                                placement="bottom"
                                className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                                content={<div className="text-header capitalize font-semibold relative z-[9999]">cart</div>}
                            >
                                <div className="cursor-pointer">
                                    <RiShoppingBag4Line />
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu" className={`${openMenu ? "translate-x-0" : "translate-x-full"} md:hidden fixed w-80 h-screen bg-primary top-0 bottom-0 right-0 z-[100] duration-500`}>
                    <div className="flex justify-between items-center bg-header text-thirdary text-xl p-8" >
                        <h1 className="font-semibold">Close Menu</h1>
                        <div className="text-4xl hover:text-secondary cursor-pointer hover:scale-110 duration-300" onClick={() => { setOpenMenu(false) }}><IoClose /></div>
                    </div>
                    <nav className="capitalize text-lg text-thirdary flex flex-col gap-4 mt-4 justify-center">
                        {links.map((link, index) => {

                            return (<div className="px-8 py-3 group" key={index}>
                                <div className="relative">
                                    <Link className={`${location.pathname === link.path ? "" : "group-hover:text-header"} duration-300`} to={link.path} >{link.name}</Link>
                                    <div className={`${location.pathname === link.path ? "w-full bg-thirdary" : "w-0 group-hover:w-full duration-300 bg-header "} absolute -bottom-3 h-[2.5px] rounded-full `}></div>
                                </div>
                            </div>)
                        })}
                    </nav>
                </div>
                <div onClick={() => { setOpenMenu(false) }} className={`${openMenu ? "opacity-80 translate-x-0" : "opacity-0 translate-x-[150%]"} md:hidden w-screen h-screen bg-black fixed top-0 bottom-0 right-0 left-0 duration-500 scale-150 blur-xl`}></div>
            </header>
            <div className="w-full h-[100px] bg-blue-900"></div>
        </>
    )
}

export default Header