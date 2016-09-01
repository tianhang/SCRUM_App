/**
 * Created by tianhang on 1/9/2016.
 */
exports.addRoutes = function(app, config) {
    // This route deals enables HTML5Mode by forwarding missing files to the index.html
    app.all('/*', function(req, res) {
        // Just send the index.html for other files to support HTML5Mode
        res.sendFile('index.html', { root: config.server.distFolder });
    });
};
