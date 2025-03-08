document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const currentProjectsGallery = document.querySelector("#current-projects .gallery");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalVideo = document.createElement('video'); // Create video element
    modalVideo.controls = true;
    modalVideo.style.maxWidth = '80%';
    modalVideo.style.maxHeight = '80%';
    modalVideo.style.display = 'none'; // Initially hide video
    modal.appendChild(modalVideo); // Append to modal

    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentMedia = []; // Use media to handle both images and videos
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
            updateModalMedia();
            modal.style.display = "flex";
        });

        gallery.appendChild(img);
    });

    // Function to open modal with media
    function openModal(mediaArray, index) {
        currentMedia = mediaArray;
        currentIndex = index;
        updateModalMedia();
        modal.style.display = "flex";
    }

    // Update modal with current media
    function updateModalMedia() {
        const currentItem = currentMedia[currentIndex];
        if (currentItem.endsWith('.mp4')) { // Check if it's a video
            modalImg.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = currentItem;
            modalVideo.load(); // Load the video
        } else {
            modalImg.style.display = 'block';
            modalVideo.style.display = 'none';
            modalImg.src = currentItem;
        }
    }

    // Close modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        modalVideo.pause(); // Pause video on close
    });

    // Navigate media
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + currentMedia.length) % currentMedia.length;
        updateModalMedia();
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % currentMedia.length;
        updateModalMedia();
    });

    // Close modal when clicking outside media
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalVideo.pause(); // Pause video on outside click
        }
    });

    // Dynamically load current project images
    const currentProjectData = {
        mainImage: "images/grand_gaube/foundation/Foundation0.jpeg",
        alt: "Grand Gaube Project",
        gallery: [
            "images/grand_gaube/foundation/Foundation0.jpeg",
            "images/grand_gaube/foundation/Foundation01.jpeg",
            "images/grand_gaube/foundation/Foundation04.jpeg",
            "images/grand_gaube/foundation/Foundation02.jpeg",
            "images/grand_gaube/foundation/Foundation05.mp4",
            "images/grand_gaube/foundation/Foundation06.mp4"
        ]
    };

    const currentProjectThumbnail = document.createElement("img");
    currentProjectThumbnail.src = currentProjectData.mainImage;
    currentProjectThumbnail.alt = currentProjectData.alt;
    currentProjectThumbnail.classList.add("gallery-img");

    currentProjectThumbnail.addEventListener("click", function () {
        currentMedia = currentProjectData.gallery;
        currentIndex = 0;
        updateModalMedia();
        modal.style.display = "flex";
    });

    currentProjectsGallery.appendChild(currentProjectThumbnail);
});
