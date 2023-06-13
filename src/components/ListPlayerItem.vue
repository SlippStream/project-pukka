<script setup>
defineProps(['player']);
</script>

<template>
    <main>
        {{ player.name }} -- {{ player.ability }}
    </main>
</template>