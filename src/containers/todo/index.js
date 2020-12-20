import React from "react";
import { inject, observer } from "mobx-react";
import Navbar from "../../components/navbar";
import NotesList from "../../components/card";
import ManageNotes from "../manage";

class Todo extends React.Component {
  constructor() {
    super();
    this.handleAddNote = this.handleAddNote.bind(this);
  }
  handleAddNote() {
    console.log("--== handleAddNote ", this.props);
    const { history } = this.props;
    history.push("/addnotes");
  }
  render() {
    const { notes } = this.props;
    return (
      <React.Fragment>
        <Navbar />
        <NotesList onAddNote={this.handleAddNote} data={notes} />
      </React.Fragment>
    );
  }
}

export default inject((store) => {
  const { todoStore } = store;
  console.log("--== Inject Store ", store);
  return {
    notes: [...todoStore.notes],
  };
})(observer(Todo));
