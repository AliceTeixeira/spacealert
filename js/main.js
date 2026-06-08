console.log("site carregado - spacealert");

const menuHamburguer = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu');

if (menuHamburguer) {
    menuHamburguer.addEventListener('click', function() {
        menu.classList.toggle('active');
        console.log("menu clicado");
    });
}

let slideAtual = 0;
const slides = document.querySelectorAll('.slide');
const btnPrev = document.getElementById('prevBtn');
const btnNext = document.getElementById('nextBtn');

function mostrarSlide(index) {
    if (!slides.length) return;
    
    if (index >= slides.length) slideAtual = 0;
    if (index < 0) slideAtual = slides.length - 1;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    
    slides[slideAtual].classList.add('active');
}

if (btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => {
        slideAtual--;
        mostrarSlide(slideAtual);
    });

    btnNext.addEventListener('click', () => {
        slideAtual++;
        mostrarSlide(slideAtual);
    });
}

const formContato = document.getElementById('form-contato');
const modal = document.getElementById('modal');
const fecharModal = document.querySelector('.fechar');

if (formContato) {
    formContato.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }
        
        if (modal) {
            modal.style.display = 'flex';
        }
        
        formContato.reset();
    });
}

if (fecharModal) {
    fecharModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

const btnSimular = document.getElementById('simularAlerta');

if (btnSimular) {
    btnSimular.addEventListener('click', function() {
        alert("🚨 ALERTA SIMULADO: Regiao de Petropolis - RJ apresenta risco de deslizamento!");
    });
}

function carregarListaAlertas() {
    const container = document.getElementById('listaAlertas');
    const dataSpan = document.getElementById('dataAtualizacao');
    
    if (!container) return;
    
    const agora = new Date();
    if (dataSpan) {
        dataSpan.textContent = agora.toLocaleString('pt-BR');
    }
    
    const alertas = [
        { local: 'Serra do Mar - SP', risco: 'Alto', descricao: 'Risco de deslizamento nas proximas 24h' },
        { local: 'Vale do Itajaí - SC', risco: 'Alto', descricao: 'Enchente iminente devido as chuvas' },
        { local: 'Baixada Fluminense - RJ', risco: 'Medio', descricao: 'Alagamento em areas baixas' },
        { local: 'Amazônia - RO', risco: 'Medio', descricao: 'Focos de queimada detectados' },
        { local: 'Serra Gaucha - RS', risco: 'Baixo', descricao: 'Sem alertas no momento' }
    ];
    
    container.innerHTML = '';
    
    for (let i = 0; i < alertas.length; i++) {
        const alerta = alertas[i];
        const div = document.createElement('div');
        
        let classeRisco = '';
        let textoRisco = '';
        
        if (alerta.risco === 'Alto') {
            classeRisco = 'alto';
            textoRisco = '🔴 ALTO';
        } else if (alerta.risco === 'Medio') {
            classeRisco = 'medio';
            textoRisco = '🟡 MEDIO';
        } else {
            classeRisco = 'baixo';
            textoRisco = '🟢 BAIXO';
        }
        
        div.className = `alerta-card ${classeRisco}`;
        div.innerHTML = `
            <div>
                <strong>📍 ${alerta.local}</strong>
                <p>${alerta.descricao}</p>
            </div>
            <span>${textoRisco}</span>
        `;
        
        container.appendChild(div);
    }
}

carregarListaAlertas();

const linksMenu = document.querySelectorAll('.menu a');

for (let i = 0; i < linksMenu.length; i++) {
    linksMenu[i].addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            menu.classList.remove('active');
        }
    });
}