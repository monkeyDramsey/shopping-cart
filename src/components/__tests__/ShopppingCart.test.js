import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ShoppingCart from '../ShoppingCart.vue'
import { setActivePinia, createPinia } from 'pinia'

const items = {
  cardItems: [
    { name: 'HP EliteBook 12', price: 1200, category: 'electronics' },
    { name: 'Coffee Beans', price: 20, category: 'groceries' },
    { name: 'Harry Potter 1', price: 15, category: 'books' },
  ],
}

describe('ShoppingCart', () => {
  beforeEach(() => {
    // Manually create and set the active Pinia instance for the test
    setActivePinia(createPinia())
  })
  it('adding item to cart', async () => {
    const wrapper = mount(ShoppingCart, {
      props: {
        items: items,
      },
    })

    const vm = wrapper.vm

    // without bulk discount
    await vm.add({ name: 'Coffee Beans', price: 20, category: 'groceries' })
    expect(wrapper.get('[data-testid="totalPayable"]').text()).toBe('totalPayable: 24')

    // with bulk discount
    await vm.add({ name: 'HP EliteBook 12', price: 1200, category: 'electronics' })
    expect(wrapper.get('[data-testid="totalPayable"]').text()).toBe('totalPayable: 1320')
  })
})
