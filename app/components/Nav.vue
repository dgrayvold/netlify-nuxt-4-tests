<template>
    <nav>
        <li>
            <NuxtLink to="/">Home</NuxtLink>
        </li>

        <li>
            <NuxtLink to="/test">Test Page</NuxtLink>
        </li>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    gap: 1rem;
}

a {
    color: #015ff7;
    text-decoration: none;
}

li {
    list-style: none;
}
</style>