export default function About() {
    return (
        <div className="container mx-auto px-20 py-20 w-full h-full flex flex-col justify-center items-start relative">
            <div className="w-fit">
                <h1 className="">關於我</h1>
                <p>桃園好男人</p>
                <p>畢業於<strong>臺灣大學</strong>數學系</p>
                <p>擁有一年以上React前端開發 實務經驗</p>
            </div>
            <div className="absolute w-[45rem] h-[40rem] opacity-20 bottom-6 right-0 group">
                <img src="./words/self.png" alt="self" className="w-full h-full object-cover grayscale " />
                <div className="absolute w-[25rem] h-28 bg-black  top-[42%] left-[50%] translate-x-[-50%]">
                </div>
            </div>
        </div>
    )
}