function calculateAge() {

    var dobInput = document.getElementById('dob').value;
  
    
    if (dobInput) {
      
      var dob = new Date(dobInput);
  
      
      var currentDate = new Date();
  
      
      var age = currentDate.getFullYear() - dob.getFullYear();
  
      
      if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
      }
  
      
      document.getElementById('result').innerText = "Your age is: " + age + " years";
    } else {
      alert("Please enter your date of birth");
    }
  }