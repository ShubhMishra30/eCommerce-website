document.getElementById("searchInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    performSearch();
  }
});
