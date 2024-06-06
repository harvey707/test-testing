// Dummy data for demonstration purposes (replace with actual search functionality)
const searchResults = [
    { title: "Result 1", description: "Description of Result 1" },
    { title: "Result 2", description: "Description of Result 2" },
    { title: "Result 3", description: "Description of Result 3" }
  ];
  
  // Function to display search results
  function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = "";
  
    results.forEach(result => {
      const resultElement = document.createElement("div");
      resultElement.classList.add("result");
      resultElement.innerHTML = `
        <h3>${result.title}</h3>
        <p>${result.description}</p>
      `;
      searchResultsContainer.appendChild(resultElement);
    });
  }
  
  // Event listener for form submission
  document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById("search-input").value;
    if (searchQuery.trim() !== "") {
      // Simulate search functionality (replace with actual search logic)
      displaySearchResults(searchResults);
    } else {
      alert("Please enter a search query.");
    }
  });
  