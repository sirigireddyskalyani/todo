import { action, makeAutoObservable, observable } from "mobx";

class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }
  notes = [];
  asyncAddNote = action((payload) => {
    this.notes.push(payload);
    console.log("--== asyncAddNote ", this.notes);
  });
}

// const TodoStore = observable({
//   notes: [],
//   asyncAddNote: action((payload) => {
//     setTimeout(() => {
//       TodoStore.notes.push(payload);
//       console.log("--== asyncAddNote ", TodoStore.notes);
//     }, 500);
//   }),
// });

export default observable(new TodoStore());
