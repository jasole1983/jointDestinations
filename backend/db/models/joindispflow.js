'use strict';
module.exports = (sequelize, DataTypes) => {
  const JoinDispFlow = sequelize.define('JoinDispFlow', {
    dispensaryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    flowerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  JoinDispFlow.associate = function(models) {
  
  };
  return JoinDispFlow;
};