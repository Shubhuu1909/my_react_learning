import { useState, useEffect } from "react";
import products from "./components/data";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  /* -------------------------------------------------------------
   * STATE HOOKS DEFINITIONS
   * ------------------------------------------------------------- */

  // Theme state: default is dark, saved in localStorage
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved : "dark";
  });

  // Selected navbar category state: "All" (Home), "Mobiles", "Laptops", or "Accessories"
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Cart items state: holds array of products currently in the cart
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  // Cart count state: numerical total number of items inside the cart
  const [cartCount, setCartCount] = useState(() => {
    const saved = localStorage.getItem("cartCount");
    return saved ? parseInt(saved, 10) : 0;
  });

  // Wishlist count state: number of wishlist clicks
  const [wishlistCount, setWishlistCount] = useState(() => {
    const saved = localStorage.getItem("wishlistCount");
    return saved ? parseInt(saved, 10) : 0;
  });

  // Scroll visibility state: determines if the Scroll-to-Top button is visible
  const [showScroll, setShowScroll] = useState(false);

  // Cart drawer open/close state
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Search query text input state
  const [searchQuery, setSearchQuery] = useState("");

  // Selected brand filter state: "All" or a specific brand name
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Sort parameter state: "featured" (default), "lowToHigh", or "highToLow"
  const [sortBy, setSortBy] = useState("featured");

  /* -------------------------------------------------------------
   * SIDE EFFECTS (useEffect) HOOKS
   * ------------------------------------------------------------- */

  // Toggle active theme class directly on the document body element
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Synchronize cartItems changes to localStorage and update cartCount
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  }, [cartItems]);

  // Persist cartCount values to localStorage
  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  // Persist wishlistCount values to localStorage
  useEffect(() => {
    localStorage.setItem("wishlistCount", wishlistCount);
  }, [wishlistCount]);

  // Event listener tracking window scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------------------------------------------------------------
   * LOGICAL UTILITIES & EVENT HANDLERS
   * ------------------------------------------------------------- */

  // Extract digits from formatted price string to allow calculations (₹1,29,999 -> 129999)
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const cleanStr = priceStr.replace(/[^\d]/g, "");
    return parseInt(cleanStr, 10) || 0;
  };

  // Format numbers back to Indian currency representation
  const formatPrice = (num) => {
    return "₹" + num.toLocaleString("en-IN");
  };

  // Toggle theme utility handler
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Add selected product details to cart drawer database
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Increment quantity if product is already in cart
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Insert new product with starting quantity of 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Increase specific item quantity in cart
  const handleIncreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease specific item quantity or remove if it hits 0
  const handleDecreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  // Delete product row completely from the cart drawer
  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate sum total of all items in cart based on count and price
  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      return sum + parsePrice(item.price) * item.quantity;
    }, 0);
  };

  // Increment wishlist counter badge
  const handleAddToWishlist = () => {
    setWishlistCount((prev) => prev + 1);
  };

  // Smooth scroll back to coordinates (0, 0)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Smooth scroll to the Contact Us section at the bottom of the page
  const scrollToContact = () => {
    const el = document.querySelector(".contact-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Category select handler triggered from navbar categories links
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Reset selected brand to avoid brand mismatches when categories change
    setSelectedBrand("All");

    // Smooth scroll down to the product catalog section
    const el = document.querySelector(".filters-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* -------------------------------------------------------------
   * DYNAMIC COMPUTED PROPERTIES (SEARCH & FILTER ENGINE)
   * ------------------------------------------------------------- */

  // Dynamic set extraction of unique brands available in the selected category
  const brands = [
    "All",
    ...new Set(
      products
        .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
        .map((p) => p.brand)
    )
  ];

  // Perform search matching, brand filters, category filters, and price ordering sequentially
  const filteredProducts = products
    .filter((product) => {
      const query = searchQuery.toLowerCase();
      // Match query string against name, brand, category or description features
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.features.toLowerCase().includes(query);

      // Check if selected brand matches
      const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;

      // Check if active category matches
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesBrand && matchesCategory;
    })
    .sort((a, b) => {
      const priceA = parsePrice(a.price);
      const priceB = parsePrice(b.price);

      if (sortBy === "lowToHigh") {
        return priceA - priceB; // ascending sorting
      } else if (sortBy === "highToLow") {
        return priceB - priceA; // descending sorting
      }
      return 0; // featured ordering
    });

  /* -------------------------------------------------------------
   * JSX RENDER COMPONENT
   * ------------------------------------------------------------- */
  return (
    <>
      {/* Sticky Header Navigation bar */}
      <header className="navbar">
        <h1>ElectroMart</h1>

        {/* Dynamic Nav Links with click listeners and active state classes */}
        <ul className="nav-links">
          <li
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => handleCategorySelect("All")}
          >
            Home
          </li>
          <li
            className={selectedCategory === "Mobiles" ? "active" : ""}
            onClick={() => handleCategorySelect("Mobiles")}
          >
            Mobiles
          </li>
          <li
            className={selectedCategory === "Laptops" ? "active" : ""}
            onClick={() => handleCategorySelect("Laptops")}
          >
            Laptops
          </li>
          <li
            className={selectedCategory === "Accessories" ? "active" : ""}
            onClick={() => handleCategorySelect("Accessories")}
          >
            Accessories
          </li>
          <li onClick={scrollToContact}>
            Contact
          </li>
        </ul>

        {/* Action icons row (Theme toggle, Wishlist, Cart Drawer toggle) */}
        <div className="nav-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <div className="nav-badge" title="Wishlist">
            <span className="badge-icon">❤️</span>
            <span className="badge-text">Wishlist</span>
            <span className="badge-count">{wishlistCount}</span>
          </div>

          <div className="nav-badge" title="Cart" onClick={() => setIsCartOpen(true)}>
            <span className="badge-icon">🛒</span>
            <span className="badge-text">Cart</span>
            <span className="badge-count">{cartCount}</span>
          </div>
        </div>
      </header>

      {/* Hero Welcome banner section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Latest Electronics 2026</h1>
          <p>Discover premium laptops, mobiles, and accessories at unbeatable prices.</p>
          {/* Shop Now scrolls dynamically to the filter/product view catalog */}
          <button onClick={() => handleCategorySelect("All")}>Shop Now</button>
        </div>
      </section>

      {/* Interactive Search, Filtering, and Sorting Dashboard */}
      <section className="filters-section">
        <div className="filters-container">
          {/* Search bar input container */}
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search products by name, brand, features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery("")}>
                &times;
              </button>
            )}
          </div>

          {/* Filtering and sorting dropdown controls */}
          <div className="dropdowns-group">
            <div className="filter-item">
              <label htmlFor="brand-select">Brand</label>
              <select
                id="brand-select"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-item">
              <label htmlFor="sort-select">Sort By</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of displayed products matching criteria */}
      <section className="products-section">
        <h2>🔥 {selectedCategory === "All" ? "Featured" : selectedCategory} Products</h2>

        <div className="products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard
                key={`${product.id}-${index}`}
                name={product.name}
                brand={product.brand}
                category={product.category}
                price={product.price}
                features={product.features}
                onAddToCart={() => handleAddToCart(product)}
                onAddToWishlist={handleAddToWishlist}
              />
            ))
          ) : (
            /* Empty products state when search yields no matches */
            <div className="no-products-found">
              <span className="no-products-icon">🔍</span>
              <h3>No Products Found</h3>
              <p>We couldn't find anything matching your search criteria. Try adjusting your search query or filters!</p>
              <button className="reset-filters-btn" onClick={() => {
                setSearchQuery("");
                setSelectedBrand("All");
                setSortBy("featured");
              }}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Us Section with hardcoded editable details and messaging form */}
      <section className="contact-section">
        <div className="contact-container">
          <h2>📩 Get In Touch</h2>
          <p className="contact-subtitle">
            Have questions or need assistance? Send us a message and our support team will reply within 24 hours!
          </p>

          <div className="contact-grid">
            {/* Contact details information card */}
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p>Feel free to reach out to us directly through any of these support channels.</p>

              <div className="info-details">
                <div className="info-item">
                  <span className="info-icon">📧</span>
                  <div className="info-text">
                    <span className="info-label">Email Support</span>
                    {/* NOTE TO USER: Change this email inside App.jsx as required */}
                    <span className="info-value">ehshubhu1909.com</span>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div className="info-text">
                    <span className="info-label">Phone Support</span>
                    <span className="info-value">+917406671631</span>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div className="info-text">
                    <span className="info-label"></span>//
                    <span className="info-value"></span>//
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact messaging Form */}
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Message Sent Successfully!"); }}>
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input type="text" id="contact-name" placeholder="John Doe" required />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input type="email" id="contact-email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea id="contact-message" rows="4" placeholder="How can we help you today?" required></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Page Footer */}
      <footer>
        <h3>ElectroMart</h3>
        <p>Your trusted electronics partner.</p>
        <p>© 2026 ElectroMart. All Rights Reserved.</p>
      </footer>

      {/* Cart Slider Drawer side panel */}
      <div
        className={`cart-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="cart-drawer-header">
          <h2>🛒 Shopping Cart</h2>
          <button className="cart-close-btn" onClick={() => setIsCartOpen(false)}>
            &times;
          </button>
        </div>

        {/* Drawer content (empty status list or items list layout) */}
        <div className="cart-drawer-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-cart-icon">🛒</span>
              <p>Your cart is empty!</p>
              <button className="shop-btn" onClick={() => setIsCartOpen(false)}>
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-brand">{item.brand} • {item.category}</p>
                    <div className="cart-quantity-controls">
                      <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                      <span className="cart-quantity">{item.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-meta">
                    <span className="cart-item-price">{item.price}</span>
                    <button
                      className="cart-remove-btn"
                      onClick={() => handleRemoveFromCart(item.id)}
                      title="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Footer showing subtotal sum total cost */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-total-row">
              <span>Total Cost:</span>
              <span className="cart-total-price">{formatPrice(calculateTotal())}</span>
            </div>
            <button className="cart-checkout-btn" onClick={() => alert("Proceeding to Checkout!")}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      {/* Floating scroll-to-top button */}
      <button
        className={`scroll-to-top ${showScroll ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}

export default App;