
//BP Analysis Function
function BP() {
    let topValue = document.querySelector('#top').value;
    let bottomValue = document.querySelector('#bottom').value;
    
    if (topValue && bottomValue != ""){
        if (topValue < 120 && bottomValue < 80){
            result = document.getElementById("result1");
            result.style.backgroundColor = "lightgreen";
            result.innerHTML = "Blood Pressure is NORMAL"
            
        } else if ((topValue == 120 || topValue <= 129) && (bottomValue < 80)) {
            result = document.getElementById("result1");
            result.style.backgroundColor = "orange";
            result.innerHTML = "Blood Pressure is ELEVATED"
            
        } else if ((topValue == 130 || topValue <= 139) || ((bottomValue == 80) || (bottomValue <= 89))) {
            result = document.getElementById("result1");
            result.style.backgroundColor = "darkorange";
            result.innerHTML = "Blood Pressure is High (Stage 1 Hypertension)"
            
        } else if (((topValue > 140) && (topValue <= 140)) || ((bottomValue > 90)) && (bottomValue <=120) ) {
            result = document.getElementById("result1");
            result.style.backgroundColor = "red";
            result.innerHTML = "Blood Pressure is High (Stage 2 Hypertension)"
            
        } else if ((topValue > 180) && (bottomValue > 120)) {
            result = document.getElementById("result1");
            result.style.backgroundColor = "darkred";
            result.innerHTML = "Patient is in Hypertensive Crisis (Seek Medical Attention ASAP)"
            
        } else if ((topValue > 180) || (bottomValue > 120)) {
            result = document.getElementById("result1");
            result.style.backgroundColor = "darkred";
            result.innerHTML = "Patient is in Hypertensive Crisis (Seek Medical Attention ASAP)"
        }
    }else{
        alert("Can't generate result from Nothing; Please input values")
    }
}
