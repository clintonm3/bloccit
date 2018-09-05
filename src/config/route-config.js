module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const topicRoutes = require("../routes/topics");
    const aboutRoute = require("../routes/about");

    app.use(staticRoutes);
    app.use(topicRoutes);
    app.use(aboutRoute);
  }
}
