module.exports = function(sequelize, DataTypes) {
    var example = sequelize.define("example", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return example;
  };