`use strict`;
// const savedTheme = localStorage.getItem("ui-theme");
// console.log(savedTheme); // "light"

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // A string

// const parseSettings = JSON.parse("savedSettings");
// console.log(parseSettings);

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // A string

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object

// const book = {
//     nameBook: "The moon",
//     author: "Tom Higint",
//     rating: 8.45
// }
// console.log(book);

// localStorage.setItem("book", JSON.stringify(book));

// const getBook = localStorage.getItem("book");
// console.log(getBook);

// const parseBook = JSON.parse(getBook);
// console.log(parseBook);

// localStorage.removeItem("book");
// console.log(parseBook);

// console.log(window.sessionStorage);

// const form = document.querySelector(".feedback-form");

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   form.reset();
// });

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "message";

// form.addEventListener("input", (evt) => {
//     localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     evt.target.elements.message.value;
//     localStorage.removeItem(localStorageKey);
//     form.reset();
// });

// const form = document.querySelector(".feedback-form");
// const textarea = form.elements.message;
// const localStorageKey = "message";

// textarea.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener("input", (evt) => {
//     localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     console.log(evt.target.elements.message.value);
//     localStorage.removeItem(localStorageKey);
//     form.reset();
// });
// const date = new Date('2024');
// console.log(date.getTime());
// const init = Date.now();
// console.log(init);




const options = {
    method: "GET",
};

fetch("<https://jsonplaceholder.typicode.com/users>", options)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then((data) => {
        // Data handling
    })
    .catch((error) => {
        // Error handling
    });
console.log(options);

fetch("some-url", {
    headers: {
        "Content-Type": "application/json",
        "X-Custom-Header": "custom value",
    }
})

const searchParams = new URLSearchParams({
    _limit: 5,
    _sort: "name",
});

console.log(searchParams.toString()); // "_limit=5&_sort=name"
const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "<https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name>"

