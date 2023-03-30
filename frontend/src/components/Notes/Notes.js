import React from 'react';
import './Notes.css';
import Note from './Note/Note';

class Notes extends React.Component {
    constructor(props) {
        super(props);
        ///
        this.notes = [
            {
                id: '2323',
                title: 'wykapac psa',
                body: 'pamietaj aby wykapac psa suszarka'
            },
            {
                id: '4234',
                title: 'zrobic zakupy',
                body: 'kupic, mleko,maslo',
            }
        ];
    }
    render() {
        return (
            <div>
                <p>Moje notatki: </p>
                {this.notes.map(notes => (
                    <Note
                        title={notes.title}
                        body={notes.body}
                        id={notes.id} />
                ))}
            </div>
        );
    }
}

export default Notes;