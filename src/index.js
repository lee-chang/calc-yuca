const app = require("./app")

const port = process.env.PORT || 9002

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})