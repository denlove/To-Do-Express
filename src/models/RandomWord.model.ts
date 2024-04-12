import { DataTypes, Model } from 'sequelize'
import sequelize from '../providers/Database'

class RandomWord extends Model {}

RandomWord.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'RandomWord',
    },
)
