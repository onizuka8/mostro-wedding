// Sample game data - you can modify this with your actual games and YouTube links
const games = [
    {
        id: 1,
        title: "Catan",
        description: "Learn to build settlements, trade resources, and become the dominant force on the island of Catan.",
        duration: "8 min",
        difficulty: "Easy",
        youtubeUrl: "https://www.youtube.com/embed/8Yj0Y3GKE40", // Replace with actual YouTube embed URL
        image: "images/catan.jpg",
        players: "3-4",
        category: "Strategy"
    },
    {
        id: 2,
        title: "Ticket to Ride",
        description: "Connect cities across the map by claiming railway routes and completing destination tickets.",
        duration: "6 min",
        difficulty: "Easy",
        youtubeUrl: "https://www.youtube.com/embed/EXAMPLE2", // Replace with actual YouTube embed URL
        image: "images/ticket-to-ride.jpg",
        players: "2-5",
        category: "Family"
    },
    {
        id: 3,
        title: "Pandemic",
        description: "Work together as a team to stop the spread of diseases and save humanity.",
        duration: "10 min",
        difficulty: "Medium",
        youtubeUrl: "https://www.youtube.com/embed/EXAMPLE3", // Replace with actual YouTube embed URL
        image: "images/pandemic.jpg",
        players: "2-4",
        category: "Cooperative"
    },
    {
        id: 4,
        title: "Carcassonne",
        description: "Build the medieval landscape by placing tiles and claiming features with your meeples.",
        duration: "7 min",
        difficulty: "Easy",
        youtubeUrl: "https://www.youtube.com/embed/EXAMPLE4", // Replace with actual YouTube embed URL
        image: "images/carcassonne.jpg",
        players: "2-5",
        category: "Tile Placement"
    },
    {
        id: 5,
        title: "Settlers of Catan",
        description: "A classic strategy game of resource management and trading on the island of Catan.",
        duration: "9 min",
        difficulty: "Medium",
        youtubeUrl: "https://www.youtube.com/embed/EXAMPLE5", // Replace with actual YouTube embed URL
        image: "images/settlers-catan.jpg",
        players: "3-4",
        category: "Strategy"
    },
    {
        id: 6,
        title: "Pandemic Legacy",
        description: "An epic campaign where your decisions permanently change the game world.",
        duration: "12 min",
        difficulty: "Hard",
        youtubeUrl: "https://www.youtube.com/embed/EXAMPLE6", // Replace with actual YouTube embed URL
        image: "images/pandemic-legacy.jpg",
        players: "2-4",
        category: "Legacy"
    }
];

// DOM elements
const gamesGrid = document.getElementById('gamesGrid');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const videoFrame = document.getElementById('videoFrame');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

// Load games on page load
document.addEventListener('DOMContentLoaded', function () {
    loadGames();
    setupModalEvents();

    // Check for URL parameters to open a specific game
    checkUrlParameters();
});

// Function to check URL parameters and open specific game
function checkUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('game');
    const gameSlug = urlParams.get('slug');

    if (gameId) {
        // Find game by ID
        const game = games.find(g => g.id == gameId);
        if (game) {
            // Small delay to ensure page is loaded
            setTimeout(() => {
                openVideoModal(game);
            }, 500);
        }
    } else if (gameSlug) {
        // Find game by slug (URL-friendly title)
        const game = games.find(g =>
            g.title.toLowerCase().replace(/[^a-z0-9]/g, '-') === gameSlug.toLowerCase()
        );
        if (game) {
            setTimeout(() => {
                openVideoModal(game);
            }, 500);
        }
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
    card.onclick = () => openVideoModal(game);

    card.innerHTML = `
        <div class="game-image">
            <img src="${game.image}" alt="${game.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="game-image-fallback" style="display: none;">
                <span>🎮</span>
            </div>
        </div>
        <div class="game-content">
            <h3 class="game-title">${game.title}</h3>
            <p class="game-description">${game.description}</p>
            <div class="game-meta">
                <span>⏱️ ${game.duration}</span>
                <span>👥 ${game.players} players</span>
                <span>📊 ${game.difficulty}</span>
            </div>
            <div class="game-category">
                <span class="category-tag">${game.category}</span>
            </div>
            <button class="play-button" onclick="event.stopPropagation(); openVideoModal(${JSON.stringify(game).replace(/"/g, '&quot;')})">
                <i class="fas fa-play"></i>
                Watch Tutorial
            </button>
        </div>
    `;

    return card;
}

// Function to open video modal
function openVideoModal(game) {
    // Convert YouTube URL to embed format if needed
    let embedUrl = game.youtubeUrl;
    if (embedUrl.includes('youtube.com/watch')) {
        const videoId = embedUrl.split('v=')[1];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    videoFrame.src = embedUrl;
    modalTitle.textContent = game.title;
    modalDescription.textContent = game.description;
    videoModal.style.display = 'block';

    // Update URL to include game parameter (without reloading page)
    const gameSlug = game.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const newUrl = `${window.location.pathname}?game=${game.id}&slug=${gameSlug}`;
    window.history.pushState({ game: game.id }, '', newUrl);

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Function to close video modal
function closeVideoModal() {
    videoModal.style.display = 'none';
    videoFrame.src = ''; // Stop video playback

    // Clean up URL when modal is closed
    window.history.pushState({}, '', window.location.pathname);

    document.body.style.overflow = 'auto';
}

// Setup modal event listeners
function setupModalEvents() {
    // Close modal when clicking the close button
    closeModal.addEventListener('click', closeVideoModal);

    // Close modal when clicking outside the modal content
    videoModal.addEventListener('click', function (event) {
        if (event.target === videoModal) {
            closeVideoModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && videoModal.style.display === 'block') {
            closeVideoModal();
        }
    });
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
