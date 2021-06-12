import { useEffect, useRef, useState } from 'react';
import { API } from '../constant';
import Edit from './components/edit';
import List from './components/list';
import './index.css';


async function getItem(setItem) {
    const res = await fetch(API.TOKEN + API.GET_IETMS);
    const  {data}  = await res.json();
    console.log(data);
    setItem(data);
    // 資料給items, items就會被list給分下去
}

async function postItem(data) {
    await fetch(API.TOKEN + API.GET_IETMS, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({data})
    })
}

const Home = () => {
    const [items, setItem] = useState([]);
    const submittingItem = useRef(false);

    useEffect(() => {
        getItem(setItem)
    }, []);


    // 資料改變就post
    useEffect(() => {
        console.log(items);
        if (!submittingItem.current) { return; }
        postItem(items).then(() => submittingItem.current = false)
    }, [items])


    return <div className="home">
        <Edit add={setItem} submittingItem={submittingItem} />
        <List listItem={items} deleteData={setItem} submittingItem={submittingItem} />
    </div>
}



export default Home