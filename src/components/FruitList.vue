<template>
  <div>
    <ol>
      <li v-for="fruit in fruits" :key="fruit">
        {{ fruit }}
      </li>
    </ol>
    <p>Number of fruits: {{ numFruits }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ["apple", "banana", "orange"],
    };
  },
  computed: {
    numFruits() {
      return this.fruits.length;
    },
  },
  methods: {
    addFruit(fruit) {
        this.fruits.push(fruit)
    }
  },
};
</script>
