import colors from 'colors';
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const url = process.env.MONGODB_URI;
        if (!url) {
            throw new  Error(colors.red.bold("❌ MONGODB_URI no está definido en las variables de entorno"));
        }
        const { connection } = await mongoose.connect(url);
        console.log(
            colors.dim.bold(` :: ✅ Base de datos conectada:: ${connection.host}:${connection.port}/${connection.name}`)
        );
    } catch (error) {
        console.error(colors.bgRed.white.bold("❌ Error al conectar a la base de datos:"), error);
        process.exit(1); // Forzamos salida si falla la conexión
    }
};
