const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('review', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: { // ID DEL USUARIO QUIEN RECIBE EL REVIEW // como que no haria falta, el order ya tiene un post que tiene un user_id que es este
      type: DataTypes.UUID,
      allowNull: false
    },
    order_id: { // tiene que venir del front
      type: DataTypes.UUID,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  })
}
