<template>
  <div>
    <h1>Oops !</h1>
    <h3>The page you´re looking for is not here</h3>
    <router-link :to="{ name: 'event-list' }">Back to the home</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
