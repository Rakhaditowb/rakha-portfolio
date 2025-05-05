AOS.init();

const projects = [
	{
		title: "AritmaPlay Backend API",
		description:
			"An interactive math learning app for Indonesian elementary students, featuring handwriting recognition, gamification (EXP & leaderboard), and Gemini-powered AI encouragement. In this project, I worked as a Backend Engineer, developing secure and scalable APIs using PHP (Laravel), integrating Sanctum for authentication, and managing MySQL databases to support dynamic content and user progress tracking. This project was developed as part of the Capstone Project for Bangkit Academy 2024 Batch 2.",
		link: "https://github.com/AritmaPlay/aritmaplay-backend-api",
	},
];

const container = document.getElementById("projects");

projects.forEach((p, index) => {
	const delay = index * 100;
	container.innerHTML += `
    <div class="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${delay}">
      <div class="card card-project shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text">${p.description}</p>
          <a href="${p.link}" target="_blank" class="btn btn-outline-primary">See Project</a>
        </div>
      </div>
    </div>
  `;
});

// Theme toggle logic
const profileWrapper = document.querySelector(".profile-img-wrapper");
const themeIcon = document.getElementById("theme-icon");

profileWrapper.addEventListener("click", () => {
	document.body.classList.toggle("dark-mode");

	// Ganti ikon sesuai mode
	if (document.body.classList.contains("dark-mode")) {
		themeIcon.textContent = "☀️"; // Light mode icon
	} else {
		themeIcon.textContent = "🌙"; // Dark mode icon
	}
});
