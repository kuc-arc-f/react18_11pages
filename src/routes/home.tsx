//import { Routes, Route, Link } from 'react-router-dom';
import {Link } from 'react-router-dom';
import Head from '../components/Head'
//
function Home() {
    return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">&nbsp; [about]</Link>
        <Link to="/page1">&nbsp; [page1]</Link>
        <Link to="/page2">&nbsp; [page2]</Link>
        <hr />
        <Head />
        <h2>Home</h2>

    </div>

    )
    ;
}

export default Home;