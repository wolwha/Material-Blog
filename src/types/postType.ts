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

export interface Posts {
// 1. 숫자로 들어옴
  id: number;
  
  // 2. 문자열로 들어옴
  Title: string;
  Content: string;
  Category: string;
  
  // 3. 로그를 보니 배열이 아니라 단일 문자열("Test")로 들어오고 있습니다.
  Tags: string[]; 
  
  // 4. 값이 없을 때 null이 들어옵니다.
  Thumbnail: string | null; 
  
  // 5. Supabase(JSON)는 날짜를 ISO 문자열로 반환합니다.
  created_at: string;
}

export interface PostProps{
  postData: Posts
}

export interface GroupedPosts {
  [key:string]: Posts[]
}
