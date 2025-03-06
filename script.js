document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const currentProjectsGallery = document.querySelector("#current-projects .gallery");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentImages = [];
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

    // Close modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Navigate images
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateModalImage();
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateModalImage();
    });

    // Close modal when clicking outside image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Dynamically load current project images
    const currentProjectImages = [
        "images/grand_gaube/foundation/Foundation0.jpeg",
        "images/grand_gaube/foundation/Foundation01.jpeg"
    ];

    currentProjectImages.forEach((image, index) => {
        const img = document.createElement("img");
        img.src = image;
        img.alt = "Current Project Image " + (index + 1);
        img.classList.add("gallery-img");

        img.addEventListener("click", function () {
            openModal(currentProjectImages, index);
        });

        currentProjectsGallery.appendChild(img);
    });
});
