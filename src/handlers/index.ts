import { Request, Response } from 'express';
import { validationResult } from "express-validator";
import slug from 'slug';
import User from "../models/user";
import { hashPassword } from '../utils/auth';

export const createAccount = async (req: Request, res: Response) => {
    
    const { email, name, password } = req.body;

      try {

        // Manejar Errores
        let errors  = validationResult(req);

        if (!errors.isEmpty()){
            return  res.status(400).json(
                {
                    errors: errors.array() 
                }
            )
        }

        // Verificar si el usuario ya existe
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(409).json({ 
                message: 'Este correo electrónico ya está registrado',
                // suggestion: 'Intenta iniciar sesión o usar un correo diferente'
            });
        }

        //Comprobamos si el handle existe o no.
        const handle = slug(req.body.handle,'')

        const handleExist = await User.findOne({ handle})

        if (handleExist){
             return res.status(409).json({ 
                message: 'Este usuario no esta disponible!',
                suggestion: 'Intenta con otro usuario'
            });
        }


        // Crear nuevo usuario
        const user = new User(req.body);
        
        //hashar password antes de guardar
        user.password = await hashPassword(password);
        user.handle = handle;

        await user.save();

        res.status(201).json({
            message: `¡Perfecto, ${name}! Tu cuenta ha sido creada`,
            user: { id: user._id, email: user.email }
        });

    } catch (error) {
        console.error('Error creating account:', error);

        res.status(500).json({
            message: 'Error interno del servidor',
            error: 'Por favor, intenta nuevamente más tarde'
        });
    }
};
