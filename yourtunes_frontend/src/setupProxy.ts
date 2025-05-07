import { createProxyMiddleware } from 'http-proxy-middleware';
import { Application } from 'express';

module.exports = function (app: Application) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080', // Spring 서버 주소
            changeOrigin: true,
        })
    );
};