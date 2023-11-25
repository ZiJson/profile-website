import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import ArrowRight from "../Icon/ArrowRight"

type props = {
    isSelected: boolean,
    images: string[]
    imgFolder:string
}


export default function Card({ isSelected, images, imgFolder }: props) {
    const [imageIndex, setImageIndex] = useState(0)
    console.log(images[0] === "../../img/blog/blog.jpeg")
    // let img = require(images[0])
    useEffect(() => {
        if (!isSelected) {
            setImageIndex(0)
        }
    }, [isSelected])

    console.log(isSelected)
    const onArrowClick = () => {
        if (imageIndex == images.length - 1) {
            setImageIndex(0)
        }
        else setImageIndex(pre => pre + 1)
    }
    return (
        <div className=" relative">
            <motion.img
                animate={isSelected ? "expand" : "initial"}
                variants={imgVariants}
                src={require(`../../img/${imgFolder}/${images[imageIndex]}`)}
                // src="./logo.512.png"
                // src={require(`${images[imageIndex]}`)}
                alt="blog"
                className="z-10 bg-gray-300 w-full  object-contain mb-4 grayscale group-hover:grayscale-0"
            />
            {
                isSelected && images.length > 1 ?
                    <div className="absolute right-0 text-[1.5rem] text-inherit hover:scale-105 hover:cursor-pointer" onClick={onArrowClick}>
                        <ArrowRight />
                    </div>
                    : null
            }
        </div>
    )
}
const delay = 0.3
const imgVariants = {
    inital: {
        height: 128
    },
    expand: {
        height: 300,
        transition: {
            delay
        }
    }
}