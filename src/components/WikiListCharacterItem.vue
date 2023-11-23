<script setup lang="ts">
import { Alignment } from '../scripts/gameEnums';
import CharacterChip from '../components/WikiListCharacterChipItem.vue';

defineProps(['character']);

function getAlignment(type: String): Alignment | null {
    switch (type) {
        case 'townsfolk':
        case 'outsider':
            return Alignment.GOOD;
        case 'minion':
        case 'demon':
            return Alignment.EVIL;
        case 'traveler':
        case 'fabled':
        default:
            return null;
    }
}
</script>

<template>
    <div class="wiki-character-list-item" :style="'background-image: linear-gradient(to right, var(--vt-c-black), rgba(100,100,100,0)), url(/src/assets/icons/characters/' + character.id + '.png);'">
        <div class="wiki-character-list-item-content">
            <span class="wiki-character-list-item-text">{{ character.name }}</span>
            <span class="wiki-character-list-item-chips-container">
                <CharacterChip :type="'alignment'" :data="getAlignment(character.team)"/><CharacterChip :type="'team'" :data="character.team"/>
            </span>
        </div>
    </div>
</template>

<style scoped>
.wiki-character-list-item {
    width: 100vh;
    height: 7rem;
    background-size: 10rem;
    background-repeat: no-repeat;
    background-position: left center;
    /* padding: 1rem 0rem; */
    border-top: 1px solid var(--vt-c-text-light-1);
    border-bottom: 1px solid var(--vt-c-text-light-1);
}

.wiki-character-list-item-content {
    margin-left: 10rem;
}

.wiki-character-list-item-text {
    position: relative;
    overflow-x: hidden;
    font-size: 2.5rem;
    font-family: 'Dumbledor 1', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 500;
    color: var(--color-heading);
}

.wiki-character-list-item-chips-container {
    display: grid;
    grid-template-rows: 2rem;
    grid-template-columns: auto auto auto;
    justify-content: start;
}

@media (min-width: 1024px) {
    .wiki-character-list-item {
        width: 100%;
    }
}
</style>