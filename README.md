# 🚀 CRUD de Usuários - API REST com Node.js

API RESTful para gerenciamento de usuários (**Create, Read, Update e Delete**) desenvolvida com **Node.js**, **Express** e **Sequelize (ORM)** para banco de dados relacional.

📌 **Documentação completa no Postman:**  

https://documenter.getpostman.com/view/37150133/2sBXcHgy4n

📌 **Link da API:**

https://api-cadastro-usuarios-swii.onrender.com/

---

## 📌 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Sequelize (ORM)**
- **Banco de Dados SQL**
- **Postman**

---

## 📂 Estrutura do Projeto

```
├── controllers/
│   └── user_controller.js
├── models/
│   └── Users.js
├── routes/
│   └── user_routes.js
├── app.js / server.js
└── package.json
```

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Configurar o banco de dados

Configure a conexão com o banco de dados conforme seu ambiente  
(ex: arquivo de configuração do Sequelize).

### 4️⃣ Iniciar o servidor

```bash
npm start
```

✅ Servidor rodando em:

```
http://localhost:3001
```

---

## 📌 Base URL

```
https://api-cadastro-usuarios-swii.onrender.com/
```

---

# 📌 Endpoints

---

## 🟢 CREATE - Criar Usuário

### `POST /users`

Cria um novo usuário.

### 📥 Body (JSON)

```json
{
  "name": "João Silva",
  "date_of_birth": "1995-05-10",
  "email": "joao@example.com"
}
```

### ✅ Respostas

- **201 Created** – Usuário criado com sucesso  
- **400 Bad Request** – Campos obrigatórios não informados  
- **409 Conflict** – Email já cadastrado  
- **500 Internal Server Error**

---

## 🔵 READ - Buscar Usuário por ID

### `GET /users/:id`

### 📌 Exemplo

```
GET https://api-cadastro-usuarios-swii.onrender.com/api/users/1
```

### ✅ Respostas

- **200 OK** – Retorna o usuário  
- **400 Bad Request** – ID não informado  
- **404 Not Found** – Usuário não encontrado  
- **500 Internal Server Error**

---

## 🟡 UPDATE - Atualizar Usuário

### `PUT /users/:id`

### 📌 Exemplo

```
PUT https://api-cadastro-usuarios-swii.onrender.com/api/users/1
```

### 📥 Body (JSON)

```json
{
  "name": "João Silva Atualizado",
  "email": "joao.atualizado@example.com"
}
```

### ✅ Respostas

- **200 OK** – Usuário atualizado com sucesso  
- **400 Bad Request** – ID não informado  
- **404 Not Found** – Usuário não encontrado  
- **409 Conflict** – Email já cadastrado  
- **500 Internal Server Error**

---

## 🔴 DELETE - Remover Usuário

### `DELETE /users/:id`

### 📌 Exemplo

```
DELETE https://api-cadastro-usuarios-swii.onrender.com/api/users/1
```

### ✅ Respostas

- **200 OK** – Usuário deletado com sucesso  
- **400 Bad Request** – ID não informado  
- **404 Not Found** – Usuário não encontrado  
- **500 Internal Server Error**

---

# 📦 Estrutura do Usuário

| Campo         | Tipo   | Obrigatório |
|---------------|--------|-------------|
|     name      | String | ✅ Sim      |
| date_of_birth | Date   | ✅ Sim      |
|     email     | String | ✅ Sim      |

---

# 🔐 Validações Implementadas

- ✅ Validação de campos obrigatórios no cadastro  
- ✅ Verificação de email único  
- ✅ Verificação de existência do usuário antes de atualizar ou deletar  
- ✅ Tratamento de erros com status HTTP apropriados  

---

# 📬 Testando com Postman

1. Abra o **Postman**
2. Acesse a documentação pelo link:  
   https://documenter.getpostman.com/view/37150133/2sBXcHgy4n
3. Execute as requisições disponíveis

---

## 👨‍💻 Autor

_Gabriel Trindade_
