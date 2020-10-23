module.exports = (app) => {
    app.use((req, res, next) => {
        req.header('Access-Control-Allow-Origin', '*')
    })
}
