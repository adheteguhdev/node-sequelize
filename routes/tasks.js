module.exports = app => {
    const Tasks = app.db.models.Tasks;

    app.route('/tasks')
        .all((req, res, next) => {
            delete req.body.id
            next();
        })
        .get(async (req, res) => {
            try {
                let results = await Tasks.findAll({})
                res.json({ tasks: results });
            } catch (err) {
                res.status(500).json({ message: err.message })
            }
        })
        .post(async (req, res) => {
            try {
                const result = await Tasks.create(req.body);
                res.json(result)
            } catch (err) {
                res.status(500).json({ message: err.message })
            }
        })

    app.route('/tasks/:id')
        .all((req, res, next) => {
            delete req.body.id
            next();
        })
        .get(async (req, res) => {
            console.log("AAAAAAAAAAAA", req.params.id)
            let result = await Tasks.findOne({ where: { id: req.params.id } })

            if (!result) {
                res.status(404).json({ message: "Data Not Found" })
            }

            res.json(result)
        })
        .put(async (req, res) => {
            try {
                let result = await Tasks.findOne({ where: { id: req.params.id } })
                if (!result) {
                    return res.status(404).json({ message: "Data Not Found" })
                }
            } catch (err) {
                return res.status(500).json({ message: err.message })
            }

            try {
                let data = {
                    title: req.body.title,
                    done: req.body.done
                }

                await Tasks.update(data, { where: { id: req.params.id } })

                return res.json({ message: "Update Success" })
            } catch (err) {
                return res.status(500).json({ message: err.message })
            }
        })
};