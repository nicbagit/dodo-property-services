document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalVideo = document.createElement('video');
    modalVideo.controls = true;
    modalVideo.style.maxWidth = '80%';
    modalVideo.style.maxHeight = '80%';
    modalVideo.style.display = 'none';
    modal.appendChild(modalVideo);

    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentMedia = [];
    let currentIndex = 0;

    // Define project images
    const projects = [
        {
            mainImage: "images/project1.jpg",
            alt: "Project 1 - Modern House",
            gallery: ["images/project1-1.jpg", "images/project1-2.jpg", "images/project1-3.jpg"]
        },
        {
            mainImage: "images/project2.jpg",
            alt: "Project 2 - Beachfront Villa",
            gallery: ["images/project2-1.jpg", "images/project2-2.jpg", "images/project2-3.jpg"]
        },
        {
            mainImage: "images/project3.jpg",
            alt: "Project 3 - Renovated Apartment",
            gallery: ["images/project3-1.jpg", "images/project3-2.jpg", "images/project3-3.jpg"]
        }
    ];

    // Populate the gallery with project images
    projects.forEach((project, index) => {
        const img = document.createElement("img");
        img.src = project.mainImage;
        img.alt = project.alt;
        img.classList.add("gallery-img");
        img.dataset.index = index;

        img.addEventListener("click", function () {
            currentMedia = project.gallery;
            currentIndex = 0;
            modalImg.style.display = 'block';
            modalVideo.style.display = 'none';
            updateModalMedia();
            modal.style.display = "flex";
            setupCloseButton();
        });

        gallery.appendChild(img);
    });

    function updateModalMedia() {
        const currentItem = currentMedia[currentIndex];
        if (currentItem.endsWith('.mp4')) {
            modalImg.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = currentItem;
            modalVideo.load();
        } else {
            modalImg.style.display = 'block';
            modalVideo.style.display = 'none';
            modalImg.src = currentItem;
        }
    }

    function setupCloseButton() {
        const closeBtn = document.querySelector("#imageModal .close");
        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                modal.style.display = "none";
                modalVideo.pause();
            });
        } else {
            console.error("Close button not found!");
        }
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + currentMedia.length) % currentMedia.length;
        updateModalMedia();
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % currentMedia.length;
        updateModalMedia();
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalVideo.pause();
        }
    });

    const projectStages = [
        {
            stage: "foundation",
            images: [
                "images/grand_gaube/foundation/Foundation0.jpeg",
                "images/grand_gaube/foundation/Foundation01.jpeg",
                "images/grand_gaube/foundation/Foundation04.jpeg",
                "images/grand_gaube/foundation/Foundation02.jpeg",
                "images/grand_gaube/foundation/Foundation05.mp4",
                "images/grand_gaube/foundation/Foundation06.mp4",
            ],
        },
        {
            stage: "framing",
            images: [
                "images/grand_gaube/framing/Framing01.jpeg",
                "images/grand_gaube/framing/Framing02.jpeg",
                "images/grand_gaube/framing/Framing03.jpeg",
            ],
        },
        {
            stage: "roofing",
            images: [
                "images/grand_gaube/roofing/Roofing01.jpeg",
                "images/grand_gaube/roofing/Roofing02.jpeg",
            ],
        },
    ];

    projectStages.forEach((stageData) => {
        const stageGallery = document.querySelector(`#${stageData.stage}-stage .stage-gallery`);
        const firstImage = stageData.images[0]; // Get the first image

        const img = document.createElement("img");
        img.src = firstImage;
        img.classList.add("gallery-img");
        img.addEventListener("click", function () {
            currentMedia = stageData.images;
            currentIndex = 0; // Start with the first image
            updateModalMedia();
            modal.style.display = "flex";
            setupCloseButton();
        });
        stageGallery.appendChild(img);
    });
});
