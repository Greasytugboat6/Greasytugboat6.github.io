
let accelReader = document.getElementsByClassName("accelReader");
function getCadence(){
    console.log("JS loaded")
    DeviceMotionEvent.requestPermission().then(response => {
        if (response == 'granted') {
            console.log("accelerometer permission granted");
            window.addEventListener('devicemotion', (event) => {
                var netAccel = event.acceleration
                
                accelReader.innerHTML = netAccel
            })

        }
        else{
            accelReader.innerHTML = "JS works!"
        }
    });
}