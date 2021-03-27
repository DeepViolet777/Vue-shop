<template>
<div class="catalog-item item">
<img class="item_img img" v-bind:src="require('../assets/images/' + product_data.image)" alt="Item image">
    <p class="item_name">{{product_data.name}}</p>
    <p class="item_price">Price {{product_data.price}} Р</p>
    <button 
      class="item_cart-btn btn"
      @click="sendToParent"
      >Add to cart
      </button>
</div>
</template>

<script>
export default {
    name: 'catalog-item',
    props:{
        product_data: {
            type: Object,
            default(){
                return{}
            }
        }
    },
    methods:{
        sendToParent(){
            this.$emit('sendArticle', this.product_data.article)
        }
    }
}
</script>

<style lang="scss">
.item {
    display:flex;
    flex-direction:column;
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    text-align:center;

&_img{
max-width:100px;
margin: 0 auto;
}

&_cart-btn{
padding: 5px;
max-width: 90px;
margin:0 auto;
}
}
</style>
