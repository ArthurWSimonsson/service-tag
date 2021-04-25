const tagController = require('../controllers/tagController')

// Route for tag API.
const routes = async(app, options) => {
    app.post('/api/tag', async (request, reply) => {
        try {
            console.log('body is ', request.body)

            let tag = await tagController.addTag(request.body)

            reply.code(200).send({
                status: 200,
                msg: 'Tag query successful',
                tag: tag
            })
        }
        catch(err) {
            reply.code(400).send({
                status:400,
                msg: 'Tag query failed',
                err: err,
                message: err.message
            })
        }

    })
}

module.exports = routes