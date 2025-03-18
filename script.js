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
        const filename = currentItem.substring(currentItem.lastIndexOf('/') + 1); // Extract filename
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
        // Add or update filename display
        let filenameDisplay = document.getElementById("filenameDisplay");
        if (!filenameDisplay) {
            filenameDisplay = document.createElement("div");
            filenameDisplay.id = "filenameDisplay";
            filenameDisplay.style.textAlign = "center";

            filenameDisplay.style.marginTop = "10px"; // Add some space
            filenameDisplay.style.padding = "5px 10px"; // Add padding
            filenameDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Dark background
            filenameDisplay.style.color = "white"; // White text
            filenameDisplay.style.borderRadius = "5px"; // Rounded corners
            filenameDisplay.style.fontSize = "16px"; // Adjust font size
            filenameDisplay.style.fontWeight = "bold"; // Bold text
            
            modal.querySelector(".modal-content").appendChild(filenameDisplay);
        }
        filenameDisplay.textContent = filename;
    }

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

    const currentProjectData = {
        mainImage: "images/grand_gaube/foundation/Foundation0.jpeg",
        alt: "Grand Gaube Project",
        gallery: [
            "images/grand_gaube/SiteClear/SiteClearing1.jpeg",
            "images/grand_gaube/SiteClear/SiteClearing2.jpeg",
            "images/grand_gaube/SiteClear/SiteClearing3.jpeg",
            "images/grand_gaube/SiteClear/SiteClearing4.jpeg",
            "images/grand_gaube/SiteClear/SiteClearing5.mp4",
            "images/grand_gaube/SiteClear/SiteClearing6.mp4",
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
            "images/grand_gaube/foundation/Foundation5.mp4",
            "images/grand_gaube/foundation/Foundation6.mp4"
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
