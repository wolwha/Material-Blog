export interface PostType {
  Title: string
  Content: string
  date: Date
  Category: string
  id: number
  Tags: string[]
  Thumbnail:string
  created_at: Date
}

export interface Post {
  title: string
  content: string
  date: Date
  category: string
  id: number
  tags: string[]
  thumbnail:string
}
