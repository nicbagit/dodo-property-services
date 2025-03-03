document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");    

    // Sample project images (replace with real images later)
    const projects = [
        { src: "images/project1.jpg", alt: "Project 1 - Modern House" },
        { src: "images/project2.jpg", alt: "Project 2 - Beachfront Villa" },
        { src: "images/project3.jpg", alt: "Project 3 - Renovated Apartment" }
    ];

    projects.forEach((project, index) => {
        const a = document.createElement("a");
        a.href = project.src;
        a.setAttribute("data-lightbox", "gallery"); // Group images in the same gallery
        a.setAttribute("data-title", project.alt);  // Display image title in Lightbox

        const img = document.createElement("img");
        img.src = project.src;
        img.alt = project.alt;
        img.classList.add("gallery-img");  // Optional styling

        a.appendChild(img);
        gallery.appendChild(a);
    });
});
