var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  console.log(`Welocme, ${name}. You are number ${katzDeliLine.length} in line.`)
  return katzDeliLine.length
}
