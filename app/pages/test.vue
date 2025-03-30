<template>
    <Nav />

    <h1>Test function page</h1>

    <button @click="runTest">Run test function</button>

    <output>
        {{ result }}
    </output>
</template>

<script setup lang="ts">
const result = ref('Run test to get result number');

async function runTest() {
    const data = await $fetch('/api/number');

    result.value = data.toString();
}
</script>

<style scoped>
output {
    display: block;
    background: #373737;
    border-radius: 1rem;
    height: 50px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
}
</style>