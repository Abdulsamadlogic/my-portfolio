const terminalLines = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', html: '<strong>Abdul-Samad</strong> · ML &amp; AI Engineer' },
  { type: 'cmd', text: 'cat about.txt' },
  { type: 'out', html: "Self-taught Machine Learning &amp; AI Engineer. <br>Building intelligent systems, one model at a time." },
  { type: 'cmd', text: 'cat stack.txt' },
  { type: 'out', html: 'Python · PyTorch · TensorFlow · Scikit-learn · NumPy · <br>Deep Learning · RAG · NLP · Machine Learning' },
  { type: 'cmd', text: 'whereami' },
  { type: 'out', html: 'Lagos, Nigeria' },
  { type: 'cmd', text: './status' },
  { type: 'out', html: '<span class="dot-muted"></span> student <span class="dot-live" style="margin-left:14px;"></span> open to opportunities', accent: true },
  { type: 'comment', text: '# ps: exploring ML, deep learning, and AI one experiment at a time.' }
];

function typeTerminal(){
  const body = document.getElementById('terminalBody');
  body.innerHTML = '';
  let lineIndex = 0;

  function nextLine(){
    if (lineIndex >= terminalLines.length){
      const cursorEl = document.createElement('span');
      cursorEl.className = 'cursor';
      const promptEl = document.createElement('span');
      promptEl.className = 'prompt';
      promptEl.textContent = '$';
      body.appendChild(promptEl);
      body.appendChild(cursorEl);
      return;
    }

    const line = terminalLines[lineIndex];

    if (line.type === 'cmd'){
      const prompt = document.createElement('span');
      prompt.className = 'prompt';
      prompt.textContent = '$ ';
      const cmdText = document.createElement('span');
      body.appendChild(prompt);
      body.appendChild(cmdText);

      let charIndex = 0;
      const typeChar = setInterval(() => {
        cmdText.textContent += line.text[charIndex];
        charIndex++;
        if (charIndex >= line.text.length){
          clearInterval(typeChar);
          body.appendChild(document.createElement('br'));
          lineIndex++;
          setTimeout(nextLine, 200);
        }
      }, 35);

    } else if (line.type === 'out'){
      const out = document.createElement('span');
      out.className = 'out' + (line.accent ? ' accent' : '');
      out.innerHTML = line.html;
      body.appendChild(out);
      lineIndex++;
      setTimeout(nextLine, 250);

    } else if (line.type === 'comment'){
      const out = document.createElement('span');
      out.className = 'out comment';
      out.textContent = line.text;
      body.appendChild(out);
      lineIndex++;
      setTimeout(nextLine, 250);
    }
  }

  nextLine();
}

window.addEventListener('DOMContentLoaded', typeTerminal);

const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, { threshold: 0.2 });

revealEls.forEach(el => revealObserver.observe(el));


const osSection = document.querySelector('.opensource-section');
const osCards = document.querySelectorAll('.os-card');

const osObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      osCards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('show');
        }, i * 1000);
      });
    } else {
      osCards.forEach(card => card.classList.remove('show'));
    }
  });
}, { threshold: 0.2 });

if (osSection){
  osObserver.observe(osSection);
}



const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}