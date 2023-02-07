import { CoursesDatabase } from "../database/CoursesDatabase"
import { Courses } from "../models/Courses"
import { CoursesDB } from "../types"
import { BadRequestError } from "../errors/BadRequestError"

export class CourseBusiness {
    public getCourses = async (q: string | undefined) => {
        const coursesDatabase = new CoursesDatabase()       
        const coursesDB = await coursesDatabase.findCourses(q)
     
        const courses: Courses[] = coursesDB.map((coursesDB) => new Courses(
            coursesDB.id,
            coursesDB.name,
            coursesDB.lessons           
        ))
        console.log(courses)
        

        return courses
    }

    public createCourses = async (input: any) => {
        const { id, name, lessons } = input

        if (typeof id !== "string") {
            throw new BadRequestError("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser string")
        }

        if (typeof lessons !== "number") {
            throw new BadRequestError("'lessons' deve ser number")
        }


        const coursesDatabase = new CoursesDatabase()
        const coursesDBExists = await coursesDatabase.findCoursesById(id)

        if (coursesDBExists) {
            throw new BadRequestError("'id' já existe")
        }

        const newCourse = new Courses(
            id,
            name,
            lessons
        ) 

        const newCourseDB: CoursesDB = {
            id: newCourse.getId(),
            name: newCourse.getName(),
            lessons: newCourse.getLessons()
        }

       // await CoursesDatabase.insertCourses(newCourseDB)
       const newCouseDatabase = coursesDatabase.insertCourses(newCourseDB)

        const output = {
            message: "Cadastro realizado com sucesso",
            course:  newCourse 
        }

        return (output)
    }
}