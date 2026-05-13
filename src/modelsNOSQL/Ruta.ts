import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions:{
        collection:'rutas',
        timestamps:false
    }
})

export class Ruta{
    @prop({required:true, trim:true})
    public origen!:string;
    @prop({required:true, trim:true})
    public destino!:string;
    @prop({required:true})
    public distancia_estimada!:number;
}

export const RutaModel = getModelForClass(Ruta);
