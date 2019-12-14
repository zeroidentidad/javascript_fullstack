<template>
  <select class="browser-default" :name="name" v-model="value">
    <option :value="currency" v-for="(currency, key) in list" :key="key">
      {{ currency.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: "currency-rates-list",
  data() {
    return {
      value: {}
    };
  },
  //https://vuejs.org/v2/guide/computed.html#Watchers
  watch: {
    initialValue(val, oldVal) {
      this.value = val;
    },
    value(val, oldVal) {
      this.changeRates(val);
    }
  },
  methods: {
    changeRates(val) {
      this.$emit("changeRates", val, this.name);
    }
  },
  props: ["list", "initialValue", "name"]
};
</script>
