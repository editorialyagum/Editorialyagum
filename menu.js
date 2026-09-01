// Motor Central de Navegación - Editorial Yagum
document.addEventListener("DOMContentLoaded", function() {
    // 1. Definimos el contenedor del menú
    const contenedorMenu = document.getElementById("navegacion-principal");
    
    if (contenedorMenu) {
        // 2. Inyectamos el HTML de forma dinámica
        contenedorMenu.innerHTML = `
            <header style="text-align: center; padding: 20px; background-color: #2c3e50; margin-bottom: 20px;">
                <nav style="display: flex; justify-content: center; gap: 20px;">
                    <a href="/index.html" style="color: white; text-decoration: none; font-weight: bold;">Inicio</a>
                    <a href="/autores.html" style="color: white; text-decoration: none; font-weight: bold;">Autores</a>
                    <a href="/lineamientos.html" style="color: white; text-decoration: none; font-weight: bold;">Lineamientos</a>
                    <a href="/contacto.html" style="color: white; text-decoration: none; font-weight: bold;">Contacto</a>
                    <a href="/terminos.html" style="color: white; text-decoration: none; font-weight: bold;">Términos Legales</a>
                </nav>
            </header>
        `;
    }
});
