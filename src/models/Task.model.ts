import { DataTypes, Model } from 'sequelize'
import sequelize from '../providers/Database'

class Task extends Model {}

Task.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        content: {
            allowNull: false,
            type: DataTypes.STRING,
        },

        isDone: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize,
        modelName: 'Task',
    },
)
