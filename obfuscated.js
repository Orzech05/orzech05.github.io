const OBFUSCATION_CHARS = '!@#$%^&*(){}[]></\\0987654321'.split('');
const obfuscationSpeed = 20;

function obfuscate(element) {
  const originalText = element.textContent;

  setInterval(() => {
    let newText = '';
    for (let char of originalText) {
      if (char === ' ') {
        newText += ' ';
      } else {
        const randomChar = OBFUSCATION_CHARS[Math.floor(Math.random() * OBFUSCATION_CHARS.length)];
        newText += randomChar;
      }
    }
    element.textContent = newText;
  }, obfuscationSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.obfuscated').forEach(el => {
    obfuscate(el);
  });
});