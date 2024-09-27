import { Animal } from "./animal.js";

console.log("Se importa clase animal y se crean clases extendiendola");
export class Leon extends Animal {
    constructor(edad, comentarios, sonido, img) {
        super('Leon', edad, comentarios, sonido, img);
    }

    rugir() {
        super.reproducirSonido();
    }
}

export class Lobo extends Animal {
    constructor(edad, comentarios, sonido, img) {
        super('Lobo', edad, comentarios, sonido, img);
    }

    aullar() {
        super.reproducirSonido();
    }
}

export class Oso extends Animal {
    constructor(edad, comentarios, sonido, img) {
        super('Oso', edad, comentarios, sonido, img);
    }

    grunir() {
        super.reproducirSonido();
    }
}

export class Serpiente extends Animal {
    constructor(edad, comentarios, sonido, img) {
        super('Serpiente', edad, comentarios, sonido, img);
    }

    sisear() {
        super.reproducirSonido();
    }
}

export class Aguila extends Animal {
    constructor(edad, comentarios, sonido, img) {
        super('Aguila', edad, comentarios, sonido, img);
    }

    chillar() {
        super.reproducirSonido();
    }
}
