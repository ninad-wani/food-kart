import './Footer.css'

const Footer = (props: any) => {

    const { cartCount } = props;

    return (
        <div className='footer-container'>
            <div className='foooter'>
                <p>Cart Items: {cartCount}</p>
                <div className='footer-btn-container'>
                    <button>View Cart</button>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Footer