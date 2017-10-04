var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

console.log(takeANumber(katzDeliLine, "Orin"))
console.log(takeANumber(katzDeliLine, "Celeste"))

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else{
    return "There is nobody waiting to be served!"
  }
}

console.log(nowServing(katzDeliLine))
console.log(nowServing(katzDeliLine))

function currentLine(katzDeliLine){
  if (deliLine.length == 0){
    return "The line is currently empty."
  }
  else{
    let message = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++) {
      message+=`${i+1} ${katzDeliLine[i]}`
    }
    return message
  }
}
console.log(currentLine(katzDeliLine))

