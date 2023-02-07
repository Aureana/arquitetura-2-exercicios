import { CoursesDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class CoursesDatabase extends BaseDatabase {
    public static TABLE_COURSES= "courses"

    public async findCourses(q: string | undefined) {
        let coursesDB

        if (q) {
            const result:  CoursesDB[] = await BaseDatabase
                .connection(CoursesDatabase.TABLE_COURSES)
                .where("name", "LIKE", `%${q}%`)

                coursesDB = result
        } else {
            const result:  CoursesDB[] = await BaseDatabase
                .connection(CoursesDatabase.TABLE_COURSES)

                coursesDB = result
        }

        return coursesDB
    }

    public async findCoursesById(id: string) {
        const [ coursesDB ]:  CoursesDB[] | undefined[] = await BaseDatabase
            .connection(CoursesDatabase.TABLE_COURSES)
            .where({ id })

        return coursesDB
    }

    public async insertCourses(newCoursesDB: CoursesDB) {
        await BaseDatabase
            .connection(CoursesDatabase.TABLE_COURSES)
            .insert(newCoursesDB)
    }
}
