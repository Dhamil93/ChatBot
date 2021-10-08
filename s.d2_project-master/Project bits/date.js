function getDate(){
    const dt = 1617134400000; //multiply every dt by 1000 because it uses milliseconds
    const date = new Date(dt);
    // date.setTime(dt);
    console.log(date.toLocaleTimeString());
    const response = document.querySelector('#response');
    response.innerHTML = date.toLocaleTimeString() + " " + date.toDateString().replace('2021', "");
}

