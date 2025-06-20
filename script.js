window.addEventListener("DOMContentLoaded", () => {
  document.title = portfolioConfig.siteTitle;

  // ===== Dynamic Content Injection =====

  // Header
  const header = document.querySelector(".header-textbox");
  header.innerHTML = `
    <h1 class="h1">
      <span>${portfolioConfig.user.name}</span>
      <span>${portfolioConfig.user.title}</span>
    </h1>
    <p class="header-text">${portfolioConfig.user.intro}</p>
    <div class="header-btns">
      <a href="${portfolioConfig.buttons.hireMe.href}" class="btn btn-cta">${portfolioConfig.buttons.hireMe.label}</a>
      <a href="${portfolioConfig.buttons.seeWork.href}" class="btn btn-secondary">${portfolioConfig.buttons.seeWork.label}</a>
    </div>
  `;

  // Navigation
  const navMenu = document.querySelector(".nav-items");
  navMenu.innerHTML = portfolioConfig.navItems
    .map(item => `<li class="nav-item"><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  // Trusted Logos
  // TRUSTED LOGOS - CLEAN FIXED RENDERING AND ROTATION
  const logoContainer = document.querySelector(".logos");
  logoContainer.innerHTML = "";

  const groupSize = 3;
  const logoGroups = [];

  for (let i = 0; i < portfolioConfig.trustedLogos.length; i += groupSize) {
    const groupData = portfolioConfig.trustedLogos.slice(i, i + groupSize);
    const groupDiv = document.createElement("div");
    groupDiv.classList.add("logo-group");

    groupData.forEach(({ src, alt }) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      img.className = "logo";
      img.loading = "lazy";
      groupDiv.appendChild(img);
    });

    logoContainer.appendChild(groupDiv);
    logoGroups.push(groupDiv);
  }

  // Rotate each logo group
  logoGroups.forEach((group, groupIndex) => {
    const imgs = Array.from(group.children);
    let current = 0;

    // initial class setup
    imgs.forEach((img, i) => {
      img.classList.remove("hide", "to-top", "to-bottom");
      if (i === 0) img.classList.add("hide", "to-top");
      else if (i === 2) img.classList.add("hide", "to-bottom");
    });

    setTimeout(() => {
      setInterval(() => {
        // remove all classes
        imgs.forEach(img => img.classList.remove("hide", "to-top", "to-bottom"));

        // calculate new indices
        const top = current % 3;
        const middle = (current + 1) % 3;
        const bottom = (current + 2) % 3;

        imgs[top].classList.add("hide", "to-top");
        imgs[middle].classList.remove("hide");
        imgs[bottom].classList.add("hide", "to-bottom");

        current = (current + 1) % 3;
      }, 5600);
    }, 1400 * groupIndex); // stagger animation
  });

  // Work Projects
  const workBoxes = document.querySelector(".work-boxes");
  workBoxes.innerHTML = portfolioConfig.workProjects
    .map(p => `
      <div class="work-box">
        <div class="work-textbox">
          <h3 class="h3">${p.title}</h3>
          <p class="work-text">${p.description}</p>
          <ol class="work-technologies">${p.technologies.map(t => `<li>${t}</li>`).join("")}</ol>
          <div class="work-links">
            <a href="${p.projectUrl}" class="link" rel="noopener">Explore this project</a>
            <a href="${p.codeUrl}" rel="noopener" title="Source code">
              <img src="assets/images/social-links/github.svg" alt="GitHub" loading="lazy" />
            </a>
          </div>
        </div>
        <picture class="work-img">
          <img src="${p.image}" alt="${p.imageAlt}" loading="lazy" />
        </picture>
      </div>
    `).join("");

  // Blog Articles
  const articleBoxes = document.querySelector(".article-boxes");
  articleBoxes.innerHTML = portfolioConfig.blogArticles
    .map((a, i) => `
      <article class="article-box ${i === 0 ? "featured-article" : ""}">
        <div class="article-textbox">
          <div>
            <h3 class="${i === 0 ? "h3" : "h4"}">${a.title}</h3>
            <p class="article-text">${a.description}</p>
          </div>
          <div class="article-info">
            <a href="${a.url}" class="link" rel="noopener">Continue reading</a>
            <span class="reaction-count">
              <img src="assets/images/heart-outline.svg" alt="heart" loading="lazy" /> ${a.reactions}
            </span>
          </div>
        </div>
        ${a.image ? `<picture class="article-illustration"><img src="${a.image}" alt="${a.title}" loading="lazy" /></picture>` : ""}
      </article>
    `).join("");

  // Skills
  const skillsImg = document.querySelector(".skills-imgs");
  skillsImg.innerHTML = portfolioConfig.skills
    .map(skill => `<img src="assets/images/skills/${skill}" alt="${skill.split(".")[0]}" class="skills-img" loading="lazy" title="${skill.split(".")[0]}" />`)
    .join("");

  // Testimonials
  const testimonialContainer = document.querySelector(".testimonials");
  testimonialContainer.innerHTML = portfolioConfig.testimonials
    .map(t => `
      <li class="testimonial">
        <blockquote class="testimonial-text">${t.text}</blockquote>
        <figure class="testimonial-author">
          <img src="${t.image}" alt="${t.name}" loading="lazy" />
          <figcaption>
            <h3 class="testimonial-author-name">${t.name}</h3>
            <p class="testimonial-author-job">${t.job}</p>
          </figcaption>
        </figure>
      </li>
    `).join("");

  // Contact Section
  document.querySelector(".hire-alert").innerHTML = `
    <span class="indicator"></span> ${portfolioConfig.contact.availability}
  `;
  const contactText = document.querySelectorAll(".contact-text");
  contactText.forEach((p, i) => {
    p.textContent = portfolioConfig.contact.intro[i] || "";
  });

  // Footer Links
  const footerLinks = document.querySelector(".footer-links");
  footerLinks.innerHTML = portfolioConfig.socialLinks
    .map(link => `
      <li class="footer-link">
        <a title="${link.title}" href="${link.url}" rel="noopener">
          <img src="assets/images/social-links/${link.icon}" alt="${link.title}" loading="lazy" />
        </a>
      </li>
    `).join("");

  // Footer Year
  const footerText = document.querySelector(".footer-text");
  footerText.innerHTML = `&copy; ${portfolioConfig.copyright.year} - ${portfolioConfig.copyright.name}`;

  // ===== Static Behaviors =====

  // Nav Toggle
  const nav = document.querySelector(".nav");
  const btnToggleNav = document.querySelector(".menu-btn");
  const toggleNav = () => {
    nav.classList.toggle("hidden");
    document.body.classList.toggle("lock-screen");
    btnToggleNav.textContent = nav.classList.contains("hidden") ? "menu" : "close";
  };
  btnToggleNav.addEventListener("click", toggleNav);
  navMenu.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "a") toggleNav();
  });

  // ESC close nav
  document.body.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !nav.classList.contains("hidden")) toggleNav();
  });

  // Trap tab inside nav
  const lastFocusedEl = document.querySelector('a[data-focused="last-focused"]');
  document.body.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && document.activeElement === lastFocusedEl) {
      e.preventDefault();
      btnToggleNav.focus();
    }
  });

  // Theme toggle
  const switchThemeEl = document.querySelector('input[type="checkbox"]');
  const storedTheme = localStorage.getItem("theme");
  switchThemeEl.checked = storedTheme === "dark" || storedTheme === null;
  document.body.classList.add(switchThemeEl.checked ? "dark" : "light");

  switchThemeEl.addEventListener("click", () => {
    const isChecked = switchThemeEl.checked;
    document.body.classList.toggle("dark", isChecked);
    document.body.classList.toggle("light", !isChecked);
    localStorage.setItem("theme", isChecked ? "dark" : "light");
  });

  // Animate work on scroll
  const workBoxesEls = document.querySelectorAll(".work-box");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const [textbox, picture] = Array.from(entry.target.children);
          picture.classList.remove("transform");
          Array.from(textbox.children).forEach(el => el.style.animationPlayState = "running");
        }
      });
    },
    { threshold: 0.3 }
  );
  workBoxesEls.forEach((workEl) => {
    const picture = workEl.querySelector(".work-img");
    if (picture) picture.classList.add("transform");
    observer.observe(workEl);
  });

  // Rotating logos
  const sleep = (time) => new Promise(res => setTimeout(res, time));
  const logosWrappers = document.querySelectorAll(".logo-group");

  logosWrappers.forEach(async (wrapper, i) => {
    const logos = Array.from(wrapper.children);
    await sleep(1400 * i);
    setInterval(() => {
      let temp = logos[0];
      logos[0] = logos[1];
      logos[1] = logos[2];
      logos[2] = temp;

      logos[0].classList.add("hide", "to-top");
      logos[1].classList.remove("hide", "to-top", "to-bottom");
      logos[2].classList.add("hide", "to-bottom");

      wrapper.innerHTML = "";
      logos.forEach(logo => wrapper.appendChild(logo));
    }, 5600);
  });
});