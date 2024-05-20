let settingco=document.getElementById("settingco");
const settingcontent=document.getElementById("settingContent");
let isDOB=false;
let dateofBirth;
const initialText=document.getElementById("initialtext")
const afterDOBbtn=document.getElementById("afterDOBbtn")
const dbbtn=document.getElementById("dbbtn")
const dobinput=document.getElementById("dobinput")


const yearEl = document.getElementById('year')
const monthsEl = document.getElementById('months')
const dayEl = document.getElementById('day')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondEl = document.getElementById('second')

const maketwoDigitNumber = (number) => {
    return number>9 ? number: `0${number}`;
};

// toggle function

const toggleDateofBirth = () => {
    if(isDOB){
        settingcontent.classList.add('hide');
    }
    else{
        settingcontent.classList.remove('hide');
    }
    isDOB =!isDOB;
    // console.log(isDOB)
};
const udateApp = () =>{
    const currentDate = new Date();
    const datdiff = currentDate - dateofBirth;
    const year = Math.floor(datdiff/(1000*60*60*24*365))
    const months = Math.floor(datdiff/(1000*60*60*24*365)%12)
    const day = Math.floor(datdiff/(1000*60*60*24))%30;
    const hour = Math.floor(datdiff/(1000*60*60))%24;
    const min = Math.floor(datdiff/(1000*60))%60;
    const sec = Math.floor(datdiff/(1000))%60;
    yearEl.innerHTML=maketwoDigitNumber(year);
    monthsEl.innerHTML=months;
    dayEl.innerHTML=maketwoDigitNumber(day);
    hoursEl.innerHTML=maketwoDigitNumber(hour);
    minutesEl.innerHTML=maketwoDigitNumber(min);
    secondEl.innerHTML=maketwoDigitNumber(sec);
};


const localstroageGetter = () =>{
    const year =localStorage.getItem('year');
    const month =localStorage.getItem('month');
    const date =localStorage.getItem('date');
    if(year && month && date){
        dateofBirth =new Date(year, month ,date)
    }
    udateApp();
};

const contentToggler = () =>{
    udateApp();
    if(dateofBirth){
        initialText.classList.add('hide');
        afterDOBbtn.classList.remove('hide');

    }else{
        afterDOBbtn.classList.add('hide');
        initialText.classList.remove('hide');


    }
    
};

const setDOBHandel = () =>{
    const dateString =dobinput.value;
    dateofBirth = dateString ? new Date(dateString) : null;
   
    console.log(dateofBirth);
    if(dateofBirth){
        localStorage.setItem('year', dateofBirth.getFullYear())
        localStorage.setItem('month', dateofBirth.getMonth())
        localStorage.setItem('date', dateofBirth.getDate())
        // initialText.classList.add('hide');
        // afterDOBbtn.classList.remove('hide');
       

    }
    setInterval(() => udateApp(), 1000);
    contentToggler();
    // console.log(dateofBirth);
};
localstroageGetter();
contentToggler();
// setDOBHandel();


// udateApp();
settingco.addEventListener('click' , toggleDateofBirth);
dbbtn.addEventListener('click' , setDOBHandel);