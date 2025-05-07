document.addEventListener('DOMContentLoaded', () => {
    // Connect wallet button functionality
    const connectWalletBtn = document.querySelector('.connect-wallet');
    connectWalletBtn.addEventListener('click', () => {
        // Wallet connection functionality would be implemented here
    });

    // Buy button functionality
    const buyButton = document.querySelector('.buy-button');
    buyButton.addEventListener('click', () => {
        // Buy functionality would be implemented here
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            window.open('http://opensea.io/', '_blank');
        }
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transition = 'all 0.3s ease';
        });
    });
}); 