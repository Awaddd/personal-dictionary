<template>
  <div id="app">
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

$g: #8CE5B5;

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
  color: #42b983;
}

p {
  margin: 0;
}


input {
  padding: 0.5rem;
  border-radius: 2px;
  border: 1px solid #eee;
            }

button {
  color: #fff;
  background: $g;
  border: 0;
  border-radius: 2px;
  padding: 7px 15px;
  font-size: 0.70rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
}




</style>
