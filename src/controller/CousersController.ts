import { Request, Response } from "express"
import { CourseBusiness } from "../business/CourseBusiness"
import { BaseError } from "../errors/BaseError"

export class CousersController {
    public getCourses = async (req: Request, res: Response) => {
        try {
            const q = req.query.q as string | undefined
            console.log({q})
            const coursesBusiness = new CourseBusiness()
            const output = await coursesBusiness.getCourses(q)
    
            res.status(200).send(output)
        } catch (error) {
            console.log(error)
    
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)             
            
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public createCourses = async (req: Request, res: Response) => {
        try {
            const input = {
                id: req.body.id,
                name: req.body.name,
                lessons: req.body.lessons
               
            }

            const coursesBusiness = new CourseBusiness()
            const output = await coursesBusiness.createCourses(input)
    
            res.status(201).send(output)
        } catch (error) {
            console.log(error)
    
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}