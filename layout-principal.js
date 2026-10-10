// Motor de Diseño Principal - Editorial Yagum (Versión Interactiva para Móviles)
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
                        <li><a href="index.html">Inicio</a></li>
                        
                        <!-- MENÚ DESPLEGABLE: LECTORES -->
                        <li class="menu-desplegable">
                            <a href="#" class="trigger-desplegable">Lectores ▾</a>
                            <ul class="submenu">
                                <li><a href="lectores/literatos.html">📚 Catálogo de libros Literario</a></li>
                                <li><a href="catalogo/libros_academicos.html">🎓 Catálogo de libros Académico</a></li>
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
                        
                        <li><a href="5autores.html">Autores</a></li>
                        <li><a href="4contacto.html">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        `;

        // --- PROGRAMACIÓN PARA PANTALLAS TÁCTILES (MÓVILES) ---
        // Buscamos todos los menús que tienen submenús adentro
        const elementosDesplegables = document.querySelectorAll(".menu-desplegable");

        elementosDesplegables.forEach(function(item) {
            const botonDisparador = item.querySelector(".trigger-desplegable");

            botonDisparador.addEventListener("click", function(evento) {
                // Evitamos que la pantalla salte o recargue al presionar el '#'
                evento.preventDefault(); 
                
                // Buscamos el submenú específico de este botón
                const submenuInterno = item.querySelector(".submenu");

                // Verificamos si este submenú ya está abierto
                const estaAbierto = submenuInterno.style.display === "flex";

                // Primero cerramos CUALQUIER otro submenú que esté abierto para que no se empalmen
                document.querySelectorAll(".submenu").forEach(function(sub) {
                    sub.style.display = "none";
                });

                // Si estaba cerrado, lo abrimos. Si estaba abierto, se queda cerrado.
                if (!estaAbierto) {
                    submenuInterno.style.display = "flex";
                }
            });
        });

        // Cerrar los menús automáticamente si el usuario hace clic en cualquier otra parte de la pantalla
        document.addEventListener("click", function(evento) {
            if (!evento.target.closest(".menu-desplegable")) {
                document.querySelectorAll(".submenu").forEach(function(sub) {
                    sub.style.display = "none";
                });
            }
        });
    }
});
