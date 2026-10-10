// Motor de Diseño Principal - Editorial Yagum (Rutas Corregidas para GitHub Pages)
document.addEventListener("DOMContentLoaded", function() {
    const contenedorHeader = document.getElementById("header-corporativo");
    
    if (contenedorHeader) {
        // Detectamos si la página actual está DENTRO de una carpeta (catalogos, escritores, autores, nosotros)
        // Si la URL contiene el nombre de alguna carpeta, necesitamos agregar "../" para que los enlaces no se rompan
        const enSubcarpeta = window.location.pathname.includes("/catalogos/") || 
                             window.location.pathname.includes("/escritores/") || 
                             window.location.pathname.includes("/autores/") || 
                             window.location.pathname.includes("/nosotros/");
        
        const prefijo = enSubcarpeta ? "../" : "./";

        contenedorHeader.innerHTML = `
            <header class="header-corporativo-dinamico">
                <div class="header-branding">
                    <h1>EDITORIAL YAGUM</h1>
                    <p>Transformando manuscritos en legados literarios</p>
                </div>
                
                <nav class="nav-corporativo-dinamico">
                    <ul>
                        <li><a href="${prefijo}index.html">Inicio</a></li>
                        
                        <!-- MENÚ DESPLEGABLE: LECTORES -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Lectores ▾</a>
                            <ul class="submenu">
                                <li><a href="${prefijo}catalogos/libros_literatos.html">📚 Catálogo Literario</a></li>
                                <li><a href="${prefijo}catalogos/libros_academicos.html">🎓 Catálogo Académico</a></li>
                            </ul>
                        </li>
                        
                        <!-- MENÚ DESPLEGABLE: ESCRITORES -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Escritores ▾</a>
                            <ul class="submenu">
                                <li><a href="${prefijo}escritores/convocatorias.html">📢 Convocatorias</a></li>
                                <li><a href="${prefijo}escritores/lineamientos.html">📄 Lineamientos de Envío</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="${prefijo}autores.html">Autores</a></li>
                        <li><a href="${prefijo}nosotros.html">Nosotros</a></li>
                        <li><a href="${prefijo}banco_de_pruebas.html" class="enlace-starter">Starter</a></li>
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
