import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai"; // icon
import "../styles/Shop.css";

const categories = [
  { id: 1, name: "All", image: "/path/to/all.jpg" },
  { id: 2, name: "Clothing", image: "/path/to/clothing.jpg" },
  { id: 3, name: "Shoes", image: "/path/to/shoes.jpg" },
  { id: 4, name: "Accessories", image: "/path/to/accessories.jpg" },
];

const Shop = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 25.99, image: "/path/to/image1.jpg", quantity: 1 },
    { id: 2, name: "Product 2", price: 45.99, image: "/path/to/image2.jpg", quantity: 1 },
    { id: 3, name: "Product 3", price: 19.99, image: "/path/to/image3.jpg", quantity: 1 },
    { id: 4, name: "Product 4", price: 30.0, image: "/path/to/image4.jpg", quantity: 1 },
    { id: 5, name: "Product 5", price: 99.99, image: "/path/to/image5.jpg", quantity: 1 },
    { id: 6, name: "Product 6", price: 15.49, image: "/path/to/image6.jpg", quantity: 1 },
    { id: 7, name: "Product 7", price: 60.0, image: "/path/to/image7.jpg", quantity: 1 },
    { id: 8, name: "Product 8", price: 22.49, image: "/path/to/image8.jpg", quantity: 1 },
    { id: 9, name: "Product 9", price: 13.99, image: "/path/to/image9.jpg", quantity: 1 },
    { id: 10, name: "Product 10", price: 25.0, image: "/path/to/image10.jpg", quantity: 1 },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const navigate = useNavigate();

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      cart.push({ ...product });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const updateQuantity = (id, operation) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity:
                operation === "increase"
                  ? product.quantity + 1
                  : product.quantity > 1
                  ? product.quantity - 1
                  : 1,
            }
          : product
      )
    );
  };

  // Pagination
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="shop-container">
      <h1>Shop</h1>

      {/* Floating Categories */}
      <div className="floating-categories">
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <img src={category.image} alt={category.name} />
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="popup-message">
          <AiOutlineCheckCircle size={24} />
          <span>Product successfully added to cart!</span>
          <button className="close-popup" onClick={() => setShowPopup(false)}>×</button>
        </div>
      )}

      {/* Products */}
      <div className="products">
        {currentProducts.map((product) => (
          <div key={product.id} className="product">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <h3>{product.name}</h3>
            <p className="price">₹{product.price.toFixed(2)}</p>

            <div className="quantity-container">
              <button onClick={() => updateQuantity(product.id, "decrease")} className="quantity-btn">-</button>
              <span className="quantity-display">{product.quantity}</span>
              <button onClick={() => updateQuantity(product.id, "increase")} className="quantity-btn">+</button>
            </div>

            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="page-btn page-btn-back" onClick={prevPage} disabled={currentPage === 1}>
          Back
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={`page-btn ${currentPage === idx + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}

        <button className="page-btn page-btn-next" onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;