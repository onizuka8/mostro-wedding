// DOM elements
const gamesGrid = document.getElementById('gamesGrid');

// Load games on page load
document.addEventListener('DOMContentLoaded', function () {
    loadGames();

    // Check for URL parameters to redirect to tutorial page
    checkUrlParameters();
});

// Function to check URL parameters and redirect to tutorial page
function checkUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('game');
    const gameSlug = urlParams.get('slug');

    if (gameId || gameSlug) {
        // Redirect to tutorial page with the same parameters
        const tutorialUrl = `tutorial.html?${window.location.search}`;
        window.location.href = tutorialUrl;
    }
}

// Function to load games into the grid
function loadGames() {
    gamesGrid.innerHTML = '';

    games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// Function to create a game card
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.onclick = () => goToTutorial(game);

    card.innerHTML = `
        <div class="game-image">
            <img src="${game.image}" alt="${game.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="game-image-fallback" style="display: none;">
                <span>🎮</span>
            </div>
        </div>
        <div class="game-content">
            <h3 class="game-title">${game.title}</h3>
            <p class="game-description">${game.cardDescription || game.description}</p>
            <div class="game-meta">
                <span>⏱️ ${game.duration}</span>
                <span>👥 ${game.players}</span>
                <span>🎲 ${game.category}</span>
            </div>
            <button class="play-button" onclick="event.stopPropagation(); goToTutorial(${JSON.stringify(game).replace(/"/g, '&quot;')})">
                <i class="fas fa-play"></i>
                Guarda il tutorial
            </button>
        </div>
    `;

    return card;
}

// Function to navigate to tutorial page
function goToTutorial(game) {
    const gameSlug = game.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const tutorialUrl = `tutorial.html?game=${game.id}&slug=${gameSlug}`;
    window.location.href = tutorialUrl;
}



// Function to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url) {
    if (url.includes('youtube.com/watch')) {
        const videoId = url.split('v=')[1];
        const ampersandPosition = videoId.indexOf('&');
        if (ampersandPosition !== -1) {
            videoId = videoId.substring(0, ampersandPosition);
        }
        return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
}

// Add some nice animations when cards come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe game cards for animation
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        const cards = document.querySelectorAll('.game-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});
