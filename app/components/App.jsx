import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

const { Component } = React;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    }
    this.addNote = this.addNote.bind(this);
  }

  addNote () {
    this.setState({
      notes: [...this.state.notes, {id: uuid.v4(), task: 'new task'}]
    })
  }

  render () {
    const { notes } = this.state;
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={notes} />
      </div>
    )
  }
}
