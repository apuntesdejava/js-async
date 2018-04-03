class ScriptLoader {
    constructor(scr) {
        this.script = scr;    // en este objeto guardo el parámetro, es decir, el nombre del archivo js
        this.scriptElement = document.createElement("script");  // creo un elemento <script/> en el documento
        this.head = document.querySelector('head');    // selecciono el elemento <head> del documento

    }
    load() {  //cuando se llame al método load()...
        return new Promise((resolve, reject) => {         //... ejecuto de manera reactiva lo siguiente:
            this.scriptElement.src = this.script;         // al elemento <script> del documento le pongo en el atributo src el nombre del js
            this.scriptElement.onload = e => resolve(e);  // si cargó sin problema el js, indicar que fue resuelto
            this.scriptElement.onerror = e => reject(e);  // si no cargó el js correctamente, indicar que se rechaza el procesamiento
            this.head.appendChild(this.scriptElement)     // agregar el <script/> a <head/>
        });
    }
}
const btn = document.getElementById('btn'); //busco un objeto con id 'btn' en el html
const loader = new ScriptLoader('test.js'); //instancio un objeto con parámetro el nombre del js a cargar
btn.onclick = x => loader           // cuando haga clic al boton...
    .load()                         // ... ejecutar el método load...
    .then(e => console.log(e))      // ... cuando termine, mostrar el estado del evento en la consola...
    .catch(e => console.error(e));  // ... si falla, que atrape la excepción y lo muestre en la consola