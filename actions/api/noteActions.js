const Note = require('../../db/models/note');

class noteActions {
    saveNote(req, res) {
        //const newNote = new Note({
        //    title: 'zrobic zakupy',
        //    body: 'mleko, jajka, woda'
        //});
        //newNote.save().then(() => {
        //console.log('notatka zostala zapisana')
        //});
        const title = req.body.title;
        const body = req.body.body;

        res.send('Notatka utworzona. Tytuł: ' + title + 'tresc: ' + body);
    }

    getAllNotes(req, res) {
        //Pobieranie wszystkich notatek
        res.send('API działa!');
    }

    getNote(req, res) {
        //Pobieranie notatki
        res.send('Info o notatce');
    }
    updateNote(req, res) {
        //aktualizowanie
        res.send('Notatka zaktualizowana');
    }
    deleteNote(req, res) {
        const id = req.params.id;
        //Usowanie notatki
        res.send('Notatka usunienta. ID:' + id);
    }

}

module.exports = new noteActions();