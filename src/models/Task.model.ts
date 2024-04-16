import { DataTypes } from 'sequelize'
import sequelize from '../providers/Database'

const Task = sequelize.define('Task', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.UUIDV4,
    },
    content: {
        allowNull: false,
        type: DataTypes.STRING,
    },

    isDone: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
    },
})

export default Task
