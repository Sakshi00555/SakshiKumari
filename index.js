// ========================tech list==================
const techs = ['JavaScript', 'Java', 'SpringBoot', 'AWS','PostMan','Html','CSS','Hibernate'];

const descTechs = document.querySelectorAll('.tech');

descTechs.forEach(function(value, key){
    value.textContent = techs[key];
});
// =======================social links====================
const socialLinks = ['https://www.linkedin.com/in/sakshi-kumari-202282214/', 'https://github.com/sakshi00555', 'https://www.instagram.com/___sakshi_k__/', 'https://twitter.com/Sakshi00555'];

const socialIcons = document.querySelectorAll('.social-links a');

socialIcons.forEach(function(value, key) {
    value.href = socialLinks[key];
})

// ====================projects section==============================

const projects = [
    {
        projectImageUrl: './assets/food.PNG',
        projectName: 'Online Food Delivery Application',
        projectDescription: "Java Backend project. An online Food Delivery Application having backend REST-API, made in Java Spring Boot, JPA-Hibernate with MySQL database.",
        projectStack: ['SpringBoot', 'Spring data JPA', 'Hibernate', 'AWS','Postman','JAVA']
    },
    {
        projectImageUrl: './assets/githubFront.PNG',
        projectName: "Github Profile Finder",
        projectDescription: "Github Profile Finder is a website where you can search for GitHub profiles by typing their name in the search input on the top.",
        projectStack: ['HTML', 'CSS', 'JS', 'VS Code']
    },
    {
        projectImageUrl: './assets/Dice.PNG',
        projectName: 'No Greed',
        projectDescription: 'No Greed is a single page, 2-player dice game which showcases my JavaScript logical skills.',
        projectStack: ['Responsive', 'JavaScript', 'Mathematics', 'CSS']

    },
    {
        projectImageUrl: 'https://user-images.githubusercontent.com/77793810/122582987-67230a00-d076-11eb-8079-a43185265951.PNG',
        projectName: 'ONN Bikes Clone',
        projectDescription: "This project showcases my frontend skills of building a  E-commerce web's UI along with making it responsive.By using this website you can book a bike anytime anywhere. With the very user-friendly interface, it will take hardly 5 minutes. And tada! you got your bike.",
        projectStack: ['JavaScript', 'Bootstrap', 'CSS', 'VS Code']
    }
    
];

let totalProjectStack = [];
for(const project of projects) {
    totalProjectStack.push(...project.projectStack)
}

const projectImages = document.querySelectorAll('.project-image img');
const projectNames = document.querySelectorAll('.project-name');
const projectDetail = document.querySelectorAll('.about-project');
const projectStacks = document.querySelectorAll('.tech-p');

projectImages.forEach(function(value, key) {
    value.src = projects[key].projectImageUrl;
});

projectNames.forEach(function(value, key) {
    value.textContent = projects[key].projectName;
});

projectDetail.forEach(function(value, key) {
    value.textContent = projects[key].projectDescription;
});

projectStacks.forEach(function(value, key) {
    value.textContent = totalProjectStack[key];
})

// =======================navbar========================
const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const navItemsOpen = document.querySelector('.nav-items-open');
const writeClose = document.querySelector('.write i');
const submitTestimonial = document.querySelector('.submit');

openBtn.addEventListener('click', function() {
    navItemsOpen.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

closeBtn.addEventListener('click', function() {
    navItemsOpen.style.display = 'none';
    openBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

document.querySelectorAll('.item-open').forEach(link => {
    link.addEventListener('click', function() {
        navItemsOpen.style.display = 'none';
        openBtn.style.display = 'inline-block';
        closeBtn.style.display = 'none';
    })
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 80
        }
    }
});
/*==================== FORM SUBMIT ====================*/
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    //button animation
    document.getElementById("email-submit").innerText = "Sending...";
  
    if (
      document.getElementById("name").value != "" &&
      document.getElementById("email").value != "" &&
      document.getElementById("message").value != ""
    ) {
      let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
  
      const serviceID = "service_a2ox7tt";
      const templateID = "template_rtewoxe";
  
      emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
  
          document.getElementById("email-submit").innerHTML = `
            Send message
            <i class="uil uil-message button__icon"></i>`;
  
          alert("Your message send susscessfully!");
        })
        .catch((err) => {
          document.getElementById("email-submit").innerHTML = `
            Send message
            <i class="uil uil-message button__icon"></i>`;
          console.log(err);
        });
    } else {
      alert("Please fill out all the fields");
    }
  });


ScrollReveal(
    { reset: true,
       distance: '60px',
       duration: 2000,
       delay: 400 
    }
);

ScrollReveal().reveal('.home-para, .contact-head', {delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.about-description, .project-image', {delay: 100, origin: 'left'});
ScrollReveal().reveal('.home-name, .mail, .contact-message', {delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.home-designation, .contact a', {delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.home-features, .about-profile, .project-details', {delay: 100, origin: 'right'});
ScrollReveal().reveal('.social-links, .swiper-wrapper', {delay: 100, origin: 'top'});

