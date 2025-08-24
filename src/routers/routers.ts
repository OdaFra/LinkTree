import { Router } from "express";

const router = Router();

//Routing

/* Autenticacion y Registro */
router.post('/auth/register', (req, res) => {
  // Lógica de registro
//   res.send('Usuario registrado');
    console.log(req.body);

});

router.post('/auth/login', (req, res) => {
  // Lógica de inicio de sesión
  res.send('Usuario autenticado');
});

export default router;
