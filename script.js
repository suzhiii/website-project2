document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const pageLoader = document.getElementById('page-loader');

    // Particles Initialization ---
    if (typeof tsParticles !== 'undefined') { // Check if the library is loaded
        tsParticles.load("tsparticles", { // "tsparticles" is the ID of your div
            
            particles: {
                number: {
                    value: 80, // Number of particles
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#00ffff" // Particle color - your accent cyan
                },
                shape: {
                    type: "circle", // Shape of particles (circle, edge, triangle, polygon, star, image)
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 0.5,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 20,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00a8ff", // Line color - your accent hover color or similar
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5, // Speed of particle movement
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out", // Behavior when particles move out of canvas (out, bounce)
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab" // "grab", "bubble", "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push" // "push", "remove", "bubble", "repulse"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_opacity: 0.7
                    },
                    bubble: {
                        distance: 200,
                        size: 8,
                        duration: 2,
                        opacity: 8,
                        // speed: 3
                    },
                    repulse: {
                        distance: 100
                    },
                    push: {
                        particles_nb: 4 // Number of particles to push on click
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true,
            background: {
                
                image: "",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover"
            }
        }).then(container => {
            console.log("tsParticles loaded successfully");
            
        }).catch(error => {
            console.error("Error loading tsParticles:", error);
        });
    } else {
        console.warn("tsParticles library not found. Skipping particle background.");
    }

    // --- Page Loader ---
    window.addEventListener('load', () => {
        if (pageLoader) {
            pageLoader.style.opacity = '0';
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500); // Match CSS transition
        }
    });
    
    // --- Sample Module Data ---
const modulesData = {
    Fildis: [
        { name: "Aralin 1", type: "pdf", path: "modules/fildis/fModule 1.pdf" },
        { name: "Aralin 2", type: "pdf", path: "modules/fildis/fModule 2.pdf" },
        { name: "Aralin 3", type: "pdf", path: "modules/fildis/fModule 3.pdf" },
        { name: "Aralin 4", type: "pdf", path: "modules/fildis/fModule 4.pdf" },
        { name: "Aralin 5", type: "pdf", path: "modules/fildis/fModule 5.pdf" },
        { name: "Aralin 7", type: "pdf", path: "modules/fildis/fModule 7.pdf" },
        { name: "Aralin 8", type: "pdf", path: "modules/fildis/fModule 8.pdf" },
        { name: "Aralin 9", type: "pdf", path: "modules/fildis/fModule 9.pdf" },
        { name: "Aralin 10", type: "pdf", path: "modules/fildis/fModule 10.pdf" },
        { name: "Aralin 14", type: "pdf", path: "modules/fildis/fModule 11.pdf" },
        { name: "Aralin 13", type: "pdf", path: "modules/fildis/fModule 13.pdf" },
        { name: "Aralin 14", type: "pdf", path: "modules/fildis/fModule 14.pdf" },
        { name: "Aralin 14", type: "pdf", path: "modules/fildis/fModule 15.pdf" },
        { name: "Aralin 14", type: "pdf", path: "modules/fildis/fModule 16.pdf" },
        { name: "Aralin 17", type: "pdf", path: "modules/fildis/fModule 17.pdf" }
    ],
    Komfil: [
        { name: "Aralin 1", type: "pdf", path: "modules/komfil/kModule 1.pdf" },
        { name: "Aralin 2", type: "pdf", path: "modules/komfil/kModule 2.pdf" },
        { name: "Aralin 3", type: "pdf", path: "modules/komfil/kModule 3.pdf" },
        { name: "Aralin 4", type: "pdf", path: "modules/komfil/kModule 4.pdf" },
        { name: "Aralin 5", type: "pdf", path: "modules/komfil/kModule 5.pdf" },
        { name: "Aralin 7", type: "pdf", path: "modules/komfil/kModule 7.pdf" },
        { name: "Aralin 8", type: "pdf", path: "modules/komfil/kModule 8.pdf" },
        { name: "Aralin 9", type: "pdf", path: "modules/komfil/kModule 9.pdf" },
        { name: "Aralin 10", type: "pdf", path: "modules/komfil/kModule 10.pdf" },
        { name: "Aralin 11", type: "pdf", path: "modules/komfil/kModule 11.pdf" },
        { name: "Aralin 13", type: "pdf", path: "modules/komfil/kModule 13.pdf" },
        { name: "Aralin 14", type: "pdf", path: "modules/komfil/kModule 14.pdf" },
        { name: "Aralin 15", type: "pdf", path: "modules/komfil/kModule 15.pdf" },
        { name: "Aralin 16", type: "pdf", path: "modules/komfil/kModule 16.pdf" },
        { name: "Aralin 17", type: "pdf", path: "modules/komfil/kModule 17.pdf" }
    ],
    Soslit: [
        { name: "Aralin 1", type: "pdf", path: "modules/soslit/sModule 1.pdf" },
        { name: "Aralin 2", type: "pdf", path: "modules/soslit/sModule 2.pdf" },
        { name: "Aralin 3", type: "pdf", path: "modules/soslit/sModule 3.pdf" },
        { name: "Aralin 4", type: "pdf", path: "modules/soslit/sModule 4.pdf" },
        { name: "Aralin 5", type: "pdf", path: "modules/soslit/sModule 5.pdf" },
        { name: "Aralin 7", type: "pdf", path: "modules/soslit/sModule 7.pdf" },
        { name: "Aralin 8", type: "pdf", path: "modules/soslit/sModule 8.pdf" },
        { name: "Aralin 9", type: "pdf", path: "modules/soslit/sModule 9.pdf" },
        { name: "Aralin 10", type: "pdf", path: "modules/soslit/sModule 10.pdf" },
        { name: "Aralin 11", type: "pdf", path: "modules/soslit/sModule 11.pdf" },
        { name: "Aralin 13", type: "pdf", path: "modules/soslit/sModule 13.pdf" },
        { name: "Aralin 14", type: "pdf", path: "modules/soslit/sModule 14.pdf" },
        { name: "Aralin 15", type: "pdf", path: "modules/soslit/sModule 15.pdf" },
        { name: "Aralin 16", type: "pdf", path: "modules/soslit/sModule 16.pdf" },
        { name: "Aralin 17", type: "pdf", path: "modules/soslit/sModule 17.pdf" }
        
    ]
};

    // --- Modal Functionality ---
    const modalTriggers = document.querySelectorAll('.content-card');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');
    const overlay = document.getElementById('overlay'); // Assuming you add an overlay div

    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        // overlay.classList.remove('hidden'); // Use if you have a separate overlay div
        body.style.overflow = 'hidden'; // Prevent background scroll
        populateModules(modal);
    }

    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        // overlay.classList.add('hidden');
        body.style.overflow = 'auto';
        resetFileViewer(modal); // Clear any open file in viewer
    }

    function populateModules(modal) {
        const subject = modal.id.replace('Modal', ''); // e.g. fildisModal -> fildis
        const subjectKey = Object.keys(modulesData).find(k => k.toLowerCase() === subject.toLowerCase());
        if (!subjectKey) return;

        const modules = modulesData[subjectKey];
        const modulesListContainer = modal.querySelector('.modules-list');
        modulesListContainer.innerHTML = ''; // Clear previous

        if (modules && modules.length > 0) {
            modules.forEach(module => {
                const item = document.createElement('div');
                item.classList.add('module-item');
                item.innerHTML = `
                    <h3>${module.name}</h3>
                    <div class="actions">
                        ${module.type !== 'link' ? `<button class="view-btn" data-path="${module.path}" data-type="${module.type}">Tingnan</button>` : ''}
                        <a href="${module.path}" ${module.type !== 'link' ? 'download' : 'target="_blank" rel="noopener noreferrer"'}><button>
                            ${module.type === 'link' ? 'Open Link' : 'Ipresenta'}
                        </button></a>
                    </div>
                `;
                modulesListContainer.appendChild(item);
            });
        } else {
            modulesListContainer.innerHTML = '<p>No modules available for this subject yet.</p>';
        }
        addFileViewListeners(modal);
    }

    function addFileViewListeners(modal) {
        const viewButtons = modal.querySelectorAll('.view-btn');
        const fileViewer = modal.querySelector('.file-viewer');
        const modulesList = modal.querySelector('.modules-list');
        const backButton = modal.querySelector('.back-to-modules');
        
        const viewerFrame = modal.querySelector('iframe');
        const imageViewer = modal.querySelector('img');
        const textViewer = modal.querySelector('pre');

        viewButtons.forEach(button => {
            button.addEventListener('click', async () => {
                const path = button.dataset.path;
                const type = button.dataset.type;

                // Hide all viewers initially and modules list
                viewerFrame.style.display = 'none';
                imageViewer.style.display = 'none';
                textViewer.style.display = 'none';
                modulesList.style.display = 'none';
                fileViewer.style.display = 'flex'; // Show the viewer container
                backButton.style.display = 'inline-block';

                if (type === 'pdf') {
                    viewerFrame.src = path;
                    viewerFrame.style.display = 'block';
                } else if (type === 'image') {
                    imageViewer.src = path;
                    imageViewer.style.display = 'block';
                } else if (type === 'text') {
                    try {
                        const response = await fetch(path);
                        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                        const textContent = await response.text();
                        textViewer.textContent = textContent;
                        textViewer.style.display = 'block';
                    } catch (e) {
                        console.error("Error fetching text file:", e);
                        textViewer.textContent = 'Error loading file content.';
                        textViewer.style.display = 'block';
                    }
                }
            });
        });

        backButton.addEventListener('click', () => {
            resetFileViewer(modal);
        });
    }
    
    function resetFileViewer(modal) {
        const fileViewer = modal.querySelector('.file-viewer');
        const modulesList = modal.querySelector('.modules-list');
        const backButton = modal.querySelector('.back-to-modules');
        
        const viewerFrame = modal.querySelector('iframe');
        const imageViewer = modal.querySelector('img');
        const textViewer = modal.querySelector('pre');

        viewerFrame.src = 'about:blank'; // Clear iframe content
        viewerFrame.style.display = 'none';
        imageViewer.src = '';
        imageViewer.style.display = 'none';
        textViewer.textContent = '';
        textViewer.style.display = 'none';
        
        fileViewer.style.display = 'none';
        modulesList.style.display = 'block'; // Show modules list again
        backButton.style.display = 'none';
    }


    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modal = document.querySelector(trigger.dataset.modalTarget);
            openModal(modal);
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    
    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) { // Clicked on the semi-transparent backdrop
                closeModal(modal);
            }
        });
    });
    

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            closeModal(activeModal);
        }
    });

    // --- Interactive 3D Card Tilt ---
    const contentCards = document.querySelectorAll('.content-card');
    const maxRotation = 8; // Max rotation in degrees. Adjust for more/less tilt.
    const perspectiveValue = 1000; // Can be the same as on content-grid or specific for card

    contentCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const cardWidth = card.offsetWidth;
            const cardHeight = card.offsetHeight;

            // Mouse position relative to the center of the card
            const mouseX = e.clientX - cardRect.left - cardWidth / 2;
            const mouseY = e.clientY - cardRect.top - cardHeight / 2;

            // Calculate rotation:
            // The further the mouse is from the center, the more the card rotates.
            // Positive Y mouse movement should result in negative rotateX for intuitive feel.
            const rotateY = (mouseX / (cardWidth / 2)) * maxRotation;
            const rotateX = (-mouseY / (cardHeight / 2)) * maxRotation;

          
            card.style.transform = `perspective(${perspectiveValue}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            // Reset the transform when the mouse leaves the card.
            card.style.transform = `perspective(${perspectiveValue}px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)`;
        });

        // subtle effect on mouse enter before movement
        card.addEventListener('mouseenter', () => {
            // You could apply an initial small scale or lift here if desired,
            // but mousemove will quickly override it.
            // For a smoother start, the transition on the card handles it.
        });
    });

    
});
