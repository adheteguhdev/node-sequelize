module.exports = app => {
    return {
        findAll: (params, result) => {
            return result([
                { title: "Buy some shoes" },
                { title: "Fix notebook" }
            ]);
        }
    };
};