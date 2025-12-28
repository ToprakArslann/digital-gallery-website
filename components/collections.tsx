'use client';

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'motion/react';
import Image from 'next/image';
import React, { useRef } from 'react';

const ITEMS = [
    { id: 1, title: "Digital Silence", year: "2023", image: "/stock1.png" },
    { id: 2, title: "Synthetic Realities", year: "2023", image: "/stock2.png" },
    { id: 3, title: "Fragments of Light", year: "2023", image: "/stock3.png" },
    { id: 4, title: "Post-Human Forms", year: "2023", image: "/stock44.png" },
    { id: 5, title: "Virtual Stillness", year: "2024", image: "/stock5.png" },
    { id: 6, title: "Glitch & Geometry", year: "2024", image: "/stock6.png" },
    { id: 7, title: "Abstract Frequencies", year: "2024", image: "/stock7.png" },
    { id: 8, title: "Neon Horizons", year: "2024", image: "/stock8.png" },
    { id: 9, title: "Data Dreams", year: "2025", image: "/stock9.png" },
    { id: 10, title: "Temporal Layers", year: "2025", image: "/stock10.png" },
    { id: 11, title: "The Future", year: "2025", image: "/stock11.png" },
];

const ITEM_HEIGHT = 100;
const GAP = -2;
const CONTAINER_WIDTH = 100;

export default function Collections() {
    const mouseY = useMotionValue(Infinity);
    const listRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    const mouseXGlobal = useMotionValue(0);
    const mouseYGlobal = useMotionValue(0);

    const smoothX = useSpring(mouseXGlobal, { stiffness: 500, damping: 50 });
    const smoothY = useSpring(mouseYGlobal, { stiffness: 500, damping: 50 });

    return (
        <div
            className="w-full min-h-screen flex items-center justify-center bg-black overflow-hidden cursor3"
            onMouseMove={(e) => {
                mouseXGlobal.set(e.clientX);
                mouseYGlobal.set(e.clientY);

                if (listRef.current) {
                    const rect = listRef.current.getBoundingClientRect();
                    const localY = e.clientY - rect.top;

                    mouseY.set(localY);

                    const totalItemHeight = ITEM_HEIGHT + GAP;
                    const rawIndex = (localY - ITEM_HEIGHT / 2) / totalItemHeight;
                    const index = Math.round(rawIndex);
                    const itemCenter = index * totalItemHeight + ITEM_HEIGHT / 2;
                    const distance = Math.abs(localY - itemCenter);

                    if (distance < 50 && index >= 0 && index < ITEMS.length) {
                        setHoveredIndex(index);
                    } else {
                        setHoveredIndex(null);
                    }
                }
            }}
            onMouseLeave={() => {
                mouseY.set(Infinity);
                setHoveredIndex(null);
            }}
        >
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-50 flex flex-col items-start"
                style={{
                    x: smoothX,
                    y: smoothY,
                    opacity: hoveredIndex !== null ? 1 : 0,
                    translateX: 40,
                    translateY: 40,
                }}
            >
                {hoveredIndex !== null && (
                    <>
                        <span className="bg-[#ccff00] px-1 text-sm font-bold uppercase tracking-tighter text-black shadow-sm whitespace-nowrap">
                            {ITEMS[hoveredIndex].title}
                        </span>
                        <span className="bg-[#ccff00] px-1 text-[10px] font-bold text-black shadow-sm whitespace-nowrap">
                            {ITEMS[hoveredIndex].year}
                        </span>
                    </>
                )}
            </motion.div>

            <div
                ref={listRef}
                className="flex flex-col items-end relative"
                style={{ width: CONTAINER_WIDTH }}
            >
                {ITEMS.map((item, index) => (
                    <CollectionItem
                        key={item.id}
                        item={item}
                        index={index}
                        mouseY={mouseY}
                    />
                ))}
            </div>
        </div>
    );
}

function CollectionItem({ item, index, mouseY }: { item: typeof ITEMS[0], index: number, mouseY: MotionValue<number> }) {
    const yCenter = index * (ITEM_HEIGHT + GAP) + ITEM_HEIGHT / 2;

    const distance = useTransform(mouseY, (val: number) => {
        return Math.abs(val - yCenter);
    });


    const widthSync = useTransform(distance, [0, 250], [180, 100]);

    const width = useSpring(widthSync, { stiffness: 150, damping: 50, mass: 1 });

    return (
        <motion.div
            style={{ width, height: ITEM_HEIGHT }}
            className={`relative shrink-0`}
        >
            <Image src={item.image} alt={item.title} fill className="object-cover cursor3" />
        </motion.div>
    );
}
