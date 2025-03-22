const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const tr = document.createElement("tr");
const td1 = document.createElement("td");
const td2 = document.createElement("td");
const td3 = document.createElement("td");
td1.textContent = "1";
td2.textContent = "2";
td3.textContent = "3";
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
//tbody.appendChild(tr);
const addBnt = document.querySelector("button.add");
const deleteBnt = document.querySelector("button.delete");
const resetBnt = document.querySelector("button.Reset");
addBnt.addEventListener("click", (e) => {
  tbody.appendChild(tr.cloneNode(true));
});

deleteBnt.addEventListener("click", (e) => {
  if (tbody.children.length > 0) {
    tbody.removeChild(tbody.lastChild);
  }
});

resetBnt.addEventListener("click", (e) => {
  tbody.innerHTML = "";
});

const getUsers = async () => {
  const response = await fetch("http://127.0.0.1:5500/api/users.js");
  const users = await response.json();
  console.log(users);
};
getUsers();
