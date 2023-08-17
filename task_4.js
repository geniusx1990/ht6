function debounce(func, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}


function debouncedSearch(query) {
    // Perform search operation with the query  
    console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 5000);

const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {
    debouncedSearchHandler(event.target.value);
});