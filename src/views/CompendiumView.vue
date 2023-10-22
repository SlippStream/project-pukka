<script setup="ts">
import CompendiumList from '../components/WikiListItem.vue';
</script>
<style type="">
</style>
<template>
    <div class="wiki-character-list">
        <CompendiumList/>
    </div>
</template>

<style>
.wiki-character-list {
    width: 100%;
    display: inline-grid;
}
@media (min-width: 1024px) {
    .wiki-character-list {
        grid-template-columns: auto auto;
        column-gap: 2rem;
        justify-content: space-evenly;
    }
}
</style>