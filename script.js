// Sample products data
const products = [
    {
        name: "Taiwan Coldpyro Smokeless",
        price: "₹120 per piece",
        image: "IMG-20250215-WA0004.jpg",

    },
    {
        name: "SRK Coldpyro smokeless",
        price: "₹120 per piece",
        image: "IMG-20250215-WA0017.jpg",
        
    },
    {
        name: "Party Poper",
        price: "₹120 per piece",
        image: "IMG-20250215-WA0011.jpg",
        
    },
    {
        name: "Golden Double box pyro",
        price: "₹55 per piece",
        image: "IMG-20250215-WA0020.jpg",
        
    },
    {
        name: "Club and Birthday Candel",
        price: "₹25 per pice",
        image: "IMG-20250215-WA0022.jpg",
        
    },
    {
        name: "NRD Coldpyro Smokeless",
        price: "₹120 per piece",
        image: "IMG-20250215-WA0018.jpg",
      
    },
    {
        name: "D35 Coldpyro",
        price: "₹120 per piece",
        image: "IMG-20250215-WA0008.jpg",
       
    },
    {
        name: "Golden Double Box Pyro",
        price: "₹50 per piece",
        image: "IMG-20250215-WA0014.jpg",
      
    },
    {
        name: "Green Leave Coldpyro Smokeless",
        price: "₹100 per piece",
        image: "IMG-20250215-WA0013.jpg",
      
    },
    {
        name: "Farari Coldpyro Top Quality",
        price: "₹160 per piece",
        image: "IMG-20250215-WA0009.jpg",
       
    },
    {
        name: "Farari Coldpyro Top Quality",
        price: "₹160 per piece",
        image: "IMG-20250215-WA0010.jpg",
       
    },
    {
        name: "Rocket Science Coldpyro Smokeless",
        price: "₹90 per piece",
        image: "IMG-20250215-WA0015.jpg",
      
    },
    {
        name: "Black Cat Coldpyro",
        price: "₹40 per piece",
        image: "IMG-20250215-WA0016.jpg",
       
    },
    {
        name: "9 Colour shot",
        price: "₹1600 per Box",
        image: "IMG-20250215-WA0012.jpg",
      
    },
    {
        name: "Red Curry Coldpyro",
        price: "₹40",
        image: "IMG-20250215-WA0005.jpg",
       
    },
    {
        name: "Cold Candle Smokeless",
        price: "₹40 per piece",
        image: "IMG-20250215-WA0007.jpg",
        
    },
    {
        name: "Ferrari Green Coldpyro Smokeless",
        price: "₹220 per piece",
        image: "IMG-20250215-WA0023.jpg",
      
    },
  
    {
        name: "288 Short Imported 16 Tube",
        price: "₹1440 per piece",
        image: "IMG-20250301-WA0010.jpg",
      
    },
  
    {
        name: "288 short 7 Tube",
        price: "₹999 per piece",
        image: "IMG-20250301-WA0013.jpg",
      
    },
  
    {
        name: "1688 Short Imported",
        price: "₹2200 per piece",
        image: "IMG-20250301-WA0012.jpg",
       
    },
  
    {
        name: "Gun Short",
        price: "₹60 per piece",
        image: "IMG-20250301-WA0011.jpg",
      
    },
    {
        name: "Fuse Imported",
        price: "₹5 per piece",
        image: "IMG-20250301-WA0014.jpg",
      
    },
    {
        name: "Fog Mechine",
        price: "₹6000",
        image: "IMG-20250301-WA0015.jpg",
      
    },
    {
        name: "Dayout Sky Shot 10 Colors",
        price: "₹1600 per Box",
        image: "IMG-20250301-WA0016.jpg",
      
    },
    {
        name: "Golden Pyro Stand",
        price: "₹215 per piece",
        image: "IMG-20250301-WA0017.jpg",
      
    },
    {
        name: "Macish Box",
        price: "₹7 per piece",
        image: "IMG-20250301-WA0018.jpg",
      
    },
    {
        name: "Black Matel Pyro Stand",
        price: "₹160 per piece",
        image: "IMG-20250301-WA0019.jpg",
      
    },
    {
        name: "FF Coldpyro Smokeless Top Quality",
        price: "₹280 per piece",
        image: "IMG-20250301-WA0022.jpg",
      
    },
    {
        name: "Fog MAtka with Stand",
        price: "₹999 per piece",
        image: "IMG-20250301-WA0023.jpg",
      
    },
    {
        name: "Colour Smoke and Colour Fog",
        price: "₹45 per piece",
        image: "WhatsApp Image 2025-03-01 at 12.22.07_c8b944fe.jpg",
      
    },
    {
        name: "Raystrom Coldpyro Smokeless Top Quality",
        price: "₹160 per piece",
        image: "WhatsApp Image 2025-03-01 at 12.22.07_d46bf4ce.jpg",
      
    },
  
    // Add more products here
];

// Function to load products
function loadProducts() {
    const container = document.getElementById('productsContainer');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" class="product-img" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <div class="product-buttons">
                <button class="btn btn-primary" onclick="window.location.href='tel:+919540923786'">Get Best Price</button>
            </div>
        `;
        container.appendChild(productCard);
    });
}

// Function to show product details (you can expand this)
function showProductDetail(productName) {
    // Implement detailed view logic here
    alert(`Showing details for: ${productName}`);
}

// Load products when page loads
window.onload = loadProducts;