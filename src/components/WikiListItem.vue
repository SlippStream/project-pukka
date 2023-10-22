<script setup="ts">
import SearchBar from "../components/WikiSearchBarItem.vue";
import ListCharacter from "../components/WikiListCharacterItem.vue";
import troubleBrewing from "../assets/scripts/tb.json";
</script>
<template>
    <main>
        <SearchBar/>
        <ul>
            <ListCharacter
                v-for="character in troubleBrewing"
                :key="character.name"
                :character="character"> 
            </ListCharacter>
        </ul>
    </main>
    
</template>