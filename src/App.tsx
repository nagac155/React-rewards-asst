import React, { useState } from 'react';
import list from './data'
import RewardsReview from './Rewards-review'

function App() {

   let [data, setData] =  useState(list);

   const monthlyTransactions = data.map((e, index):(JSX.Element | undefined) => {
     if(!!e) return <RewardsReview key={index} list={e}/>
   })


  return (
    <>
      <h1>Rewards Summary</h1>
      {monthlyTransactions}
    </>
  );
}

export default App;
