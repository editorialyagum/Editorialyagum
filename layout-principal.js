// Motor de Diseño Principal - Editorial Yagum (Versión Evolucionada con Submenús)
document.addEventListener("DOMContentLoaded", function() {
    const contenedorHeader = document.getElementById("header-corporativo");
    
    if (contenedorHeader) {
        contenedorHeader.innerHTML = `
            <header class="header-corporativo-dinamico">
                <div class="header-branding">
                    <h1>EDITORIAL YAGUM</h1>
                    <p>Transformando manuscritos en legados literarios</p>
                </div>
                
                <nav class="nav-corporativo-dinamico">
                    <ul>
                        <li><a href="/index.html">Inicio</a></li>
                        
                        <!-- MENÚ DESPLEGABLE: LECTORES -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Lectores ▾</a>
                            <ul class="submenu">
                                <li><a href="/lectores/literatos.html">📚 Catálogo Literario</a></li>
                                <li><a href="/lectores/academicos.html">🎓 Catálogo Académico</a></li>
                            </ul>
                        </li>
                        
                        <!-- MENÚ DESPLEGABLE: ESCRITORES -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Escritores ▾</a>
                            <ul class="submenu">
                                <li><a href="/escritores/convocatorias.html">📢 Convocatorias</a></li>
                                <li><a href="/escritores/lineamientos.html">📄 Lineamientos de Envío</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="/autores.html">Autores</a></li>
                        <li><a href="/contacto.html">Contacto</a></li>
                        <li><a href="/banco_de_pruebas.html" class="enlace-starter">Starter</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
});
