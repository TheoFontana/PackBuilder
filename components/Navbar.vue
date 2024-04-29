<template>
    <div class="nav-bar">
        <router-link to="/"><h1>Pack builder</h1></router-link>
        <div class="links">
            <router-link to="/about">About</router-link>
            <router-link to="/login">Login</router-link>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.nav-bar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
}
</style>