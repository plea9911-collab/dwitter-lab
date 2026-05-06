import React, {useState, useEffect} from 'react';

export default function CompGet() {
    const [list, setList] = useState([]);
    useEffect(()=>{ //훅은 async를 붙일 수 없음 그래서 함수를 따로 만들어주어야함
        const fetData = async() => {
            const url = "http://localhost:9000/api/get"
            const response = await fetch(url, {method: "GET"});
            const jsonData = await response.json();
            setList(jsonData.fruits);
        }
        fetchData();
    }, []);


    return (
        <div style={{width:"1000px", margin:"auto"}}>
            <h1>GET :: Fruits List</h1>
            <table border="1" style={{width: "60%"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Emoji</th>
                    </tr>
                </thead>
                <tbody>
                    {list?.map((fruit, idx) => 
                        <tr key={idx} style={{textAlign: "center"}}>
                            <td>{fruit.name}</td>
                            <td>{fruit.color}</td>
                            <td>{fruit.emoji}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}


