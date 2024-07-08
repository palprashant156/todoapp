import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

function App() {
  return (
  <center class='todo-container'>
    <AppName />
    <AddTodo />
      <div class="row">
        <div class="col-4">
          Buy Milk
        </div>
        <div class="col-4">
          4/10/23
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button>

        </div>
      </div>

      <div class="row">
        <div class="col-4">
          Go to college
        </div>
        <div class="col-4">
          4/10/23
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-danger">Delete</button>

        </div>
      </div>
      </center>
  );
}

export default App
