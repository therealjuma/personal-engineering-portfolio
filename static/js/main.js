
const searchForm = document.querySelector("#site-search");
const searchInput = document.querySelector("#search-input");
const searchItems = document.querySelectorAll(".search-item");
const noResults = document.querySelector("#no-results");

if (searchForm && searchInput) {
    function filterContent(query) {
        const normalizedQuery = query.trim().toLowerCase();
        let visibleCount = 0;

        searchItems.forEach((item) => {
            const searchableText = (
                item.dataset.search + " " + item.textContent
            ).toLowerCase();

            const matches = searchableText.includes(normalizedQuery);

            item.hidden = !matches;

            if (matches) {
                visibleCount++;
            }
        });

        if (noResults) {
            noResults.hidden = normalizedQuery === "" || visibleCount > 0;
        }
    }

    searchInput.addEventListener("input", (event) => {
        filterContent(event.target.value);
    });

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        filterContent(searchInput.value);
    });
}
