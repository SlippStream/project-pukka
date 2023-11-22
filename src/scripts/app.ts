export module App {
    document.getElementById("navbar")?.addEventListener("mouseenter", () => {
    const navbar = document.getElementById("navbar");
    if (navbar == null) return;
    //navbar.style.width = "250";

    const routerContent = document.getElementById("router-content");
    if (routerContent == null) return;
    //routerContent.style.marginLeft = "250";

    const texts = navbar.getElementsByClassName("nav-option-text")
    for (let i = 0; i < texts.length; i++) {
      if (texts[i] instanceof HTMLElement) {
        (texts[i] as HTMLElement).style.display = "inline-block";
      }
    }
  });
}