import {React,useEffect,useState} from 'react';
const Todos = () => {
    const [info, setInfo] = useState([]);
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const changeHandler = (e)=>{
      setInput(e.target.value);
    }
    const search = () =>{
        if(input !== ""){
          const filteredData =  data.filter((ele)=>{
               return input.startsWith(ele.title);
           })

           data.push(filteredData);
           setData(filteredData); 
        }
    }
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(json => setData(json))
    },[])
  return <div>
      <div style={{ "textAlign": "center","backgroundColor":"black","color":"white" }}>
      <h1>Enter Book Name</h1>
        <input type="text" value={input} onChange={changeHandler}/><br /><br />
        <input className='btn btn-success' type="submit" value="Search" onClick={search}/> 
    </div>
      <ul>
      {data.map(ele => <h3 key={ele.id}><li >{ele.title}</li></h3>)}
      </ul>
  </div>;
};
export default Todos
