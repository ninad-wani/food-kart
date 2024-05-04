import { useState } from 'react'
import DishItem from '../DishItem/DishItem';
import Footer from '../Footer/Footer';

const Items = () => {

    const [cartItems, setCartItems]: any = useState({});
    const [hotelName]: any = useState("Best Dhaba");

    const options = [
        {
            id: 1,
            title: "Dal Makhani + 2 Khamiri Roti + 1 Drink",
            price: 231,
            rating: '3.5',
            serves: 1,
        },
        {
            id: 2,
            title: "Veg Biryani",
            price: 135,
            rating: '4.2',
            serves: 2,
        },
        {
            id: 3,
            title: "Dal Khichdi",
            price: 160,
            rating: '3.9',
            serves: 1,
        },
    ]

    const AddButtonListener = (dish: any) => {
        setCartItems((prevCartItems: any) => {
            const tempCart = { ...prevCartItems };
            if (dish.id in tempCart) {
                tempCart[dish.id] = {
                    ...tempCart[dish.id],
                    quantity: tempCart[dish.id]["quantity"] + 1,
                    price: tempCart[dish.id]["price"] + dish.price
                };
            } else {
                tempCart[dish.id] = {
                    ...dish,
                    quantity: 1
                };
            }
            return tempCart;
        });
    };

    return (
        <>
            <div className='cart_header'>{hotelName}</div>
            <div className='dish_items'>
                {options.map((item, idx) => {
                    return <DishItem key={idx} dish={item} AddButtonListener={AddButtonListener} />
                })}
            </div>
            {Object.keys(cartItems).length > 0 && <Footer amount={cartItems} cartCount={Object.keys(cartItems).length} />}
        </>
    )
}

export default Items