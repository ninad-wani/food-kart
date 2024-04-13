import { Button } from 'react-materialize';
import './DishItem.css';

const DishItem = (props: any) => {
    const { dish, AddButtonListener } = props;
    return (
        <>
            <div className='dish_item_container'>
                <div className='dish_item_dtls'>
                    {dish.img && <div className='dish_img_holder'>
                        <img className='dish_img' src={dish.img} />
                    </div>}
                    <div className='dish_dtls_holder'>
                        <h3>{dish.title}</h3>
                        <h4>₹{dish.price}</h4>
                        {/* <span>&#11088;{dish.rating}</span> */}
                        <p>Serves {dish.serves}</p>
                    </div>
                </div>
                {AddButtonListener && <div className='dish_item_btn_holder'>
                    <Button
                        node="button"
                        style={{
                            marginRight: '5px'
                        }}
                        waves="light"
                        onClick={() => { AddButtonListener(dish) }}
                    >ADD
                    </Button>
                </div>}
            </div>
        </>
    )
}

export default DishItem