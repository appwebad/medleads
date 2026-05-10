const leads = [
  {
    nome: 'Dr João Silva',
    especialidade: 'Cardiologista',
    telefone: '(81) 99999-9999',
    cidade: 'Recife',
    status: 'Novo'
  },
  {
    nome: 'Dra Maria Souza',
    especialidade: 'Dermatologista',
    telefone: '(81) 98888-8888',
    cidade: 'Olinda',
    status: 'Em análise'
  },
  {
    nome: 'Dr Carlos Lima',
    especialidade: 'Ortopedista',
    telefone: '(81) 97777-7777',
    cidade: 'Jaboatão',
    status: 'Fechado'
  }
]

const tbody = document.getElementById('leadsTable')

leads.forEach(lead => {

  const tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${lead.nome}</td>
    <td>${lead.especialidade}</td>
    <td>${lead.telefone}</td>
    <td>${lead.cidade}</td>
    <td>${lead.status}</td>
  `

  tbody.appendChild(tr)
})

const ctx = document.getElementById('chartLeads')

new Chart(ctx, {
  type: 'bar',

  data: {
    labels: ['Recife', 'Olinda', 'Jaboatão'],

    datasets: [{
      label: 'Leads por Cidade',
      data: [120, 90, 70]
    }]
  },

  options: {
    responsive: true
  }
})

const buscarButton = document.getElementById('buscarLeads')

buscarButton.addEventListener('click', () => {
  alert('Sistema de busca conectado ao Google Places API')
})
