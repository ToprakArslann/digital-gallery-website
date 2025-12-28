import Image from "next/image";
export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-center fixed top-2 z-50">
            <div className="p-4 flex flex-row items-center justify-center gap-6 bg-[#3C3C3C]/7 outline outline-[#3C3C3C]/30 backdrop-blur-md rounded-xl">
                <Image src="/logo.svg" alt="logo" width={25} height={25} />
                <a className="text-white" href="">Gallery</a>
                <a href="">About</a>
                <a href="">Collections</a>
                <a href="">Artists</a>
                <a href="" className="flex items-center justify-center bg-white p-2 rounded-lg text-black text-xl relative">
                    Contact
                </a>
            </div>
        </nav >
    )
}
