// crate header start point

export function header(root) {
    document.body.style.padding = "0px";
    document.body.style.margin = "0px";
    document.body.style.boxSizing = "borderBox";
    const header = document.createElement("div");
    header.classList.add("header");
    header.style.width = "100%";
    header.style.height = "60px";
    header.style.display = "flex";
    header.style.justifyContent = "center";
    header.style.alignItems = "center";


    const logo = document.createElement("img");
    logo.src = "./images/logo.png";
    logo.alt = "logo";
    logo.setAttribute("width", 100);
    logo.style.cursor = "pointer";
    header.append(logo);
    root.append(header)
}

