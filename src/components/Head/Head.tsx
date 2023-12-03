import { useState } from 'react'
import { J, A, S, O, N, L, I } from '../Icon/words'
import { easeInOut, motion, MotionValue, useTransform } from 'framer-motion'

// 1126.27 / 200
type props = {
    scrollY: MotionValue<number>,
    isNavBar?: boolean,
    isMobile?: boolean
}

export default function Head({ scrollY, isNavBar = false, isMobile = false }: props) {
    const [width, setWidth] = useState(window.innerWidth)
    window.addEventListener("resize", function () {
        setWidth(this.innerWidth)
    });
    const height = !isNavBar ? (width - 50) * 200 / 1126.27 :!isMobile? 20:40;
    const start = (window.innerHeight * 0.3) - 108;
    const delay = 60
    const duration = 240
    const range = [0, 0, 0, 0].map((_, index) => {
        const left = start + delay * index
        return [left, left + duration]
    })
    const initial = {
        y: height
    }
    const animate = {
        y: 0
    }
    const transition = {
        type: "tween",
        ease: "easeInOut",
        duration: 1
    }
    const y1 = useTransform(scrollY, range[0], [0, -height], { ease: easeInOut })
    const y2 = useTransform(scrollY, range[1], [0, -height], { ease: easeInOut })
    const y3 = useTransform(scrollY, range[2], [0, -height], { ease: easeInOut })
    const y4 = useTransform(scrollY, range[3], [0, -height], { ease: easeInOut })
    return (
        <div className='flex scale-y-[1.8] origin-top w-full justify-center relative fill-[#222222] ' style={{ height }}>
            <motion.div initial={initial} animate={animate} transition={{ ...transition, delay: 0.6 }} style={{ y: y4 }}>
                <J height={height} />
            </motion.div>

            <motion.div initial={initial} animate={animate} transition={{ ...transition, delay: 0.4 }} style={{ y: y3 }}>
                <A height={height} />
            </motion.div>

            <motion.div initial={initial} animate={animate} transition={{ ...transition, delay: 0.2 }} style={{ y: y2 }}>
                <S height={height} />
            </motion.div>

            <motion.div initial={initial} animate={animate} transition={{ ...transition, delay: 0 }} style={{ y: y1 }}>
                <O height={height} />
            </motion.div>

            <motion.div initial={initial} animate={animate} transition={{ ...transition, delay: 0 }} style={{ y: y1 }}>
                <N height={height} />
            </motion.div>

            <motion.div initial={initial} animate={animate} transition={{ ...transition, delay: 0.2 }} style={{ y: y2 }}>
                <L height={height} />
            </motion.div>

            <motion.div initial={initial} animate={animate} transition={{ ...transition, delay: 0.4 }} style={{ y: y3 }}>
                <I height={height} />
            </motion.div>

            <motion.div initial={initial} animate={animate} transition={{ ...transition, delay: 0.6 }} style={{ y: y4 }}>
                <N height={height} />
            </motion.div>
            {
                !isNavBar ?
                    <div className='w-full h-full absolute top-[87%] z-10 bg-[#fafafa]'></div>
                    : null
            }
        </div>
    )
}