/* eslint-disable react/jsx-key */
import { useEffect ,useState } from 'react';
import Cart from "../cart/Cart"

import './Home.css'


  

const Home = () => {

    const [allcurse , setAllcurse] =useState([])
    const [selectedCurse , setselectedcurse]=useState([])
    const [Remaining , setRemaining]=useState(20);
    const [totalcost , setTotalCost]=useState(0);

    useEffect(()=>{
        fetch('data.json')
      .then(response => response.json())
      .then(json => setAllcurse(json))
    },[])
    
    
    const handleSelectCurse =(curse) =>{
        const isExist =selectedCurse.find(item => item.id==curse.id);

        let count =curse.credit;
        if(isExist){
           return alert('Already this curse are add here')
        }
        else{
            selectedCurse.forEach(item=>{
                count=count+item.credit
            })
            const Credit_Hour_Remaining =20-count;
            setTotalCost(count);
            setRemaining(Credit_Hour_Remaining)
            setselectedcurse([...selectedCurse, curse])
         }
        
        
    }
    console.log(selectedCurse)
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
                        <p> $ Price: {curse.price} </p>
                        <p>Credit: {curse.credit}</p>
                        </div>
                        <button onClick={()=> handleSelectCurse(curse)}  className='card-btn'>Select</button>


            </div>

           )) }
            </div>
            <div className='card'>
             <Cart Remaining={Remaining} selectedCurse={selectedCurse} totalcost={totalcost} ></Cart>
            </div>
           </div>
            
        </div>
    );
};

export default Home;