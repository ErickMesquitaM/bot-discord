
function add(numbers){
  let res = 0
  numbers.map( n => res += n )

  if( isNaN(res)){
    return "erro"
  } else {
    return String(res) 
  }
}

function min(numbers){
  numbers.sort(function(a, b){return b - a})
            
  let res = numbers[0]
  numbers.shift()

  numbers.map( n => res -= n )

  if( isNaN(res)){
    return "erro"
  } else {
    return String(res) 
  }
}

function mult(numbers){
  numbers = numbers.filter( args => { return args !== 0 })

  let res = numbers[0]
  numbers.shift()
  numbers.map( n => res *= n )

  if( isNaN(res)){
    return "erro"
  } else {
    return String(res) 
  }
}

function divi(numbers){
  numbers.sort(function(a, b){return b - a})

  let res = numbers[0]
  numbers.shift()
  numbers.map( n => res /= n )

  if( isNaN(res)){
    return "erro"
  } else {
    return String(res) 
  }
}


module.exports = { add, min, mult, divi }