const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {}

  Product.init(
    {
      product_name: {
        type: DataTypes.STRING,
        field: "product_name",
      },
      product_price: {
        type: DataTypes.STRING,
        field: "product_price",
      },
      product_desc: {
        type: DataTypes.STRING,
        field: "product_desc",
      },
      product_brand: {
        type: DataTypes.STRING,
        field: "product_brand",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "ProductV2",
      modelName: "Product",
      timestamps: true,
    }
  );
  return Product;
};
