document.addEventListener('DOMContentLoaded', function() {
    // Configuração da data do próximo mês (28 de agosto de 2025)
    const nextMonthDate = new Date('August 28, 2025 00:00:00').getTime();
    
    // Contagem regressiva
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = nextMonthDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = "É hoje! Feliz Mensiversário!";
        }
    }, 1000);
    
    // Criar confetes
    createConfetti();
});

function createConfetti() {
    const colors = ['#ff0000', '#a71d31', '#3f0d12', '#ff4d4d', '#ff9999'];
    const confettiContainer = document.getElementById('confetti');
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -10 + 'px';
        confetti.style.opacity = Math.random() + 0.5;
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        
        const animationDuration = Math.random() * 3 + 2 + 's';
        const animationDelay = Math.random() * 5 + 's';
        
        confetti.style.animation = `fall ${animationDuration} ${animationDelay} linear infinite`;
        
        confettiContainer.appendChild(confetti);
    }
    
    // Adicionar animação de queda
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Explodir confetes ao carregar
    setTimeout(() => {
        document.querySelector('.surpresa').style.transform = 'scale(1.2)';
        setTimeout(() => {
            document.querySelector('.surpresa').style.transform = 'scale(1)';
        }, 500);
    }, 1000);
}
