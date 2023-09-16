/* eslint-disable react/jsx-key */
import './Cart.css'

const Cart = ({selectedCurse, Remaining ,totalCredit}) => {
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
            <h2>Total Credit Hour : {totalCredit}</h2>
            
        </div>
    );
};

export default Cart;