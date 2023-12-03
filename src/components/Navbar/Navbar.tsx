import { MotionValue, motion, useTransform } from "framer-motion";
import Head from "../Head/Head";

type props = {
    scrollY: MotionValue<number>
}

export default function Navbar({ scrollY }: props) {
    const background = useTransform(scrollY,[600,1000],["rgba(250, 250, 250, 0)","rgba(250, 250, 250)"])
    return (
        <>
            <motion.div
                style={{background}}
                className=" lg:hidden fixed w-screen h-[6.25rem] overflow-hidden z-10 "
            >
                <div className=" absolute top-[100%] w-full">
                    <Head scrollY={scrollY} isNavBar isMobile />
                </div>
            </motion.div>
            <div id="nav" className="hidden lg:fixed w-screen h-16 overflow-hidden z-10 ">
                <div className=" absolute top-[100%] w-full mix-blend-difference ">
                    <Head scrollY={scrollY} isNavBar />
                </div>
            </div>
        </>
    )
}