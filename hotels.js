// hotels.js

// Sample hotel data
const hotelsInMumbai = [
    { name: "Hotel A", price: 100, stars: 4 },
    { name: "Hotel B", price: 80, stars: 3 },
    // Add more hotels as needed
];

// Function to display hotels
function displayHotels() {
    const hotelContainer = document.createElement("div");

    // Loop through hotels and create elements to display them
    hotelsInMumbai.forEach(hotel => {
        const hotelCard = document.createElement("div");
        hotelCard.classList.add("hotel-card");

        const hotelName = document.createElement("h2");
        hotelName.textContent = hotel.name;

        const hotelPrice = document.createElement("p");
        hotelPrice.textContent = `Price: $${hotel.price}`;

        const hotelStars = document.createElement("p");
        hotelStars.textContent = `Stars: ${hotel.stars}`;

        // You can add more details as needed

        hotelCard.appendChild(hotelName);
        hotelCard.appendChild(hotelPrice);
        hotelCard.appendChild(hotelStars);

        hotelContainer.appendChild(hotelCard);
    });

    document.body.appendChild(hotelContainer);
}

// Call the displayHotels function when the page loads
window.onload = displayHotels;
