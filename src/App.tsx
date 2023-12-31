//import { useState } from 'react'
//import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Test from './routes/test/App.tsx';
import TestShow from './routes/test/show/App.tsx';
import TestEdit from './routes/test/edit/App.tsx';
//
function App() {
//  const [count, setCount] = useState(0)
  //
  return (
    <div className="App">
      {/* <h1>Hello React Router v6</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test/show" element={<TestShow />} />
        <Route path="/test/edit" element={<TestEdit />} />
      </Routes>
    </div>
  )
}

export default App
/*
<Route path="/book" element={<BookShow />} />
*/
