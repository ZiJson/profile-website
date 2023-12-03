import { MotionValue, motion, useTransform } from "framer-motion"

type props = {
    scrollY: MotionValue<number>
}

export default function About({ scrollY }: props) {
    const height = window.innerHeight;
    const y1 = useTransform(scrollY, [0, height, height * 2], [800, 0, -800])
    const y2 = useTransform(scrollY, [0, height, height * 2], [1500, 0, -1500])

    return (
        <div className="container mx-auto px-20 py-20 w-full min-h-screen flex flex-col justify-center items-start relative">
            <div className="w-fit">
                <h1 className="">關於我</h1>
                <p>桃園好男人</p>
                <p>畢業於<strong>臺灣大學</strong>數學系</p>
                <p>擁有一年以上React前端開發 實務經驗</p>
            </div>
            <div className="absolute w-[45rem] h-[40rem] opacity-20 bottom-6 right-0 group">
                <motion.img style={{ y: y1 }} src={require('../../img/self.png')} alt="self" className="w-full h-full object-cover grayscale " />
                <motion.div style={{ y: y2, x: "-50%" }} className="absolute w-[25rem] h-28 bg-black  top-[15rem] left-[50%] ">
                </motion.div>
            </div>
        </div>
    )
}