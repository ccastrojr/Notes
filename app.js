const yargs = require('yargs');
const notes = require('./notes.js');

// Criando os comando add/remove/read/list
yargs.command({
   command: 'add',
   describe: 'Adiciona uma nova nota',
   builder: {
      title: {
         describe: 'Titulo da nota',
         demandOption: true,
         type: 'string'
      },
      body: {
         describe: 'Corpo da nota',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      notes.addNote(argv.title, argv.body);
   }
});

yargs.command({
   command: 'remove',
   describe: 'Remove uma nota existente',
   builder: {
      title: {
         describe: 'Titulo da nota a ser removida',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      notes.removeNote(argv.title);
   }
});

yargs.command({
   command: 'read',
   describe: 'Seleciona uma nota para ser lida',
   builder: {
      title: {
         describe: 'Titulo da nota que será aberta para ser lida',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      notes.readNote(argv.title);
   }
});

yargs.command({
   command: 'list',
   describe: 'Lista todas as notas cadastradas',
   handler() {
      notes.listNotes();
   }
});

yargs.parse();