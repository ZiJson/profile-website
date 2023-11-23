export type Position = "tl" | "tr" | "bl" | "br"

export type WorkType = {
    imgs: string[]
    title: string[]
    tags: string[]
    github: string
    content: string[]
    position: Position
}

const blog:WorkType = {
    imgs: ["/works/blog/blog.png"],
    title:["Personal Blog System","個人部落格"],
    tags : ["Next SSR","Supabase","OAuth","GCS"],
    github:"",
    content:["這是一個由Next Js全端開發的部落格，利用SSR、ISR提升使用者體驗，並且具備Gmail身份驗證以及後台管理頁，讓管理者輕鬆快速管理文章，使得所有人皆可經營屬於自己部落格。"],
    position:"tl"
}
const chatroom:WorkType = {
    imgs: ["/works/blog/blog.png"],
    title:["Personal Blog System","個人部落格"],
    tags : ["Next SSR","Supabase","OAuth","GCS"],
    github:"",
    content:["這是一個由Next Js全端開發的部落格，利用SSR、ISR提升使用者體驗，並且具備Gmail身份驗證以及後台管理頁，讓管理者輕鬆快速管理文章，使得所有人皆可經營屬於自己部落格。"],
    position:"tr"
}
const issue:WorkType = {
    imgs: ["/works/blog/blog.png"],
    title:["Personal Blog System","個人部落格"],
    tags : ["Next SSR","Supabase","OAuth","GCS"],
    github:"",
    content:["這是一個由Next Js全端開發的部落格，利用SSR、ISR提升使用者體驗，並且具備Gmail身份驗證以及後台管理頁，讓管理者輕鬆快速管理文章，使得所有人皆可經營屬於自己部落格。"],
    position:"bl"
}
const store:WorkType = {
    imgs: ["/works/blog/blog.png"],
    title:["Personal Blog System","個人部落格"],
    tags : ["Next SSR","Supabase","OAuth","GCS"],
    github:"",
    content:["這是一個由Next Js全端開發的部落格，利用SSR、ISR提升使用者體驗，並且具備Gmail身份驗證以及後台管理頁，讓管理者輕鬆快速管理文章，使得所有人皆可經營屬於自己部落格。"],
    position:"br"
}
export const data = [blog,chatroom,issue,store]