document.addEventListener("DOMContentLoaded", function () {
  var emailRow = document.querySelector(".email-row");
  emailRow.addEventListener("click", function () {
    window.location = emailRow.dataset.href;
  });

  var contactRow = document.querySelector(".contact-row");
  contactRow.addEventListener("click", function () {
    window.location = contactRow.dataset.href;
  });

  var telRow = document.querySelector(".tel-row");
  telRow.addEventListener("click", function () {
    window.location = telRow.dataset.href;
  });

  var linkedinRow = document.querySelector(".linkedin-row");
  linkedinRow.addEventListener("click", function () {
    window.location = linkedinRow.dataset.href;
  });

  var youtRow = document.querySelector(".yout-row");
  youtRow.addEventListener("click", function () {
    window.location = youtRow.dataset.href;
  });

  var directRow = document.querySelector(".direct-row");
  directRow.addEventListener("click", function () {
    window.location = directRow.dataset.href;
  });

  var gitRow = document.querySelector(".git-row");
  gitRow.addEventListener("click", function () {
    window.location = gitRow.dataset.href;
  });
});
