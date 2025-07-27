const menu = [
  {
    id: 1,
    title: "Dosa",
    category: "breakfast",
    price: 40,
    img: "./images/resized_img1.jpg",
    desc: `if you buy this dosa you will get a vada,sambar and coconut chutney with this dosa`,
  },
  {
    id: 2,
    title: "Puttu",
    category: "breakfast",
    price: 60,
    img: "./images/resized_img2.jpg",
    desc: `if you buy this puttu then it will be yours healthy breakfast which is made with raagi`,
  },
  {
    id: 3,
    title: "Pori",
    category: "breakfast",
    price: 50,
    img: "./images/resized_img3.jpg",
    desc: `if you buy this pori then you will get a two pori with channa or potato masala`,
  },
  {
    id: 4,
    title: "Idly",
    category: "breakfast",
    price: 30,
    img: "./images/resized_img4.jpg",
    desc: `if you buy this idly then you will get a pair of idlys with sambar and chutney`,
  },
  {
    id: 5,
    title: "Meals",
    category: "lunch",
    price: 110,
    img: "./images/resized_img5.jpg",
    desc: `if you buy this meals then it will be your fullfeast lunch because it includes many currys with more sidedishes`,
  },
  {
    id: 6,
    title: "Biriyani",
    category: "lunch",
    price: 160,
    img: "./images/resized_img6.jpg",
    desc: `if you but this biriyani then you will get this biriyani with one egg and 3 pieces of chicken`,
  },
  {
    id: 7,
    title: "Fried Rice",
    category: "lunch",
    price: 120,
    img: "./images/resized_img7.jpg",
    desc: `if you but this fried rice then you will get this rice with a quantity of one plate with packed sauces`,
  },
  {
    id: 8,
    title: "Parotta",
    category: "dinner",
    price: 35,
    img: "./images/resized_img8.jpg",
    desc: `if you buy this parotta then you will get two parotta with chicken curry for dipping`,
  },
  {
    id: 9,
    title: "Chapathi",
    category: "dinner",
    price: 50,
    img: "./images/resized_img9.jpg",
    desc: `if you buy this chapathi then you will get two chapathi with the curry`
  },
  {
    id: 10,
    title: "Butter Naan",
    category: "dinner",
    price: 210,
    img: "./images/resized_img10.jpg",
    desc: `if you buy this butter naan then you will get a 2 pair of naan with chicken curry`
  }
];


const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".button-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  const displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
              <img src=${item.img} alt="${item.title}" class="photo">
              <div class="item-info">
                  <header>
                      <h4>${item.title}</h4>
                      <h4 class="price">Rs.${item.price}</h4>
                  </header>
                  <p class="item-text">${item.desc}</p>
              </div>
          </article>`;
  }).join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values; 
  }, ["all"]);

  const categoryBtns = categories.map(function (category) {
    return `<button class="filter-button" type="button" data-id=${category}>${category.charAt(0).toUpperCase()+category.slice(1)}</button>`;
  }).join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll(".filter-button"); 

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;

      const categoryMenu = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(categoryMenu);
      }
    });
  });
}
