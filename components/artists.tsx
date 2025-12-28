"use client"
import { motion, useTransform } from "motion/react"
import Image from "next/image"

export default function Artists() {
    return (
        <div className="w-full h-screen flex items-center justify-center text-center overflow-hidden cursor4 relative">
            <p className="text-3xl bg-linear-45 from-[#3D3D3D] to-75 to-[white] bg-clip-text text-transparent p-2">We <span></span>
                <span className="relative text-white ">
                    <svg className="absolute left-0 bottom-1" width="149" height="4" viewBox="0 0 149 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ amount: 0.1, once: true }} d="M1 3.00049L75 1.00049L148 3.00049" stroke="#BBFF00" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    collaborate
                </span>
                <span></span> with emerging and established artists from around the world.
                <span className="relative">
                    <svg className="absolute -right-52 -top-1" width="346" height="241" viewBox="0 0 346 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} viewport={{ amount: 0.1, once: true }} d="M147.615 27.9042C147.615 27.9042 198.115 3.90481 224.115 1.90424C250.115 -0.0963258 328.615 -4.59576 339.615 62.9042C350.615 130.404 345.115 146.904 284.615 175.404C224.115 203.905 112.115 202.404 112.115 202.404M119.115 175.404L99.6145 202.404L119.115 222.404" stroke="#BBFF00" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 10" />
                        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.8 }} viewport={{ amount: 0.1, once: true }} d="M53.1145 156.404C53.1145 156.404 26.1145 157.404 16.1145 166.904C6.11452 176.404 2.61452 183.404 1.11452 201.404C-0.385483 219.404 13.1145 231.904 26.1145 236.404C39.1145 240.904 60.5241 239.661 70.1145 236.404C79.7049 233.146 86.6145 225.904 89.6145 214.404C92.6145 202.904 93.6145 200.904 89.6145 184.904C85.6145 168.904 48.1145 154.904 48.1145 154.904M18.6145 169.904L16.1145 180.904L20.6145 187.404L30.1145 184.904H39.6145L41.6145 178.904L36.6145 172.904L31.1145 169.904L24.6145 166.904L19.6145 169.904M38.6145 215.904L32.6145 224.904L43.1145 231.904L61.1145 229.904L72.1145 220.404L70.1145 207.404L78.6145 198.404L83.6145 186.904L74.6145 180.904L62.1145 177.404L60.1145 169.904L50.1145 175.904L48.1145 189.404H60.1145L55.6145 198.404L41.6145 200.404L34.6145 192.904L24.6145 196.404L17.1145 205.904L22.6145 209.904L33.6145 205.904L39.6145 209.904L36.6145 215.904" stroke="#BBFF00" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 10" />
                    </svg>

                </span>
                <br /> Each artist brings a <span></span>
                <span className="relative text-white">
                    unique
                    <svg className="absolute -right-3.5 -bottom-1" width="113" height="62" viewBox="0 0 113 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ amount: 0.1, once: true }} d="M112 25.4806C112 25.4806 77.9772 19.0383 63.2856 19.8973C48.5939 20.7562 49.3672 18.1793 25.3966 22.4742C1.42601 26.769 -0.120402 45.2368 1.42605 48.2432C2.9725 51.2496 5.67887 55.5444 27.7163 58.5508C49.7538 61.5572 64.8321 61.5572 79.5237 59.8392C94.2154 58.1213 113.16 59.8392 104.654 40.083C96.1485 20.3268 20.7571 1 20.7571 1" stroke="#BBFF00" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 10" />
                    </svg>
                </span>
                <span></span> perspective to digital expression.
            </p>
            <div className="flex flex-row items-center justify-center h-15">
                <div className="h-full p-2 flex items-center justify-center bg-[#F7D3C8]">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image src="/avatar1.png" alt="avatar" fill className="object-cover" />
                    </div>
                </div>
                <div className="h-full flex flex-col justify-between items-start">
                    <h2 className="bg-[#F7D3C8] h-full flex items-center justify-center text-black text-2xl pr-2">Arjun Patel</h2>
                    <p className="bg-[#F7D3C8] h-full flex items-center justify-center text-black text-base pr-2 whitespace-nowrap">Generative Artist</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center h-15">
                <div className="h-full p-2 flex items-center justify-center bg-[#F4D6D6]">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image src="/avatar2.png" alt="avatar" fill className="object-cover" />
                    </div>
                </div>
                <div className="h-full flex flex-col justify-between items-start">
                    <h2 className="bg-[#F4D6D6] h-full flex items-center justify-center text-black text-2xl pr-2 whitespace-nowrap">Noah Richter</h2>
                    <p className="bg-[#F4D6D6] h-full flex items-center justify-center text-black text-base pr-2">3D Artist</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center h-15">
                <div className="h-full p-2 flex items-center justify-center bg-[#E6F4EF]">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image src="/avatar3.png" alt="avatar" fill className="object-cover" />
                    </div>
                </div>
                <div className="h-full flex flex-col justify-between items-start">
                    <h2 className="bg-[#E6F4EF] h-full flex items-center justify-center text-black text-2xl pr-2 whitespace-nowrap">Max Turner</h2>
                    <p className="bg-[#E6F4EF] h-full flex items-center justify-center text-black text-base pr-2 whitespace-nowrap">Art Director</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center h-15">
                <div className="h-full p-2 flex items-center justify-center bg-[#E8EDDC]">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image src="/avatar5.png" alt="avatar" fill className="object-cover" />
                    </div>
                </div>
                <div className="h-full flex flex-col justify-between items-start">
                    <h2 className="bg-[#E8EDDC] h-full flex items-center justify-center text-black text-2xl pr-2 whitespace-nowrap">Luca Moreau</h2>
                    <p className="bg-[#E8EDDC] h-full flex items-center justify-center text-black text-base pr-2 whitespace-nowrap">Visual Artist</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center h-15">
                <div className="h-full p-2 flex items-center justify-center bg-[#E6EFE9]">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image src="/avatar4.png" alt="avatar" fill className="object-cover" />
                    </div>
                </div>
                <div className="h-full flex flex-col justify-between items-start">
                    <h2 className="bg-[#E6EFE9] h-full flex items-center justify-center text-black text-2xl pr-2 whitespace-nowrap">Ethan Cole</h2>
                    <p className="bg-[#E6EFE9] h-full flex items-center justify-center text-black text-base pr-2 whitespace-nowrap">Motion Designer</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center h-15">
                <div className="h-full p-2 flex items-center justify-center bg-[#F3E1E8]">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image src="/avatar7.png" alt="avatar" fill className="object-cover" />
                    </div>
                </div>
                <div className="h-full flex flex-col justify-between items-start">
                    <h2 className="bg-[#F3E1E8] h-full flex items-center justify-center text-black text-2xl pr-2 whitespace-nowrap">Yuki Tanaka</h2>
                    <p className="bg-[#F3E1E8] h-full flex items-center justify-center text-black text-base pr-2 whitespace-nowrap">3D & Visual Artist</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center h-15">
                <div className="h-full p-2 flex items-center justify-center bg-[#F9E4D2]">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image src="/avatar6.png" alt="avatar" fill className="object-cover" />
                    </div>
                </div>
                <div className="h-full flex flex-col justify-between items-start">
                    <h2 className="bg-[#F9E4D2] h-full flex items-center justify-center text-black text-2xl pr-2 whitespace-nowrap">Leon Fischer</h2>
                    <p className="bg-[#F9E4D2] h-full flex items-center justify-center text-black text-base pr-2 whitespace-nowrap">Visual Artist</p>
                </div>
            </div>
        </div>
    )
}