// create footer section
export function footer(root) {
    const footerSection = document.createElement("section");
    footerSection.style.background = "#3D4451";
    footerSection.style.color = "#fff";
    footerSection.style.marginTop = "20px";
    const footerContainer = document.createElement("div");
    footerContainer.style.width = "90%";
    footerContainer.style.margin = "0 auto";
    footerContainer.style.padding = "10px 0";
    footerContainer.style.display = "flex";
    footerContainer.style.justifyContent = "space-between";
    footerContainer.style.alignItems = "center";
    const p = document.createElement("p");
    p.innerHTML = "Copyright &copy; 2023 - All right reserved";
    const mediaLinkContainer = document.createElement("div");
    mediaLinkContainer.innerHTML = `
    <span class="media-icon"><i class="fa-brands fa-twitter"></i></span>
    <span class="media-icon"><i class="fa-brands fa-youtube"></i></span>
    <span class="media-icon"><i class="fa-brands fa-facebook-f"></i></span>
    `;

    footerContainer.append(p, mediaLinkContainer);
    footerSection.append(footerContainer);
    root.append(footerSection)
    
}