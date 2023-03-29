const Note = require('../../db/models/note');

module.exports = {
    saveNote(req, res) {


        const newNote = new Note({
            title: 'zrobic zakupy',
            body: 'mleko, jajka, woda'
        });
        newNote.save().then(() => {
            console.log('notatka zostala zapisana')
        });


        res.send('Strona główna działa!');
    }
}