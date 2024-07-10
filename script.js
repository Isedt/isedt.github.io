
function countdown() {
    var count = 3;
    var countdownElement = document.getElementById('countdown');

    var interval = setInterval(function() {
        countdownElement.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(interval);
            countdownElement.style.display = 'none';
            var proposalButton = document.getElementById('proposal-button');
            proposalButton.style.display = 'inline-block';
        }
    }, 1000);
}

document.getElementById('countdown').addEventListener('click', countdown);
