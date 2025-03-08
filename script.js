document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const currentProjectsGallery = document.querySelector("#current-projects .gallery");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalVideo = document.createElement('video');
    modalVideo.controls = true;
    modalVideo.style.maxWidth = '80%';
    modalVideo.style.maxHeight = '80%';
    modalVideo.style.display = 'none';
    modal.appendChild(modalVideo);

    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentImages = []; // For project gallery images
    let currentMedia = []; // For current project media (images and videos)
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
            currentImages = project.gallery;
            currentIndex = 0;
            modalImg.style.display = 'block'; // Ensure image is shown
            modalVideo.style.display = 'none'; // Ensure video is hidden
            updateModalImage();
            modal.style.display = "flex";
        });

        gallery.appendChild(img);
    });

    // Function to open modal with an image
    function openModal(imageArray, index) {
        currentImages = imageArray;
        currentIndex = index;
        updateModalImage();
        modal.style.display = "flex";
    }

    // Update modal with current image
    function updateModalImage() {
        modalImg.src = currentImages[currentIndex];
    }

    // Update modal with current media (images and videos)
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

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        modalVideo.pause();
    });

    prevBtn.addEventListener("click", function () {
        if (currentMedia.length > 0) {
            currentIndex = (currentIndex - 1 + currentMedia.length) % currentMedia.length;
            updateModalMedia();
        } else if (currentImages.length > 0) {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            updateModalImage();
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentMedia.length > 0) {
            currentIndex = (currentIndex + 1) % currentMedia.length;
            updateModalMedia();
        } else if (currentImages.length > 0) {
            currentIndex = (currentIndex + 1) % currentImages.length;
            updateModalImage();
        }
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalVideo.pause();
        }
    });

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
