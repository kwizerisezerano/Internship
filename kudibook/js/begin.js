// const p = document.querySelector("p");
// p.remove();
// console.log(p);
// const ps = document.querySelectorAll("p");
// ps.forEach(function (p) {
//   // p.remove();
//   p.textContent = "***************";
// });

// const newparagraph = document.createElement("p");
// newparagraph.textContent = "this is my new paragraph";
// document.querySelector("body").appendChild(newparagraph);
const notes = [
  {
    title: "my next trip",
    body: "i would like to go to spain",
  },
  {
    title: "habbits to work on",
    body: "exercise",
  },
  {
    title: "office modification",
    body: "body get seat",
  },
];
const filters = {
  searchText: "",
};
const renderNotes = function (notes, filters) {
  const filterdNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  filterdNotes.forEach(function (note) {
    const notel = document.createElement("p");
    notel.textContent = note.title;
    document.querySelector("body").appendChild(notel);
  });
};
renderNotes(notes, filters);
document.querySelector("#create").addEventListener("click", function (e) {
  console.log("I did it");
  e.target.textContent = "button was clicked";
});
document.querySelector("#remove").addEventListener("click", function (e) {
  console.log("all notes deleted");
  e.target.textContent = "button was clicked";
});

document.querySelector("#search").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});
