
accelReader = document.getElementsByID("accelReader");
function getCadence(){
    console.log("JS loaded")
    accelReader.innerHTML = "HTML modification works";
    DeviceMotionEvent.requestPermission().then(response => {
        if (response == 'granted') {
            console.log("accelerometer permission granted");
            window.addEventListener('devicemotion', (event) => {
                var netAccel = sqrt(event.acceleration.x ^ 2 + event.acceleration.y ^ 2 + event.acceleration.z ^ 2)
                
                
                accelReader.innerHTML = toString(netAccel)
            })

        }
        else{
            accelReader.innerHTML = "JS works!"
        }
    });
}