import React from 'react'
import "./DescriptionBox.css"
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Top 7 CIO challenges in 2024 and how to handle them
                    8 free IT strategic planning templates and examples for CIOs
                    As an order is placed, the customer's web browser communicates back and forth with the server hosting the e-commerce website. Data pertaining to the order is relayed to a central computer known as the order manager. The data is then forwarded to databases that manage inventory levels; a merchant system that manages payment information using payment processing applications, such as PayPal; and a bank computer. Finally, it circles back to the order manager. This ensures store inventory and customer funds are sufficient for the order to be processed.

                    After the order is validated, the order manager notifies the store's web server. It displays a message notifying the customer that their order has been processed. The order manager then sends order data to the warehouse or fulfillment department, letting it know the product or service can be dispatched to the customer. At this point, tangible and digital products are sent to the customer, or access to a service is granted.</p>
            </div>
        </div>
    )
}

export default DescriptionBox