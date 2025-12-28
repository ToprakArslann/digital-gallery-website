"use client"
import { CaseSensitive, Mail, Text, TextCursor } from "lucide-react"
import { motion } from "motion/react"
export default function Contact() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-6 tracking-tight relative">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-medium">Get in Touch</h2>
                <p className="text-xl bg-linear-45 from-[#3D3D3D] to-75 to-[white] bg-clip-text text-transparent">For collaborations, exhibitions, or general <br /> inquiries, feel free to <span></span> <span className="relative text-white">
                    contact us.
                    <svg className="absolute -left-1 -bottom-8 size-26" width="163" height="72" viewBox="0 0 163 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ amount: 0.1, once: true }} d="M162 29.5607C162 29.5607 112.652 22.0447 91.3422 23.0468C70.0326 24.0489 71.1542 21.0426 36.3861 26.0532C1.6179 31.0638 -0.625087 52.6096 1.61796 56.1171C3.86101 59.6245 7.78647 64.6351 39.7507 68.1426C71.715 71.65 93.5853 71.65 114.895 69.6458C136.204 67.6415 163.682 69.6458 151.345 46.5968C139.008 23.5479 29.6568 1 29.6568 1" stroke="#BBFF00" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 10" />
                    </svg>

                </span></p>
            </div>
            <div className=" flex flex-col items-center justify-center gap-4">
                <div className="w-full flex items-center justify-center gap-4">
                    <div className="flex flex-row items-center justify-center rounded-xl overflow-hidden gap-2 px-3 w-full bg-[#3C3C3C]/7 outline outline-[#3C3C3C]/30 backdrop-blur-md">
                        <input type="text" className="w-full py-3 placeholder:font-medium placeholder:text-[#807F80] outline-0" placeholder="Name" />
                        <div className="w-px h-2 bg-[#807F80]"></div>
                        <CaseSensitive size={24} className="text-[#807F80]" />
                    </div>
                    <div className="flex flex-row items-center justify-center rounded-xl overflow-hidden gap-2 px-3 w-full bg-[#3C3C3C]/7 outline outline-[#3C3C3C]/30 backdrop-blur-md">
                        <input type="text" className="w-full py-3 placeholder:font-medium placeholder:text-[#807F80] outline-0" placeholder="Surname" />
                        <div className="w-px h-2 bg-[#807F80]"></div>
                        <CaseSensitive size={24} className="text-[#807F80]" />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between rounded-xl overflow-hidden gap-2 px-3 w-full bg-[#3C3C3C]/7 outline outline-[#3C3C3C]/30 backdrop-blur-md">
                    <input type="text" className="w-full py-3 placeholder:font-medium placeholder:text-[#807F80] outline-0" placeholder="Email" />
                    <div className="w-px h-2 bg-[#807F80]"></div>
                    <Mail size={22} className="text-[#807F80]" />
                </div>
                <div className="flex flex-row items-center justify-between rounded-xl overflow-hidden gap-2 px-3 w-full bg-[#3C3C3C]/7 outline outline-[#3C3C3C]/30 backdrop-blur-md">
                    <textarea className="w-full py-3 placeholder:font-medium placeholder:text-[#807F80] outline-0 resize-none" placeholder="Message" cols={4} rows={4} maxLength={150} />
                    <div className="w-px h-2 bg-[#807F80]"></div>
                    <TextCursor size={20} className="text-[#807F80]" />
                </div>
            </div>
            <a className="flex items-center justify-center button-primary text-black text-xl relative">
                Send Message
                <svg className="absolute -right-22 bottom-2" width="80" height="61" viewBox="0 0 80 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} viewport={{ amount: 0.1, once: true }} d="M78.7236 1.00011C59.831 32.3853 45.0516 41.1323 12.3138 43.25M14.0695 59.1938L1.29534 44.2344L15.3915 26.4885" stroke="#BBFF00" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 10" />
                </svg>

            </a>
            <div className="w-full flex flex-row items-center justify-between absolute bottom-0 text-sm text-[#807F80]">
                <p>Digital Gallery © 2025</p>
                <p className="flex flex-row gap-1">Made By <a href="https://www.toprakdev.com" className="text-white" target="_blank" rel="noopener noreferrer">Toprak Arslan</a></p>
                <p>The digital face of contemporary art.</p>
            </div>
        </div>
    )
}