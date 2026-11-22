import*as f from'fs'
let I='/input',O='/output'
for(let id of f.readdirSync(I)){
let t=f.readFileSync(I+'/'+id+'/level.txt','utf8'),w=t.indexOf('\n'),s=t.replace(/\n/g,''),P=s.search(/[@+]/),M='',c=P,D=[-w,w,-1,1],R={}
let K=i=>((i/w|0)>(P/w|0)?9:0)+((i%w-1)/7|0)
for(let i=0;i<s.length;i++){let h=s[i];if(!'.*+$'.includes(h))continue;let m=R[K(i)]??={b:[],g:[]};if('.*+'.includes(h))m.g.push(i);if('$*'.includes(h))m.b.push(i)}
let v,q,F=(a,o,p)=>{v=[];v[p]=' ';q=[p];let l=p;for(let i=0;i<q.length;i++){let x=q[i];if(x<l)l=x;for(let k=0;k<4;k++){let y=x+D[k];if(a[y]!='#'&&!o.includes(y)&&!v[y]){v[y]=v[x]+'udlr'[k];q.push(y)}}}return l}
let Rs=Object.values(R)
for(let m of Rs){
let a=[...s];for(let o of Rs)if(o!=m)for(let b of o.b)a[b]='#'
let e=new Set([m.b+'|'+F(a,m.b,c)]),u=[[m.b,c,'',v]],S
for(let[b,p,n,V]of u){if(S)break
for(let i=0;i<b.length&&!S;i++)for(let k=0;k<4;k++){let d=b[i]+D[k],j=b[i]-D[k]
if(!V[j]||a[d]=='#'||b.includes(d))continue
let B2=b.slice();B2[i]=d;B2.sort((x,y)=>x-y)
let n2=n+V[j]+'udlr'[k]
if(B2.every(x=>m.g.includes(x))){S=[n2,b[i]];break}
let y=B2+'|'+F(a,B2,b[i])
e.has(y)||(e.add(y),u.push([B2,b[i],n2,v]))}}
M+=S[0];c=S[1];m.b=m.g}
f.mkdirSync(O+'/'+id);f.writeFileSync(O+'/'+id+'/solution.txt',M)}
