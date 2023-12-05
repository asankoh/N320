<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/teams">Team</RouterLink>
    </nav>
  </header>
</template>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
}

nav a{
  text-decoration: none;
  font-size: 18px;
  color: #242728;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-right: 200px;
}

a:hover{
  color: #f2576e;
}
</style>
