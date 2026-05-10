const leads = [
  {
    nome: "Dr João Silva",
    especialidade: "Cardiologista",
    telefone: "(81) 99999-9999",
    cidade: "Recife",
    status: "Novo",
  },

  {
    nome: "Dra Maria Souza",
    especialidade: "Dermatologista",
    telefone: "(81) 98888-8888",
    cidade: "Olinda",
    status: "Em análise",
  },

  {
    nome: "Dr Carlos Lima",
    especialidade: "Ortopedista",
    telefone: "(81) 97777-7777",
    cidade: "Jaboatão",
    status: "Fechado",
  },
];

const tableBody = document.getElementById("tableBody");

function renderTable(data) {

  tableBody.innerHTML = "";

  data.forEach((lead) => {

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${lead.nome}</td>
      <td>${lead.especialidade}</td>
      <td>${lead.telefone}</td>
      <td>${lead.cidade}</td>
      <td>${lead.status}</td>
    `;

    tableBody.appendChild(row);

  });

}

renderTable(leads);

/* SEARCH */

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  const filtered = leads.filter((lead) =>
    lead.nome.toLowerCase().includes(value)
  );

  renderTable(filtered);

});

/* BUTTON */

const buscarLeads = document.getElementById("buscarLeads");

buscarLeads.addEventListener("click", () => {

  alert("Sistema conectado ao Google Places API.");

});

/* CHART */

const ctx = document.getElementById("leadsChart");

new Chart(ctx, {

  type: "bar",

  data: {

    labels: ["Recife", "Olinda", "Jaboatão"],

    datasets: [
      {
        label: "Leads",
        data: [120, 90, 70],
      },
    ],

  },

  options: {

    responsive: true,

    plugins: {

      legend: {
        labels: {
          color: "white",
        },
      },

    },

    scales: {

      y: {
        ticks: {
          color: "white",
        },
      },

      x: {
        ticks: {
          color: "white",
        },
      },

    },

  },

});
