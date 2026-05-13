let leads = [
    { nome: "Dr João Silva", especialidade: "Cardiologista", telefone: "(81) 99999-9999", cidade: "Recife", email: "joao@med.com", status: "Novo" },
    { nome: "Dra Maria Souza", especialidade: "Dermatologista", telefone: "(81) 98888-8888", cidade: "Olinda", email: "maria@med.com", status: "Aprovado" }
];

let chart;

// Iniciar app
window.onload = () => {
    renderTable(leads);
    initChart();
};

function renderTable(data) {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    data.forEach((lead, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>${lead.nome}</strong><br><small>${lead.especialidade}</small></td>
            <td>${lead.cidade}<br><small>${lead.email}</small></td>
            <td><span style="color: ${lead.status === 'Aprovado' ? '#22c55e' : '#3b82f6'}">${lead.status}</span></td>
            <td>
                <button onclick="deleteLead(${index})" style="background:none; border:none; color:#ef4444; cursor:pointer">Excluir</button>
                <button onclick="approveLead(${index})" style="background:none; border:none; color:#22c55e; cursor:pointer; margin-left:10px">Aprovar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    updateStats();
    if(chart) updateChart();
}

// Funções do Modal
function openModal() { document.getElementById("modalLead").style.display = "block"; }
function closeModal() { document.getElementById("modalLead").style.display = "none"; }

// Salvar Lead
document.getElementById("leadForm").onsubmit = (e) => {
    e.preventDefault();
    const newLead = {
        nome: document.getElementById("nome").value,
        especialidade: document.getElementById("especialidade").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("emailLead").value,
        cidade: document.getElementById("cidade").value,
        status: "Novo"
    };

    leads.push(newLead);
    renderTable(leads);
    closeModal();
    e.target.reset();
};

function updateStats() {
    document.getElementById("stat-total").innerText = leads.length;
    document.getElementById("stat-novos").innerText = leads.filter(l => l.status === "Novo").length;
    document.getElementById("stat-aprovados").innerText = leads.filter(l => l.status === "Aprovado").length;
}

function initChart() {
    const ctx = document.getElementById('leadsChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'bar',
        data: { labels: ['Recife', 'Olinda', 'Jaboatão'], datasets: [{ label: 'Leads', data: [0,0,0], backgroundColor: '#d4af37' }] },
        options: { scales: { y: { ticks: { color: '#fff' } }, x: { ticks: { color: '#fff' } } } }
    });
    updateChart();
}

function updateChart() {
    const counts = ['Recife', 'Olinda', 'Jaboatão'].map(c => leads.filter(l => l.cidade === c).length);
    chart.data.datasets[0].data = counts;
    chart.update();
}
