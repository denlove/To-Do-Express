import { DataTypes } from 'sequelize'
import sequelize from '../providers/Database'

const RandomWord = sequelize.define('RandomWord', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default RandomWord
