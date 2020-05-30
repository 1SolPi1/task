<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>

    <Modal/>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import Main from "./components/Main";
  import Modal from "./components/Modal/index";

export default {
  name: 'App',
  components: {
    Modal,
    Main,
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
