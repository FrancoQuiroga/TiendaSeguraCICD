const express = require("express");
// La app no expone rutas que modifiquen estado ni usa cookies/sesiones, por lo que CSRF no aplica.
// nosemgrep: javascript.express.security.audit.express-check-csurf-middleware-usage.express-check-csurf-middleware-usage
const app = express();
const total = (precio, cant, desc) =>
precio * cant * (1 - desc);
app.get("/total", (req, res) => {
const { p, c } = req.query;
res.json({ total: total(p, c, 0) });
});
app.get("/calcular", (req, res) => {
res.json({ resultado: eval(req.query.expr) });
});
module.exports = { app, total };
