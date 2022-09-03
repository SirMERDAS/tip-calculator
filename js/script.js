function calculate()
{
    // TODO check All forms
    let bill = document.getElementById('bill');
    if(bill.value == "" || bill.value > 500)
    {
        alert('wrong')
        bill.classList.add('wrong-input');
    }
    else
    {
        alert(bill);
    }
  
}