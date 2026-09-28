const root=document.documentElement;const theme=document.querySelector('#theme');const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const themeButtons=[theme];
const moonIcon='<svg class="theme-symbol" viewBox="0 0 24 24"><path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z"/></svg>';
const sunIcon='<svg class="theme-symbol" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>';
function themeLabel(){const dark=root.dataset.theme==='dark';themeButtons.forEach(button=>{button.setAttribute('aria-label',dark?'Ativar tema claro':'Ativar tema escuro');button.title=dark?'Ativar tema claro':'Ativar tema escuro';button.innerHTML=dark?moonIcon:sunIcon});document.querySelector('meta[name="theme-color"]').content=dark?'#0d0f12':'#fffdfb'}themeLabel();
let themeChanging=false;
const paletteKeys=['--bg','--text','--muted','--pink','--blue','--line','--sky','--back','--middle','--footer','--panel','--yellow'];
function readPalette(){const style=getComputedStyle(root);return paletteKeys.map(key=>{const hex=style.getPropertyValue(key).trim().replace('#','');const full=hex.length===3?hex.split('').map(c=>c+c).join(''):hex;return [0,2,4].map(i=>parseInt(full.slice(i,i+2),16))})}
function mixChannel(a,b,t){return Math.round(a+(b-a)*t)}
function paintPalette(from,to,t){paletteKeys.forEach((key,i)=>root.style.setProperty(key,'rgb('+from[i].map((v,j)=>mixChannel(v,to[i][j],t)).join(',')+')'))}
function toggleTheme(){if(themeChanging)return;themeChanging=true;const from=readPalette();root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';const to=readPalette();paintPalette(from,to,0);themeLabel();try{localStorage.setItem('rj-theme',root.dataset.theme)}catch{}
// Animate actual color values. This also works without View Transitions support.
const duration=reduced.matches?550:1100;const started=performance.now();
function frame(now){const progress=Math.min(1,(now-started)/duration);const eased=progress*progress*(3-2*progress);paintPalette(from,to,eased);if(progress<1){requestAnimationFrame(frame)}else{paletteKeys.forEach(key=>root.style.removeProperty(key));themeChanging=false;themeLabel()}}
requestAnimationFrame(frame);themeButtons.forEach(button=>{if(!reduced.matches&&button.animate)button.animate([{transform:'rotate(-100deg) scale(.6)'},{transform:'rotate(15deg) scale(1.15)'},{transform:'rotate(0) scale(1)'}],{duration:850,easing:'ease-out'})});playTone(660)}
themeButtons.forEach(button=>button.addEventListener('click',toggleTheme));

function playTone(){}
