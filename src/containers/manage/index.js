import React from "react";
import { inject, observer } from "mobx-react";

class ManageNotes extends React.Component {
  constructor() {
    super();
    this.state = {
      newNoteText: "",
    };
  }

  onAddNewNote = () => {
    console.log("--== onAddNewNote ", this.props);
    const { todoStore, history } = this.props;
    todoStore.asyncAddNote(this.state.newNoteText);
    history.push("/");
  };

  render() {
    return (
      <React.Fragment>
        <div className="offset-2 col-8 mt-4">
          <div className="card">
            <div className="card-header bg-secondary text-light">
              <div>Add Notes</div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div style={{ flex: "1" }}>
                  <input
                    type="text"
                    placeholder="Enter Notes"
                    className="form-control"
                    value={this.state.newNoteText}
                    onChange={(event) =>
                      this.setState({ newNoteText: event.target.value })
                    }
                  ></input>
                </div>
                <div className="d-flex ml-2">
                  <button
                    className="btn btn-primary"
                    onClick={this.onAddNewNote}
                  >
                    AddNotes
                  </button>
                  <a href="/" className="btn btn-secondary ml-2">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default inject("todoStore")(observer(ManageNotes));
