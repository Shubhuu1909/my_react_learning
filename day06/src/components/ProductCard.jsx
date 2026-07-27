/**
 * ProductCard Component
 * Displays details for an individual electronics product card with Cart and Wishlist triggers.
 *
 * @param {Object} props - Component properties
 * @param {string} props.name - Name of the product
 * @param {string} props.brand - Brand of the product (e.g. Apple, Samsung)
 * @param {string} props.category - Product category tag (e.g. Mobiles, Laptops)
 * @param {string} props.price - Pre-formatted display price
 * @param {string} props.features - Details and specifications summary
 * @param {Function} props.onAddToCart - Callback triggered on clicking Add to Cart
 * @param {Function} props.onAddToWishlist - Callback triggered on clicking Wishlist
 */
function ProductCard({ name, brand, category, price, features, onAddToCart, onAddToWishlist }) {
  return (
    <div className="card">
      {/* Header tags displaying brand identity and product classification */}
      <div className="card-header">
        <span className="brand-tag">{brand}</span>
        <span className="category-tag">{category}</span>
      </div>
      
      {/* Product Information */}
      <h2>{name}</h2>
      <p className="features">{features}</p>
      <h4 className="price">{price}</h4>
      
      {/* Action buttons panel */}
      <div className="card-actions">
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          🛒 Add to Cart
        </button>
        <button className="wishlist-btn" onClick={onAddToWishlist}>
          ❤️ Wishlist
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
