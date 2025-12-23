// Hero section create start point
export function heroSec(root) {
    const heroSec = document.createElement("div");
    heroSec.classList.add("hero_sec");
    heroSec.style.height = "300px";
    heroSec.style.width = "100%";
    heroSec.style.backgroundImage = 'url(./images/page-title.jpg)';
    heroSec.style.backgroundSize = "cover";
    heroSec.style.backgroundPosition = "center";
    heroSec.style.backgroundRepeat = "no-repeat";
    heroSec.style.display = "flex";
    heroSec.style.justifyContent = "center";
    heroSec.style.alignItems = "center";
    heroSec.style.position = "relative";

    // overlay element create korbo
    const overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.height = "100%";
    overlay.style.width = "100%";
    overlay.style.background = "rgba(255, 255, 255, 0.12)";


    const heroText = document.createElement("div");
    heroText.classList.add("hero_text");
    heroText.style.display = "flex";
    heroText.style.justifyContent = "center";
    heroText.style.alignItems = "center";
    heroText.style.flexDirection = "column";
    heroText.style.zIndex = "99";

    const heroTitle = document.createElement("h1");
    heroTitle.classList.add("hero_title");
    heroTitle.setAttribute("title", "Search Your Favorite Recipe");
    heroTitle.textContent = "Search Your Favorite Recipe";
    heroTitle.style.textAlign = "center";
    heroTitle.style.color = "#fff";
    heroTitle.style.fontSize = "42px";
    heroTitle.style.maxWidth = "50%";
    heroTitle.style.margin = "0px";

    const heroDes = document.createElement("p");
    heroDes.textContent = "A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking";
    heroDes.style.color = "#fff";
    heroDes.style.maxWidth = "70%";
    heroDes.style.textAlign = "center";
    heroDes.style.fontSize = "20px"
    heroText.append(heroTitle, heroDes);

    heroSec.append(overlay, heroText);

    root.append(heroSec);
}
