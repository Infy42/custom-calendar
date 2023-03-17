const date = new Date();

const renderCalendar = () =>{

    date.setDate(1);

    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    
    document.querySelector('.date h4').innerHTML = date.getFullYear();
    document.querySelector('.date h1').innerHTML = months[date.getMonth()];
    document.querySelector('.date p').innerHTML = "Today: " + new Date().toDateString();
    
    let days = "";
    
    for(let x = firstDayIndex; x > 0; x--){
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }
    
    for(let i = 1; i <= lastDay; i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
        
    }
    
    for(let j = 1; j <= nextDays; j++){
        days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;

    switch(months[date.getMonth()]){
        case "January": document.body.style.backgroundImage = "url('img/jan.jpg')"; break;
        case "February": document.body.style.backgroundImage = "url('img/feb.webp')"; break;
        case "March": document.body.style.backgroundImage = "url('img/mar.jpg')"; break;
        case "April": document.body.style.backgroundImage = "url('img/apr.jpg')"; break;
        case "May": document.body.style.backgroundImage = "url('img/may.jpg')"; break;
        case "June": document.body.style.backgroundImage = "url('img/jun.jpg')"; break;
        
        case "July": document.body.style.backgroundImage = "url('img/jul.jpg')"; break;
        case "August": document.body.style.backgroundImage = "url('img/aug.jpg')"; break;
        case "September": document.body.style.backgroundImage = "url('img/sep.jpg')"; break;
        case "October": document.body.style.backgroundImage = "url('img/oct.jpg')"; break;
        case "November": document.body.style.backgroundImage = "url('img/nov.jpg')"; break;
        case "December": document.body.style.backgroundImage = "url('img/dec.jpg')"; break;
    }
    document.body.style.backgroundSize = "cover";
    document.body.style.transition = '0.3s ease-in';
}



document.querySelector(".prev").addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();