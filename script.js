document.addEventListener("DOMContentLoaded", function () {
    // Sample image data (Replace this with CMS fetch logic)
    const projectImages = [
        { src: "images/project1.jpg", alt: "Project 1" },
        { src: "images/project2.jpg", alt: "Project 2" },
        { src: "images/project3.jpg", alt: "Project 3" }
    ];

    const currentProjects = [
        { src: "images/current1.jpg", alt: "Current Project 1" },
        { src: "images/current2.jpg", alt: "Current Project 2" }
    ];

    function populateGallery(images, containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        images.forEach(image => {
            const link = document.createElement("a");
            link.href = image.src;
            link.setAttribute("data-lightbox", "projects");

            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.alt;
            link.appendChild(img);

            container.appendChild(link);
        });
    }

    populateGallery(projectImages, "#project-gallery .gallery");
    populateGallery(currentProjects, "#current-projects .gallery");

    // Modal Functionality
    const modal = document.getElementById("contact-modal");
    const openModalBtn = document.getElementById("contact-link");
    const closeModalBtn = document.getElementsByClassName("close")[0];

    if (openModalBtn) {
        openModalBtn.addEventListener("click", function (event) {
            event.preventDefault();
            modal.style.display = "block";
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
