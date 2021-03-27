<template>
<div class="main">
    {{title}}
    <Catalog />
    <Cart />
</div>
</template>

<script>
 import Catalog from './catalog'
 import Cart from './cart'

 export default {
     name: 'main',
     components: {
         Catalog,
         Cart

     },
     props: {},
     data() {
         return {
             title: 'Main'
         }
     },
     computed: {},
     methods: {},
     watch: {}
 }
</script>

<style>
.main {
    max-width: 900px;
    margin: 0 auto;
}
</style>
