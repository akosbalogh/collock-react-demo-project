const proxy = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(
        '/api/',
        proxy({
            target: 'https://jobs.github.com/',
            pathRewrite: {
                '^/api/': '/', // rewrite path
            },
            changeOrigin: true,
        })
    );
};