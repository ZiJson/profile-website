import { MotionValue } from "framer-motion";
import Head from "../Head/Head";

type props = {
    scrollY: MotionValue<number>
}

export default function Navbar({ scrollY }: props) {
    return (
        <div id="nav" className="fixed w-screen h-16 overflow-hidden z-10">
            <div  className=" absolute top-[100%] w-full mix-blend-difference">
                <Head scrollY={scrollY} isNavBar />
            </div>
        </div>
    )
}