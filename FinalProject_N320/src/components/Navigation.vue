<template>
    <header>
        <nav>
           <RouterLink to="/">Sessions</RouterLink>
           <RouterLink to="/user">My Sessions</RouterLink>
           <!--This is how to create a link using the name element from routes
           <RouterLink :to="{name:'props'}">Props</RouterLink> -->
        </nav>
    </header>
</template>

<style>


nav{
    max-width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: end;
}

nav a{
    font-size: 18px;
    text-decoration: none;
    margin: 0 120px;
    color: #223a2b;
}
</style>