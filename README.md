# 📦 API de Produtos — Documentação com OpenAPI e Swagger

API RESTful desenvolvida em **Node.js** e **Express** para o catálogo de produtos de uma loja de tecnologia. A aplicação manipula dados em memória e conta com documentação interativa completa gerada via **OpenAPI 3.0.3** com **Swagger UI**.

Projeto desenvolvido para a disciplina de **Desenvolvimento de Aplicações Corporativas** do curso de Análise e Desenvolvimento de Sistemas (IFRS Bento Gonçalves).

---

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)** (v22+)
- **[Express](https://expressjs.com/)** (v5.x)
- **[swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)** — Geração da especificação OpenAPI a partir de anotações JSDoc
- **[swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)** — Interface interativa Swagger UI integrada ao Express
- **[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)** — Execução de pedidos HTTP no VS Code

---

## 📂 Estrutura do Projeto

```text
api-produtos/
├── requests/
│   └── products.http         # Ficheiro com os testes e pedidos HTTP
├── src/
│   ├── config/
│   │   └── swagger.js        # Configuração do swagger-jsdoc (metadados OpenAPI)
│   ├── controllers/
│   │   └── products.controller.js  # Validações e respostas HTTP
│   ├── docs/
│   │   └── schemas.js        # Schemas reutilizáveis de dados (YAML/JSDoc)
│   ├── models/
│   │   └── product.model.js  # Modelo de dados da entidade Product
│   ├── routes/
│   │   └── products.routes.js # Associação das rotas aos controladores e documentação
│   ├── services/
│   │   └── products.service.js # Manipulação dos dados em memória
│   └── app.js                # Configuração central do Express e middlewares
├── .gitignore
├── package.json
├── RESULTADOS.md             # Tabela com os resultados dos testes
└── server.js                 # Ponto de entrada e inicialização do servidor HTTP
