function startCountdown() {
    var count = 3;
    var countdownElement = document.getElementById('countdown');
    var proposalButton = document.getElementById('proposal-button');

    proposalButton.style.display = 'none';

    countdownElement.style.display = 'inline-block';

    var interval = setInterval(function() {
        countdownElement.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(interval);
            countdownElement.style.display = 'block'; // Hide countdown after countdown finishes
            var proposalText = document.getElementById('proposal-text');
            proposalText.style.display = 'none'; // Show proposal text
        } 
    }, 800);
}