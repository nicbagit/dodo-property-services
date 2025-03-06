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
});
