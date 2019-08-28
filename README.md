# Notes
Aplicação feita com node.js para simular um sistema de bloco de notas (funciona pelo terminal)

## Para testar a aplicação é necessário ter o Node.js instalado em seu computador. ##

# Para usar, basta o arquivo 'app.js' pelo seu terminal. Os comandos para uso são:
  add --title="Titulo da sua Nota" --body="Corpo da sua nota" -> Adiciona uma nota com o titulo e o corpo que você escrever (os atributos title e body são obrigatórios, caso não digite a aplicação alertará).
  
  remove --title="Nota existente a ser removida" -> Remove uma nota com o titulo da nota que deseja remover (o atributo title é obrigatório, caso não digite o sistema alertará).
  
  list -> Lista todas os titulos das notas existentes (sem atributos obrigatórios)
  
  read --title="Titulo da nota a ser lida" -> Seleciona, pelo titulo, uma nota para ser lida (o atributo title é obrigatório, caso não digite o sistema alertará).

* O arquivo 'notas.json' será criado automaticamente pela aplicação (caso não exista).

* Caso você não queira baixar a pasta 'node_modules', basta ter o Node.js instalado em sua máquina, abrir a pasta pelo terminal e usar o comando 'npm install'. Funcionará pois todas as dependências do projeto já estão configuradas no arquivo 'package.js'.

* Projeto feito apenas para testar conhecimentos e aprendar uma nova tecnologia. Posteriormente farei uma versão web e disponibilizarei o código para a comunidade.
