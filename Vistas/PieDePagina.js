/*Etiqueta*/
class PieDePagina extends HTMLElement{
    constructor() {
        super();
        /*Atributos*/
        const identificador = this.getAttribute("identificador");
        /*---------*/
        const elementoHtml = document.createElement(identificador);
        elementoHtml.innerHTML = `
        <div class="text-center pb-3">
        <a href="https://www.facebook.com/profile.php?id=61556984625587&mibextid=ZbWKwL"><img
            src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/main/ICONS/icons8-facebook.png" /></a>
        <a href="https://www.instagram.com/cobweb_manufacturing/"><img
            src="https://raw.githubusercontent.com/JeanPCarrilloG/JeanPCarrilloG/main/ICONS/icons8-instagram.png" /></a>
        </div>
  
        <div class="container-fluid px-5 text-end">
        <h6 class="text-end letraF"><b>Elaborado por:</b></h6>
        <img src="/home/redes/Desarrollo/Cobweb/Cobweb.github.io/Imagenes/Cobweb-Development.png" class="img-fluid"  width="40rem" height="40rem">
        </div
        `;
        this.appendChild(elementoHtml);
    }
}
customElements.define('pie-de-pagina', PieDePagina);
