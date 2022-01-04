const fastify = require('fastify')({
    logger: true
});
require('./database/mongoose/index');
const postRoutes = require("./routes/post.router");

const PORT = process.env.PORT || 3000;

postRoutes.forEach((route) => {
    fastify.route(route);
});


const start = async () => {
    try {
        await fastify.listen(PORT);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();