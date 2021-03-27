<template>
<div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__list">
    <CatalogItem
    v-for="product in products"
    :key="product.article"
    v-bind:product_data="product"
    @sendArticle="showArticle"
     />
    </div>
</div>
</template>

<script>
import CatalogItem from './catalog-item'

export default {
    name: 'catalog',
    components: {
        CatalogItem
    },
    data(){
     return{
         products: 
    [{
      image: "1.jpg",
      name: "T-shirt 1",
      price: 2100.234234234,
      article: "T1",
      available: true,
      category: "Мужские"
    },
    {
      image: "2.jpg",
      name: "T-shirt 2",
      price: 3150.12312412,
      article: "T2",
      available: true,
      category: "Женские"
    }],
     }
    },
    methods:{
        showArticle(data){
            console.log(data)

        }
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
