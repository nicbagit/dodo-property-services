document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const currentProjectsGallery = document.querySelector("#current-projects .gallery");

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

    // Populate the gallery with project images (Lightbox setup)
    projects.forEach((project, index) => {
        const img = document.createElement("a");
        img.href = project.mainImage; // Set href to main image
        img.dataset.lightbox = "project-gallery"; // Use data-lightbox attribute for Lightbox
        img.title = project.alt; // Set title for Lightbox

        const innerImg = document.createElement("img");
        innerImg.src = project.mainImage;
        innerImg.alt = project.alt;
        innerImg.classList.add("gallery-img");

        img.appendChild(innerImg);
        gallery.appendChild(img);

        // Add gallery images to lightbox group
        project.gallery.forEach(galleryImage => {
            const hiddenLink = document.createElement("a");
            hiddenLink.href = galleryImage;
            hiddenLink.dataset.lightbox = "project-gallery";
            hiddenLink.style.display = "none"; // Hide these links
            document.body.appendChild(hiddenLink);
        });
    });

    // Dynamically load current project images and videos (Lightbox setup)
    const currentProjectMedia = [
        { type: "image", src: "images/grand_gaube/foundation/Foundation0.jpeg", alt: "Current Project Image 1" },
        { type: "image", src: "images/grand_gaube/foundation/Foundation01.jpeg", alt: "Current Project Image 2" },
        { type: "image", src: "images/grand_gaube/foundation/Foundation04.jpeg", alt: "Current Project Image 3" },
        { type: "image", src: "images/grand_gaube/foundation/Foundation02.jpeg", alt: "Current Project Image 4" },
        { type: "video", src: "images/grand_gaube/foundation/Foundation05.mp4", alt: "Current Project Video 1" },
        { type: "video", src: "images/grand_gaube/foundation/Foundation06.mp4", alt: "Current Project Video 2" }
    ];

    currentProjectMedia.forEach((media, index) => {
        const mediaElement = document.createElement(media.type === "image" ? "a" : "video");
        mediaElement.href = media.src;
        mediaElement.dataset.lightbox = "current-projects";
        mediaElement.title = media.alt;

        if (media.type === "image") {
            const img = document.createElement("img");
            img.src = media.src;
            img.alt = media.alt;
            img.classList.add("gallery-img");
            mediaElement.appendChild(img);
        } else {
            mediaElement.src = media.src;
            mediaElement.controls = true;
            mediaElement.classList.add("gallery-img");
        }

        currentProjectsGallery.appendChild(mediaElement);
    });
});
