document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentProjectImages = [];
    let currentIndex = 0;

    // Define project images (each project has its own gallery)
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

    // Populate the gallery
    projects.forEach((project, index) => {
        const img = document.createElement("img");
        img.src = project.mainImage;
        img.alt = project.alt;
        img.classList.add("gallery-img");
        img.dataset.index = index; // Store project index

        img.addEventListener("click", function () {
            currentProjectImages = project.gallery;
            currentIndex = 0;
            updateModalImage();
            modal.style.display = "flex"; // Show modal
        });

        gallery.appendChild(img);
    });

    // Update modal with current image
    function updateModalImage() {
        modalImg.src = currentProjectImages[currentIndex];
    }

    // Close modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Navigate images
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
        updateModalImage();
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % currentProjectImages.length;
        updateModalImage();
    });

    // Close modal when clicking outside image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    const mediaFiles = [
    "Foundation0.jpeg", "Foundation01.jpeg", "Foundation02.jpeg",
    "Foundation03.jpeg", "Foundation04.jpeg", "Foundation05.mp4",
    "Foundation06.mp4", "Foundation1.jpg", "Foundation2.jpg",
    "Foundation3.jpg", "Foundation4.jpg", "Foundation5.jpg",
    "Foundation6.jpg"
];

const mediaFolder = "/images/grand_gaube/foundation/";
const gallery = document.querySelector(".gallery");

// Populate gallery
mediaFiles.forEach((file, index) => {
    const element = file.endsWith(".mp4") ? document.createElement("video") : document.createElement("img");
    element.src = mediaFolder + file;
    element.dataset.index = index;
    element.onclick = () => openLightbox(index);
    
    if (file.endsWith(".mp4")) element.setAttribute("controls", true);
    
    gallery.appendChild(element);
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxVideo = document.getElementById("lightbox-video");
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.remove("hidden");
}

function updateLightbox() {
    const file = mediaFiles[currentIndex];
    if (file.endsWith(".mp4")) {
        lightboxImage.classList.add("hidden");
        lightboxVideo.src = mediaFolder + file;
        lightboxVideo.classList.remove("hidden");
    } else {
        lightboxVideo.classList.add("hidden");
        lightboxImage.src = mediaFolder + file;
        lightboxImage.classList.remove("hidden");
    }
}

function changeMedia(step) {
    currentIndex = (currentIndex + step + mediaFiles.length) % mediaFiles.length;
    updateLightbox();
}

document.querySelector(".close").onclick = () => lightbox.classList.add("hidden");

    
});
