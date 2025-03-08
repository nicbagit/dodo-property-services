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

    const closeBtn = document.querySelector("#imageModal .close"); // Corrected selection
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

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

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        modalVideo.pause();
    });

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + currentMedia.length) % currentMedia.length;
        updateModalMedia();
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % currentMedia.length;
        updateModalMedia();
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalVideo.pause();
        }
    });

    // ... (currentProjectData and currentProjectThumbnail remain the same) ...
});
