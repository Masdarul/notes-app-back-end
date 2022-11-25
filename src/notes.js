const { addNoteHandler } = require('./handler');
const notes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
];

module.exports = notes;