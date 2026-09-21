const express = require("express");
const swaggerUi = require("swagger-ui-express");
const specification = require("./config/swagger");
const productsRoutes = require("./routes/products.routes");

const app = express();

app.use(express.json());

// Endpoints da documentação
app.get("/openapi.json", (req, res) => {
  res.json(specification);
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specification)
);

// Endpoints da aplicação
app.use("/api/products", productsRoutes);

// Middleware 404 (deve ficar após todas as rotas)
app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint não encontrado."
  });
});

module.exports = app;