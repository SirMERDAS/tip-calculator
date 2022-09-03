let bill = document.getElementById('bill');
let billIco = document.getElementById('bill-ico');
let customTip = document.getElementById('custom-tip');
let peopleSelector = document.getElementById('people-selector');
let peopleIco = document.getElementById('people-ico');
function calculate()
{
    let tipAmount = document.querySelector('input[type=radio][name=tipAmount]:checked');
    let tipAmountManual = document.getElementsByName("tipAmountCustom")[0].value;
    if(bill.value == "" || bill.value > 500 || bill.value < 1)
    {
        
        bill.classList.add('wrong-input');
        billIco.classList.add('wrong-input-icon');
        document.getElementById('bill-error').innerText = "Should be between 1 and 500 ";
    }
    else if(customTip.value != "")
    {
        if(customTip.value > 100 || customTip.value < 1 )
        {
            customTip.classList.add('wrong-custom-tip');
        }
        else
        {
            if(peopleSelector.value > 20 || peopleSelector.value < 1 )
            {
                peopleSelector.classList.add('wrong-input');
                peopleIco.classList.add('wrong-input-icon');
                document.getElementById('people-error').innerText = "Should be between 1 and 20 ";
            }
            else
            {    
                document.getElementById('custom-tip').value = '';
                let eachPerson = bill.value / peopleSelector.value;
                let percentage = tipAmountManual / 100;
                let mainAmount = eachPerson *  percentage;
                let roundedMainAmount = mainAmount.toFixed(2);
                let total = eachPerson + mainAmount;
                let totalRounded = total.toFixed(2);
                document.getElementById("price").innerText = `$${roundedMainAmount}`;
                document.getElementById("totalPrice").innerText = `$${totalRounded}`;
            }
        }
        
    }
    else
    {
        let eachPerson = bill.value / peopleSelector.value;
        let percentage = tipAmount.value / 100;
        let mainAmount = eachPerson *  percentage;
        let roundedMainAmount = mainAmount.toFixed(2);
        let total = eachPerson + mainAmount;
        let totalRounded = total.toFixed(2);
        document.getElementById("price").innerText = `$${roundedMainAmount}`;
        document.getElementById("totalPrice").innerText = `$${totalRounded}`;
    }
}

function tipDefiner()
{
    var radio = document.querySelector('input[type=radio][name=tipAmount]:checked');
        if(radio != null)
        {
        radio.checked = false;
        }
}
function deleteBillMsg()
{
    bill.classList.remove('wrong-input');
    billIco.classList.remove('wrong-input-icon');
    document.getElementById('bill-error').innerText = ""; 
}
function deletePeopleMsg()
{
    peopleSelector.classList.remove('wrong-input');
    peopleIco.classList.remove('wrong-input-icon');
    document.getElementById('people-error').innerText = "";
}
function deleteTipMsg()
{
    customTip.classList.remove('wrong-custom-tip');
}