let bill = document.getElementById('bill')
let people = document.getElementById('people')
let btn1 = document.getElementById('btn-1')
let btn2 = document.getElementById('btn-2')
let btn3 = document.getElementById('btn-3')
let btn4 = document.getElementById('btn-4')
let btn5 = document.getElementById('btn-5')
let totalAmt = document.getElementById('total-bill')
let tip = document.getElementById('tip')
let txtLabel = document.getElementById('label-txt')
let resetBtn = document.querySelector('.reset')
let customBtn = document.querySelector('.custom')

resetBtn.addEventListener('click',()=>{
    bill.value = ''
    people.value = ''
    totalAmt.innerHTML = '$0.00'
    tip.innerHTML = '$0.00'
    people.style.border = 'none'
    txtLabel.innerHTML = ''
    customBtn.value = ''
})
customBtn.addEventListener('keydown', (e)=>{
       if(e.keycode === 13){
        calculateTips(customBtn.value)
       }
})
function calculateTips(percentage){
        if(people.value === '0'){
            txtLabel.innerHTML = `can't be zero`
            totalAmt.innerHTML = '0.00'
            tip.innerHTML = '0.00'
            people.style.border = '1px solid red'
        }else{
            billValue = bill.value
        peopleValue = people.value
        tipAmount = percentage / 100 * billValue / peopleValue
        let rounded = tipAmount.toFixed(2)
        tip.innerHTML = `$${rounded}`
    
        amt = billValue / peopleValue + tipAmount
        let amtrounded = amt.toFixed(2)
        totalAmt.innerHTML = `$${amtrounded}`
        }
}

btn1.addEventListener('click', (e)=>{
    e.preventDefault()
    if(people.value === '' || bill.value === ''){
         totalAmt.innerHTML = '$0.00'
         tip.innerHTML = '$0.00'
    }else{
        calculateTips(5)
    }
})
btn2.addEventListener('click', (e)=>{
    e.preventDefault()
    if(people.value === '' || bill.value === ''){
        totalAmt.innerHTML = '$0.00'
        tip.innerHTML = '$0.00'
   }else{
       calculateTips(10)
   }
})
btn3.addEventListener('click', (e)=>{
    e.preventDefault()
    if(people.value === '' || bill.value === ''){
        totalAmt.innerHTML = '$0.00'
        tip.innerHTML = '$0.00'
   }else{
       calculateTips(15)
   }
})
btn4.addEventListener('click', (e)=>{
    e.preventDefault()
    if(people.value === '' || bill.value === ''){
        totalAmt.innerHTML = '$0.00'
        tip.innerHTML = '$0.00'
   }else{
       calculateTips(25)
   }
})
btn5.addEventListener('click', (e)=>{
    e.preventDefault()
    if(people.value === '' || bill.value === ''){
        totalAmt.innerHTML = '$0.00'
        tip.innerHTML = '$0.00'
   }else{
       calculateTips(50)
   }
})

