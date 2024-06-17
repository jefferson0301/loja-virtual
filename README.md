# loja-virtual
Essa primeira versão do projeto temos a construção de uma API para uma loja virtual. Nesse projeto formam utilizados o banco de dados Mysql. A api foi desenvolvida em Java Script.

# Sobre o projeto
Foram desenvolvidas 6 tabelas para realizar o gerenciamento dessa loja virtual. Tabelas: cliente, categoria, fornecedor, pedido, produtos, item_pedido. Em cada tabela foram implementadas as funções de listar, adicionar, editar e remover. 

# Tabelas
# cliente
# listar clientes
- http://localhost:8804/cliente
# adicionar clientes
- http://localhost:8804/cliente
  coloque no body:
  {
        "endereco": "rua xxxxx , yyy",
        "cidade": "Fortaleza",
        "cep": "00000-000",
        "pais": "Brasil",
        "telefone": "(85)99999999",
        "uf": "Ceará",
        "email": "emailteste@gmail.com"
    }
# remover clientes
- http://localhost:8804/cliente/1
- onde tem o numeral 1 coloque o codigo_cliente que deseja remover
# editar clientes 
- http://localhost:8804/cliente/1
- onde tem o numeral 1 coloque o codigo_cliente que deseja editar
- coloque no body os dados que você deseja atualizar:
  {
        "endereco": "rua  xxxxx , yyy",
        "cidade": "Fortaleza",
        "cep": "00000-000",
        "pais": "Brasil",
        "telefone": "(85)99999999",
        "uf": "Ceará",
        "email": "emailteste@gmail.com"
    }
