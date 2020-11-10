const Sequelize = require("sequelize")
const db = require("../db")

const Products = db.define("products", {
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    label: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    brand_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    product_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    score: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    skin_concern: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ingredients: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image_url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    coiled: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    coily: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    combination: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    curly: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dry: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    normal: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    oily: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sensitive: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    straight: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tightly: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    wavy: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    and: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
})

module.exports = Products
