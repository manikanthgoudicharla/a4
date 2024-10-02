    document.addEventListener("DOMContentLoaded", function () {
        const burger = document.getElementById('burger');
        const navlist = document.getElementById('navlist');

        // Toggle the 'active' class on navlist to move it from the left
        burger.addEventListener('click', function () {
            navlist.classList.toggle('active');
        });
    });

    let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        const sliderImages = document.getElementById('sliderImages');
        const dots = document.querySelectorAll('.dot');

        // Function to go to a specific slide
        function showSlide(index) {
            sliderImages.style.transform = `translateX(${-index * 33.3}%)`;
            currentIndex = index;

            // Update active dot
            dots.forEach(dot => dot.classList.remove('active-dot'));
            dots[currentIndex].classList.add('active-dot');
        }

        // Auto scroll slides every 3 seconds
        function autoScroll() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }

        // Initialize auto-scroll
        let interval = setInterval(autoScroll, 3000);

        // Function to show slide based on dot click
        function currentSlide(index) {
            clearInterval(interval); // Stop auto-scroll when manually selecting
            showSlide(index);
            interval = setInterval(autoScroll, 3000); // Resume auto-scroll after selection
        }

        document.getElementById("uploadForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
        
            const fileInput = document.getElementById("resumeInput");
            const file = fileInput.files[0];
        
            if (file && file.type === "application/pdf") {
                const url = URL.createObjectURL(file);
                const downloadLink = document.getElementById("downloadLink");
                downloadLink.href = url;
                downloadLink.textContent = `Download ${file.name}`;
                document.getElementById("downloadSection").style.display = "block";
            } else {
                alert("Please upload a valid PDF file.");
            }
        });
        
