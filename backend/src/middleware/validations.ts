import type { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const handleInputErrors = (req:Request, res:Response, next: NextFunction)=>{
    
    // Manejar Errores
    
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(
            {
                errors: errors.array()
            }
        )
    }
    //Permite enviar a la siguiente funcion como se acoplo en la ruta.
    next()
}