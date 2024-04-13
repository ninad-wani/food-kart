import './MenuCard.css'
import DishItem from '../DishItem/DishItem'
import { useState } from 'react';
import { Button } from 'react-materialize';
import Footer from '../Footer/Footer';

const MenuCard = () => {

    const [cartItems, setCartItems]: any = useState({});

    const options = [
        {
            id: 1,
            title: "Dal Makhani + 2 Khamiri Roti + 1 Drink",
            price: 231,
            rating: '3.5',
            serves: 1,
            img: 'https://images.pexels.com/photos/12737916/pexels-photo-12737916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 2,
            title: "Veg Biryani",
            price: 135,
            rating: '4.2',
            serves: 2,
            img: 'https://images.pexels.com/photos/14731729/pexels-photo-14731729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 3,
            title: "Dal Khichdi",
            price: 160,
            rating: '3.9',
            serves: 1,
            img: 'https://images.pexels.com/photos/6363501/pexels-photo-6363501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]

    const AddButtonListener = (dish: any) => {
        console.log('here', dish);
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
        <div className='menucard_container'>
            <div className='menucard_hotel_dtls'>
                <div className='hotel_dtls'>
                    <div style={{display: 'flex', margin: '0 16px'}}><p>Logo</p><h2>Mannat Restaurant</h2></div>
                    {/* <p>North Indian, Mughlai, Fast Food</p>
                    <address>Karol Bagh, New Delhi</address>
                    <span style={{ color: 'orange' }}>Temporarily closed for dining, will be back soon!</span> */}
                </div>
                {/* <div className='ratings_holder'>
                    <div className='ratings_icon'>
                        4.1★
                    </div>
                    <div>
                        983
                        <p className='all_ratings_title'>All Ratings</p>
                    </div>
                </div> */}
            </div>
            <hr />

            <div className='menucard_menu'>
                {options.map((item, idx) => {
                    return <>
                        <DishItem key={idx} dish={item} />
                        {AddButtonListener && <div className='dish_item_btn_holder'>
                            <Button
                                node="button"
                                style={{
                                    marginRight: '5px',
                                    width: '100%'
                                }}
                                waves="light"
                                onClick={() => { AddButtonListener(item) }}
                            >ADD
                            </Button>
                        </div>}
                    </>
                })}
            </div>
            {Object.keys(cartItems).length > 0 && <Footer cartCount={Object.keys(cartItems).length} />}
        </div>
    )
}

export default MenuCard