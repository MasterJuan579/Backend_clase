import { Model } from "sequelize";

interface AlumnoAtributos {
    matricula: string,
    nombreAlumno: string,
    carreraAlumno: string
}

module.exports = (sequelize: any, DataTypes: any) => {
    class AlumnoModel extends Model<AlumnoAtributos>
    implements AlumnoAtributos {
        matricula!: string;
        nombreAlumno!: string;
        carreraAlumno!: string;
        static associate(models: any) {
        }
    }
    AlumnoModel.init({
        matricula: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        nombreAlumno: {
            type: DataTypes.STRING,
            allowNull: false
        },
        carreraAlumno: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'Alumno'
    });
    return AlumnoModel;
}