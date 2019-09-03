import React, {useState, useEffect} from 'react';

const Home = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/champions')
            const body = await response.json();

            console.log(body["message"]);
            setData(body["message"]);
            console.log(data);
        }
        fetchData();
    });

    return (
         <>
            <h1>Test</h1>
            <p>{ data || "" }</p>
         </>
     );
}

export default Home;