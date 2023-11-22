<script setup>
  function openNavbar() {
    const navbar = document.getElementById("navbar");
    if (navbar == null) return;
    navbar.style.width = "12rem";

    const texts = document.getElementsByClassName("nav-option-text")
    for (let i = 0; i < texts.length; i++) {
        //texts[i].style.display = "inline-block";
        //texts[i].style.opacity = "1";
    }
  }

  function closeNavbar() {
    const navbar = document.getElementById("navbar");
    if (navbar == null) return;
    navbar.style.width = "4rem";

    const texts = document.getElementsByClassName("nav-option-text")
    for (let i = 0; i < texts.length; i++) {
        //texts[i].style.display = "none";
        //texts[i].style.opacity = "0";
    }
  }
</script>
<style scoped>
header {
  width: fit-content;
  height: fit-content;
  display: inline-block;
}

#router-content {
  display: inline-block;
  transition: width 0.5s;
}

.content-grid {
  display: flex;
}

.nav-img {
  width: 2.5rem;
}

.nav-links li {
  list-style: none;
}

.nav-option-text,
.nav-img {
  display: inline-block;
}

#navbar {
  width: auto;
  height: fit-content;
  justify-content: space-between;
  background-color: #840d10;
  color: white;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.5s;
}

.nav-menu {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 18px;
}

.nav-links,
.nav-menu,
.nav-menu li a {
  height: auto;
  width: inherit;
}

.nav-menu li:hover {
  background-color: #bbb;
  transition: 0.3s ease;
}

.nav-menu li:hover a {
  color: black;
  transition: 0.3s ease;
}

.nav-menu li:hover img {
  filter: invert(0%);
  transition: 0.3s ease;
}

.nav-menu a {
  color: white;
  display: flex;
}

.nav-menu img {
  filter: invert(100%);
}

.nav-menu li {
  padding: 0.5rem;
  display: inline;
  flex: auto;
  width: 100%;
}

.nav-menu li a {
  justify-content: center;
}

@media (min-width: 1024px) {
  header {
    width: fit-content;
    height: fit-content;
    display: inline-block;
  }

  #navbar {
    width: 4rem;
    height: 100vh;
    align-items: baseline;
    display: inline-block;
    overflow-x: hidden;
  }

  .nav-menu {
    display: block;
    text-align: left;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 0;
    transition: 0.5s;
  }

  .nav-menu li {
    margin: 0;
    width: 4;
    display: block;
  }

  .nav-menu li a {
    justify-content: left;
  }

  .nav-option-text {
    padding-left: 0.25rem;
    position: relative;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    opacity: 1;
    display: inline-block;
  }

  .nav-img {
    width: 3.2rem;
    aspect-ratio: initial;
  }
}
</style>
<style src="./styles/global.css">
</style>

<template>
  <div class="content-grid">
    <header>
      <nav id="navbar" @mouseover="openNavbar()" @mouseleave="closeNavbar()">
        <ul class="nav-links">
          <div class="nav-menu">
            <li><RouterLink to="/"><img class="nav-img" src="./assets/icons/house.png"/><span class="nav-option-text">Home</span></RouterLink></li>
            <li><RouterLink to="/game"><img class="nav-img" src="./assets/icons/play.png"/><span class="nav-option-text">Game</span></RouterLink></li>
            <li><RouterLink to="/compendium"><img class="nav-img" src="./assets/icons/book.png"/><span class="nav-option-text">Compendium</span></RouterLink></li>
          </div>
        </ul>
      </nav>
    </header>
    <div id="router-content">
      <RouterView />
    </div>
  </div>
</template>
