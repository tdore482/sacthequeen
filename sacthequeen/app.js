const G={K:"♚",Q:"♛",R:"♜",B:"♝",N:"♞",P:"♟"};
const O=[
{n:"Ruy López",g:"e4",t:"Classical pressure",m:"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7",s:"e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7",a:"a4c6 c6e5",i:"The bishop on b5 leans on the knight that guards e5. White builds pressure slowly, then opens the center when Black's pieces are tied down.",p:"White: Re1, Bb3, c3, then d4. Black: ...b5, ...d6, then ...O-O."},
{n:"Italian Game",g:"e4",t:"Quiet, flexible",m:"e2e4 e7e5 g1f3 b8c6 f1c4 f8c5 c2c3 g8f6 d2d3 d7d6",s:"e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6",a:"c4f7 d3d4",i:"The bishop on c4 eyes f7, the most fragile square at the start. White supports the center with c3 and d3, then looks for the d4 break.",p:"White: Nbd2, O-O, then d4. Black: ...O-O, ...a6, and ...d5 when the moment is right."},
{n:"Sicilian Defense (Najdorf)",g:"e4",t:"Sharp counterplay",m:"e2e4 c7c5 g1f3 d7d6 d2d4 c5d4 f3d4 g8f6 b1c3 a7a6",s:"e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6",a:"a6b5 f6e4",i:"Black answers with a flank pawn instead of copying White. After the trade on d4 the pawn structures differ, so both sides can play for a win.",p:"White: Be3 or Bg5, f3, then a kingside attack. Black: ...e5 or ...e6, ...b5, and counterplay on the queenside."},
{n:"French Defense",g:"e4",t:"Solid pawn chain",m:"e2e4 e7e6 d2d4 d7d5 b1c3 g8f6 c1g5 f8e7",s:"e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7",a:"d5e4 g5f6",i:"Black builds a chain on d5 and e6, then chips at White's center with ...c5. The c8 bishop has limited scope until the chain changes.",p:"White: e5 for space, or keep the tension with Bg5. Black: ...c5 and ...Nc6 to hit d4, then free the c8 bishop."},
{n:"Caro-Kann Defense",g:"e4",t:"Solid structure",m:"e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5",s:"e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5",a:"f5e4 b8d7",i:"Like the French, Black supports d5 with a pawn. Here the c8 bishop gets out before ...e6 can box it in, which makes Black's development smoother.",p:"White: Ng3 to chase the bishop, then develop and use the extra space. Black: ...e6, ...Nd7, ...Ngf6 with a sound structure."},
{n:"Queen's Gambit Declined",g:"d4",t:"Classical and sound",m:"d2d4 d7d5 c2c4 e7e6 b1c3 g8f6 c1g5 f8e7",s:"d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7",a:"g5f6 c4d5",i:"White offers the c-pawn to draw Black's d-pawn off its post. It is not a true gamble, since White can recapture. Here Black declines and holds the center with ...e6.",p:"White: e3, Nf3, Rc1, and pressure down the c-file. Black: castle, ...Nbd7, and ...c6 to reinforce the center."},
{n:"King's Indian Defense",g:"d4",t:"Dynamic and ambitious",m:"d2d4 g8f6 c2c4 g7g6 b1c3 f8g7 e2e4 d7d6 g1f3 e8g8",s:"d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O",a:"e7e5 c4c5",i:"Black allows a wide White center, then attacks it from the side, usually with ...e5. The bishop on g7 becomes the hero of the position.",p:"White: Be2, O-O, and space on the queenside. Black: ...e5, ...Ne7, then ...f5 and a kingside pawn storm."},
{n:"English Opening",g:"c4",t:"Flexible system",m:"c2c4 e7e5 b1c3 g8f6 g1f3 b8c6 g2g3 d7d5 c4d5 f6d5",s:"c4 e5 Nc3 Nf6 Nf3 Nc6 g3 d5 cxd5 Nxd5",a:"f1g2 c3d5",i:"White controls d5 from the flank. After 1...e5 the position resembles a Sicilian with colors reversed, with White a tempo to the good.",p:"White: Bg2 and O-O, then d3 or a well-timed d4. Black: ...Nxd5 and ...Nb6, then develop calmly."},
{n:"Nimzo-Indian Defense",g:"d4",t:"Strategic and principled",m:"d2d4 g8f6 c2c4 e7e6 b1c3 f8b4 e2e3 e8g8 f1d3 d7d5",s:"d4 Nf6 c4 e6 Nc3 Bb4 e3 O-O Bd3 d5",a:"b4c3 f6e4",i:"The pin on c3 stops White's e4 push, and Black fights for that square with pieces. Taking on c3 can double White's pawns and change the long-term balance.",p:"White: Nf3, keep the bishop pair, build the center. Black: ...d5 or ...c5, and ...Bxc3 when it serves the plan."},
{n:"London System",g:"d4",t:"Easy to learn",m:"d2d4 d7d5 c1f4 g8f6 e2e3 e7e6 g1f3 c7c5 c2c3 b8c6",s:"d4 d5 Bf4 Nf6 e3 e6 Nf3 c5 c3 Nc6",a:"f4d6 e3e4",i:"White uses the same setup against almost anything: Bf4, e3, Nf3, c3, and Bd3. Little theory is needed, so attention can go to the plan.",p:"White: Bd3, Nbd2, O-O, then e4 or a kingside build-up. Black: ...c5 and ...Nc6 to strike at d4."},
{n:"Scandinavian Defense",g:"e4",t:"Direct and clear",m:"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6",s:"e4 d5 exd5 Qxd5 Nc3 Qa5 d4 Nf6 Nf3 c6",a:"a5c3 c8f5",i:"Black strikes the e4 pawn on move one and recaptures with the queen. The queen steps out early, but a5 is safe and the c8 bishop stays free.",p:"White: Bc4, Bd2, then castle and use the lead in development. Black: ...Bf5, ...e6, and ...Nbd7 for a solid base."},
{n:"Petrov Defense",g:"e4",t:"Very solid",m:"e2e4 e7e5 g1f3 g8f6 f3e5 d7d6 e5f3 f6e4 d2d4 d6d5 f1d3 b8c6 e1g1 f8e7",s:"e4 e5 Nf3 Nf6 Nxe5 d6 Nf3 Nxe4 d4 d5 Bd3 Nc6 O-O Be7",a:"d3e4 c6d4",i:"Black answers the attack on e5 with a counter-attack on e4. The play often becomes symmetrical, which is why this line has a reputation for safety.",p:"White: c4 or Nc3 to challenge the knight on e4. Black: ...O-O, ...Bf5, and ...Re8 for a calm, balanced game."},
{n:"Pirc Defense",g:"e4",t:"Flexible and modern",m:"e2e4 d7d6 d2d4 g8f6 b1c3 g7g6 g1f3 f8g7 f1e2 e8g8",s:"e4 d6 d4 Nf6 Nc3 g6 Nf3 Bg7 Be2 O-O",a:"f6e4 c7c5",i:"Black lets White take the center with pawns, then hits it from the flank. The g7 bishop wants the long diagonal. The idea is close to the King's Indian.",p:"White: O-O, Be3, Qd2, and kingside play. Black: ...c6, ...Nbd7, then the ...e5 or ...c5 break."},
{n:"Alekhine's Defense",g:"e4",t:"Provocative",m:"e2e4 g8f6 e4e5 f6d5 d2d4 d7d6 g1f3 c8g4 f1e2 e7e6",s:"e4 Nf6 e5 Nd5 d4 d6 Nf3 Bg4 Be2 e6",a:"d6e5 g4f3",i:"Black invites the e-pawn forward, then attacks the advanced chain from behind. White gains space, but those pawns can become targets.",p:"White: c4 to kick the knight and guard the space. Black: ...dxe5 or ...Nb6, then trade pieces to attack the large center."},
{n:"Slav Defense",g:"d4",t:"Solid and structural",m:"d2d4 d7d5 c2c4 c7c6 g1f3 g8f6 b1c3 d5c4 a2a4 c8f5",s:"d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5",a:"f5b1 a4b5",i:"Black supports d5 with the c-pawn and keeps the c8 bishop free. Black can take on c4 and try to hold the pawn for a while.",p:"White: e3, Bxc4, and regain the pawn with free development. Black: ...e6, ...Bb4, then ...O-O."},
{n:"Grünfeld Defense",g:"d4",t:"Sharp and theoretical",m:"d2d4 g8f6 c2c4 g7g6 b1c3 d7d5 c4d5 f6d5 e2e4 d5c3 b2c3 f8g7",s:"d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7",a:"g7d4 c7c5",i:"White builds a broad pawn center. Black attacks it with the g7 bishop and other pieces rather than trying to hold the center with pawns.",p:"White: Nf3, Be3 or Bc4, and keep the center together. Black: ...c5, ...Nc6, and pressure against d4."},
{n:"Dutch Defense",g:"d4",t:"Aggressive",m:"d2d4 f7f5 g2g3 g8f6 f1g2 e7e6 g1f3 f8e7 e1g1 e8g8",s:"d4 f5 g3 Nf6 Bg2 e6 Nf3 Be7 O-O O-O",a:"f5e4 c2c4",i:"Black fights for e4 with the f-pawn. That creates real kingside chances, but it also loosens the pawn cover around Black's own king.",p:"White: c4, Nc3, then Qc2 and e4. Black: ...d6, ...Qe8, then the ...e5 break."},
{n:"Englund Gambit",g:"d4",t:"Risky gambit",m:"d2d4 e7e5 d4e5 b8c6 g1f3 d8e7 c1f4 e7b4",s:"d4 e5 dxe5 Nc6 Nf3 Qe7 Bf4 Qb4+",a:"c6e5 b4b2",i:"Black gives up the e-pawn to open the center and develop fast. The knight on c6 and queen on e7 both attack e5, and ...Qb4+ tests White's b2 pawn. Careful play leaves White a pawn up and ahead in development.",p:"White: Bg5 to hit the queen, or return the pawn with Nc3 and develop. Black: ...Qb4+ and ...Qxb2, then ...Bb4; do not grab pawns if the queen gets trapped."},
{n:"Catalan Opening",g:"d4",t:"Positional and pressure",m:"d2d4 g8f6 c2c4 e7e6 g2g3 d7d5 f1g2 f8e7",s:"d4 Nf6 c4 e6 g3 d5 Bg2 Be7",a:"g2d5 c4d5",i:"The bishop on g2 presses on d5 and the long diagonal. It mixes Queen's Gambit structure with a fianchetto, so small advantages build slowly.",p:"White: Nf3, O-O, Qc2, and keep the strong bishop on g2. Black: ...O-O, then ...dxc4 or ...c6 to hold the center."},
{n:"Réti Opening",g:"Nf3",t:"Hypermodern and flexible",m:"g1f3 d7d5 c2c4 e7e6 g2g3 g8f6 f1g2 f8e7 e1g1 e8g8",s:"Nf3 d5 c4 e6 g3 Nf6 Bg2 Be7 O-O O-O",a:"c4d5 f3e5",i:"White does not fill the center at once. Knights, bishops, and the c-pawn control it from the flanks, which is the hypermodern idea.",p:"White: d4 or b3 with Bb2 and Nc3. Black: ...c5 or ...c6 to support d5."}
];
const ord=["e4","d4","c4","Nf3"];
O.sort((a,b)=>ord.indexOf(a.g)-ord.indexOf(b.g));
const init=()=>"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR".split("/").map(r=>[...r].flatMap(c=>/\d/.test(c)?Array(+c).fill(""):[c]));
function states(m){const b=init(),out=[{b:b.map(r=>[...r]),l:null}];
for(const v of m.split(" ")){const f=[8-v[1],v.charCodeAt(0)-97],t=[8-v[3],v.charCodeAt(2)-97],p=b[f[0]][f[1]];
b[t[0]][t[1]]=p;b[f[0]][f[1]]="";
if(p.toLowerCase()=="k"&&Math.abs(t[1]-f[1])==2){const r=t[1]>f[1]?[7,5]:[0,3];b[t[0]][r[1]]=b[t[0]][r[0]];b[t[0]][r[0]]=""}
out.push({b:b.map(r=>[...r]),l:[f,t]})}
return out}
const ctr=q=>[(q.charCodeAt(0)-97)*10+5,(8-q[1])*10+5];
function arrow(a){const p=ctr(a.slice(0,2)),q=ctr(a.slice(2)),dx=q[0]-p[0],dy=q[1]-p[1],L=Math.hypot(dx,dy),u=[dx/L,dy/L],v=[-u[1],u[0]],e=[q[0]-u[0]*1.5,q[1]-u[1]*1.5],b=[e[0]-u[0]*3.4,e[1]-u[1]*3.4];
return `<line x1="${p[0]}" y1="${p[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#e8590c" stroke-width="1.5" stroke-linecap="round" opacity=".85"/><polygon points="${e} ${b[0]+v[0]*1.8},${b[1]+v[1]*1.8} ${b[0]-v[0]*1.8},${b[1]-v[1]*1.8}" fill="#e8590c" opacity=".85"/>`}
let showA=true,filter="all",query="";
const grid=document.getElementById("grid");
O.forEach(o=>{o.S=states(o.m);o.k=o.S.length-1;o.hay=(o.n+" "+o.t+" "+o.i+" "+o.p+" "+o.s+" "+o.g).toLowerCase()});
function view(i){const o=O[i],S=o.S[o.k],n=o.S.length-1,c=document.getElementById("c"+i);
const played=o.k?o.s.split(" ").slice(0,o.k).join(" "):"the starting position";
let s=`<svg class="board" viewBox="0 0 80 80" role="img" aria-label="${o.n}, ${played}. Ply ${o.k} of ${n}.">`;
for(let r=0;r<8;r++)for(let q=0;q<8;q++){const d=(r+q)%2,lc=d?"#ebecd0":"#739552";
s+=`<rect x="${q*10}" y="${r*10}" width="10" height="10" fill="${d?'#739552':'#ebecd0'}"/>`;
if(q==0)s+=`<text x=".7" y="${r*10+3}" font-size="2.6" fill="${lc}">${8-r}</text>`;
if(r==7)s+=`<text x="${q*10+9.3}" y="79" font-size="2.6" text-anchor="end" fill="${lc}">${"abcdefgh"[q]}</text>`}
if(S.l)S.l.forEach(([r,q])=>s+=`<rect x="${q*10}" y="${r*10}" width="10" height="10" fill="#f5f682" opacity=".6"/>`);
S.b.forEach((row,r)=>row.forEach((p,q)=>{if(p){const w=p<"a";s+=`<text class="p" x="${q*10+5}" y="${r*10+7.7}" font-size="8.8" text-anchor="middle" fill="${w?'#fff':'#1b1b1b'}" stroke="${w?'#222':'#000'}" stroke-width=".4" paint-order="stroke">${G[p.toUpperCase()]}\uFE0E</text>`}}));
if(showA&&o.k==n)o.a.split(" ").forEach(a=>s+=arrow(a));
c.querySelector(".bd").innerHTML=s+"</svg>";
let h="";o.s.split(" ").forEach((x,j)=>{if(j%2==0)h+=`<em>${j/2+1}.</em>`;h+=`<span data-j="${j+1}" role="button" tabindex="0" title="Jump to ${x}" class="${o.k==j+1?"on":""}">${x}</span>`});
c.querySelector(".mv").innerHTML=h}
grid.innerHTML=O.map((o,i)=>`<article class="card" id="c${i}"><div class="card-head"><div><h3>${o.n}</h3><span class="badge">1.${o.g}</span></div><div class="tag">${o.t}</div></div><div class="bd"></div><div class="ctl"><button type="button" data-a="s" aria-label="Start position" title="Start">«</button><button type="button" data-a="-1" aria-label="Previous move" title="Back">‹</button><button type="button" data-a="1" aria-label="Next move" title="Next">›</button><button type="button" data-a="e" aria-label="Full line" title="End">»</button></div><div class="mv" aria-label="Move list"></div><p class="idea"><b>Idea:</b> ${o.i}</p><p class="plan"><b>Plans:</b> ${o.p}</p></article>`).join("");
O.forEach((_,i)=>view(i));
function applyFilters(){let shown=0;
grid.querySelectorAll(".card").forEach((c,i)=>{const o=O[i],ok=(filter=="all"||o.g==filter)&&(!query||o.hay.includes(query));c.hidden=!ok;if(ok)shown++});
document.getElementById("empty").hidden=shown>0;
document.getElementById("count").textContent=`Showing ${shown} of ${O.length} openings`}
applyFilters();
function jump(card,span){const i=+card.id.slice(1),o=O[i];o.k=+span.dataset.j;view(i)}
grid.addEventListener("click",e=>{const c=e.target.closest(".card");if(!c)return;const o=O[c.id.slice(1)|0],n=o.S.length-1,b=e.target.closest("button"),sp=e.target.closest("[data-j]");
if(b){const a=b.dataset.a;o.k=a=="s"?0:a=="e"?n:Math.min(n,Math.max(0,o.k+ +a));view(+c.id.slice(1))}else if(sp)jump(c,sp)});
grid.addEventListener("keydown",e=>{if(e.key!=="Enter"&&e.key!==" ")return;const sp=e.target.closest("[data-j]");if(!sp)return;e.preventDefault();jump(sp.closest(".card"),sp)});
document.querySelectorAll(".chip[data-f]").forEach(b=>b.addEventListener("click",()=>{filter=b.dataset.f;document.querySelectorAll(".chip[data-f]").forEach(x=>x.setAttribute("aria-pressed",x===b));applyFilters()}));
document.getElementById("search").addEventListener("input",e=>{query=e.target.value.trim().toLowerCase();applyFilters()});
document.getElementById("ar").addEventListener("change",e=>{showA=e.target.checked;O.forEach((_,i)=>view(i))});
const themeBtn=document.getElementById("theme"),themeLabel=themeBtn.querySelector(".theme-label");
const media=()=>window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):{matches:false,addEventListener(){}};
function readTheme(){try{return localStorage.getItem("stq-theme")}catch{return null}}
function syncTheme(){const dark=document.documentElement.dataset.theme==="dark"||(!document.documentElement.dataset.theme&&media().matches);themeLabel.textContent=dark?"Light":"Dark";themeBtn.setAttribute("aria-label",`Switch to ${dark?"light":"dark"} theme`)}
const saved=readTheme();if(saved=="dark"||saved=="light")document.documentElement.dataset.theme=saved;
syncTheme();
media().addEventListener("change",()=>{if(!document.documentElement.dataset.theme)syncTheme()});
themeBtn.addEventListener("click",()=>{const dark=document.documentElement.dataset.theme==="dark"||(!document.documentElement.dataset.theme&&media().matches),next=dark?"light":"dark";document.documentElement.dataset.theme=next;try{localStorage.setItem("stq-theme",next)}catch{}syncTheme()});
