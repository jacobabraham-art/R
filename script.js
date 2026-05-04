document.addEventListener('DOMContentLoaded', function() {
    const installButtons = document.querySelectorAll('.install-button');
    const progressBar = document.getElementById('progress-bar');
    const confirmationMessage = document.getElementById('confirmation-message');

    installButtons.forEach(button => {
        button.addEventListener('click', function() {
            const appName = this.dataset.app;
            simulateInstall(appName);
        });
    });

    function simulateInstall(appName) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            progressBar.style.width = progress + '%';

            if (progress >= 100) {
                clearInterval(interval);
                progressBar.style.width = '100%';
                confirmationMessage.style.display = 'block'; // Show confirmation
                setTimeout(() => {
                    confirmationMessage.style.display = 'none'; // Hide after a delay
                    progressBar.style.width = '0%';  // Reset progress bar
                }, 3000); // Hide after 3 seconds
            }
        }, 200); // Simulate install time (adjust as needed)
    }
});
