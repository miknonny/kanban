import React from 'react';

const { Component } = React;

export default class Note extends Component {
  constructor (props) {
    super(props);

    this.state = {
      editing: false
    };

    this.finishEdit = this.finishEdit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
    this.edit = this.edit.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.renderTask = this.renderTask.bind(this);
  }

  checkEnter (e) {
    e.key === 'Enter' ? this.finisEdit(e) : null
  }
  edit () {
    this.setState({
      editing: true
    })
  }
  finishEdit (e) {
    this.props.onEdit(e.target.value);

    this.setState({
      editing: false
    })
  }
  renderTask () {
    return <div onClick={this.edit}>{this.props.task}</div>;
  }
  renderEdit () {
    return <input type="text"
      autoFocus={true}
      defaultValue={this.props.task}
      onBlur={this.finishEdit}
      onkeyPress={this.checkEnter}/>
  }

  render () {
    const editing = this.state.editing
    return (
      <div>
        {editing ? this.renderEdit() : this.renderTask()}
      </div>
    )
  }
}
