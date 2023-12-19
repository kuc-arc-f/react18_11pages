//import { Routes, Route, Link } from 'react-router-dom';
import {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Head from '../../../components/Head'
import CrudIndex from '../CrudIndex';
import CrudShow from '../CrudShow';

let pageItem: any = {};
let itemId = 0;
//
function Home() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [updatetime, setUpdatetime] = useState<string>("");
    //
//    const id = searchParams.get('id') || "";
//console.log(id);
    //
    useEffect(() => {
        (async () => {
            const itemId = searchParams.get('id') || "";
console.log(itemId);
            getItem(Number(itemId));
        })()

    }, []);
    /**
     *
     * @param
     *
     * @return
     */
    const getItem = async function(id: number) {
        try{
            const item = await CrudShow.get(id);
            pageItem = item;
console.log(item);
            setUpdatetime(new Date().toString());
        } catch (e) {
            console.error(e);
        } 
    }
    /**
     *
     * @param
     *
     * @return
     */
    const createTodo = async function() {
        try{
            const result = await CrudIndex.addItem();
            if(result) {
                window.location.reload();
            }
        } catch (e) {
            console.error(e);
        } 
    }
    //
    return (
    <div>
        <Head />
        <h2>TestShow</h2>
        <h1>{pageItem.title}</h1>
        <hr className="my-1" />
        <div className="mb-2">
        </div>            

    </div>

    )
    ;
}

export default Home;