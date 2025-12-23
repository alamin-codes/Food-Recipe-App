//
import { header } from "./header.js";
import { heroSec } from "./heroSec.js";
import { search } from "./search.js";
import { foodSection } from "./foodSection.js";
import { footer } from "./footer.js";
import { scrollToTop } from "./scrollToTop.js";

const root = document.getElementById("root");

header(root);
heroSec(root);

// ✅ create food section
const { section: foodSectionEl, loadFood } = foodSection();

// ✅ search bar (needs loadFood)
search(root, loadFood);

// ✅ now append food gallery AFTER search
root.append(foodSectionEl);

// ✅ initial load
loadFood();

footer(root);
scrollToTop(root);

console.log(loadFood);
