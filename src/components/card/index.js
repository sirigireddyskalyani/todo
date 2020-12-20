import React from "react";

class NotesList extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  render() {
    const { data } = this.props;
    console.log("-==> NotesList component ", data);
    return (
      <div className="offset-4 col-4 mt-4">
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between">
              <div>Notes</div>
              <button className="btn btn-link " onClick={this.props.onAddNote}>
                +
              </button>
            </div>
          </div>
          <div className="card-body">
            {data &&
              data.length > 0 &&
              data.map((item, index) => {
                return <div key={`noteEntity_${index+new Date().getTime()}`}>{item}</div>;
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default NotesList;
