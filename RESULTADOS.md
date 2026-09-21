# Registo de Testes da API (Secção 4.5)

| Cenário | Status Esperado | Corpo Esperado | Status Obtido | Resultado |
| :--- | :---: | :--- | :---: | :---: |
| Listar os produtos | 200 | Array com lista de produtos | 200 OK | Conforme |
| Consultar o produto 1 | 200 | Objeto do produto 1 | 200 OK | Conforme |
| Consultar o produto 999 | 404 | `{"message": "Produto não encontrado."}` | 404 Not Found | Conforme |
| Consultar identificador inválido | 400 | `{"message": "O identificador deve ser um inteiro positivo."}` | 400 Bad Request | Conforme |
| Registar produto válido | 201 | Objeto criado com ID e cabeçalho Location | 201 Created | Conforme |
| Registar com preço negativo | 400 | `{"message": "O preço deve ser um número maior que zero."}` | 400 Bad Request | Conforme |
| Registar com stock fracionário | 400 | `{"message": "O estoque deve ser um inteiro não negativo."}` | 400 Bad Request | Conforme |
| Eliminar produto existente | 204 | Sem corpo | 204 No Content | Conforme |
| Consultar produto eliminado | 404 | `{"message": "Produto não encontrado."}` | 404 Not Found | Conforme |