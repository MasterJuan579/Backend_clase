import { ModelOptions, prop, getModelForClass, modelOptions } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions:{
        collection: 'clientes',
        timestamps: false

    }
})

export class Client{
    @prop({required:true, trim:true})
    public nombre!:string;
    @prop({required:true, trim:true, unique:true})
    public email!:string;
}

export const ClienteModel = getModelForClass(Client);