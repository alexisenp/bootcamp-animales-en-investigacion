console.log("Se crea clase Animal y se exporta.")
export class Animal {
    constructor(nombre, edad, comentarios, sonido, img) {
        this._nombre = nombre;
        this._edad = edad;
        this._comentarios = comentarios;
        this._sonido = sonido;
        this._img = img;
    }

    // Getters
    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._edad;
    }

    get img() {
        return this._img;
    }

    get comentarios() {
        return this._comentarios;
    }

    get sonido() {
        return this._sonido;
    }

    // Setters
    set comentarios(nuevoComentarios) {
        this._comentarios = nuevoComentarios;
    }

    reproducirSonido() {
        const player = document.getElementById('player');
        player.src = this.sonido;
        player.play();

    }
}