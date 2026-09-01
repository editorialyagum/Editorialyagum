// Motor Central de Navegación - Editorial Yagum
document.addEventListener("DOMContentLoaded", function() {
    const contenedor = document.getElementById("redes-autor");
    if (contenedor && typeof datosAutor !== 'undefined') {
        let botonesHTML = '';
        
        // El truco del CTO: Si tiene Facebook, agrega el botón. Si no, lo ignora.
        if (datosAutor.facebook !== "") {
            botonesHTML += `<a href="${datosAutor.facebook}" class="btn">Facebook</a>`;
        }
        if (datosAutor.instagram !== "") {
            botonesHTML += `<a href="${datosAutor.instagram}" class="btn">Instagram</a>`;
        }
        
        contenedor.innerHTML = botonesHTML;
    }
});
