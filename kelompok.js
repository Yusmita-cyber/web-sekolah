function section(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('visible');
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('jam').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000); 
updateTime(); 