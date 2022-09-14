const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  arr = [n1,n2,n3]
  max = Math.max.apply(Math,arr)
  min = Math.min.apply(Math,arr)
  for(num of arr){
    if (num !== max && num !== min) {
      med = Number(num)
      break
    } else med = max
  }
  return {min : min, mid : med, max : max}
}
module.exports = minMedMax
