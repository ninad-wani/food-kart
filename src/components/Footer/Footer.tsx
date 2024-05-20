import './Footer.css'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';

const Footer = (props: any) => {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const { cartCount, cart } = props;
    const [cartOpen, setCartOpen] = useState(false);
    const [phone, setPhone] = useState("")

    const [checkoutOpen, setCheckoutOpen] = useState(false);
    let cartPrice = 0;
    for (let item in cart) {
        cartPrice += cart[item]["price"]
    }

    const openCart = () => {
        setCartOpen(true);
    }

    const closeCart = () => {
        setCartOpen(false);
    }

    const openCheckout = () => {
        setCheckoutOpen(true);
    }

    const closeCheckout = () => {
        setCheckoutOpen(false);
    }

    const checkout = () => {
        let data: any = []
        Object.keys(cart)?.map((item) => {
            data.push({
                name: cart[item].name,
                price: cart[item].price,
                quantity: cart[item].quantity
            })
        })
        let dt = JSON.stringify(data)
        window.open(`https://wa.me/+91${phone}?text=${dt}`)
        window.location.reload()
    }

    return (
        <div className='footer-container'>
            <div className='foooter'>
                <div className='footer-cart-info'>
                    <b className='footer-cart-price'>₹{cartPrice}</b>
                    <p>Cart Items: {cartCount}</p>
                </div>
                <div className='footer-btn-container'>
                    <button onClick={openCart}>View Cart</button>
                    <button onClick={openCheckout}>Checkout</button>
                </div>
            </div>
            <Modal
                open={cartOpen}
                onClose={closeCart}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {Object.keys(cart).map((itm, idd) => {
                        return (
                            <>
                                <div key={idd} className='cart-item'>
                                    <div className='left'>
                                        <strong>{cart[itm]?.name}</strong>
                                        <p className='size-guide'>{cart[itm]?.size}</p>
                                    </div>
                                    <div className='right'>
                                        <i>x{cart[itm]?.quantity}</i>
                                        <p>₹{cart[itm]?.price}</p>
                                    </div>
                                </div>
                                <hr />
                            </>
                        );
                    })}
                    <strong style={{float: 'right'}}>Total: ₹{cartPrice}</strong>
                </Box>
            </Modal>
            <Modal
                open={checkoutOpen}
                onClose={closeCheckout}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    Number: <input type='text' style={{padding: '10px'}} onChange={(e)=>setPhone(e.target.value)}></input>
                    <button style={{margin: '10px'}} onClick={checkout}>Send</button>
                </Box>
            </Modal>
        </div>
    )
}

export default Footer