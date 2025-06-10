const API_URL = "http://localhost:8000"; // Cambia esto según tu backend

export async function list_documentos() {
    const response = await fetch(`${API_URL}/documentos/listar`);
    
    if (!response.ok) {
        throw new Error("Error al obtener las materias");
    }

    return await response.json();
}