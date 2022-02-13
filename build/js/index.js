document.getElementById('show-element').onclick = () => {
    const element = document.getElementById('to-show');
    const mobile = document.getElementById('mobile');
    const menu = document.getElementById('menu');
    if (element.className === 'hide') {
        element.className = 'show';
        mobile.style.display = "block";
        menu.style.minWidth = "104px";
        document.getElementById('show-element').classList.remove("icon-close");

    } else {
        element.className = 'hide';
        mobile.style.display = "none";
        menu.style.setProperty("min-width", "240px", "important");
        document.getElementById('show-element').classList.add("icon-close");

    }
  }