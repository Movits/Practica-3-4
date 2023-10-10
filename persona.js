export class Persona {
    #nombre = "def nombre";

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }

    darComida(perro) {
        if (perro.getHambre()) {
            console.log("Aca esta la comida")
            perro.alimentarseCon();
        } else {
            console.log("Guardo la comida")
        }
    }
}