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

    let currentImages = [];
    let currentMedia = [];
    let currentIndex = 0;

    // ... (projects array and gallery population remain the same) ...

    function openModal(mediaArray, index) {
        currentMedia = mediaArray;
        currentIndex = index;
        updateModalMedia();
        modal.style.display = "flex";
    }

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

    // Close modal
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
