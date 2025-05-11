function animateWave() {
    let angle = 0;
    setInterval(() => {
        Array.from(document.querySelectorAll('.wavy span')).forEach((span, i) => {
            const y = Math.sin((angle + i * 10) * Math.PI / 80) * 5;
            span.style.transform = `translateY(${y}px)`;
        });
        angle += 5;
    }, 50);
}

document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.getElementsByClassName('wavy');

    Array.from(textElements).forEach((element) => {
        const characters = element.textContent.split('');
        element.textContent = '';

        characters.forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            element.appendChild(span);
        });
    });

    animateWave();
});