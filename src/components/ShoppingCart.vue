<template>
  <div class="cart">
    <div class="card">
      <div v-for="item in items">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/assets/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ item.name }}</p>
              <p class="subtitle is-6">{{ item.category }}</p>
              <p class="subtitle is-6">{{ item.price }} €</p>
            </div>
          </div>

          <div class="buttons">
            <b-button @click="add(item)" data-testid="add-btn">+</b-button>
            <b-button @click="remove(item)">-</b-button>
          </div>
        </div>  
      </div>
      
    </div>
    <hr></hr>
    <div class="box">
      <h2>subtotal: {{ subtotal }}</h2>
      <h2>discountsApplied: {{ discountsApplied }}</h2>
      <h2>totalAfterDiscounts: {{ totalAfterDiscounts }}</h2>
      <h2>vatAmount: {{ vatAmount }}</h2>
      <h1 data-testid="totalPayable">totalPayable: {{ totalPayable }}</h1>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useItemsStore } from '../stores/items.js'

const store = useItemsStore()

defineProps({
  items: Array,
})

const amount = reactive({
  subtotal: 0, // Initial total before any discounts
  discountsApplied: 0, // Sum of all discounts
  totalAfterDiscounts: 0,
  vatAmount: 0, // VAT calculated on the final price
  totalPayable: 0,
})

const calculator = () => {
  amount.subtotal = store.total.electronics * 0.9 + store.total.groceries + store.total.books
  const electronicDiscount = store.total.electronics * 0.1
  if (amount.subtotal > 50) {
    amount.totalAfterDiscounts = amount.subtotal - electronicDiscount - 10
  } else {
    amount.totalAfterDiscounts = amount.subtotal
  }
  amount.discountsApplied = amount.subtotal - amount.totalAfterDiscounts
}

function add(item) {
  store.addToCart(item)
  calculator()
}

function remove(item) {
  if (amount.subtotal > 0) {
    store.removeFromCart(item)
    calculator()
  }
}

const subtotal = computed(() => {
  return amount.subtotal
})

const discountsApplied = computed(() => {
  return amount.discountsApplied
})

const totalAfterDiscounts = computed(() => {
  return amount.totalAfterDiscounts
})

const vatAmount = computed(() => {
  return amount.subtotal * 1.2 - amount.subtotal
})

const totalPayable = computed(() => {
  return amount.subtotal * 1.2
})
</script>

<style scoped>
.cart {
  display: inline;
}

h1 {
  font-size: 1.5rem;
  top: -10px;
}
</style>
