<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<style>
#wiki-search-bar {
    border: none;
    transition: 0.4s;
    border-bottom: 1px solid gray;
    background: none;
    outline:none;
    width: 6rem;
    font-size: 2rem;
    color: var(--color-text);
}

#wiki-search-bar:focus {
    border-bottom: 1px solid blue;
    width: 20rem;
}

#searchbar-content {
    width: 100%;
    height: 4rem;
    position: sticky;
    top: 0rem;
    background-color: var(--color-background);
    z-index: 2;
    border-bottom: 1px solid var(--color-background-soft);
    transition: 0.5s;
}

#searchbar-toggle {
    position: absolute;
    top: 3rem;
    right: 3rem;
    width: 4rem;
    height: 4rem;
    background-color: var(--color-background-mute);
    border: none;
    border-radius: 0.5rem;
    z-index: 100;
}

</style>

<template>
    <div id="searchbar-content">
        <input id="wiki-search-bar" 
            placeholder="Search characters..."
            type="text" 
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"/>
    </div>
    <input type="button" id="searchbar-toggle"/>
</template>