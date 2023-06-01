<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="content-grid">
    <header>
      <nav class="navbar">
        <ul class="nav-links">
          <div class="nav-menu">
            <li><RouterLink to="/"><img class="nav-img" src="./assets/house.png"/><span class="nav-option-text">Home</span></RouterLink></li>
            <li><RouterLink to="/game"><img class="nav-img" src="./assets/play.png"/><span class="nav-option-text">Game</span></RouterLink></li>
            <li><RouterLink to="/compendium"><img class="nav-img" src="./assets/book.png"/><span class="nav-option-text">Compendium</span></RouterLink></li>
          </div>
        </ul>
      </nav>
    </header>
    <div class="router-content">
      <RouterView />
    </div>
  </div>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>

<style scoped>
header {  
  width: fit-content;
  height: fit-content;
  display: inline-block;
}

.router-content {
  flex: auto;
  display: inline-block;
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

.nav-option-text, .nav-img {
  display: inline-block;
}

.nav-option-text {
  display: none;
}

.navbar {
  display: flex;
  width: 100vw;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
  background-color: #840D10;
  color: white;
  z-index: 1;
}

.nav-menu {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 18px;
}

.nav-links, .nav-menu, .nav-menu li a {
  height: inherit;
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
}

.nav-menu img {
  filter: invert(100%)
}

.nav-menu li {
  padding: 0.5rem;
  display: inline-block;
  flex: auto;
  width: 100%;
  height: 100%;
}

.nav-menu li a {
  align-content: center;
}

input[type=checkbox] {
  display: none;
}

.nav-hamburger {
  display: none;
  font-size: 2rem;
  user-select: none;
}

@media (min-width: 1024px) {

  .nav-links {
    height: fit-content;
  }
  .navbar {
    width: fit-content;
    height: 100vh;
    align-items: baseline;
  }

  .navbar:hover .nav-option-text {
    display: inline-block;
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
    display: block;
  }

  .nav-option-text {
    display: none;
    vertical-align: 45%;
  }
}
</style>
