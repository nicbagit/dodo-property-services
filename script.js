document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const imageFolders = [
        "Construction",
        "Exterior",
        "Interior",
        "Kitchen",
        "Landscape",
        "Pool"
    ];

    function loadImages(folder, index) {
        const imagePath = `images/project_gallery/${folder}/${folder} (${index}).jpg`;
        const image = new Image();

        image.onload = function () {
            const img = document.createElement("img");
            img.src = imagePath;
            img.alt = `${folder} image ${index}`;
            img.classList.add("gallery-img");
            gallery.appendChild(img);

            // Load next image
            loadImages(folder, index + 1);
        };

        image.onerror = function () {
            // Stop loading images when one fails to load
        };

        image.src = imagePath;
    }

    // Start loading images for each folder
    imageFolders.forEach(folder => loadImages(folder, 1));
});

    function setupCloseButton() {
        const closeBtn = document.querySelector("#imageModal .close");
        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                modal.style.display = "none";
                modalVideo.pause();
            });
        } else {
            console.error("Close button not found!");
        }
    }

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

    function updateModalMedia() {
        const currentItem = currentMedia[currentIndex];
        const filename = currentItem.substring(currentItem.lastIndexOf('/') + 1);
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

        let filenameDisplay = document.getElementById("filenameDisplay");
        if (!filenameDisplay) {
            filenameDisplay = document.createElement("div");
            filenameDisplay.id = "filenameDisplay";
            filenameDisplay.style.textAlign = "center";
            filenameDisplay.style.marginTop = "10px";
            filenameDisplay.style.padding = "5px 10px";
            filenameDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            filenameDisplay.style.color = "white";
            filenameDisplay.style.borderRadius = "5px";
            filenameDisplay.style.fontSize = "16px";
            filenameDisplay.style.fontWeight = "bold";

            modal.querySelector(".modal-content").appendChild(filenameDisplay);
        }
        filenameDisplay.textContent = filename;
    }

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

    const currentProjectsGallery = document.querySelector("#current-projects .gallery");

    const currentProjectData = {
        mainImage: "images/grand_gaube/foundation/GrandGaube.jpg",
        alt: "Grand Gaube Project",
        gallery: [
            "images/grand_gaube/SiteClear/SiteClearing1.jpeg",
            "images/grand_gaube/SiteClear/SiteClearing2.jpeg",
            "images/grand_gaube/SiteClear/SiteClearing3.jpeg",
            "images/grand_gaube/SiteClear/SiteClearing4.jpeg",
            "images/grand_gaube/SiteClear/SiteClearing5.jpeg",
            "images/grand_gaube/SiteClear/SiteClearing6.mp4",
            "images/grand_gaube/SiteClear/SiteClearing7.mp4",
            "images/grand_gaube/SurveyLayout/SurveyLayout1.jpg",
            "images/grand_gaube/SurveyLayout/SurveyLayout2.jpg",
            "images/grand_gaube/SurveyLayout/SurveyLayout3.jpg",
            "images/grand_gaube/SurveyLayout/SurveyLayout4.jpg",
            "images/grand_gaube/SurveyLayout/SurveyLayout5.jpg",
            "images/grand_gaube/SurveyLayout/SurveyLayout6.jpg",
            "images/grand_gaube/foundation/Foundation1.jpeg",
            "images/grand_gaube/foundation/Foundation2.jpeg",
            "images/grand_gaube/foundation/Foundation3.jpeg",
            "images/grand_gaube/foundation/Foundation4.jpeg",
            "images/grand_gaube/foundation/Foundation5.jpeg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure1.jpeg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure2.jpeg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure3.jpeg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure4.jpeg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure5.jpeg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure6.jpg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure7.jpg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure8.jpeg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure9.jpg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure10.jpg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure11.jpg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure12.jpg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure13.jpg",
            "images/grand_gaube/BlocksAndStructure/BlocksAndStructure14.jpg",
            "images/grand_gaube/BeamsAndRoof/BeamsAndRoof1.jpg",
            "images/grand_gaube/BeamsAndRoof/BeamsAndRoof2.jpg",
            "images/grand_gaube/BeamsAndRoof/BeamsAndRoof3.jpeg",
            "images/grand_gaube/BeamsAndRoof/BeamsAndRoof4.jpeg",
            "images/grand_gaube/BeamsAndRoof/BeamsAndRoof5.jpeg",
            "images/grand_gaube/BeamsAndRoof/BeamsAndRoof6.jpeg",
            "images/grand_gaube/BeamsAndRoof/BeamsAndRoof7.jpeg",
            "images/grand_gaube/BeamsAndRoof/BeamsAndRoof8.jpeg",
            "images/grand_gaube/BeamsAndRoof/BeamsAndRoof9.jpeg"
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
        setupCloseButton();
    });

    currentProjectsGallery.appendChild(currentProjectThumbnail);
});
