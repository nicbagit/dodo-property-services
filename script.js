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
