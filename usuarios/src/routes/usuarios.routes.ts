import { Router } from "express";
import { getUsuarios, getUsuariosById } from "../controllers/usuarios.controller";

const router = Router();

// Ruta para obtener todos los usuarios
router.get("/", getUsuarios);

// Ruta para obtener un usuario por el id
router.get("/:id", getUsuariosById);

export default router;