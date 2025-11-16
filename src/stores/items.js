// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: [
      { name: 'HP EliteBook 12', price: 1200, category: 'electronics' },
      { name: 'Coffee Beans', price: 20, category: 'groceries' },
      { name: 'Harry Potter 1', price: 15, category: 'books' },
    ],
    subtotal: 0, // Initial total before any discounts
    discountsApplied: 0, // Sum of all discounts
    totalAfterDiscounts: 0,

    total: {
      electronics: 0,
      groceries: 0,
      books: 0,
    },
  }),
  getters: {
    cartItems(state) {
      return state.items
    },
    electronicsTotal(state) {
      return state.total.electronics
    },
    groceriesTotal(state) {
      return state.total.groceries
    },
    booksTotal(state) {
      return state.total.books
    },
  },
  actions: {
    addToCart(item) {
      if (item.category === 'electronics') {
        this.total.electronics += item.price
      } else if (item.category === 'groceries') {
        this.total.groceries += item.price
      } else {
        this.total.books += item.price
      }
    },
    removeFromCart(item) {
      if (item.category === 'electronics') {
        this.total.electronics -= item.price
      } else if (item.category === 'groceries') {
        this.total.groceries -= item.price
      } else {
        this.total.books -= item.price
      }
    },
  },
})
