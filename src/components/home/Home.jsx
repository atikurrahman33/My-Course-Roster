/* eslint-disable react/jsx-key */
import { useEffect ,useState } from 'react';

import './Home.css'


  

const Home = () => {

    const [allcurse , setAllcurse] =useState([])

    useEffect(()=>{
        fetch('data.json')
      .then(response => response.json())
      .then(json => setAllcurse(json))
    },[])
    console.log(allcurse)
    
    return (     

        
        <div className='container'>
           <div className='home-container'>
            <div className='card-container'>
            {
            
            allcurse.map ((curse) =>(
                    <div key={curse.id} className='card'>
                <div className='card-img'>
                    <img className='photo' src={curse.image} alt="" />
                     </div>
                     <div>
                        <h2>{curse.curseName}</h2>
                        <p>{curse.details}</p>
                     </div>
                     <div className='info'>
                        <p>Price: {curse.price} </p>
                        <p>Credit: {curse.credit}</p>
                        </div>
                        <button className='card-btn'>Select</button>


            </div>

           )) }
            </div>
            <div className='card'>
                <h1> this is cart</h1>
            </div>
           </div>
            
        </div>
    );
};

export default Home;