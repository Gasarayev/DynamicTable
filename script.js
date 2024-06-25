let user = [
  {
    firstName: "Emil",
    lastName: "Gasarayev",
    age: 27,
    mail: "emil.gasar@example.com",
    address: "Azerbaijan",
    phone: "555-785-99-68",
    birthDate: "01.01.1997",
  },
  {
    firstName: "Carullah",
    lastName: "Racabov",
    age: 27,
    mail: "caro.jerry@example.com",
    address: "Poland",
    phone: "555-785-99-68",
    birthDate: "01.01.1996",
  },
  {
    firstName: "Murad",
    lastName: "Zangiyev",
    age: 26,
    mail: "murad.lyosh@example.com",
    address: "Azerbaijan",
    phone: "555-785-99-68",
    birthDate: "01.01.1997",
  },
  {
    firstName: "Soltan",
    lastName: "Gadziyev",
    age: 25,
    mail: "soltan.chultan@example.com",
    address: "Georgia",
    phone: "555-785-99-68",
    birthDate: "01.01.1998",
  },
  {
    firstName: "Remzi",
    lastName: "Muradov",
    age: 27,
    mail: "remzi.remsih@example.com",
    address: "Usa",
    phone: "555-785-99-68",
    birthDate: "01.01.1997",
  },
  {
    firstName: "Cavanshir",
    lastName: "Aliyev",
    age: 27,
    mail: "cavanshir.goca@example.com",
    address: "China",
    phone: "555-785-99-68",
    birthDate: "01.01.1997",
  },
  {
    firstName: "Vugar",
    lastName: "Mustafazada",
    age: 26,
    mail: "vugar.toshu@example.com",
    address: "Azerbaijan",
    phone: "555-785-99-68",
    birthDate: "01.01.1997",
  },
  {
    firstName: "Elvin",
    lastName: "Maxmudov",
    age: 25,
    mail: "elvin.fshshsh@example.com",
    address: "Azerbaijan",
    phone: "555-785-99-68",
    birthDate: "01.01.1997",
  },
];

let root = document.querySelector("root");
let table = document.createElement("table");

table.classList.add("table", "table-striped", "table-bordered", "table-hover");

let tbody = document.createElement("tbody");
let thead = document.createElement("thead");
let trHead = document.createElement("tr");

let text = [
  "First Name",
  "Last Name",
  "Age",
  "Mail",
  "Address",
  "Phone",
  "Birthday Date",
];

text.forEach((content) => {
  let th = document.createElement("th");
  th.textContent = content;

  trHead.appendChild(th);
});

thead.appendChild(trHead);
table.appendChild(thead);

user.forEach((users) => {
  let trBody = document.createElement("tr");

  Object.values(users).forEach((bodyContent) => {
    let td = document.createElement("td");

    td.textContent = bodyContent;
    trBody.appendChild(td);
  });

  tbody.appendChild(trBody);
  table.appendChild(tbody);
});

root.appendChild(table);
