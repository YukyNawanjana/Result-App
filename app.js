const marks = document.getElementById('marks');
const btn = document.querySelector('.submit');
const alert = document.querySelector('.alert');


btn.addEventListener('click', function(e){
    e.preventDefault();
    const marksvlaue = marks.value;
    
    if(marksvlaue){
        if(marksvlaue >= 90){
            alert.textContent = "Your Result is A+";
            alert.style.display ="block";
            alert.classList.add('alerts-primary');

        }else if(marksvlaue >=75){
            alert.textContent = "Your Result is A";
            alert.style.display ="block";
            alert.classList.add('alerts-info');

        }else if(marksvlaue >=65){
            alert.textContent = "Your Result is B";
            alert.style.display ="block";
            alert.classList.add('alerts-success');

        }else if(marksvlaue >=55){
            alert.textContent = "Your Result is C";
            alert.style.display ="block";
            alert.classList.add('alerts-secondary');

        }else if(marksvlaue >=35){
            alert.textContent = "Your Result is S";
            alert.style.display ="block";
            alert.classList.add('alerts-warning');
           
        }else{
            alert.textContent = "Sorry, You are Exam Fail";
            alert.style.display ="block";
            alert.classList.add('alerts-danger');
            
        }
    }else{
        alert.textContent = "Sorry Please Enter Your Marks";
        alert.style.display ="block";
        alert.classList.add('alerts-danger');
    }
    marks.value="";
});
