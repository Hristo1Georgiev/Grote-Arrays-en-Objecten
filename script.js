
// Subopdracht 1: landenlijst.

// Get DOM elemnets.
const list = document.querySelector(".list");
const listContries = document.querySelector(".landen")

// Using map en sort methods to make new array with sorted list of contries.
const countries = randomPersonData.map(item => item.region);

// Making new set/list of countries with no repeat of the country in the list.
const sortedListOfCountries = [...new Set(countries.sort())];

// Function to remove current list before new list to be added to the DOM.
const removeList = () => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
};
// Function to add the list to DOM.
const addToDom = (item) => {
    removeList();
    item.forEach((item) => {
        const newLi = document.createElement("li");
        newLi.innerHTML = item;
        list.appendChild(newLi);
    });
};

// Add eventLister to the button landenlijst and cal addToDom function with parameter sortedListOfContries.
listContries.addEventListener("click", () => addToDom(sortedListOfCountries));



// Opdracht 2 Steenbok Vrouwen.

// Get DOM elements.
const listWomen = document.querySelector(".vrouwen");

/* Using sort method to sort by name. In the list is a womman from Eats Europe - 
(cyrilic alphabet with a "A"), she is last in the list because of that.
Thn using filter and map methods to get all capricoern women above 30 years old.
*/
const capricornWomen = randomPersonData.sort(function (a, b) {
    return a.name.localeCompare(b.name);
})
    .filter(({ age, birthday, gender }) => {
        const day = birthday.dmy.split("/")[0];
        const month = birthday.dmy.split("/")[1];
        if (((day >= "22" && month === "12") || (day <= "19" && month === "01")) && age >= 30 && gender === "female") {
            return true;
        }
    }).map(item => `Name: ${item.name} ${item.surname}<br/><img src="${item.photo}" width="100px">`);

//Add eventLister to the button vrowenlijst and cal addToDom function with parameter capricornWomen.
listWomen.addEventListener("click", () => addToDom(capricornWomen));