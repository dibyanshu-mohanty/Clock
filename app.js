function setTime(time){
    if (time < 10){
        time = "0" + time.toString()
        return time
    } else {
        time = time.toString()
        return time
    }
}
const arr = ["SUN","MON","TUE","WED","THURS","FRI","SAT"]
window.setInterval(function(){
    let hours = new Date().getHours()
    let mins = new Date().getMinutes()
    let secs = new Date().getSeconds()
    let day = new Date().getDay()

    document.getElementById("hours").textContent = setTime(hours) + " :"
    document.getElementById("mins").textContent = setTime(mins) + " :"
    document.getElementById("secs").textContent = setTime(secs)
    document.getElementById("days").textContent = arr[day]

},1000)