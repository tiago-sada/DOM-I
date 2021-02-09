const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// HEADER
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");
navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];

// CTA
const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.querySelector(".cta img");
ctaImg.src = siteContent.cta["img-src"]


// MAIN CONTENT
const featuresTitle = document.querySelector;
const mainSectionTitles = document.querySelectorAll(".main-content .text-content h4");
mainSectionTitles[0].textContent = siteContent["main-content"]["features-h4"];
mainSectionTitles[1].textContent = siteContent["main-content"]["about-h4"];
mainSectionTitles[2].textContent = siteContent["main-content"]["services-h4"];
mainSectionTitles[3].textContent = siteContent["main-content"]["product-h4"];
mainSectionTitles[4].textContent = siteContent["main-content"]["vision-h4"];

const mainSectionContent = document.querySelectorAll(".main-content .text-content p");
mainSectionContent[0].textContent = siteContent["main-content"]["features-content"];
mainSectionContent[1].textContent = siteContent["main-content"]["about-content"];
mainSectionContent[2].textContent = siteContent["main-content"]["services-content"];
mainSectionContent[3].textContent = siteContent["main-content"]["product-content"];
mainSectionContent[4].textContent = siteContent["main-content"]["vision-content"];

const mainSectionImg = document.querySelector(".main-content img");
mainSectionImg.src = siteContent["main-content"]["middle-img-src"];


// CONTACT
const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const contactDetails = document.querySelectorAll(".contact p");
contactDetails[0].textContent = siteContent["contact"]["address"];
contactDetails[1].textContent = siteContent["contact"]["phone"];
contactDetails[2].textContent = siteContent["contact"]["email"];


// FOOTER
const footerCopyright = document.querySelector("footer p");
footerCopyright.textContent = siteContent["footer"]["copyright"];



