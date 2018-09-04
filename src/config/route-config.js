module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    app.use(staticRoutes);
    const aboutRoute = require("../routes/about");
    app.use(aboutRoute);
  }
}
