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
        img.href = project.mainImage;
        img.dataset.lightbox = "project-gallery";
        img.title = project.alt;

        const innerImg = document.createElement("img");
        innerImg.src = project.mainImage;
        innerImg.alt = project.alt;
        innerImg.classList.add("gallery-img");

        img.appendChild(innerImg);
        gallery.appendChild(img);

        project.gallery.forEach(galleryImage => {
            const hiddenLink = document.createElement("a");
            hiddenLink.href = galleryImage;
            hiddenLink.dataset.lightbox = "project-gallery";
            hiddenLink.style.display = "none";
            document.body.appendChild(hiddenLink);
        });
    });

    // Dynamically load current project images and videos (Lightbox setup)
    const currentProjectMedia = [
        {
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
        }
    ];

    currentProjectMedia.forEach((project) => {
        const img = document.createElement("a");
        img.href = project.mainImage;
        img.dataset.lightbox = "current-projects";
        img.title = project.alt;

        const innerImg = document.createElement("img");
        innerImg.src = project.mainImage;
        innerImg.alt = project.alt;
        innerImg.classList.add("gallery-img");

        img.appendChild(innerImg);
        currentProjectsGallery.appendChild(img);

        project.gallery.forEach(galleryImage => {
            const hiddenLink = document.createElement("a");
            hiddenLink.href = galleryImage;
            hiddenLink.dataset.lightbox = "current-projects";
            hiddenLink.style.display = "none";
            document.body.appendChild(hiddenLink);
        });
    });
});
