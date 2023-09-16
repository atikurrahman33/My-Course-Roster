/* eslint-disable react/jsx-key */
import './Cart.css'

const Cart = ({selectedCurse}) => {
    console.log(selectedCurse)
    return (
        <div>
            <h5>this is card</h5>
            {
                selectedCurse.map((curse)=>(
                    <li>{curse.curseName}</li>
                        
                ))
            }
            
        </div>
    );
};

export default Cart;