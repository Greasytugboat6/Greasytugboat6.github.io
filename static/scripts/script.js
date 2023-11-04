
accelReader = document.getElementsByID("accelReader");
function getCadence(){
    console.log("JS loaded")
    accelReader.innerHTML = "HTML modification works";
    DeviceMotionEvent.requestPermission().then(response => {
        if (response == 'granted') {
            console.log("accelerometer permission granted");
            window.addEventListener('devicemotion', (event) => {
                var netAccel = event.acceleration
                
                
                accelReader.innerHTML = toString(netAccel)
            })

        }
        else{
            accelReader.innerHTML = "JS works!"
        }
    });
}