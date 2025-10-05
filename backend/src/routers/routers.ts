import { Router } from "express";
import { createAccount, login } from "../handlers";
import { handleInputErrors } from "../middleware/validations";
import { loginValidation, registerValidation } from "../utils/authValidations";

const router = Router();

//Routing

/* Registro. y Autenticacion */
router.post('/auth/register',
    registerValidation,
    handleInputErrors,
    createAccount,
);

router.post('/auth/login',
    loginValidation,
    handleInputErrors,
    login,
)

export default router;
