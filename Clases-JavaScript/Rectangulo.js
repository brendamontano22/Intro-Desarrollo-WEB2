class Rectangulo{
    constructor(ancho, alto, color){
        this.ancho=Num(ancho);
        this.alto=Num(alto);
        this.color=color;
    }

    perimetro(){
        const p = 2 * (this.alto + this.ancho);
        return 'El perímetro es: ${p}';
    }

    area(){
        const a = this.alto * this.ancho;
        return 'El áres es: ${p}';
    }

    cambiarColor(nuevoColor){
        this.color = nuevoColor;
        return this.color;
    }

}