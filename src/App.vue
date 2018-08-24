<template>
  <div id="app">

    <app-header>
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/dictionary">dictionary</router-link>
      </div> -->
    </app-header>

    <router-view/>

    <app-footer/>
  </div>
</template>

<style lang="scss">


body, html {
  margin: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  min-height: 100%;
  align-content:start;
  grid-template-rows: max-content max-content 1fr;
}

.router-link-active, .router-link-exact-active{
  color :#fff;
  text-decoration: none;
}

h1, h2, h3, h4 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: $accent;
}

p {
  margin: 0;
}

i {
  cursor: pointer;
  color: $accent
}

</style>
