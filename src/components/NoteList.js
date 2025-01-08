import React from 'react';
import { useSelector } from 'react-redux';
import NoteItem from '../features/notes/noteItem';

function NoteList() {
  const notes = useSelector((state) => state.notes);

  return (
    <div className="w-full max-w-md">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
