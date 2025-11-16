# ShoppinCart

A Vue.js Component for adding and removing items to a shopping cart.
The cart state is managed in a centralized store, which makes it easier to share data between components and ensures data consistency.
The calculation rules are implemented in one function, so for a new rule you only have to adapt one function.
One edge case is considered, if the amount of subtotal is <= 0 you cant remove an item from the cart.

## Requirements

```sh
vue@3.5.24
node@v24.11.0
```

## Installation

```sh
yarn
```

## Run Project

```sh
yarn dev
```

## Run Unit Tests

```sh
yarn test:unit
```
