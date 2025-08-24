import colors from 'colors';
import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        const url = process.env.MONGODB_URI;
        if (!url) {
            throw new  Error(colors.bgRed.white.bold("❌ MONGODB_URI no está definido en las variables de entorno"));
        }
        const { connection } = await mongoose.connect(url);
        console.log(
            colors.bgGreen.white.bold(`✅ Base de datos conectada: ${connection.host}:${connection.port}/${connection.name}`)
        );
    } catch (error) {
        console.error(colors.bgRed.white.bold("❌ Error al conectar a la base de datos:"), error);
        process.exit(1); // Forzamos salida si falla la conexión
    }
};
