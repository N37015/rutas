import express from "express";
import usuariosRoutes from "./routes/usuarios.routes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/usuarios", usuariosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});