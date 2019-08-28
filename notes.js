const fs = require('fs');
const chalk = require('chalk');

// Adiciona nova nota
function addNote(title, body) {
   const notas = loadNotes();

   const notaDuplicada = notas.find((nota) => nota.title === title)
   if(!notaDuplicada) {
      notas.push({
         title: title,
         body: body
      });
   
      salvarNotas(notas);
      console.log(chalk.green.inverse('Nova nota adicionada.'))
   } else console.log(chalk.red.inverse('Nota não adicionada porque esse titulo já está sendo usado em outra nota.'));
}

// Remover uma nota
function removeNote(title) {
   const notas = loadNotes();
   const notasParaManter = notas.filter((nota) => nota.title !== title);   

   if(notas.length > notasParaManter.length) {
      console.log(chalk.green.inverse('Nota removida.'));
      salvarNotas(notasParaManter);
   } else console.log(chalk.red.inverse('Titulo inexistente. Nenhuma nota removida.'))
}

// Listar Notas
function listNotes() {
   const notas = loadNotes();
   
   console.log(chalk.inverse('Suas notas são:'))
   notas.forEach((nota) => {
      console.log(nota.title);
   });
}

// Ler Nota
function readNote(title) {
   const notas = loadNotes();
   const notaSelecionada = notas.find((nota) => nota.title === title);

   if(notaSelecionada) {
      console.log(chalk.green.inverse('Nota selecionada\n'));
      console.log(chalk.inverse(notaSelecionada.title));
      console.log(notaSelecionada.body);
   } else console.log(chalk.red.inverse('Nota inexistente.'))
}

// Util
function loadNotes() {
   try {
      const notasExistentes = fs.readFileSync('notas.json').toString();
      return JSON.parse(notasExistentes);
   } catch (e) {
      console.log('\nO arquivo notas.json não existe. Criando-o.\n');
      return [];
   }
}

function salvarNotas(notas) {
   const notaJSON = JSON.stringify(notas);
   fs.writeFileSync('notas.json', notaJSON);
}

module.exports = {
   addNote: addNote,
   removeNote: removeNote,
   listNotes: listNotes,
   readNote: readNote
}