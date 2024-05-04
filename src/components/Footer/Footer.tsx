import './Footer.css'

const Footer = (props: any) => {

    const { cartCount, cart } = props;
    let cartPrice = 0;
    for (let item in cart) {
        cartPrice += cart[item]["price"]
    }

    return (
        <div className='footer-container'>
            <div className='foooter'>
                <div className='footer-cart-info'>
                    <b className='footer-cart-price'>₹{cartPrice}</b>
                    <p>Cart Items: {cartCount}</p>
                </div>
                <div className='footer-btn-container'>
                    <button>View Cart</button>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Footer