import React, { useState } from 'react';
import './App.css';
import list from './data.js'
import RewardsReview from './Rewards-review'

function App() {

   let [data, setData] =  useState(list);

   const monthlyTransactions = data.map((e, index) => (
     <RewardsReview key={index} list={e}/>
   ))


  return (
    <>
      <h1>Rewards Points</h1>
      {monthlyTransactions}
    </>
  );
}

export default App;
