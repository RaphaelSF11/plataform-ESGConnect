document.getElementById('actionForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const responsible = document.getElementById('responsible').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (!title || !description || !responsible || !startDate || !endDate) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    if (new Date(startDate) > new Date(endDate)) {
        alert('A data de início não pode ser posterior à data de término.');
        return;
    }

    // Obter ações armazenadas no localStorage
    const actions = JSON.parse(localStorage.getItem('actions')) || [];

    // Adicionar nova ação
    const newAction = {
        title,
        description,
        responsible,
        startDate,
        endDate,
        date: new Date().toLocaleString(),
    };
    actions.push(newAction);

    // Atualizar o localStorage
    localStorage.setItem('actions', JSON.stringify(actions));

    alert('Parabéns pela iniciativa! Ação cadastrada com sucesso.');

    // Redirecionar para o histórico de ações
    window.location.href = 'historico.html';

    this.reset();
});
