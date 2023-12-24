<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  background-color: #eeeeee;
  border-radius: 0.25rem;
  font-weight: 500;
  border: none;
  padding: 0.25rem 0.5rem;
  color: #567868;
}

button:hover {
  background-color: #e6e6e6;
  color: #0096e8;
  cursor: pointer;
}
</style>
