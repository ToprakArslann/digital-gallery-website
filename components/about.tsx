"use client"
import { motion, useScroll, useMotionValueEvent, useTransform } from "motion/react"
import Image from "next/image"
import { useRef, useState } from "react"

export default function About() {
    const containerAbout = useRef<HTMLDivElement>(null)
    const [imageUrl, setImageUrl] = useState("/paper11.png")

    const { scrollYProgress } = useScroll({
        target: containerAbout,
        offset: ["start 0.7", "end end"]
    })

    const strokeWidth = useTransform(scrollYProgress, [0, 0.5], ["0", "1"])

    const strokeWidth2 = useTransform(scrollYProgress, [0, 0.7], ["0", "1"])
    const strokeWidth3 = useTransform(scrollYProgress, [0, 1], ["0", "1"])

    useMotionValueEvent(scrollYProgress, "change", (value: number) => {
        if (value < 0.25) {
            setImageUrl("/paper11.png");
        } else if (value < 0.5) {
            setImageUrl("/paper2.png");
        } else if (value < 0.75) {
            setImageUrl("/paper3.png");
        } else {
            setImageUrl("/paper4.png");
        }
    })

    return (
        <div ref={containerAbout} className="flex w-full h-[200vh] relative">
            <div className="w-full h-screen sticky top-0 flex items-center justify-end">
                <Image src={imageUrl} alt="paper" width={400} height={400} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
                <div className="w-1/3 h-full flex items-center justify-center text-2xl">
                    <p className="bg-linear-45 from-[#3D3D3D] to-75 to-[white] bg-clip-text text-transparent relative">
                        <svg className="absolute left-0 -top-25" width="59" height="51" viewBox="0 0 59 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path style={{ pathLength: strokeWidth3 }} d="M1.00017 11.0895L20.8876 22.3821M32.6629 19.4814L41.9578 1.0002M4.21842 37.3808C4.21842 37.3808 15.6567 46.3389 22.0739 45.9357C28.491 45.5325 32.706 43.9054 34.9415 43.0603C37.177 42.2153 39.1168 40.1699 39.1168 40.1699M50.8236 22.662C50.8236 22.662 50.3991 28.6545 46.4728 33.1066M39.1168 40.1699C39.1168 40.1699 45.5419 47.5145 47.744 48.7384C49.9461 49.9623 52.8 51.0672 55.697 47.9569C58.5941 44.8466 57.0104 43.0139 56.5143 42.4565C56.0182 41.8991 46.4728 33.1066 46.4728 33.1066M39.1168 40.1699L46.4728 33.1066" stroke="#BBFF00" stroke-width="2" stroke-linecap="round" />
                        </svg>

                        Digital Gallery is a curated platform dedicated to <br /> contemporary <span></span>
                        <span className="relative text-white">
                            digital art.
                            <svg className="absolute -left-1 bottom-0.5" width="113" height="4" viewBox="0 0 113 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path style={{ pathLength: strokeWidth }} d="M0.999994 2.14109C0.999994 2.14109 42.2809 1.5886 55.6115 1.07165C68.9422 0.554703 111.08 3.00109 111.08 3.00109" stroke="#BBFF00" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </span>
                        <br />
                        We connect artists and audiences by showcasing <br /> original works that explore <span></span>
                        <span className="relative text-white">
                            creativity
                            <svg className="absolute -left-0.5 -bottom-1" width="106" height="57" viewBox="0 0 106 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path style={{ pathLength: strokeWidth2 }} d="M105 23.4408C105 23.4408 73.1228 17.5354 59.3577 18.3227C45.5925 19.1101 46.317 16.748 23.8581 20.6849C1.39914 24.6218 -0.0497459 41.5506 1.39918 44.3065C2.8481 47.0624 5.38381 50.9993 26.0315 53.7551C46.6792 56.511 60.8066 56.511 74.5718 54.9362C88.3369 53.3614 106.087 54.9362 98.1174 36.8263C90.1481 18.7164 19.5112 1.00024 19.5112 1.00024" stroke="#BBFF00" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 10" />
                            </svg>
                        </span>
                        , technology, <br /> and modern visual culture.
                    </p>
                </div>
            </div>
        </div>
    )
}