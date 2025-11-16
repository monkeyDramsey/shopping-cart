<script setup>
import ShoppingCart from './components/ShoppingCart.vue'
import { useItemsStore } from '@/stores/items'

const store = useItemsStore()
</script>

<template>
  <ShoppingCart :items="store.cartItems"></ShoppingCart>
</template>
