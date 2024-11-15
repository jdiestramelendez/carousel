const products = {
    electronics: [
      { name: "Laptop" },
      { name: "Smartphone" },
      { name: "Tablet" },
      { name: "Smartwatch" },
      { name: "Headphones" },
      { name: "Camera" },
      { name: "Speaker" },
      { name: "Monitor" }
    ],
    clothing: [
      { name: "T-shirt" },
      { name: "Jeans" },
      { name: "Jacket" },
      { name: "Dress" },
      { name: "Skirt" },
      { name: "Sweater" },
      { name: "Scarf" },
      { name: "Shoes" }
    ],
    groceries: [
      { name: "Apple" },
      { name: "Banana" },
      { name: "Carrot" },
      { name: "Milk" },
      { name: "Cheese" },
      { name: "Bread" },
      { name: "Eggs" },
      { name: "Juice" }
    ]
  };
  
  let currentCategory = "electronics";
  let currentIndex = 0;
  
  function showCategory(category) {
    currentCategory = category;
    currentIndex = 0;
    renderProducts();
  }
  
  function navigateCarousel(direction) {
    const totalProducts = products[currentCategory].length;
    const itemsPerPage = 5; // Match flex-basis in CSS
    const maxIndex = Math.ceil(totalProducts / itemsPerPage) - 1;
  
    currentIndex = Math.max(0, Math.min(currentIndex + direction, maxIndex));
    renderProducts();
  }
  
  function renderProducts() {
    const carouselInner = document.getElementById("carousel-inner");
    const itemsPerPage = 5;
  
    const categoryProducts = products[currentCategory];
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
  
    const visibleProducts = categoryProducts.slice(start, end);
    carouselInner.innerHTML = visibleProducts
      .map(
        (product) => `
      <div class="product">
        <h3>${product.name}</h3>
      </div>
    `
      )
      .join("");
  
    document.querySelector(".arrow.left").disabled = currentIndex === 0;
    document.querySelector(".arrow.right").disabled =
      currentIndex === Math.ceil(categoryProducts.length / itemsPerPage) - 1;
  }
  
  // Initialize with the first category
  showCategory(currentCategory);