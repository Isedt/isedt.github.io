document.addEventListener('DOMContentLoaded', function() {
    var apiButton = document.getElementById('apiButton');
  
    apiButton.addEventListener('click', function(event) {
      event.preventDefault();
  
      setTimeout(function() {
        location.reload(); 
      }, 4000);
    });
  });
  