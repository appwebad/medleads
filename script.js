// Atualize seu objeto de leads para incluir e-mail
let leads = [
  { id: 1, nome: "Dr João Silva", email: "joao@email.com", cidade: "Recife", status: "Novo" },
];

function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach((lead, index) => {
    const row = document.createElement("tr");
    
    // Link para compor e-mail no Gmail
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${lead.email}&su=Contato MedLead&body=Olá ${lead.nome},`;

    row.innerHTML = `
      <td>${lead.nome}</td>
      <td>
        <small>${lead.email}</small><br>
        <small style="color: #999">${lead.cidade}</small>
      </td>
      <td><span class="status-badge status-${lead.status.toLowerCase()}">${lead.status}</span></td>
      <td>
        <a href="${gmailUrl}" target="_blank" class="btn-action btn-email" title="Enviar E-mail">📧</a>
        <button class="btn-action btn-approve" onclick="approveLead(${index})">✓</button>
        <button class="btn-action btn-delete" onclick="deleteLead(${index})">✕</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
  updateStats();
  updateChart();
}

// No evento de Submit do formulário, não esqueça de capturar o e-mail:
// const email = document.getElementById("emailLead").value;
