"use client"
import { motion, useScroll, useTransform } from "motion/react"

export default function Navigation() {
    const { scrollYProgress } = useScroll();


    return (
        <div className="flex flex-col fixed top-1/2 left-4 -translate-y-1/2 z-11111 text-[#BBFF00] text-2xl font-medium">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Collections</a>
            <a href="#">Artists</a>
            <a href="#">Contact</a>
        </div>
    )
}