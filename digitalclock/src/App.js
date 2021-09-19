import React, { useState } from 'react';

const App =() => {
  let time = new Date().toLocaleTimeString();
  const [ctime,setCtime]= useState(time);
  const UpdateTime = () => { 
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
   
  setInterval(UpdateTime,1000)

return(
  <>
<div>
  <h1>Digital Clock</h1>
<h1>{ctime}</h1>

<h5>By Sahil Raj</h5>

</div>

  </>
);
};

export default App;