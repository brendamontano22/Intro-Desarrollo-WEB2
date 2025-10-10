class Estudiante{
    constructor(nombre, cu, prom=0){
        this.nombre=nombre;
        this.cu=cu;
        this.prom=prom;
    }
    actualizarProm(nProm){
        this.prom=Number(nProm);
        return this.prom;
    }

    redondearProm(){
        return Number(this.prom.toFixed(1));
    }

    aprobar(){
        if(this.prom>=6){
            return "Aprobó";
        }else{
            return "No aprobó";
        }
    }
}