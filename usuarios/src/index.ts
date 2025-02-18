import express from "express";
import usuariosRoutes from "./routes/usuarios.routes"

const app= express()
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/registro", usuariosRoutes);

app.get("/", (req, res) => {
    res.send("inicio de usuarios");
});

app.listen(port, () => {
    console.log(`servidor usuarios corriendo en el puerto ${port}`)
});