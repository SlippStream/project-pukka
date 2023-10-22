<script setup>
defineProps(['character']);
</script>

<template>
    <div class="wiki-character-list" :style="'background-image: linear-gradient(to right, var(--vt-c-black), rgba(100,100,100,0)), url(/src/assets/icons/characters/' + character.id + '.png);'">
        <span class="wiki-character-list-text">{{ character.name }} -- {{ character.team }}</span>
    </div>
</template>

<style scoped>
.wiki-character-list {
    width: 100%;
    height: 6rem;
    display: grid;
    background-size: 9rem;
    background-repeat: no-repeat;
    background-position: left center;
    padding: 1rem 0rem;
    border-top: 1px solid var(--vt-c-text-light-1);
    border-bottom: 1px solid var(--vt-c-text-light-1);
}
.wiki-character-list-text {
    position: relative;
    top: 50%;
    bottom: 50%;
    font-size: 2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
    font-weight: 500;
    margin-left: 2.5rem;
    text-shadow: 0.08em 0.08em 10px;
}
</style>