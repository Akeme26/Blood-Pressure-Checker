//Toggle Submit button color 
let resultButton = document.getElementById("Gen_result");
resultButton.addEventListener('click', function(){
    if (resultButton.style.backgroundColor == 'red') {
        resultButton.style.backgroundColor = 'green'}
    else{
        resultButton.style.backgroundColor = 'red';
    }
})


//BP Analysis Function
function BP() {
    let topValue = document.querySelector('#top').value;
    let bottomValue = document.querySelector('#bottom').value;
    
    if (topValue && bottomValue != ""){
        if (topValue < 120 && bottomValue < 80){
            //alert("Blood Pressure is NORMAL")
            result = document.getElementById("result1");
            result.style.backgroundColor = "lightgreen";
            result.innerHTML = "Blood Pressure is NORMAL"
        } else if ((topValue >= 120 && topValue <= 129) && (bottomValue < 80)) {
            //alert("Blood Pressure is ELEVATED")
            result = document.getElementById("result1");
            result.style.backgroundColor = "orange";
            result.innerHTML = "Blood Pressure is ELEVATED"
        } else if ((topValue >= 130 && topValue <= 139) || (bottomValue >= 80 && bottomValue <= 89)) {
            //alert("Blood Pressure is High (Stage 1 Hypertension)")
            result = document.getElementById("result1");
            result.style.backgroundColor = "darkorange";
            result.innerHTML = "Blood Pressure is High (Stage 1 Hypertension)"
        } else if ((topValue >= 140 && topValue <= 180) || (bottomValue >= 90 && bottomValue <=120) ) {
            //alert("Blood Pressure is High (Stage 2 Hypertension)")
            result = document.getElementById("result1");
            result.style.backgroundColor = "red";
            result.innerHTML = "Blood Pressure is High (Stage 2 Hypertension)"
        } else if ((topValue > 180) && (bottomValue > 120)) {
            //alert("Patient is in Hypertensive Crisis (Seek Medical Attention ASAP)")
            result = document.getElementById("result1");
            result.style.backgroundColor = "darkred";
            result.innerHTML = "Patient is in Hypertensive Crisis (Seek Medical Attention ASAP)"
        } else if ((topValue > 180) || (bottomValue > 120)) {
            //alert("Patient is in Hypertensive Crisis (Seek Medical Attention ASAP)")
            result = document.getElementById("result1");
            result.style.backgroundColor = "darkred";
            result.innerHTML = "Patient is in Hypertensive Crisis (Seek Medical Attention ASAP)"
        }
    }else{
        alert("Can't generate result from Nothing; Please input values")
    }
}