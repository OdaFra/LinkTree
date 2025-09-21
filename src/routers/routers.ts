import { Router } from "express";
import { createAccount } from "../handlers";
import { registerValidation } from "../utils/authValidations";

const router = Router();

//Routing

/* Registro. y Autenticacion */
router.post('/auth/register',
    registerValidation,
    createAccount,
);

export default router;
