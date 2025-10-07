let users = [
    { id: 1, name: "Ana", age: 25 },
    { id: 2, name: "Pedro", age: 30 },
    { id: 3, name: "Maria", age: 22 }
];

let nextId = 4;

function getUsersOver23(userList) {
    return userList
        .filter(user => user.age > 23)
        .map(user => user.name);
}

function logToConsole(message, type = 'info') {
    const liveResults = document.getElementById('liveResults');
    const logEntry = document.createElement('div');
    logEntry.className = `log ${type}`;
    logEntry.textContent = message;
    liveResults.appendChild(logEntry);
    liveResults.scrollTop = liveResults.scrollHeight;
}

function updateStats() {
    const totalUsers = users.length;
    const usersOver23 = getUsersOver23(users).length;
    const averageAge = users.length > 0 ? Math.round(users.reduce((sum, user) => sum + user.age, 0) / users.length) : 0;
    const percentage = users.length > 0 ? Math.round((usersOver23 / totalUsers) * 100) : 0;

    document.getElementById('totalUsers').textContent = totalUsers;
    document.getElementById('usersOver23').textContent = usersOver23;
    document.getElementById('averageAge').textContent = averageAge;
    document.getElementById('percentage').textContent = percentage + '%';
}

function updateResults() {
    const originalArrayDiv = document.getElementById('originalArray');
    const filteredResultDiv = document.getElementById('filteredResult');

    originalArrayDiv.innerHTML = `
        <div class="code-block">
${JSON.stringify(users, null, 2)}
        </div>
    `;

    const result = getUsersOver23(users);
    filteredResultDiv.innerHTML = `
        <div class="code-block">
${JSON.stringify(result, null, 2)}
        </div>
        <p><strong>Resultado:</strong> ${result.length > 0 ? result.join(', ') : 'Nenhum usuário encontrado'}</p>
    `;

    updateStats();
}

function runDemo() {
    const btn = event.target;
    btn.classList.add('clicked', 'ripple');
    
    setTimeout(() => {
        btn.classList.remove('clicked', 'ripple');
    }, 300);

    logToConsole('Executando demonstração...', 'info');
    
    setTimeout(() => {
        logToConsole(`Processando ${users.length} usuários...`, 'info');
        
        setTimeout(() => {
            const result = getUsersOver23(users);
            logToConsole(`Encontrados ${result.length} usuários com mais de 23 anos: ${result.join(', ') || 'Nenhum'}`, 'success');
            
            setTimeout(() => {
                logToConsole('Demonstração concluída!', 'success');
                updateResults();
            }, 500);
        }, 800);
    }, 300);
}

function addUser() {
    const btn = event.target;
    btn.classList.add('clicked', 'ripple');
    
    setTimeout(() => {
        btn.classList.remove('clicked', 'ripple');
    }, 300);

    const name = document.getElementById('userName').value.trim();
    const age = parseInt(document.getElementById('userAge').value);

    if (!name || isNaN(age) || age < 0 || age > 120) {
        logToConsole('Erro: Nome e idade válida são obrigatórios!', 'error');
        return;
    }

    const newUser = { id: nextId++, name, age };
    users.push(newUser);
    
    logToConsole(`Usuário adicionado: ${name} (${age} anos)`, 'success');
    updateResults();
    
    document.getElementById('userName').value = '';
    document.getElementById('userAge').value = '';
}

function addRandomUser() {
    const btn = event.target;
    btn.classList.add('clicked', 'ripple');
    
    setTimeout(() => {
        btn.classList.remove('clicked', 'ripple');
    }, 300);

    const names = ['Carlos', 'Julia', 'Roberto', 'Fernanda', 'Lucas', 'Amanda', 'Diego', 'Camila'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAge = Math.floor(Math.random() * 50) + 18;
    
    const newUser = { id: nextId++, name: randomName, age: randomAge };
    users.push(newUser);
    
    logToConsole(`Usuário aleatório adicionado: ${randomName} (${randomAge} anos)`, 'success');
    updateResults();
}

function clearUsers() {
    const btn = event.target;
    btn.classList.add('clicked', 'ripple');
    
    setTimeout(() => {
        btn.classList.remove('clicked', 'ripple');
    }, 300);

    const console = document.getElementById('liveResults');
    console.innerHTML = '';
    
    users = [];
    nextId = 1;
    
    logToConsole('Lista de usuários limpa!', 'info');
    updateResults();
}

function showTypeErrors() {
    logToConsole('Demonstração de erros de tipo:', 'error');
    
    setTimeout(() => {
        logToConsole('getUsersOver23("não é um array") - TypeError!', 'error');
    }, 500);
    
    setTimeout(() => {
        logToConsole('getUsersOver23([{id: "string", name: "Test", age: 25}]) - TypeError!', 'error');
    }, 1000);
    
    setTimeout(() => {
        logToConsole('TypeScript previne esses erros em tempo de compilação!', 'info');
    }, 1500);
}

document.addEventListener('DOMContentLoaded', function() {
    updateResults();
    
    document.getElementById('userName').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addUser();
    });
    
    document.getElementById('userAge').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addUser();
    });
});
