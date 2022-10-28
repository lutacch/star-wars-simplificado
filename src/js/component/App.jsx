import React, { useEffect, useState } from "react" ;
import NavBar from "/workspace/star-wars-simplificado/src/js/component/NavBar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import People from "/workspace/star-wars-simplificado/src/js/component/People.jsx";
import Planets from "/workspace/star-wars-simplificado/src/js/component/Planets.jsx";




const App = () => {

  const[people, setPeople] = useState([]);
  const[planets, setPlanets] = useState([]);
  const[loading, setLoading] = ([true]);

  useEffect(()=>{
    async function fetchPeople(){
      let result = await fetch("https://www.swapi.tech/api/people");
      let data = await result.json();
      setPeople(data.results);
        }
    
    async function fetchPlanets(){
      let result = await fetch("https://www.swapi.tech/api/planets")
      let data = await result.json();
      setPlanets(data.results);
    }

    fetchPeople();
    fetchPlanets();

  },[])

  return (
    <div>
      <Router>
      <NavBar/>
      <Planets planets ={planets}/>
      <People data={people}/>
      </Router>  
    </div>

  );
}


export default App;





/* 
    const [pokemon, setPokemon] = useState([]);
    useEffect(()=>{
      fetchApi().then((respuestaJson)=> {
        setPokemon(respuestaJson.map(p=> p.name))
      })  
    },[]) */

















