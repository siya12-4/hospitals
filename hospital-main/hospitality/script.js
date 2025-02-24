// == Custom JS for auto change img ==
document.addEventListener("DOMContentLoaded", function () {
    // Background images array
    const images = [
        "url('img/bg/bgimg3.jpg')",
        "url('img/bg/bgimg2.jpg')",
        "url('img/bg/bgimg4.jpg')",
        "url('img/bg/bgimg5.jpg')",
        "url('img/bg/b.jpg')"
    ];

    let index = 0;

    function changeBackground() {
        document.querySelector(".background-container").style.backgroundImage = images[index];
        index = (index + 1) % images.length; // Loop through images
    }

    // Set initial background
    changeBackground();

    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
});

// $(document).ready(function () {
//     // List of background images
//     let images = [
//         "url('img/bg/bgimg2.jpg')",
//         "url('img/bg/bgimg3.jpg')",
//         "url('img/bg/bgimg4.jpg')",
//         "url('img/bg/bgimg5.jpg')",
//         "url('img/bg/bgimg2.jpg')"
//     ];

//     let currentIndex = 0;

//     function changeBackground() {
//         $(".background-container").fadeOut(1000, function () {
//             $(this).css("background-image", images[currentIndex]).fadeIn(1000);
//         });

//         currentIndex = (currentIndex + 1) % images.length;
//     }

//     // Initial background setup
//     $(".background-container").css("background-image", images[currentIndex]);

//     // Change background every 5 seconds
//     setInterval(changeBackground, 5000);
// });


// == nav book btn ==
function redirectToBooking() {
    document.querySelector(".nav-button").classList.add("clicked");
    setTimeout(() => {
        window.location.href = "book.html";
    }, 300);
}





 // ===gallery ===
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const galleryItems = document.querySelectorAll(".gallery-item");

  // Open Lightbox on click
  galleryItems.forEach(item => {
      item.addEventListener("click", function () {
          const imgSrc = this.getAttribute("data-image");
          lightboxImg.src = imgSrc;
          lightbox.classList.add("active");
      });
  });
  // Close lightbox
  window.closeLightbox = function () {
      lightbox.classList.remove("active");
  };

  // Close lightbox when clicking outside image
  lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
          closeLightbox();
      }
  });
});


// ====contact ===
$(document).ready(function () {
  $(".successBox").hide(); // Hide success message initially

  $("form").submit(function (e) {
      e.preventDefault(); // Prevent default form submission

      let isValid = true;
      $("input, textarea").each(function () {
          if ($(this).val().trim() === "") {
              $(this).css("border", "2px solid #e74c3c"); // Highlight empty fields
              isValid = false;
          } else {
              $(this).css("border", "2px solid #ddd"); // Reset border color
          }
      });

      if (isValid) {
          $(".successBox").fadeIn().delay(3000).fadeOut(); // Show success message
          $("form")[0].reset(); // Reset form after successful submission
      }
  });

  $(".close").click(function () {
      $(".successBox").fadeOut(); // Hide success box when close button is clicked
  });
});


// profile==== //

