import 'dotenv/config';
import express from 'express';
import { connectDB } from '../config/db';
import router from './routers';

const app = express();

//Leer datos y parsear a JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Iniciar conexión a la base de datos
connectDB();

//Permite manejar las rutas por medio de mapeo de la instancia router
app.use('/', router);

export default app;