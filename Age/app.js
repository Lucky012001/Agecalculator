const container = document.querySelector('.container');
const error = document.querySelector('.error') 

 function user_Age(){
    const dob_value = document.getElementById('dob').value;
    //console.log(dob_value)

    //dob value - simpal return
    if(!dob_value)return

    //store dob value ---  Date Wed Sep 01 1999 05:30:00 GMT+0530 (India Standard Time)
    let dob = new Date(dob_value)

    //current date
    const today = new Date()

    let diff = today - dob
        let age = diff / (1000 * 60 * 60 * 24 * 365);

    calc_Age(age)
 }

 function calc_Age(age){
    let year = Math.floor(age); //21
    let remaining_year = age - year; //0.2637
    //console.log(remaining_year)

    let month_diff = remaining_year * 12//3.16
    let month = Math.floor(month_diff); //3
   // console.log(month)

    let remaining_month = month_diff - month;//0.16
    //console.log(remaining_month)
    let day = Math.floor(remaining_month * 30);//4
    //console.log(day)

    // console.log(year)
    // console.log(month)
    // console.log(day)
    
    //display age to UI
    display_Age(year,month,day)
 }

 function display_Age(y,m,d){
    const years = document.getElementById('years');
    const months = document.getElementById('months');
    const days = document.getElementById('days');

    years.innerText = y;
    months.innerText = m;
    days.innerText = d;

    if(y >= 0){
        error.style.display = `none`;
    }
    if(y < 0){
        error.style.display = 'block';
    }
 }

 container.addEventListener('input',user_Age)

 
 