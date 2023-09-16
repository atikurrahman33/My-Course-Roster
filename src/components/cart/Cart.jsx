/* eslint-disable react/jsx-key */
import './Cart.css'

const Cart = ({selectedCurse, Remaining ,totalcost}) => {
    console.log(selectedCurse)
    return (
        <div>
            <h2>Credit Hour Remaining {Remaining}</h2>
            <h2>Curse Name:</h2>
            {
                selectedCurse.map((curse)=>(
                    <li key={curse.id}>{curse.curseName}</li>
                        
                ))
            }
            <h2>Total Credit Hour : {totalcost}</h2>
            
        </div>
    );
};

export default Cart;