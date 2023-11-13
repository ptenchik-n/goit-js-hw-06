"use strict";

const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);

// Number of categories
const categoryList = document.getElementById("categories");
const listItem = document.querySelectorAll(".item");
console.log("Number of categories:", listItem.length);

// Heading and elements number

const items = document.querySelectorAll("#categories .item");

items.forEach((item) => {
  const headerText = item.querySelector("h2").textContent;
  const numberOfElements = item.querySelectorAll("li").length;

  console.log(`Categories: ${headerText}`);
  console.log(`Elements: ${numberOfElements}`);

})



