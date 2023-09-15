import { useEffect } from 'react';

import './Home.css'

const Home = () => {

    useEffect(()=>{
        fetch('data.json')
      .then(response => response.json())
      .then(json => console.log(json))
    },[])
    return (

        
        <div className='container'>
           <div className='card-container'>
            <div className='card'>
                <div className='card-img'>
                    <img className='photo' src="https://i.ibb.co/7JNQVt8/1.jpg" alt="" />
                     </div>
                     <div>
                        <h2>Introduction to Programming</h2>
                        <p>A beg guide to programming concepts.</p>
                     </div>
                     <div className='info'>
                        <p>price: 59.99</p>
                        <p>credit: 4</p>
                        </div>
                        <button className='card-btn'>Select</button>

            </div>
           </div>
            
        </div>
    );
};

export default Home;