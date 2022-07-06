import React, { useState, useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Spaceships from "./components/Spacehips";

function App() {
  //create my state variables for the spaceships
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  //^used to keep track of the data that's been fetched
  
  useEffect(() => {
    async function fetchStarships () {
      let results = await fetch ('https://swapi.dev/api/starships/9/');
      let data = await results.json();
      setStarships(data.results);
    }
    fetchStarships();
  }, [])
  // console.log('starships', starships);
  // console.log('data', starships);
  
  return (
    <>
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path ='/'>
            <starships data={starships} />

          </Route>
        </Switch>
      </Container>
    </Router>

    <div className="App">
      <Navbar />
      <h1>STAR WARS API</h1>
      <p>SPACESHIPS</p>
    </div>
  </>
  )
}

export default App;
