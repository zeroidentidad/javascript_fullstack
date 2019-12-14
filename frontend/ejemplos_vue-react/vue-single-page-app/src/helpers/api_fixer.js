import axios from 'axios'

const fixerUrl = 'http://data.fixer.io/api/latest?access_key=9b5493ed87c3c0bbccf4305cb9d5de6b'

export function getRates(base) {
  return axios.get(fixerUrl, {
    params: {
      base
    }
  })
    .then(res => {
      const { data } = res,
        currencyList = []

      currencyList.push({
        name: data.base,
        value: 1
      })

      for (let rate in data.rates) {
        currencyList.push({
          name: rate,
          value: data.rates[rate]
        })
      }

      console.log(res);
      return currencyList
    })
}

export function convertRates(base, target) {
  return axios.get(fixerUrl, {
    params: {
      base: base,
      symbols: target
    }
  }).then(res => {
    const { data } = res,
      currencyList = []

    return data.rates[target]
  })
}