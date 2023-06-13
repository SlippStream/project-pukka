<script setup>
import { getPlayers } from "../scripts/gameFunctions";
import ListPlayerItem from "../components/ListPlayerItem.vue"
</script>

<template>
    <main>
        <ul>
            <ListPlayerItem 
                v-for="player in getPlayers()" 
                :key="player.name" 
                :player="player">
            </ListPlayerItem>
        </ul>
    </main>
</template>
