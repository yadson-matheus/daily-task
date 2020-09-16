module.exports = {
    up: async (queryInterface, DataTypes) => {
        return queryInterface.createTable('User', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            login: {
                allowNull: false,
                unique: true,
                type: DataTypes.STRING,
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        });
    },

    down: async (queryInterface, DataTypes) => {
        return queryInterface.dropTable('User');
    }
};
