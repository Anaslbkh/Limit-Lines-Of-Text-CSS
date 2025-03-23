const table = document.querySelector("table");
const tbody = document.querySelector("tbody");

const createElements = () => {
  const tr = document.createElement("tr");
  const name = document.createElement("td");
  const email = document.createElement("td");
  const phone = document.createElement("td");
  const editBtn = document.createElement("td");
  const deleteBtn = document.createElement("td");
  editBtn.innerHTML = "<button class='edit'>Edit</button>";
  deleteBtn.innerHTML = "<button class='delete'>Delete</button>";
  return { tr, name, email, phone, editBtn, deleteBtn };
};

const allUsers = [];
const addBnt = document.querySelector("button.add");

const resetBnt = document.querySelector("button.reset");

const getUsers = async () => {
  const response = await fetch("/api/users.json");
  const users = await response.json();
  allUsers.push(...users);

  const { tr, name, email, phone, editBtn, deleteBtn } = createElements();

  users.forEach((element) => {
    tr.id = element.id;
    name.textContent = element.name;
    email.textContent = element.email;
    phone.textContent = element.phone;
    editBtn.setAttribute("data-id", element.id);
    deleteBtn.setAttribute("data-id", element.id);

    tr.appendChild(name);
    tr.appendChild(email);
    tr.appendChild(phone);
    tr.appendChild(editBtn);
    tr.appendChild(deleteBtn);
    tbody.appendChild(tr.cloneNode(true));
  });
  const deleteBtns = document.querySelectorAll("button.delete");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.parentElement.getAttribute("data-id");
      e.target.parentElement.parentElement.remove();
      allUsers.splice(
        allUsers.findIndex((user) => user.id === +id),
        1
      );
    });
  });

  const editBtns = document.querySelectorAll("button.edit");
  editBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const nameInput = document.querySelector('input[name="name"]');
      const emailInput = document.querySelector('input[name="email"]');
      const phoneInput = document.querySelector('input[name="phone"]');
      const id = e.target.parentElement.getAttribute("data-id");

      nameInput.value =
        e.target.parentElement.parentElement.children[0].textContent;
      emailInput.value =
        e.target.parentElement.parentElement.children[1].textContent;
      phoneInput.value =
        e.target.parentElement.parentElement.children[2].textContent;
      e.target.parentElement.parentElement.remove();
      allUsers.splice(
        allUsers.findIndex((user) => user.id === +id),
        1
      );
    });
  });
};

getUsers();

addBnt.addEventListener("click", (e) => {
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const phoneInput = document.querySelector('input[name="phone"]');

  const { tr, name, email, phone, editBtn, deleteBtn } = createElements();

  id = allUsers.length + 1;

  tr.id = id;
  name.textContent = nameInput.value;
  email.textContent = emailInput.value;
  phone.textContent = phoneInput.value;
  editBtn.setAttribute("data-id", id);
  deleteBtn.setAttribute("data-id", id);

  tr.appendChild(name);
  tr.appendChild(email);
  tr.appendChild(phone);
  tr.appendChild(editBtn);
  tr.appendChild(deleteBtn);
  tbody.appendChild(tr.cloneNode(true));

  allUsers.push({
    id,
    name: nameInput,
    email: emailInput,
    phone: phoneInput,
  });
  emailInput.value = "";
  nameInput.value = "";
  phoneInput.value = "";
});

resetBnt.addEventListener("click", (e) => {
  tbody.innerHTML = "";
});
