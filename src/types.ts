export interface CoursesDB {
    id: string,
    name: string,
    lessons: number 
}

// tipagem para criação (POST) sem created_at
export interface CoursesDBPost {
    id: string,
    name: string,
    lesson:number
}
