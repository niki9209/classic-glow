const heroQuotes = [
    "Crafted to shine, designed to last.",
    "Where elegance meets perfection.",
    "Timeless beauty, redefined.",
    "Every piece tells a story."
];

let index = 0;

setInterval(() => {
    document.getElementById("hero-quote").innerText = heroQuotes[index];
    index = (index + 1) % heroQuotes.length;
}, 3000);


const buttons = document.querySelectorAll(".filters button");
const products = document.querySelectorAll(".product-card");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    // Active button change
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    products.forEach(product => {
      const category = product.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });

  });
});


// wishlist

// document.querySelectorAll(".wishlist").forEach(btn => {
//   btn.addEventListener("click", () => {
//     let icon = btn.querySelector("i");

//     if (icon.classList.contains("fa-regular")) {
//       icon.classList.remove("fa-regular");
//       icon.classList.add("fa-solid");
//       icon.style.color = "red";
//     } else {
//       icon.classList.remove("fa-solid");
//       icon.classList.add("fa-regular");
//       icon.style.color = "#999";
//     }
//   });
// });


//======================================================================================
// occasion
