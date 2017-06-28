'use strict';
module.exports = function(sequelize, DataTypes) {
  var PaymentType = sequelize.define('PaymentType', {
    PaymentType: DataTypes.STRING
  });
  return PaymentType;
};