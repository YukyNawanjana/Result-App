const marks = document.getElementById('marks');
const btn = document.querySelector('.submit');
const alertMessage = document.querySelector('.alert');
const marksList = document.querySelector('.marks-list');


btn.addEventListener('click', newMarks);


function newMarks(3){

}

btn.addEventListener('click', function(e){
    e.preventDefault();
    const marksvlaue = marks.value;
       
    marksResult(marksvlaue);
    
});

function marksResult(marksvlaue){
    if(marksvlaue){
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
    }else{
        displayAlert("Sorry Please Enter Your Marks", "danger");
    }
    marks.value="";

}


function displayAlert(text, action){
    alertMessage.textContent = text;
    alertMessage.classList.add(`alert-${action}`);

    setTimeout(function(){
        alertMessage.textContent = '';
        alertMessage.classList.remove(`alert-${action}`);
    },2000);
}

