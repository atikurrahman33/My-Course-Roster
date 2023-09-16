/* eslint-disable react/jsx-key */
import './Cart.css'

const Cart = ({selectedCurse, Remaining ,totalCredit}) => {
    console.log(selectedCurse)
    return (
        <div>
            <h2>Credit Hour Remaining {Remaining}</h2>
            <hr />
            <h2>Curse Name:</h2>
            {
                selectedCurse.map((curse, index) => (
                    <li key={curse.id}>{`${index + 1}. ${curse.curseName}`}</li>
                        
                ))
            }
            <hr />
            <h2>Total Credit Hour : {totalCredit}</h2>
            
        </div>
    );
};

export default Cart;