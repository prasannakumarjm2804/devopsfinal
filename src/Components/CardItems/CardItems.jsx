import React, { useContext } from 'react'
import "./CardItems.css"
import remove_icon from "./../Assets/cart_cross_icon.png"
import { ShopContext } from '../../Context/ShopContext'


const CardItems = () => {
   const {all_product,cartItems,getTotalCartAmount,removeFromCart} = useContext(ShopContext)
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='cartitems-produdct-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className="cartitems-remove-icon " src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>)
                }
                return null;

            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h2>cart Totals</h2>
                    <div>
                        <div className="cartitems-total-item">
                           <p>Subtotal</p>
                           <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                           <p>Shipping Fee</p>
                           <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                           <p>Total</p>
                           <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                        </div>
                        <div className="cartitems-promocode">
                            <p> If you have  a promo code ,Enter it here</p>
                            <div className="cartitems-promobox">
                                <input type="text" placeholder="promo code" />
                                <button>Submit</button>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default CardItems