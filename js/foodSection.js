

// create food section
export function foodSection(root) {
    // create section
    const section = document.createElement("section");
    section.classList.add("food-section");
    section.style.width = "90%";
    section.style.margin = "0 auto";
    // create section heading
    const h2 = document.createElement("h2");
    h2.innerText = "Latest Recipes";
    h2.style.textAlign = "center";
    section.append(h2);

    // create food gallery
    const foodGallery = document.createElement("div");
    foodGallery.classList.add("food-gallery");
    foodGallery.id = "foodGallery";
    foodGallery.style.display = "grid";
    // foodGallery.style.gridTemplateColumns = "repeat(4, 1fr)";
    foodGallery.style.gap = "20px"
    foodGallery.style.position = "relative";

    // Responsive foodGallery
    const foodGalleryResponsive = document.createElement("style");
    foodGalleryResponsive.textContent = `
    @media (min-width: 1025px) {
        .food-gallery {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    @media (max-width: 1024px) {
        .food-gallery {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media (max-width: 768px) {
        .food-gallery {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 480px) {
        .food-gallery {
            grid-template-columns: 1fr;
        }
    }
    `;
    document.head.append(foodGalleryResponsive);

    // load food
    async function loadFood(searchFoods = "") {

        // create loading animation
        const loading = document.createElement("div");
        loading.style.width = "40px";
        loading.style.height = "40px";
        loading.style.border = "10px solid #FBBD23";
        loading.style.borderTop = "10px solid #f3f3f3";
        loading.style.borderRadius = "50%";
        loading.style.animation = "spin 1s linear infinite";
        loading.style.position = "absolute";
        loading.style.left = "50%";
        loading.style.top = "50%";
        loading.style.transform = "translate(-50%, -50%)"

        const style = document.createElement("style");
        style.textContent = `
        @keyframes spin {
            0% {transform: rotate(0deg);}
            100% {transform: rotate(360deg);}
        }
        `;
        document.head.appendChild(style);

        foodGallery.innerHTML = "";
        // loading show hoche
        foodGallery.appendChild(loading)


        // api call hoche
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFoods}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // data ashar por animation remove kora holo
        foodGallery.innerHTML = "";
        
        
        
        const meals = data.meals;

        if (!meals) {
            foodGallery.innerHTML = `
                <h3 style="grid-column:1/-1;text-align:center">
                    Foods not found!!!
                </h3>
            `;
            return;
        }

        
        meals.forEach(meal => {
            // create card
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.borderRadius = "10px";
            card.style.boxShadow = "0 0 7px 0 rgba(0,0,0, 0.7)";

            // crate img div
            const imgDiv = document.createElement("div");
            imgDiv.style.width = "100%";
            imgDiv.style.height = "200px";
            imgDiv.style.overflow = "hidden";

            // create card img
            const cardImg = document.createElement("img");
            cardImg.src = meal.strMealThumb;
            cardImg.alt = meal.strMeal;
            cardImg.style.maxWidth = "100%";
            cardImg.style.borderRadius = "10px 10px 0 0";
            imgDiv.append(cardImg);

            // create card content
            const cardContent = document.createElement("div");
            cardContent.classList.add("card-content");
            cardContent.style.padding = "0 20px 20px 20px";
            cardContent.style.position = "relative";
            const h3 = document.createElement("h3");
            h3.className = "food-heading";
            h3.title = meal.strMeal;
            h3.innerText = meal.strMeal;
            const p = document.createElement("p");
            p.className = "food-des";
            p.innerText = meal.strInstructions.slice(0, 80) + "...";
            p.style.textAlign = "justify";

            // create card button
            const btnDiv = document.createElement("div");
            btnDiv.style.textAlign = "right";
            const cardBtn = document.createElement("button");
            cardBtn.className = "food-btn";
            cardBtn.textContent = "vew details";
            cardBtn.style.background = "#FBBD23";
            cardBtn.style.color = "#fff";
            cardBtn.style.border = "none";
            cardBtn.style.outline = "none";
            cardBtn.style.padding = "10px 25px";
            cardBtn.style.borderRadius = "7px";
            cardBtn.style.textTransform = "uppercase"
            cardBtn.style.fontWeight = "700";
            cardBtn.style.cursor = "pointer";
            btnDiv.append(cardBtn);

            cardContent.append(h3, p, btnDiv);

            card.append(imgDiv, cardContent);

            // crate modal/popup
            const modal = document.createElement("div");
            modal.className = "modal";
            modal.style.position = "fixed";
            modal.style.top = "0";
            modal.style.left = "0";
            modal.style.width = "100%";
            modal.style.height = "100%";
            modal.style.background = "rgba(0,0,0,0.4)";
            modal.style.display = "none";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
            modal.style.zIndex = "10000";


            const modalContainer = document.createElement("div");
            modalContainer.style.width = "80%";
            modalContainer.style.maxWidth = "600px";
            modalContainer.style.maxHeight = "90%";
            modalContainer.style.padding = "20px";
            modalContainer.style.borderRadius = "10px";
            modalContainer.style.position = "relative";
            modalContainer.style.zIndex = "10000";
            modalContainer.style.overflow = "scroll";
            modalContainer.classList.add("modal-container");
            modalContainer.style.background = "#fff";

            const span = document.createElement("span");
            span.id = "closeBtn";
            span.innerHTML = "&times;";
            span.style.position = "absolute";
            span.style.top = "20px";
            span.style.right = "20px";
            span.style.fontSize = "25px";
            span.style.cursor = "pointer";
            span.style.background = "#fff";
            span.style.width = "30px";
            span.style.height = "30px";
            span.style.borderRadius = "50%";
            span.style.display = "grid";
            span.style.placeItems = "center";


            span.addEventListener("click", () => {
                modal.style.display = "none";
            })
            const modalImg = document.createElement("img");
            modalImg.src = meal.strMealThumb;
            modalImg.alt = meal.strMeal;
            modalImg.style.width = "100%";
            modalImg.style.height = "200px";
            modalImg.style.objectFit = "cover";
            const modalHeading = document.createElement("h3");
            modalHeading.textContent = meal.strMeal;
            const modalDes = document.createElement("p");
            modalDes.textContent = meal.strInstructions;

            modalContainer.append(span, modalImg, modalHeading, modalDes);
            modal.append(modalContainer);

            cardBtn.addEventListener("click", () => {
                modal.style.display = "flex";
            })

            foodGallery.append(card, modal);
        });


    }
    loadFood();
    
    
    section.append(foodGallery);
    
    
    
    
    // root.append(section);
    return {
        section,
        loadFood
    };

}




