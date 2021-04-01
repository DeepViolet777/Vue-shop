<template>
<div class="catalog">
    <h2>Catalog</h2>
    <div class="catalog__list">
    <CatalogItem
    v-for="product in PRODUCTS"
    :key="product.article"
    v-bind:product_data="product"
    @sendArticle="showArticle"
     />
    </div>
</div>
</template>

<script>
import CatalogItem from './catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'catalog',
    components: {
        CatalogItem
    },
    props:{

    },
    data(){
     return{
        
     }
    },
    computed:{
    ...mapGetters([
    'PRODUCTS'
    ]),
    },
    methods:{

      ...mapActions([
       'GET_PRODUCTS_API'
      ]),
        showArticle(data){
            console.log(data)
        }
    },
     mounted(){
       this.GET_PRODUCTS_API()
     }
}
</script>

<style lang="scss">
.catalog {
  &__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
}
</style>
