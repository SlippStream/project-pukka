<script setup>
defineProps(['player']);
</script>

<template>
    <main>
        {{ player.character.name }} -- {{ player.character.ability }}
    </main>
</template>