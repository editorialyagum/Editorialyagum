// Motor de Diseño Principal - Editorial Yagum (Rutas Absolutas Permanentes para GitHub Pages)
document.addEventListener("DOMContentLoaded", function() {
    const contenedorHeader = document.getElementById("header-corporativo");
    
    if (contenedorHeader) {
        // DEFINIMOS LA RUTA BASE OFICIAL DE TU PROYECTO EN GITHUB PAGES
        // Esta es la raíz de tu servidor. Con esto evitamos usar "./" o "../" que confunden al navegador.
        const URL_BASE = "https://github.io";

        contenedorHeader.innerHTML = `
            <header class="header-corporativo-dinamico">
                <div class="header-branding">
                    <h1>EDITORIAL YAGUM</h1>
                    <p>Transformando manuscritos en legados literarios</p>
                </div>
                
                <nav class="nav-corporativo-dinamico">
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        
                        <!-- MENÚ DESPLEGABLE: LECTORES -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Lectores ▾</a>
                            <ul class="submenu">
                                <li><a href="catalogos/libros_literatos.html">📚 Catálogo Literario</a></li>
                                <li><a href="catalogos/libros_academicos.html">🎓 Catálogo Académico</a></li>
                            </ul>
                        </li>
                        
                        <!-- MENÚ DESPLEGABLE: ESCRITORES -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Escritores ▾</a>
                            <ul class="submenu">
                                <li><a href="escritores/convocatorias.html">📢 Convocatorias</a></li>
                                <li><a href="escritores/lineamientos.html">📄 Lineamientos de Envío</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="autores.html">Autores</a></li>
                        <li><a href="nosotros.html">Nosotros</a></li>
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
