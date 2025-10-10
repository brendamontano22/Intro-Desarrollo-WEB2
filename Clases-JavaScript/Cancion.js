class Cancion{
    constructor(nombre, artista, year){
        this.nombre = nombre;
        this.artista = artista;
        this.year = year;
    }
    antiguedad(){
        const actual = new Date().getFullYear;
        return actual - this.year;
    }

    cambiarNombre(nuevo){
        this.nombre = nuevo;
        return this.nombre;
    }

    perteneceADecada() {
        const d = Math.floor(this.year/10)*10;
        return `${d}s`;
    }

}