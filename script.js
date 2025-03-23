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
            mainImage: "images/project_gallery/construction/Construction.jpg",
            alt: "Project 1 - Modern House",
            gallery: [
                      "images/project_gallery/construction/Construction (1).jpg",
                      "images/project_gallery/construction/Construction (2).jpg",
                      "images/project_gallery/construction/Construction.jpg"
                  ],
            title: "Construction" // Added title
        },
        {
            mainImage: "images/project_gallery/exterior/Exterior (10).jpg",
            alt: "Project 2 - Beachfront Villa",
            gallery: [
                      "images/project_gallery/exterior/Exterior (10).jpg",
                      "images/project_gallery/exterior/Exterior (11).jpg",
                      "images/project_gallery/exterior/Exterior (12).jpg",
                      "images/project_gallery/exterior/Exterior (13).jpg",
                      "images/project_gallery/exterior/Exterior (14).jpg",
                      "images/project_gallery/exterior/Exterior (15).jpg",
                      "images/project_gallery/exterior/Exterior (16).jpg",
                      "images/project_gallery/exterior/Exterior (17).jpg",
                      "images/project_gallery/exterior/Exterior (18).jpg",
                      "images/project_gallery/exterior/Exterior (19).jpg",
                      "images/project_gallery/exterior/Exterior (2).jpg",
                      "images/project_gallery/exterior/Exterior (20).jpg",
                      "images/project_gallery/exterior/Exterior (21).jpg",
                      "images/project_gallery/exterior/Exterior (22).jpg",
                      "images/project_gallery/exterior/Exterior (23).jpg",
                      "images/project_gallery/exterior/Exterior (24).jpg",
                      "images/project_gallery/exterior/Exterior (25).jpg",
                      "images/project_gallery/exterior/Exterior (26).jpg",
                      "images/project_gallery/exterior/Exterior (27).jpg",
                      "images/project_gallery/exterior/Exterior (28).jpg",
                      "images/project_gallery/exterior/Exterior (29).jpg",
                      "images/project_gallery/exterior/Exterior (3).jpg",
                      "images/project_gallery/exterior/Exterior (30).jpg",
                      "images/project_gallery/exterior/Exterior (31).jpg",
                      "images/project_gallery/exterior/Exterior (32).jpg",
                      "images/project_gallery/exterior/Exterior (33).jpg",
                      "images/project_gallery/exterior/Exterior (34).jpg",
                      "images/project_gallery/exterior/Exterior (35).jpg",
                      "images/project_gallery/exterior/Exterior (36).jpg",
                      "images/project_gallery/exterior/Exterior (37).jpg",
                      "images/project_gallery/exterior/Exterior (38).jpg",
                      "images/project_gallery/exterior/Exterior (4).jpg",
                      "images/project_gallery/exterior/Exterior (5).jpg",
                      "images/project_gallery/exterior/Exterior (6).jpg",
                      "images/project_gallery/exterior/Exterior (7).jpg",
                      "images/project_gallery/exterior/Exterior (8).jpg",
                      "images/project_gallery/exterior/Exterior (9).jpg",
                      "images/project_gallery/exterior/Exterior.jpg"
                  ],
            title: "Exterior" // Added title
        },
        {
            mainImage: "images/project_gallery/interior/Interior (10).jpg",
            alt: "Project 3 - Renovated Apartment",
            gallery: [
                      "images/project_gallery/interior/Interior (10).jpg",
                      "images/project_gallery/interior/Interior (11).jpg",
                      "images/project_gallery/interior/Interior (12).jpg",
                      "images/project_gallery/interior/Interior (13).jpg",
                      "images/project_gallery/interior/Interior (14).jpg",
                      "images/project_gallery/interior/Interior (15).jpg",
                      "images/project_gallery/interior/Interior (16).jpg",
                      "images/project_gallery/interior/Interior (17).jpg",
                      "images/project_gallery/interior/Interior (18).jpg",
                      "images/project_gallery/interior/Interior (19).jpg",
                      "images/project_gallery/interior/Interior (2).jpg",
                      "images/project_gallery/interior/Interior (20).jpg",
                      "images/project_gallery/interior/Interior (21).jpg",
                      "images/project_gallery/interior/Interior (22).jpg",
                      "images/project_gallery/interior/Interior (23).jpg",
                      "images/project_gallery/interior/Interior (24).jpg",
                      "images/project_gallery/interior/Interior (25).jpg",
                      "images/project_gallery/interior/Interior (26).jpg",
                      "images/project_gallery/interior/Interior (27).jpg",
                      "images/project_gallery/interior/Interior (28).jpg",
                      "images/project_gallery/interior/Interior (29).jpg",
                      "images/project_gallery/interior/Interior (3).jpg",
                      "images/project_gallery/interior/Interior (30).jpg",
                      "images/project_gallery/interior/Interior (31).jpg",
                      "images/project_gallery/interior/Interior (33).jpg",
                      "images/project_gallery/interior/Interior (34).jpg",
                      "images/project_gallery/interior/Interior (35).jpg",
                      "images/project_gallery/interior/Interior (36).jpg",
                      "images/project_gallery/interior/Interior (37).jpg",
                      "images/project_gallery/interior/Interior (38).jpg",
                      "images/project_gallery/interior/Interior (39).jpg",
                      "images/project_gallery/interior/Interior (4).jpg",
                      "images/project_gallery/interior/Interior (40).jpg",
                      "images/project_gallery/interior/Interior (41).jpg",
                      "images/project_gallery/interior/Interior (42).jpg",
                      "images/project_gallery/interior/Interior (43).jpg",
                      "images/project_gallery/interior/Interior (44).jpg",
                      "images/project_gallery/interior/Interior (45).jpg",
                      "images/project_gallery/interior/Interior (46).jpg",
                      "images/project_gallery/interior/Interior (47).jpg",
                      "images/project_gallery/interior/Interior (5).jpg",
                      "images/project_gallery/interior/Interior (6).jpg",
                      "images/project_gallery/interior/Interior (7).jpg",
                      "images/project_gallery/interior/Interior (8).jpg",
                      "images/project_gallery/interior/Interior (9).jpg",
                      "images/project_gallery/interior/Interior.jpg"
                  ],
            title: "Interior" // Added title
        },
        {
            mainImage: "images/project_gallery/kitchen/Kitchen (10).jpg",
            alt: "Project 4 - Renovated Apartment",
            gallery: [
                      "images/project_gallery/kitchen/Kitchen (10).jpg",
                      "images/project_gallery/kitchen/Kitchen (11).jpg",
                      "images/project_gallery/kitchen/Kitchen (12).jpg",
                      "images/project_gallery/kitchen/Kitchen (13).jpg",
                      "images/project_gallery/kitchen/Kitchen (14).jpg",
                      "images/project_gallery/kitchen/Kitchen (15).jpg",
                      "images/project_gallery/kitchen/Kitchen (16).jpg",
                      "images/project_gallery/kitchen/Kitchen (17).jpg",
                      "images/project_gallery/kitchen/Kitchen (2).jpg",
                      "images/project_gallery/kitchen/Kitchen (3).jpg",
                      "images/project_gallery/kitchen/Kitchen (4).jpg",
                      "images/project_gallery/kitchen/Kitchen (5).jpg",
                      "images/project_gallery/kitchen/Kitchen (6).jpg",
                      "images/project_gallery/kitchen/Kitchen (7).jpg",
                      "images/project_gallery/kitchen/Kitchen (8).jpg",
                      "images/project_gallery/kitchen/Kitchen (9).jpg",
                      "images/project_gallery/kitchen/Kitchen.jpg"
                  ],
            title: "Kitchen" // Added title
        },
        {
            mainImage: "images/project_gallery/landscape/Landscape (10).jpg",
            alt: "Project 4 - Renovated Apartment",
            gallery: [
                      "images/project_gallery/landscape/Landscape (10).jpg",
                      "images/project_gallery/landscape/Landscape (11).jpg",
                      "images/project_gallery/landscape/Landscape (12).jpg",
                      "images/project_gallery/landscape/Landscape (13).jpg",
                      "images/project_gallery/landscape/Landscape (14).jpg",
                      "images/project_gallery/landscape/Landscape (15).jpg",
                      "images/project_gallery/landscape/Landscape (16).jpg",
                      "images/project_gallery/landscape/Landscape (17).jpg",
                      "images/project_gallery/landscape/Landscape (18).jpg",
                      "images/project_gallery/landscape/Landscape (19).jpg",
                      "images/project_gallery/landscape/Landscape (2).jpg",
                      "images/project_gallery/landscape/Landscape (20).jpg",
                      "images/project_gallery/landscape/Landscape (21).jpg",
                      "images/project_gallery/landscape/Landscape (22).jpg",
                      "images/project_gallery/landscape/Landscape (23).jpg",
                      "images/project_gallery/landscape/Landscape (24).jpg",
                      "images/project_gallery/landscape/Landscape (25).jpg",
                      "images/project_gallery/landscape/Landscape (26).jpg",
                      "images/project_gallery/landscape/Landscape (3).jpg",
                      "images/project_gallery/landscape/Landscape (4).jpg",
                      "images/project_gallery/landscape/Landscape (5).jpg",
                      "images/project_gallery/landscape/Landscape (6).jpg",
                      "images/project_gallery/landscape/Landscape (7).jpg",
                      "images/project_gallery/landscape/Landscape (8).jpg",
                      "images/project_gallery/landscape/Landscape (9).jpg",
                      "images/project_gallery/landscape/Landscape.jpg"
                  ],
            title: "Landscape" // Added title
        },
        {
            mainImage: "images/project_gallery/pool/Pool (10).jpg",
            alt: "Project 4 - Renovated Apartment",
            gallery: [
                      "images/project_gallery/pool/Pool (10).jpg",
                      "images/project_gallery/pool/Pool (2).jpg",
                      "images/project_gallery/pool/Pool (3).jpg",
                      "images/project_gallery/pool/Pool (4).jpg",
                      "images/project_gallery/pool/Pool (5).jpg",
                      "images/project_gallery/pool/Pool (6).jpg",
                      "images/project_gallery/pool/Pool (7).jpg",
                      "images/project_gallery/pool/Pool (8).jpg",
                      "images/project_gallery/pool/Pool (9).jpg",
                      "images/project_gallery/pool/Pool.jpg"
                  ],
            title: "Pool" // Added title
        }
    ];

    // Populate the gallery with project images
    projects.forEach((project, index) => {
        const img = document.createElement("img");
        img.src = project.mainImage;
        img.alt = project.alt;
        img.classList.add("gallery-img");
        img.dataset.index = index;

        // Create title element
        const title = document.createElement("h3");
        title.textContent = project.title;
        title.classList.add("project-title"); // Add a class for styling

        // Create a container for the image and title
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("project-item");
        projectContainer.appendChild(title); // Append title first
        projectContainer.appendChild(img);      

        img.addEventListener("click", function () {
            currentMedia = project.gallery;
            currentIndex = 0;
            modalImg.style.display = 'block';
            modalVideo.style.display = 'none';
            updateModalMedia();
            modal.style.display = "flex";
            setupCloseButton();
        });

        gallery.appendChild(projectContainer);
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
