import { data as works, Position } from "./data"
import { motion } from "framer-motion"
import { useState } from "react"


type MotionState = {
    selected: Position | ""
    "tl": string
    "tr": string
    "bl": string
    "br": string
}

export default function Works() {

    const [motionState, setMotionState] = useState<MotionState>({
        selected: "",
        tl: "",
        tr: "",
        bl: "",
        br: ""
    })
    const onCardClick = (e: any, selected: Position) => {
        e.stopPropagation();
        if (selected === "tl") {
            setMotionState({
                selected,
                tl: "expandTL",
                tr: "right",
                bl: "down",
                br: "down"
            })
        }
        else if (selected === "tr") {
            setMotionState({
                selected,
                tl: "left",
                tr: "expandTR",
                bl: "down",
                br: "down"
            })
        }
        else if (selected === "bl") {
            setMotionState({
                selected,
                tl: "up",
                tr: "up",
                bl: "expandBL",
                br: "right"
            })
        }
        else if (selected === "br") {
            setMotionState({
                selected,
                tl: "up",
                tr: "up",
                bl: "left",
                br: "expandBR"
            })
        }
    }
    const closeAll = () => {
        setMotionState({
            selected: "",
            tl: "",
            tr: "",
            bl: "",
            br: ""

        })
    }
    const onPageClick = (e: any) => {
        closeAll()
    }

    return (
        <div className="container mx-auto px-20 pr-8 py-20 w-full h-full flex justify-between items-center relative" onClick={onPageClick}>
            <div>
                <h1>開發作品</h1>
                <p>為您精選四個過去的開發專案</p>
                <p>點擊以查看更詳細內容</p>
            </div>
            <div className=" grid grid-cols-2" style={{ width: container.width, height: container.height, columnGap: gap.y, rowGap: gap.x }}>
                {works.map((work, index) => {
                    return (
                        <motion.div
                            initial={false}
                            animate={motionState[work.position]}
                            variants={cardVariants}
                            transition={{type:"tween"}}
                            className="border border-[#222222] px-3 py-4 group relative hover:bg-white flex flex-col justify-between hover:cursor-pointer"
                            onClick={(e) => { onCardClick(e, work.position) }}
                            style={{width:card.width,height:card.height}}
                        >
                            <div>
                                <div className=" relative">
                                    <img src="./works/blog/blog.png" alt="blog" className="z-10 bg-gray-300 w-full  object-contain mb-4 grayscale group-hover:grayscale-0" style={{ height: "128px" }} />
                                </div>
                                {work.title.map((text) => (
                                    <div className=" font-medium text-[17px]">
                                        {text}
                                    </div>
                                ))}
                            </div>
                            <div className="line-clamp-1 w-full text-sm text-gray-400">
                                {work.tags.map((tag) => (
                                    <span>#{tag} </span>
                                ))}

                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

const container = {
    height: window.innerHeight * 0.8,
    width: 550
}
const gap = {
    x: 30,
    y: 24
}
const card = {
    height: (container.height - gap.x) / 2,
    width: (container.width - gap.y) / 2
}
const grow = {
    up: (card.height + gap.x) * -1,
    down: 0,
    right: (card.width + gap.y),
    left: (card.width + gap.y) * -1
}
const delay = 0.3

const cardVariants = {
    expandTL: {
        height: container.height,
        width: container.width,
        transition:{
            type:"tween",
            height:{
                delay
            }
        }
    },
    expandTR: {
        height: container.height,
        width: container.width,
        x: grow.left,
        transition:{
            type:"tween",
            height:{
                delay
            }
        }
    },
    expandBL: {
        height: container.height,
        width: container.width,
        y: grow.up,
        transition:{
            type:"tween",
            height:{
                type:"tween",
                delay
            },
            y:{
                type:"tween",
                delay
            }
        }
    },
    expandBR: {
        height: container.height,
        width: container.width,
        y: grow.up,
        x: grow.left,
        transition:{
            type:"tween",
            height:{
                type:"tween",
                delay
            },
            y:{
                type:"tween",
                delay
            }
        }
    },
    up: {
        y: grow.up,
        transition:{
            type:"tween",
            delay
        }
    },
    down: {
        y: grow.down
    },
    right: {
        x: grow.right,
        transition:{
            type:"tween",
        }
    },
    left: {
        x: grow.left,
        transition:{
            type:"tween",
        }
    }
}