const messages = [
  { text: "INITIALIZING HACK PROGRAM ......",           cls: ""     },
  { text: "HACKING SIQUISH USERNAME .......",           cls: ""     },
  { text: "USERNAME FOUND (fr_abuhasim) !!!!!",         cls: "warn" },
  { text: "CONNECTING TO INSTAGRAM ..... CONNECTED ✓", cls: ""     },
];
 
let running = false;
 
function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}
 
async function typeText(spanEl, text, delay = 28) {
  for (let ch of text) {
    spanEl.textContent += ch;
    await sleep(delay);
  }
}
 
async function startHack() {
  if (running) return;
  running = true;
 
  const btn    = document.getElementById('runBtn');
  const output = document.getElementById('output');
  const idle   = document.getElementById('idle-cursor');
 
  btn.disabled    = true;
  btn.textContent = '⏳  HACKING...';
  output.innerHTML = '';
  idle.style.display = 'none';
 
  // ── Your original promises ──────────────────────────────────────
  let hack1 = new Promise((resolve) => {
    setTimeout(() => resolve("INITIALIZING HACK PROGRAM ......"), 5000);
  });
 
  let hack2 = new Promise((resolve) => {
    setTimeout(() => resolve("HACKING SIQUISH USERNAME ......."), 10000);
  });
 
  let hack3 = new Promise((resolve) => {
    setTimeout(() => resolve("USERNAME FOUND (fr_abuhasim) !!!!!"), 15000);
  });
 
  let hack4 = new Promise((resolve) => {
    setTimeout(() => resolve("CONNECTING TO INSTAGRAM ..... CONNECTED SUCCESSFULLY ✓"), 20000);
  });
 
  // Await each and display with typewriter effect
  const results  = [hack1, hack2, hack3, hack4];
  const cssClass = ["", "", "warn", ""];
 
  for (let i = 0; i < results.length; i++) {
    const text = await results[i];
 
    const line = document.createElement('div');
    line.className = 'line ' + cssClass[i];
 
    const promptSpan = document.createElement('span');
    promptSpan.className = 'prompt';
    promptSpan.textContent = 'root@malegaon:~$';
 
    const textSpan = document.createElement('span');
 
    const cur = document.createElement('span');
    cur.className = 'cursor';
 
    line.appendChild(promptSpan);
    line.appendChild(textSpan);
    line.appendChild(cur);
    output.appendChild(line);
 
    await typeText(textSpan, ' ' + text, 22);
    cur.remove();
  }
 
  // Access granted banner
  const banner = document.createElement('div');
  banner.className = 'access-banner';
  banner.innerHTML = `
    ✔ ACCESS GRANTED — TARGET COMPROMISED
    <div class="bar">████████████████████████████████ 100%</div>
  `;
  output.appendChild(banner);
 
  idle.style.display = 'block';
  btn.disabled    = false;
  btn.textContent = '↻  RUN AGAIN';
  running = false;
}