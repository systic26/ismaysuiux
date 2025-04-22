// Fungsi untuk menambahkan kelas fade-in saat elemen terlihat
const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            fadeInObserver.unobserve(entry.target); // Berhenti mengamati setelah animasi
        }
    });
});

// 1. Scroll Reveal Animation untuk elemen hero
document.querySelectorAll(".hero-text, .hero-description").forEach(item => {
    fadeInObserver.observe(item);
});

// Scroll Reveal Animation untuk elemen lain
document.querySelectorAll(".experience-item, .certificate-item, .blog-item, .article-item").forEach(item => {
    fadeInObserver.observe(item);
});

// 2. Highlight navbar aktif
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav ul li a").forEach(link => {
    if (link.getAttribute("href") === currentPage || (currentPage === "" && link.getAttribute("href") === "index.html")) {
        link.classList.add("active-page");
    }
});

    function typeWriter() {
        if (i < typedText.length) {
            heroTitleElement.innerHTML += typedText.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }

    typeWriter(); 

// 4. Smooth Scroll untuk link internal
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 5. Validasi Form Kontak
const submitButton = document.querySelector(".submit-btn");
if (submitButton) {
    submitButton.addEventListener("click", function (e) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const serviceSelect = document.getElementById("service");
        const projectInput = document.getElementById("project");

        const name = nameInput?.value.trim();
        const email = emailInput?.value.trim();
        const service = serviceSelect?.value;
        const project = projectInput?.value.trim();

        if (!name || !email || service === "Choose from here" || !project) {
            alert("Mohon isi semua kolom sebelum mengirim!");
            e.preventDefault();
        } else {
            alert("Terima kasih! Pesan Anda telah dikirim.");
        }
    });
}