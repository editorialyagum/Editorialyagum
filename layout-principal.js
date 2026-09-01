// Motor de Diseño Principal - Editorial Yagum
document.addEventListener("DOMContentLoaded", function() {
    // Buscamos el gancho en el HTML
    const contenedorHeader = document.getElementById("header-corporativo");
    
    if (contenedorHeader) {
        // Inyectamos el diseño idéntico para las páginas principales
        contenedorHeader.innerHTML = `
            <header style="background-color: #1a252f; color: white; padding: 30px 20px; text-align: center; font-family: sans-serif;">
                <h1 style="margin: 0 0 10px 0; font-size: 2.2rem; letter-spacing: 1px;">EDITORIAL YAGUM</h1>
                <p style="margin: 0 0 20px 0; color: #3498db; font-style: italic; font-size: 1rem;">Transformando manuscritos en legados literarios</p>
                <nav style="display: flex; justify-content: center; gap: 25px; border-top: 1px solid #34495e; padding-top: 15px;">
                    <a href="/index.html" style="color: white; text-decoration: none; font-weight: bold; font-size: 1rem;">Inicio</a>
                    <a href="/autores.html" style="color: white; text-decoration: none; font-weight: bold; font-size: 1rem;">Catálogo de Autores</a>
                    <a href="/lineamientos.html" style="color: white; text-decoration: none; font-weight: bold; font-size: 1rem;">Lineamientos y Metas</a>
                    <a href="/contacto.html" style="color: white; text-decoration: none; font-weight: bold; font-size: 1rem;">Contacto / Recepción</a>
                    <a href="/terminos.html" style="color: white; text-decoration: none; font-size: 0.9rem; opacity: 0.8;">Términos Legales</a>
                </nav>
            </header>
        `;
    }
});
