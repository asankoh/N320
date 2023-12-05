<template>
    <header>
        <nav>
           <RouterLink to="/">Home</RouterLink>
           <RouterLink to="/user">User</RouterLink>
           <!--This is how to create a link using the name element from routes
           <RouterLink :to="{name:'props'}">Props</RouterLink> -->
        </nav>
    </header>
</template>

<style>
nav{
    max-width: 100%;
    background-color: #ADD8e6;
    display: flex;
    justify-content: end;
    border-radius: 20px;
}

nav a{
    text-decoration: none;
    padding: 30px;
    color: white;
}
</style>