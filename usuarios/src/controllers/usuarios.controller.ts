// Función para obtener la fecha y hora actual
const obtenerFechaHora = () => {
    return new Date().toLocaleString();
};

// Controlador para obtener la lista de usuarios
export const getUsuarios = (req: any, res: any) => {
    const usuarios = [
        { id: 1, nombre: "Juan Pérez", email: "juan@example.com" },
        { id: 2, nombre: "Ana García", email: "ana@example.com" },
        { id: 3, nombre: "Carlos López", email: "carlos@example.com" }
    ];

    res.json({
        message: "Usuarios registrados",
        usuarios: usuarios,
        timestamp: obtenerFechaHora()
    });
};

// Controlador para obtener un usuario por el id
export const getUsuariosById = (req: any, res: any) => {
    const usuarios = [
        { id: 1, nombre: "Juan Pérez", email: "juan@example.com" },
        { id: 2, nombre: "Ana García", email: "ana@example.com" },
        { id: 3, nombre: "Carlos López", email: "carlos@example.com" }
    ];

    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));

    if (usuario) {
        res.json({
            message: "Usuario encontrado",
            usuario: usuario,
            timestamp: obtenerFechaHora()
        });
    } else {
        res.status(404).json({
            message: "Usuario no encontrado",
            timestamp: obtenerFechaHora()
        });
    }
};