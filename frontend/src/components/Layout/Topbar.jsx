import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
    return (
        <div className="bg-rabbit-red text-white">
            <div className="container mx-auto flex justify-between items-center p-3 px-4">
                <div className="hidden md:flex items-center space-x-3 ">
                    <a href="#" className="hover:text-gray-300">
                        <TbBrandMeta className="h-5 w-5"></TbBrandMeta>
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <IoLogoInstagram className="h-5 w-5"></IoLogoInstagram>
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <RiTwitterXLine className="h-5 w-5"></RiTwitterXLine>
                    </a>
                </div>
                <div className="text-sm text-center flex-grow">
                    <span className="">We ship worldwide - Fast and reliable shipping!</span>
                </div>
                <div className="text-sm hidden md:block">
                    <a href="tel:+123456789" className="hover:text-gray-300">
                        +(123)456789
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
