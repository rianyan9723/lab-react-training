import React from 'react'; 

function IdCard({firstName, lastName, gender, height, birth, picture}){

    return(
<> 
<div>
    <img src={picture} alt="img" />
</div>
    
    <div>
    <h3>First name: {firstName}</h3>
    <h3>Last name: {lastName}</h3>
    <h3>Gender: {gender}</h3>
    <h3>Height: {height}</h3>
    <h3>Birth: {birth}</h3>
    </div>

</>  
  )
    
};

export default IdCard; 