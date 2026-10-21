// Motor de Diseño Principal - Editorial Yagum (Rutas Oficiales para GitHub Pages)
document.addEventListener("DOMContentLoaded", function() {
    
    // RUTA BASE EXACTA DE TU PROYECTO (Corregida según tu captura de pantalla)
    const URL_BASE = "https://editorialyagum.github.io/Editorialyagum/";

    // ==========================================================================
    // 1. INYECCIÓN DEL HEADER CORPORATIVO
    // ==========================================================================
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
                        <li><a href="${URL_BASE}index.html">Inicio</a></li>
                        
                        <!-- MENÚ DESPLEGABLE: LECTORES -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Lectores ▾</a>
                            <ul class="submenu">
                                <li><a href="${URL_BASE}catalogos/libros_literarios.html">Catálogo Literario</a></li>
                                <li><a href="${URL_BASE}catalogos/libros_academicos.html">Catálogo Académico</a></li>
                            </ul>
                        </li>

                        <!-- MENÚ DESPLEGABLE: AUTORES -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Autores ▾</a>
                            <ul class="submenu">
                                <li><a href="${URL_BASE}catalogos/autores_literarios.html">Autores literarios</a></li>
                                <li><a href="${URL_BASE}catalogos/autores_academicos.html">Autores academicos</a></li>
                            </ul>
                        </li>
                        
                        <!-- MENÚ DESPLEGABLE: ESCRITORES -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Escritores ▾</a>
                            <ul class="submenu">
                                <li><a href="${URL_BASE}escritores/convocatoria_literaria.html">Convocatoria literaria</a></li>
                                <li><a href="${URL_BASE}escritores/convocatoria_academica.html">Convocatoria academica</a></li>
                            </ul>
                        </li>
                        
                        <!-- MENÚ DESPLEGABLE: NOSOTROS -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Nosotros ▾</a>
                            <ul class="submenu">
                                <li><a href="${URL_BASE}nosotros/nosotros.html">Nuestro Equipo</a></li>
                                <li><a href="${URL_BASE}nosotros/alcance.html">Nuestro alcance</a></li>
                                <li><a href="${URL_BASE}nosotros/politicas.html">Políticas</a></li>
                                <li><a href="${URL_BASE}nosotros/terminos.html">Términos y Condiciones</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="${URL_BASE}contacto.html">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        `;

        // --- INTERACTIVIDAD PARA MÓVILES (SOLUCIÓN ANTIMÉTODO NULL) ---
        const elementosDesplegables = document.querySelectorAll(".menu-desplegable");

        elementosDesplegables.forEach(function(item) {
            const botonDisparador = item.querySelector(".trigger-desplegable");
            const submenuInterno = item.querySelector(".submenu");

            // Validamos que ambos elementos existan antes de leer sus propiedades css
            if (botonDisparador && submenuInterno) {
                botonDisparador.addEventListener("click", function(evento) {
                    evento.preventDefault(); 
                    const estaAbierto = submenuInterno.style.display === "flex";

                    document.querySelectorAll(".submenu").forEach(function(sub) {
                        sub.style.display = "none";
                    });

                    if (!estaAbierto) {
                        submenuInterno.style.display = "flex";
                    }
                });
            }
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
