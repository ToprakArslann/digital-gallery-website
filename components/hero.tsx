"use client"
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import Image from "next/image"
import { useRef } from "react"
export default function Hero() {
    const container = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    const springConfig = { stiffness: 100, damping: 50, restDelta: 0.001 }

    const z1Raw = useTransform(scrollYProgress, [0, 1], [0, -800])
    const z2Raw = useTransform(scrollYProgress, [0, 1], [400, -400])
    const z3Raw = useTransform(scrollYProgress, [0, 1], [600, -200])
    const z4Raw = useTransform(scrollYProgress, [0, 1], [800, 0])
    const z5Raw = useTransform(scrollYProgress, [0, 1], [700, 200])
    const z6Raw = useTransform(scrollYProgress, [0, 1], [1200, 400])

    const z1 = useSpring(z1Raw, springConfig)
    const z2 = useSpring(z2Raw, springConfig)
    const z3 = useSpring(z3Raw, springConfig)
    const z4 = useSpring(z4Raw, springConfig)
    const z5 = useSpring(z5Raw, springConfig)
    const z6 = useSpring(z6Raw, springConfig)
    return (
        <div className="flex h-[300vh]" ref={container}>

            <div className="flex flex-col items-center justify-center w-full h-screen gap-20 sticky top-0 overflow-hidden z-1 bg-black">
                <div className="flex flex-col items-center justify-center gap-2 text-center tracking-tight z-4">
                    <h2 className="flex flex-row text-3xl font-medium gap-2">A Space for
                        <span className="relative">
                            Digital Art
                            <svg className="absolute bottom-1/2 translate-y-8 right-1 translate-x-3" width="150" height="72" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} d="M22.7536 1.00015C22.7536 1.00015 132.754 19.0001 139.254 25.5001C145.754 32.0001 154.254 48.5001 141.254 60.0001C128.254 71.5001 92.2536 70.5001 71.7536 69.5001C51.2536 68.5001 23.2537 73.0001 10.7537 61.5001C-1.74639 50.0001 -2.74645 33.5001 10.7537 20.5001C24.2538 7.50015 123.254 9.50015 123.254 9.50015" stroke="#BBFF00" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 10" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-xl bg-linear-45 from-[#3D3D3D] to-75 to-[white] bg-clip-text text-transparent ">Discover curated digital works from contemporary artists <br /> around the world.</p>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center z-4">
                    <a className="flex items-center justify-center button-primary text-black text-xl relative">
                        Explore the Gallery
                        <svg className="absolute right-0 bottom-18" width="73" height="54" viewBox="0 0 73 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 1 }} d="M72.0002 1.00006C39.8239 4.40329 27.2146 13.9235 13.0002 42.5001M1.00024 34.0001L8.00024 52.0001L27.5002 47.0001" stroke="#BBFF00" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 10" />
                        </svg>

                    </a>
                    <a className="flex items-center justify-center text-[#777777] hover:underline text-xl relative">
                        Learn More
                        <svg className="absolute -right-1/2 top-18" width="54" height="39" viewBox="0 0 54 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} d="M11.7761 7.64636L15.118 17.4643M31.3009 1.00027L34.6429 10.8182M1.00013 28.6606C1.00013 28.6606 5.27839 36.5621 15.9569 37.2638C26.6354 37.9654 36.3869 33.2767 43.8205 27.7792C51.2541 22.2818 52.2309 8.48318 52.2309 8.48318" stroke="#BBFF00" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </a>
                </div>
                <div className="absolute w-full h-full flex flex-row items-center justify-between">
                    <div className="w-full h-full flex items-center justify-center relative perspective-[1000px]">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} style={{ translateZ: z1 }} className="w-65 h-80 flex items-center justify-center absolute right-0 z-1">
                            <Image src="/stock1.png" alt="stock" fill className="object-cover" />
                        </motion.div>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ translateZ: z2 }} className="w-65 h-80 flex items-center justify-center absolute  top-0 -translate-y-60 translate-x-35 z-2 shadow-2xl">
                            <Image src="/stock11.png" alt="stock" fill className="object-cover" />
                        </motion.div>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} style={{ translateZ: z3 }} className="w-65 h-80 flex items-center justify-center absolute -translate-y-60  z-3 shadow-2xl">
                            <Image src="/stock3.png" alt="stock" fill className="object-cover" />
                        </motion.div>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} style={{ translateZ: z4 }} className="w-65 h-80 flex items-center justify-center absolute top-0 left-0 translate-x-10 -translate-y-20 z-4 shadow-2xl">
                            <Image src="/stock44.png" alt="stock" fill className="object-cover" />
                        </motion.div>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} style={{ translateZ: z5 }} className="w-65 h-80 flex items-center justify-center absolute -translate-x-50 translate-y-30 z-5 shadow-2xl">
                            <Image src="/stock5.png" alt="stock" fill className="object-cover" />
                        </motion.div>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }} style={{ translateZ: z6 }} className="w-65 h-80 flex items-center justify-center absolute bottom-0 -translate-y-20 z-6 shadow-2xl">
                            <Image src="/stock6.png" alt="stock" fill className="object-cover" />
                        </motion.div>
                    </div>
                    <div className="w-full h-full flex items-center justify-center relative perspective-[1000px]">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0 }} style={{ translateZ: z1 }} className="w-65 h-80 flex items-center justify-center absolute left-60 -translate-y-50 z-1">
                            <Image src="/stock7.png" alt="stock" fill className="object-cover" />
                        </motion.div>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ translateZ: z2 }} className="w-65 h-80 flex items-center justify-center absolute  top-0 -translate-y-40 -translate-x-65 z-2">
                            <Image src="/stock8.png" alt="stock" fill className="object-cover" />
                        </motion.div>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} style={{ translateZ: z3 }} className="w-65 h-80 flex items-center justify-center absolute translate-y-60  z-3">
                            <Image src="/stock9.png" alt="stock" fill className="object-cover" />
                        </motion.div>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} style={{ translateZ: z4 }} className="w-65 h-80 flex items-center justify-center absolute bottom-0 right-0 -translate-x-10 -translate-y-20 z-4">
                            <Image src="/stock10.png" alt="stock" fill className="object-cover" />
                        </motion.div>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} style={{ translateZ: z5 }} className="w-65 h-80 flex items-center justify-center absolute translate-x-50 -translate-y-70 z-5">
                            <Image src="/stock6.png" alt="stock" fill className="object-cover" />
                        </motion.div>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }} style={{ translateZ: z6 }} className="w-65 h-80 flex items-center justify-center absolute bottom-0 -translate-y-2 translate-x-20 z-6">
                            <Image src="/stock2.png" alt="stock" fill className="object-cover" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}