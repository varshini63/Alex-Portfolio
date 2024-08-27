document.addEventListener("DOMContentLoaded", function() {
    const techStackItems = document.querySelectorAll(".tech-stack-item");
    const techStackDetails = document.querySelectorAll(".tech-stack-details");

    techStackItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            const tech = this.dataset.tech;

            // Hide all details initially
            techStackDetails.forEach(detail => {
                detail.classList.add("hidden");
            });

            // Get the corresponding detail section
            const detailSection = document.getElementById(tech);
            detailSection.classList.remove("hidden");
            detailSection.style.display = "block";  // Ensure the details are displayed

            // Get position of the hovered item
            const rect = this.getBoundingClientRect();

            // For all items, display to the right of the item
            detailSection.style.top = `${rect.top + window.scrollY}px`;
            detailSection.style.left = `${rect.right + window.scrollX + 10}px`;

            // Apply morphing transition effect
            detailSection.style.opacity = 0;
            detailSection.style.transform = 'scale(0.9)';
            setTimeout(() => {
                detailSection.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                detailSection.style.opacity = 1;
                detailSection.style.transform = 'scale(1)';
            }, 10);
        });

        item.addEventListener("mouseleave", function() {
            const tech = this.dataset.tech;
            const detailSection = document.getElementById(tech);

            // Apply morphing transition for hiding
            detailSection.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            detailSection.style.opacity = 0;
            detailSection.style.transform = 'scale(0.9)';

            // Hide the detail section after the transition
            setTimeout(() => {
                detailSection.style.display = "none";
                detailSection.classList.add("hidden");
            }, 300);
        });
    });
});
