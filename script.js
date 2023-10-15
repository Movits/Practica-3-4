import { Perro } from "./Perro.js";
import { Persona } from "./Persona.js";

const personas = [new Persona("Roberto")];
const perros = [new Perro("Boris")];

class Interaccion {
    constructor() {
        personas.forEach(persona => {
            perros.forEach(perro => {
                persona.darComida(perro);
            });
        });
    }
}

new Interaccion();