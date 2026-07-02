# Ticket de Suporte
![Status](https://img.shields.io/badge/status-Desenvolvendo-orange)
![Rocketseat](https://img.shields.io/badge/Rocketseat-FullStack-8257E5)


Projeto desenvolvido durante a Trilha FullStack da Rocketseat com o objetivo de aprofundar os fundamentos do desenvolvimento backend utilizando **Node.js puro**, sem o uso de frameworks. Durante o desenvolvimento foram explorados conceitos como **criação de servidores HTTP, roteamento, middlewares, manipulação de arquivos, persistência de dados, processamento de requisições e construção de uma API REST**, simulando um sistema de gerenciamento de tickets de suporte.

## Tecnologias
<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/API_REST-02569B?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/HTTP-5C5C5C?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white"/>
</p>

## Principais aprendizados
- Criação de um servidor HTTP utilizando o módulo nativo `node:http`.
- Implementação de uma **API REST** sem utilização de frameworks.
- Estruturação de rotas para operações de criação, listagem, atualização e remoção de tickets.
- Desenvolvimento de **middlewares customizados** para tratamento de requisições.
- Manipulação e persistência de dados em arquivos JSON.
- Processamento de parâmetros de rota e query strings.
- Organização do código em camadas, separando rotas, controladores, middlewares, utilitários e banco de dados.
- Compreensão mais profunda do ciclo de vida de uma requisição HTTP.

## Rotas da API

A API disponibiliza os seguintes endpoints para gerenciamento de tickets de suporte.

| Método | Endpoint | Descrição |
| :----- | :------- | :-------- |
| `GET` | `/tickets` | Retorna todos os tickets cadastrados. |
| `POST` | `/tickets` | Cria um novo ticket. |
| `PUT` | `/tickets/:id` | Atualiza os dados de um ticket existente. |
| `PATCH` | `/tickets/:id/close` | Altera o status de um ticket para **fechado**. |
| `DELETE` | `/tickets/:id` | Remove um ticket pelo seu ID. |

## Estrutura da API

O projeto utiliza uma arquitetura simples baseada em rotas e controllers.

```
src/
├── controllers/      # Lógica das requisições
│   └── tickets/
├── database/         # Configuração e acesso ao banco
├── middlewares/      # Middlewares da aplicação
├── routes/           # Definição das rotas
├── utils/            # Funções utilitárias
└── server.js         # Inicialização do servidor
```

##  Como Executar o Projeto

1. Clone o repositório

```bash
git clone https://github.com/isaguili/ticket-suporte.git
```

2. Acesse a pasta do projeto

```bash
cd ticket-suporte
```

4. Inicie o servidor

```bash
npm run dev
```

Após iniciar, a API estará disponível em:

```text
http://localhost:3333
```




