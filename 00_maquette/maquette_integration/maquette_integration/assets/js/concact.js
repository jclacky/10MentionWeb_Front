function validationForm() {
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();
    let message = document.getElementById('message').value.trim()
    let errorMessage = "";
    

    if (email === "" && subject === "" && message === "") {
      errorMessage = "Veuillez remplir au moins un champ (email, sujet ou message)";
    } else if (email === "") {
      errorMessage = "Veuillez renseigner votre adresse email";
    } else if (subject === "") {
      errorMessage = "Veuillez indiquer le sujet de votre message";
    } else if (message === "") {
      errorMessage = "Veuillez écrire votre message";
    }

    if (errorMessage !== "") {
      alert(errorMessage);
      return false; 
    }

    alert("Message reçu !");
    return true; 
}

  let form = document.querySelector('form');
  form.addEventListener('submit', validationForm);



  let navA = document.querySelectorAll('nav a');

    link.addEventListener('mouseover', function() {
      link.classList.add('active');
    });
  
    link.addEventListener('mouseout', function() {
      link.classList.remove('active');
    });

