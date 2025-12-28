"use client"
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full flex flex-col items-center justify-center fixed top-2 z-50 pointer-events-none">
            <div className="pointer-events-auto p-2 md:p-4 flex flex-row items-center justify-between md:justify-center gap-2 md:gap-6 bg-[#3C3C3C]/7 outline outline-[#3C3C3C]/30 backdrop-blur-md rounded-xl w-[90%] md:w-auto transition-all">
                <Image src="/logo.svg" alt="logo" width={25} height={25} />

                <div className="hidden md:flex flex-row items-center gap-6">
                    <a className="text-white text-base hover:text-[#BBFF00] transition-colors" href="#">Gallery</a>
                    <a className="text-white text-base hover:text-[#BBFF00] transition-colors" href="#">About</a>
                    <a className="text-white text-base hover:text-[#BBFF00] transition-colors" href="#">Collections</a>
                    <a className="text-white text-base hover:text-[#BBFF00] transition-colors" href="#">Artists</a>
                    <a href="#" className="flex items-center justify-center bg-white p-2 rounded-lg text-black text-base relative hover:bg-[#BBFF00] transition-colors">
                        Contact
                    </a>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-1">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="pointer-events-auto absolute top-16 w-[90%] flex flex-col items-center justify-center gap-4 bg-[#1a1a1a]/7 outline outline-[#3C3C3C]/30 backdrop-blur-xl rounded-xl p-6 md:hidden shadow-2xl"
                    >
                        <a className="text-white text-lg font-medium hover:text-[#BBFF00]" href="#" onClick={() => setIsOpen(false)}>Gallery</a>
                        <a className="text-white text-lg font-medium hover:text-[#BBFF00]" href="#" onClick={() => setIsOpen(false)}>About</a>
                        <a className="text-white text-lg font-medium hover:text-[#BBFF00]" href="#" onClick={() => setIsOpen(false)}>Collections</a>
                        <a className="text-white text-lg font-medium hover:text-[#BBFF00]" href="#" onClick={() => setIsOpen(false)}>Artists</a>
                        <a href="#" className="w-full text-center bg-white p-3 rounded-lg text-black text-lg font-medium hover:bg-[#BBFF00]" onClick={() => setIsOpen(false)}>
                            Contact
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    )
}
