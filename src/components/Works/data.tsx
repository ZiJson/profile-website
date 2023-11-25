export type Position = "tl" | "tr" | "bl" | "br"

export type WorkType = {
    folder: string
    imgs: string[]
    title: string[]
    tags: string[]
    github: string
    content: string[]
    position: Position
}

const blog: WorkType = {
    folder: "blog",
    imgs: ["blog.jpeg", "post.jpeg", "post_2.jpeg", "admin.jpeg", "admin_2.jpeg"],
    title: ["Personal Blog System", "個人部落格"],
    tags: ["Next SSR", "Supabase", "OAuth", "GCS"],
    github: "https://github.com/ZiJson/Blog",
    content: ["這是一個由Next Js全端開發的部落格，利用SSR、ISR提升使用者體驗，並且具備Gmail身份驗證以及後台管理頁，讓管理者輕鬆快速管理文章，使得所有人皆可經營屬於自己部落格。"],
    position: "tl"
}
const chatroom: WorkType = {
    folder: "chatroom",
    imgs: ["chatroom.jpeg", "home.jpeg"],
    title: ["Realtime chatroom", "即時線上聊天室"],
    tags: ["WebSocket", "Express", "GraphQL", "Antd"],
    github: "https://github.com/ZiJson/Realtime_Chatroom",
    content: ["輸入自己的使用者名稱，並創建與其他使用者的聊天室，便可即時對話並紀錄之前的對話紀錄。", "使用Websocket實現realtime對話，並用Graphql與後端互動，藉由MongoDB雲端資料庫儲存對話紀錄。"],
    position: "tr"
}
const issue: WorkType = {
    folder: "issue_manager",
    imgs: ["main.jpeg", "create.jpeg", "create_2.jpeg", "home.jpeg", "list.jpeg"],
    title: ["GitHub Issue Manager", "專案管理"],
    tags: ["GitHub App", "Express", "GraphQL", "Antd"],
    github: "https://github.com/ZiJson/github-issue-manager",
    content: ["登入你的GitHub帳號，從列表中選擇其中一個repo專案，便可在其中使用MarkDown建立Issue，並可以為issue貼上標籤以追蹤進度與狀態。", "使用GraphQL串接GitHub的API，包括帳號登入與Repo操作。"],
    position: "bl"
}
const store: WorkType = {
    folder: "store",
    imgs: ["shop.jpeg"],
    title: ["Online Store", "電商系統"],
    tags: ["Magento", "Line API", "PHP"],
    github: "",
    content: ["這是一個為客戶建立的B2C電商網站，並能使用Line登入與發送出貨狀態訊息。", "使用Magento2的電商系統，客製前端畫面與後台訂單狀態管理需求，並串接LINE的message API與Login API。"],
    position: "br"
}
export const data = [blog, chatroom, issue, store]