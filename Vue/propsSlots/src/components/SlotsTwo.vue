<template>
    <div>
        <navigation-header>
        </navigation-header>
        <h1>Your Shopping Cart</h1>
        <slot>No Items are Currently in your cart. </slot>
    </div>
</template>

<script>
import NavigationHeader from './NavigationHeader.vue';
export default{
    components:{
        NavigationHeader
    },
    data(){
        return{

        }
    }
}
</script>