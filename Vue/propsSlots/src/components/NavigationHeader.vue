<template>
    <header>
        <nav>
           <RouterLink to="/">Home</RouterLink>
           <RouterLink to="/students">Students</RouterLink>
           <!--This is how to create a link using the name element from routes-->
           <RouterLink :to="{name:'props'}">Props</RouterLink>


        </nav>
    </header>
</template>