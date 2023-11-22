<script setup="ts">
import CompendiumList from '../components/WikiListItem.vue';
</script>
<style type="">
</style>
<style scoped>

#wiki-character-list {
    margin: 0px;
    min-height: 100%;
    width: 100%;
}

#wiki-character-list .wiki-character-list-item {

}
@media (min-width: 1024px) {
    #wiki-character-list {
        grid-template-columns: auto auto;
        column-gap: 2rem;
        justify-content: space-evenly;
    }
}
</style>
<template>
    <div id="wiki-content-box">
        <div id="wiki-character-list">
        <CompendiumList/>
        </div>
    </div>
</template>