// import React, {useState, createContext} from 'react';
// // import logo from './logo.svg';
// // import './App.css';
// import FunctionContextComponent from './FunctionContextComponent';
// import ClassContextComponent from './ClassContextComponent';
// export const ThemeContext = createContext();

// function App() {
//   const [darkTheme, setDarkTheme] = useState(true);

//   const toggleTheme = () => {
//     setDarkTheme(prevDarkTheme => !prevDarkTheme);
//   }

//   const [num, setNum] = useState(0);

//   return (
//     <>
//      <ThemeContext.Provider value={darkTheme}>
//        <button onClick={toggleTheme}>Toggle Theme</button>
//        <FunctionContextComponent />
//        <form>
//          <input onChange={() => setNum(value)}/>

//        </form>
//        <Button onClick={() => formVisible == "none" ? setFormVisible("flex") : setFormVisible("none")}>Create Counter</Button>
//     <Form style={dis}>
//       <Form.Group controlId="exampleForm.ControlSelect1">
//         <Form.Label>Example select</Form.Label>
//         <Form.Control as="select">
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//           <option>4</option>
//           <option>5</option>
//         </Form.Control>
//     </Form.Group>
//       <label>inpt</label>
//       <input type="text" />
//       <Button type="submit">Create</Button>
//     </Form>
//        <ClassContextComponent />
//        </ThemeContext.Provider>
//     </>
//   );
// }

// export default App;
