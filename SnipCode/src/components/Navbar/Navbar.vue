<template>
  <nav>
    <router-link class="navbar-logo" to="/">SnipCode</router-link>
    <button @click="newSnippet" class="btn-new">
      <svg aria-hidden="true" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
      New Snippet</button>
  </nav>
</template>
<script>
export default {
  name:"Navbar",
  methods:
  {
    newSnippet()
    {
      let routeData = this.$router.resolve({path: '/'});
      window.open(routeData.href, '_blank');
    }
  }
}
</script>
<style lang="scss" src="./Navbar.scss" scoped></style>