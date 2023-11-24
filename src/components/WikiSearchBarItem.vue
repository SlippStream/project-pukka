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
    width: 6.2rem;
    font-size: 2rem;
    color: var(--color-text);
    font-weight: 600;
}

#wiki-search-bar:focus {
    border-bottom: 3px solid var(--color-navbar);
    width: 20rem;
}

#searchbar-content {
    width: 100%;
    height: 0rem;
    position: sticky;
    top: 0rem;
    background-color: var(--color-background);
    z-index: 2;
    border-bottom: 1px solid var(--color-background-soft);
    transition: 0.5s;
    overflow-y: hidden;
}

#searchbar-toggle {
    position: fixed;
    bottom: 2.4rem;
    right: 2.4rem;  
    width: 4rem;
    height: 4rem;
    background-color: var(--color-navbar);
    border: none;
    border-radius: 0.5rem;
    z-index: 2;
}

</style>

<script>
window.toggleSearchbar = function() {
    const ctx = document.getElementById("searchbar-content");
    if (ctx.style.height == "0rem" || ctx.style.height == "") {
        ctx.style.height = "9rem";
        return;
    }
    ctx.style.height = "0rem"
}</script>

<template>
    <div id="searchbar-content">
        <input id="wiki-search-bar" 
            placeholder="Search characters..."
            type="text" 
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"/>
        <input type="radio">
    </div>
    <input type="button" id="searchbar-toggle" onclick="toggleSearchbar()"/>
</template>