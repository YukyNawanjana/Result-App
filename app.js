const marks = document.getElementById('marks');
const btn = document.querySelector('.submit');
const alert = document.querySelector('.alert');


btn.addEventListener('click', function(e){
    e.preventDefault();
    const marksvlaue = marks.value;
    
    if(marksvlaue){
        displayResult(marksvlaue);
    }else{
       displayAlert('Sorry Please Enter Your Marks',"danger");
    }
    marks.value="";
});


function displayResult(marksvlaue){
    if(marksvlaue >= 90){
        displayAlert("Your Result is A+", "primary");
    }else if(marksvlaue >=75){
        displayAlert("Your Result is A", "info");
    }else if(marksvlaue >=65){
        displayAlert("Your Result is B", "success");
    }else if(marksvlaue >=55){
        displayAlert("Your Result is C", "secondary");
    }else if(marksvlaue >=35){
        displayAlert("Your Result is S", "warning");
    }else{
        displayAlert("Sorry, You are Exam Fail", "danger");
    }
}

function displayAlert(text, action){
    alert.textContent = text;
    alert.style.display ="block";
    alert.classList.add(`alert-${action}`);
}
