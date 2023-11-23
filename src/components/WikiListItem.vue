<script setup>
import SearchBar from "../components/WikiSearchBarItem.vue";
import ListCharacter from "../components/WikiListCharacterItem.vue";
import troubleBrewing from "../assets/scripts/tb.json";
import {ref} from 'vue';
function filter(arr, query) {
    return arr.filter((ctx) => ctx.id.toLowerCase().includes(query));
}

const searchText = ref("");
</script>

<template>
    <main>
        <SearchBar v-model="searchText"/>
        <ul>
            <ListCharacter
                v-for="character in filter(troubleBrewing, searchText)"
                :key="character.name"
                :character="character"> 
            </ListCharacter>
        </ul>
    </main>
    
</template>