const { Model, DataTypes } = require('sequelize');

class Reservation extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
            dateIn: DataTypes.STRING,
            dateOut: DataTypes.STRING,
        },
        {
            sequelize
        })
    }
}

module.exports = Reservation
