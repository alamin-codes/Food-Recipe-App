

// create search section
export function search(root, loadFood) {
    const searchSection = document.createElement("section");
    searchSection.classList.add("search-section");
    searchSection.style.margin = "20px 0";
    searchSection.style.textAlign = "center";
    const searchContainer = document.createElement("div");
    searchContainer.classList.add("search-container");
    searchContainer.style.width = "60%";
    searchContainer.style.margin = "0 auto";
    searchContainer.style.display = "flex";
    searchContainer.style.alignItems = "center";
    const searchInput = document.createElement("input");
    searchInput.id = "searchInput";
    searchInput.type = "search";
    searchInput.placeholder = "Search...";
    searchInput.style.padding = "10px";
    searchInput.style.borderRadius = "5px";
    searchInput.style.outline = "none";
    searchInput.style.border = "none";
    searchInput.style.width = "100%";
    searchInput.style.boxShadow = "0 0 3px 0 rgba(0,0,0, 0.7)";
    const span = document.createElement("span");
    span.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    span.style.width = "20px"

    
    searchContainer.append(searchInput, span);
    searchSection.append(searchContainer);
    root.append(searchSection);
    
    const searchIcon = document.querySelector("i.fa-solid.fa-magnifying-glass");
    searchIcon.style.padding = "10px";
    searchIcon.style.borderRadius = "0 5px 5px 0";
    searchIcon.style.position = "relative";
    searchIcon.style.right = "39px";
    searchIcon.style.background = "#FBBD23";
    searchIcon.style.color = "#fff";

    span.addEventListener("click", () => {
        const foodName = searchInput.value.trim();
        loadFood(foodName);
    });

    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            loadFood(searchInput.value.trim());
        }
    });

    searchInput.addEventListener("input", () => {
        if (searchInput.value.trim() === "") {
            loadFood("")
        }
    })


}