const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {}

  Vendor.init(
    {
      vendor_name: {
        type: DataTypes.STRING,
        field: "vendor_name",
      },
      vendor_address: {
        type: DataTypes.STRING,
        field: "vendor_address",
      },
      vendor_phone_number: {
        type: DataTypes.STRING,
        field: "vendor_phone_number",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "VendorsOrganizations",
      modelName: "Vendor",
      timestamps: true,
    }
  );
  return Vendor;
};
