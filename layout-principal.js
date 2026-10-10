// Motor de Diseño Principal - Editorial Yagum (Rutas Oficiales para GitHub Pages)
document.addEventListener("DOMContentLoaded", function() {
    const contenedorHeader = document.getElementById("header-corporativo");
    
    if (contenedorHeader) {
        // TU RUTA BASE PERMANENTE EN INTERNET
        // Al llevar la "/" al final, garantizamos que los archivos se enlacen de forma limpia
        const URL_BASE = "https://editorialyagum.github.io/Editorialyagum/";

        contenedorHeader.innerHTML = `
            <header class="header-corporativo-dinamico">
                <div class="header-branding">
                    <h1>EDITORIAL YAGUM</h1>
                    <p>Transformando manuscritos en legados literarios</p>
                </div>
                
                <nav class="nav-corporativo-dinamico">
                    <ul>
                        <li><a href="${URL_BASE}index.html">Inicio</a></li>
                        
                        <!-- MENÚ DESPLEGABLE: LECTORES -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Lectores ▾</a>
                            <ul class="submenu">
                                <li><a href="${URL_BASE}catalogos/libros_literatos.html">📚 Catálogo Literario</a></li>
                                <li><a href="${URL_BASE}catalogos/libros_academicos.html">🎓 Catálogo Académico</a></li>
                            </ul>
                        </li>
                        
                        <!-- MENÚ DESPLEGABLE: ESCRITORES -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Escritores ▾</a>
                            <ul class="submenu">
                                <li><a href="${URL_BASE}escritores/convocatorias.html">📢 Convocatorias</a></li>
                                <li><a href="${URL_BASE}escritores/lineamientos.html">📄 Lineamientos de Envío</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="${URL_BASE}autores.html">Autores</a></li>
                        
                        <!-- NUEVO MENÚ DESPLEGABLE: NOSOTROS -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Nosotros ▾</a>
                            <ul class="submenu">
                                <li><a href="${URL_BASE}nosotros/equipo.html">👥 Nuestro Equipo</a></li>
                                <li><a href="${URL_BASE}nosotros/politicas.html">🔒 Políticas</a></li>
                                <li><a href="${URL_BASE}nosotros/terminos.html">⚖️ Términos y Condiciones</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="${URL_BASE}contacto.html">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        `;

        // --- INTERACTIVIDAD PARA MÓVILES (PANTALLAS TÁCTILES) ---
        const elementosDesplegables = document.querySelectorAll(".menu-desplegable");

        elementosDesplegables.forEach(function(item) {
            const botonDisparador = item.querySelector(".trigger-desplegable");

            botonDisparador.addEventListener("click", function(evento) {
                evento.preventDefault(); 
                const submenuInterno = item.querySelector(".submenu");
                const estaAbierto = submenuInterno.style.display === "flex";

                document.querySelectorAll(".submenu").forEach(function(sub) {
                    sub.style.display = "none";
                });

                if (!estaAbierto) {
                    submenuInterno.style.display = "flex";
                }
            });
        });

        document.addEventListener("click", function(evento) {
            if (!evento.target.closest(".menu-desplegable")) {
                document.querySelectorAll(".submenu").forEach(function(sub) {
                    sub.style.display = "none";
                });
            }
        });
    }
});
