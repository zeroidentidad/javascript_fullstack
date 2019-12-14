<template>
  <div>
    <h3>{{ title }}</h3>
    <img class="responsive-img" src="../assets/logo1.png">
    <div class="row">
      <div class="col s4 offset-s4">
        <label class="flow-text">DE</label>
        <currency-rates-list @changeRates="changeRates" :list="baseList()" name="base" :initialValue="base"></currency-rates-list>
      </div>
      <div class="col s4 offset-s4">
        <label class="flow-text">A</label>
        <currency-rates-list @changeRates="changeRates" :list="targetList()" name="target" :initialValue="target"></currency-rates-list>
      </div>
    </div>
    <div class="row">
      <div class="col s4 offset-s4">
        <label class="flow-text">UNIDADES</label>
        <input class="center" min="1" @change="convertRates" @keyup="convertRates" type="number" name="base_amount" v-model="base_amount">
      </div>
      <div class="col s12">
        <h5 v-if="base_amount">{{base_amount}} {{base.name}} = {{target_amount}} {{target.name}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { getRates, convertRates } from "../helpers/api_fixer";
import CurrencyRatesList from "./CurrencyRatesList";

export default {
  name: "currency",
  components: {
    CurrencyRatesList
  },
  data() {
    return {
      title: "Convertidor Divisas",
      currency_list: [],
      base: "",
      target: "",
      base_amount: 1,
      target_amount: 1
    };
  },
  created() {
    getRates("EUR").then(res => {
      this.currency_list = res;
      this.base = res[0];
      this.target = res[1];
    });
  },
  methods: {
    changeRates(val, name) {
      this[name] = val;
      this.convertRates();
    },
    convertRates() {
      if (!this.base_amount) {
        return;
      }

      convertRates(this.base.name, this.target.name).then(
        res => (this.target_amount = res * parseInt(this.base_amount, 10))
      );
    },
    baseList() {
      return this.currency_list.filter(
        currency => currency.name != this.target.name
      );
    },
    targetList() {
      return this.currency_list.filter(
        currency => currency.name != this.base.name
      );
    }
  }
};
</script>
