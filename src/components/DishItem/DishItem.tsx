import './DishItem.css';

const DishItem = (props: any) => {
    const { dish, cartItem, AddButtonListener, RemoveButtonListener } = props;

    return (
        <>
            <div className='dish_item_container'>
                <div className='dish_item_dtls'>
                    {dish.image && <div className='dish_img_holder'>
                        <img className='dish_img' src={dish.image} />
                        {!cartItem && <button className='mt-2 btn-green' onClick={() => AddButtonListener(dish)}>Add</button>}
                        {cartItem && <div className='mt-2 custom-add-btn'>
                            <button onClick={() => RemoveButtonListener(dish)}>-</button>
                            <span style={{ margin: '0 6px 0 6px' }}>{cartItem?.quantity ? cartItem?.quantity : 0}</span>
                            <button onClick={() => AddButtonListener(dish)}>+</button>
                        </div>}
                    </div>}
                    <div className='dish_dtls_holder'>
                        <h3>{dish.name}</h3>
                        <p className='size-guide'>{dish.size}</p>
                        <h4>₹{dish.price}</h4>
                        <i className='dish-description'>{dish.description}</i>
                        {/* <span>&#11088;{dish.rating}</span> */}
                        {/* <p>Serves {dish.serves}</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DishItem