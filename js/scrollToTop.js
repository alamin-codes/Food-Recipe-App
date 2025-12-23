// create scroll to top button

export function scrollToTop(root) {
    const body = document.body;
    body.style.position = "relative";

    document.documentElement.style.scrollBehavior = "smooth";
    const span = document.createElement("span");
    span.innerHTML = "&#11165;";
    span.style.position = "fixed";
    span.style.bottom = "60px";
    span.style.right = "20px";
    span.style.color = "#FBBD23";
    span.style.width = "40px";
    span.style.height = "40px";
    span.style.borderRadius = "5px"
    span.style.background = "#3d3d3d";
    span.style.cursor = "pointer";
    span.style.display = "grid";
    span.style.placeItems = "center";
    span.style.fontSize = "30px";
    span.style.display = "none";

    
    
    
    span.addEventListener("click", () => {
        window.scrollTo({top:0,behavior:"smooth"})
    })
    
    
    root.append(span);
    
    
    function scrollToShowBtn() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            span.style.display = "grid";
        } else {
            span.style.display = "none";
        }
    }
    window.onscroll = function() {scrollToShowBtn()};
}