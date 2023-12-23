//import { Routes, Route, Link } from 'react-router-dom';
import {Link } from 'react-router-dom';
import Head from '../components/Head'
//
function Home() {
    return (
    <div className="container mx-auto my-2 px-8 bg-white">
        <Head />
        <h1 className="text-4xl font-bold underline mt-4">
        Hello world!
        </h1>

    </div>

    )
    ;
}
export default Home;
/*
<Link to="/">Home</Link>
<Link to="/about">&nbsp; [about]</Link>
<Link to="/page1">&nbsp; [page1]</Link>
<Link to="/page2">&nbsp; [page2]</Link>
<hr />
*/