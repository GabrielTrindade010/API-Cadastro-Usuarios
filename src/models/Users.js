const Sequelize = require("sequelize");
const db = require("../config/database");

const Users = db.define(
    'users', // table name
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        date_of_birth: {
            type: Sequelize.DATE,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: true
        }
    });

// syncing table
Users.sync({ alter: true });

// export
module.exports = Users;