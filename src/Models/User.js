/* const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true }
});
module.exports = mongoose.model("User", UserSchema); */

const { DataTypes } = require("sequelize");
const sequelize = require("../Config/database");
const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nom: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    age: { type: DataTypes.INTEGER, allowNull: false },
    //phone: { type: DataTypes.STRING, allowNull: true},
    //website: { type: DataTypes.STRING, allowNull: true}
});
module.exports = User;