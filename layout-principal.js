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

        // --- INTERACTIVIDAD PARA MÓVILES (PANTALLAS TÁCTILES) ---
        const elementosDesplegables = document.querySelectorAll(".menu-desplegable");

        elementosDesplegables.forEach(function(item) {
            const botonDisparador = item.querySelector(".trigger-desplegable");
            if (botonDisparador) {
                botonDisparador.addEventListener("click", function(evento) {
                    evento.preventDefault(); 
                    const submenuInterno = item.querySelector(".submenu");
                    const estaAbierto = submenuInterno.style.display === "flex";

                    document.querySelectorAll(".submenu").forEach(function(sub) {
                        sub.style.display = "none";
                    });

                    if (!estaAbierto && submenuInterno) {
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

    // ==========================================================================
    // 2. INYECCIÓN DEL FOOTER LEGAL UNIFICADO
    // ==========================================================================
    const contenedorFooter = document.querySelector(".main-footer");
    
    if (contenedorFooter) {
        contenedorFooter.innerHTML = `
            <div class="container footer-flex" style="display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 20px 0; text-align: center;">
                <p style="margin: 0; color: #9ca3af;">&copy; ${new Date().getFullYear()} Editorial Yagum. Todos los derechos reservados.</p>
                <nav class="nav-legal" style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; font-size: 0.8rem;">
                    <a href="${URL_BASE}legales/politica_privacidad.html">Aviso de Privacidad</a> | 
                    <a href="${URL_BASE}legales/politicas_convocatorias.html">Políticas de convocatorias</a> | 
                    <a href="${URL_BASE}legales/politicas_cookies.html">Política de Cookies</a> | 
                    <a href="${URL_BASE}legales/terminosycondiciones_generales.html">Términos Generales</a>
                </nav>
            </div>
        `;
    }
});
