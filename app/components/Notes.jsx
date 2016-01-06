import React from 'react';
import Note from './Note.jsx';

const { Component} = React;

export default class Notes extends Component { render() {
const notes = this.props.items;
return <ul className="notes">{notes.map(this.renderNote)}</ul>;
  }
  renderNote(note) {
return (
<li className="note" key={`note${note.id}`}>
        <Note task={note.task} />
      </li>
); }
}
