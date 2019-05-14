module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`Node Sequelize - Listening PORT ${app.get("port")}`);
    });
}