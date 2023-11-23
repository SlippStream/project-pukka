<script setup>
defineProps(['type', 'data'])
</script>
<style scoped>


.wiki-character-list-item-chip {
    background-color: var(--color-background-mute);
    border-radius: 0.5rem;
    padding: 0.25rem 1rem;
    margin-right: 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
}
.chip-townsfolk {
    color: #0166f5;
}

.chip-outsider {
    color: #3399cc;
}

.chip-minion {
    color: #ee8f30;
}

.chip-demon {
    color: #e42;
}

.chip-fabled {
    color: #f6f62e;
}

.chip-traveler {
    background-clip: text;
    background-image: linear-gradient(to right, var(--color-good), var(--color-evil));
}

.chip-good {
    color: var(--color-good);
}

.chip-evil {
    color: var(--color-evil);
}
</style>
<template>
    <span class="wiki-character-list-item-chip" v-show="type != null" v-text="data.toUpperCase()" v-bind:class="'chip-'+data">
    </span>
</template>