import List from "./Components/List";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 const name="ashref";
const age=42
const sayHello=()=>{
  alert('hello')
}
 
  const students = [
    { id: 0, name: "ashref", age: 28 },
    { id: 1, name: "asma", age: 25 },
    { id: 15, name: "ibrahim", age: 23 },
  ];

  return (
    <div className="App">
      <List  students={students}   name={name} /* age={age} sayHello={sayHello} *//>
    </div>
  );
}

export default App;
