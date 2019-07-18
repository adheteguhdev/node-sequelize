module.exports = app => {
    const Tasks = app.db.models.Tasks;

    app.get('/tasks', (req, res) => {
        Tasks.findAll({}).then(results => {
            res.json({ tasks: results });
        });
    });
};