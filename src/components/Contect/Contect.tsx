export default function Contect() {
    return (
        <div className="container mx-auto px-10 lg:px-20 py-20 w-full min-h-[60vh] lg:min-h-screen flex justify-end lg:justify-between flex-col lg:flex-row gap-20 lg:gap-0 ">
            <div className="h-full flex flex-col gap-8 self-start lg:self-end">
                <a href="#about" className="text-6xl font-bold hover:text-gray-600">關於我</a>
                <a href="#skills" className="text-6xl font-bold hover:text-gray-600">專長技能</a>
                <a href="#works" className="text-6xl font-bold hover:text-gray-600">開發作品</a>
                <a href="#contect" className="text-6xl font-bold hover:text-gray-600">聯絡資訊</a>
            </div>
            <div className="flex flex-col gap-3 self-end">
                <div className="flex text-3xl fill-[#33333] gap-2 justify-end ">
                    <a href="mailto:jasonnosajya53@gmail.com" className="hover:fill-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" x="0" y="0" viewBox="0 0 50 50">
                            <path d="M14 4C8.489 4 4 6.24 4 14v22c0 5.511 4.489 10 10 10h22c5.511 0 10-4.489 10-10V14c0-5.511-4.489-10-10-10H14zm-1 12h24c.18 0 .35.02.51.07l-9.83 9.82a3.801 3.801 0 01-5.37 0l-9.82-9.82c.16-.05.33-.07.51-.07zm-1.93 1.49L18.59 25l-7.52 7.51c-.05-.16-.07-.33-.07-.51V18c0-.18.02-.35.07-.51zm27.86 0c.05.16.07.33.07.51v14c0 .18-.02.35-.07.51L31.4 25l7.53-7.51zM20 26.41l.89.9a5.782 5.782 0 004.1 1.69c1.49 0 2.97-.56 4.1-1.69l.9-.9 7.52 7.52c-.16.05-.33.07-.51.07H13c-.18 0-.35-.02-.51-.07L20 26.41z">
                            </path></svg>
                    </a>
                    <a href="https://line.me/ti/p/cuWoqKWEBj" className="hover:fill-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" x="0" y="0" viewBox="0 0 50 50"><path d="M9 4C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5H9zm16 7c8.27 0 15 5.36 15 11.95 0 2.63-1.04 5.01-3.22 7.35-1.57 1.78-4.12 3.74-6.47 5.36-2.35 1.6-4.51 2.86-5.31 3.19-.32.13-.56.19-.75.19-.66 0-.6-.7-.55-.99.04-.22.22-1.26.22-1.26.05-.37.1-.96-.05-1.33-.17-.41-.84-.62-1.33-.72C15.34 33.8 10 28.85 10 22.95 10 16.36 16.73 11 25 11zm-1.008 7.998c-.504.01-.992.394-.992 1.002v6a1 1 0 002 0v-2.879l2.186 3.46c.566.791 1.814.392 1.814-.581v-6a1 1 0 00-2 0v3l-2.186-3.58a.974.974 0 00-.822-.422zM15 19a1 1 0 00-1 1v6a1 1 0 001 1h3a1 1 0 000-2h-2v-5a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1zm10 0a1 1 0 00-1 1v6a1 1 0 001 1h3a1 1 0 000-2h-2v-1h2a1 1 0 100-2h-2v-1h2a1 1 0 000-2h-3z"></path></svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100003765015982&amp;mibextid=LQQJ4d" className="hover:fill-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path></svg>
                    </a>
                </div>
                <div className="font-semibold text-lg">感謝你的瀏覽，希望你會喜歡</div>
            </div>
        </div>
    )
}