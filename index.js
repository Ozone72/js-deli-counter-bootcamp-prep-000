var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  console.log(`Welocme, ${name}. You are number ${katzDeliLine.length} in line.`)
  return katzDeliLine.length
}

takeANumber(katzDeliLine, "Orin")
takeANumber(katzDeliLine, "Celeste")
takeANumber(katzDeliLine, "Joanna")
takeANumber(katzDeliLine, "Jane")
takeANumber(katzDeliLine, "Steph")
takeANumber(katzDeliLine, "Rob")
takeANumber(katzDeliLine, "Vincent")

