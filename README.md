# plann.er 
#### API para planejador de viagens, desenvolvida na NLW Journey em julho de 2024.
---
##### Branches:
- main: *Desenvolvimento independente continuado*
- nlw-orig: *Projeto original desenvolvido durante a NLW (faltando algumas rotas e opções)*

O projeto foi desenvolvido em NodeJS com Typescript. Este projeto é uma API completa com rotas para criar e atualizar viagens, criar convidados e criar links. 

**Documentação da API** disponível em <https://nlw-journey.apidocumentation.com/reference>
*CHANGE: Inviting someone to the trip now requires the field "name" in addition to "email"* 

O frontEnd criado para esta API foi desenvolvido em React, utilizando Typescript, e está disponível em um repositório separado em <https://github.com/TadeuGT/Planner-FrontEnd>

---
##### Como rodar o projeto:
1. Instalar as depedências do package.json com `npm install`
2. Configurar as variáveis do ambiente criado um arquivo `.env` na raiz do projeto.
4. Executar as migrações do banco com `npx prisma migrate dev` e `npx prisma generate`
4. Rodar o projeto com `npm run dev`
5. Para visualizar o banco de dados em tempo real numa GUI, pode ser usado o comando `npx prisma studio` 


Conteúdo exemplo para o arquivo .env:
```js
DATABASE_URL="file:./dev.db"
API_BASE_URL="http://localhost:3333"
WEB_BASE_URL="http://localhost:3000"
PORT="3333"
```
Por padrão de segurança do node, a API se comunica com o frontend que estiver configurado como WEB_BASE_URL.
