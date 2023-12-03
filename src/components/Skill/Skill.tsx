export default function Skill() {
    return (
        <div className="container mx-auto lg:px-20 py-20 w-full min-h-full flex justify-between items-center flex-col lg:flex-row gap-40 lg:gap-0">
            <div>
                <h1>專長 技能</h1>
                <p>前端以<strong>React</strong>及原生js為主</p>
                <p>後端擅長以Node開發</p>
                <p>近期喜用<strong>Next</strong>進行全端開發</p>
                <br />
                <p>使用<strong>Typescript</strong>語法</p>
            </div>
            <div className="  flex flex-col gap-8 lg:gap-[4rem] text-gray-500 ">
                <div className=" flex gap-40 lg:gap-[8rem]">
                    <div>
                        <div className="text-6xl lg:text-2xl font-bold mb-4">前端技能</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">React</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">Next</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">Antd</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">Tailwind</div>
                    </div>
                    <div>
                        <div className="text-6xl lg:text-2xl font-bold mb-4">後端技能</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">Node</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">Next</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">GraphQL</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">MongoDb</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">Supabase</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">GCP</div>
                    </div>
                </div>
                <div className=" flex gap-40 lg:gap-[8rem]">
                    <div>
                        <div className="text-6xl lg:text-2xl font-bold mb-4">程式語言</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">Typescript</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">Javascript</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">Python</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">PHP</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">C++</div>
                    </div>
                    <div>
                        <div className="text-6xl lg:text-2xl font-bold mb-4">相關技能</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">Figma</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">Apache web server</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">Adobe illustrator</div>
                        <div className="text-4xl lg:text-lg font-bold mb-1">Adobe photoshop</div>
                    </div>
                </div>
            </div>
        </div>
    )
}