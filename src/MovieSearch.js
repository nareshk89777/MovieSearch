import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { alignPropType } from 'react-bootstrap/esm/types';
const MovieSearch = () => {
  const [input, setInput] = useState("");
  const [info, setInfo] = useState([]);
  const stylingObj = {
    "textAlign": "center",
    "marginLeft": "85px"
  }

  const changeHandler = (e) => {
    setInput(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://www.omdbapi.com/?s=${input}&apikey=263d22d8`).then(response => response.json()).then(data => setInfo(data.Search)).catch(err => {
        console.error(err);
      });
  }
  return <div style={stylingObj}>
    <h1>Enter Your Favourite Movie</h1><br />
    <form onSubmit={submitHandler}>
      <input type="text" onChange={changeHandler} /><br /><br />
      <input className="btn btn-primary" type="submit" value="Search" />
    </form><br/>
    <div className='row' style={stylingObj}>
      { info.map(it =>
      //   <Card style={{ width: '18rem' }} key={it.id}>
      //   <Card.Img variant="top" src={it.avatar} />
      //   <Card.Body>
      //     <Card.Title>{it.id}</Card.Title>
      //     <Card.Text>
      //       {it.first_name}-{it.last_name}  {it.email}
      //     </Card.Text>
      //     <Button variant="primary">Go somewhere</Button>
      //   </Card.Body>
      // </Card>
       <div className='col-md-4'key={it.imdbID}>
            <div className="card" style={{ "width": "18rem" }} >
              <img src={it.Poster} className="card-img-top" alt={it.Title} />
              <div className="card-body">
                <h5 className="card-title">{it.Title}</h5>
                <h3 className="card-text">{it.Year}</h3>
                <a href={it.Poster} className="btn btn-primary" download={it.Poster}>Download</a>
              </div>
      </div><hr/>
      </div>
    )} 
        
      
    </div>

  </div>;
};

export default MovieSearch;
