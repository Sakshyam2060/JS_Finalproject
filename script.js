const places = {
  bali: {
    name: "Bali",
    image: "icons/Bali.webp",
    description: "Bali is a tropical paradise in Indonesia known for beaches, temples, and vibrant culture."
  },
  kathmandu: {
    name: "Kathmandu",
    image: "icons/nepal.webp",
    description: "Kathmandu is Nepal’s capital, rich in history, temples, and Himalayan views."
  },
  nyc: {
    name: "New York City",
    image: "icons/NYC.webp",
    description: "NYC is a bustling metropolis famous for its skyline, culture, and global influence."
  }
};

function search() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (places[input]) {
    const place = places[input];
    resultsDiv.innerHTML = `
      <div class="popup">
        <img src="${place.image}" alt="${place.name}">
        <h3>${place.name}</h3>
        <p>${place.description}</p>
      </div>
    `;
  } else {
    resultsDiv.innerHTML = `
      <div class="popup">
        <h3>No results found</h3>
        <p>We couldn't find "${input}". Try searching for <strong>Bali</strong>, <strong>Kathmandu</strong>, or <strong>NYC</strong>.</p>
      </div>
    `;
  }
}
function search() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  let popupContent = "";

  if (places[input]) {
    const place = places[input];
    popupContent = `
      <div class="popup">
        <span class="close-btn" onclick="closePopup()">❌</span>
        <img src="${place.image}" alt="${place.name}">
        <h3>${place.name}</h3>
        <p>${place.description}</p>
        <a href="${input}.html" class="visit-btn">Visit</a>
      </div>
    `;
  } else {
    popupContent = `
      <div class="popup">
        <span class="close-btn" onclick="closePopup()">❌</span>
        <h3>No results found</h3>
        <p>We couldn't find "${input}". Try searching for <strong>Bali</strong>, <strong>Kathmandu</strong>, or <strong>NYC</strong>.</p>
      </div>
    `;
  }

  resultsDiv.innerHTML = popupContent;
}

function closePopup() {
  document.getElementById("results").innerHTML = "";
}
