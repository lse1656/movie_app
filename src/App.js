import React from 'react';
import PropType from 'prop-types';


const foodILike = [
  {
    id:1,
    name:"Kimchi",
    rating: 3
  },
  {
    id:2,
    name:"Bibimbap",
    rating: 5
  },
  {
    id:3,
    name:"Samgyeopsal",
    rating: 4.8
  }
]

function Food({ name, rating }){
  return (
  <>
    <h2>I like {name}</h2>
    <p>{rating} / 5.0</p>
  </>
  )
}

Food.PropType = {
  ba
}

function App() {
  return (
    <div>
      { foodILike.map(dish => {
        return <Food key={dish.id} name={dish.name} rating={dish.rating}/>
      }) }
    </div>
  );
}


export default App;
