

let pds = document.querySelector("pds");
pds.style.display="none"


let comment = pds.innerText.split(/\n+/);

for(let i=0;i<comment.length;i++){
let kwd= comment[i].split(/\s+/); 
console.log(kwd[0])
if(kwd[0]=='//'){
comment.splice(i,1)
}
}

let paragraph = ''
for(let i=0;i<comment.length;i++){
paragraph+=comment[i]+'\n'
}
console.log(paragraph)
//--------
let changer=2

let string=[]
let key=["while","for","in","range","if","then","else",".","let","and","end","return"]
let variable=[]
let oper = ["++", "--", "+=", "-=", "*=", "/="];
let fun=["console.log","prompt","alert","print","style","change"]
let tages=[]
let classfun=[]
let classes=[]

const matches = paragraph.match(/'([^']*)'/g);
if (matches) {
  matches.forEach(match => {
    const insideText = match.slice(1, -1);
    string.push(insideText);
  });
}

const updated = paragraph.replace(/'[^']*'/g, "''");
let kwd= updated.split(/\s+/); 
let coad=`
function
print(data,id='index'){
document.getElementById(id).innerHTML=data
}
function
style(id,prop,val){
document.getElementById(id).style[prop]=val;
}
function
change(data){
let obj=data.split(" ")
for(let i=1;i<obj.length;i++){
let key=obj[i].split(":")
document.getElementById(obj[0]).style[key[0]]=key[1];
}
}
`

let k=1

for(let i=0;i<kwd.length;i=i+k){
k=1
if(iskeyword(kwd[i])){
switch(kwd[i]){
case 'let':
      if(kwd[i+1]=='function'){
      coad+=craetefun(i)
 
      }else if(kwd[i+1]=='class'){
      coad+=`\n class ${kwd[i+2]}{`
      classes.push(kwd[i+2])
      k=4
      }else{
          if(kwd[i+2]=='='){
          coad+=`\nlet ${kwd[i+1]}=`
          k=3
          }else{
          coad+=`\nlet ${kwd[i+1]};\n`
          k=2
          }
          variable.push(kwd[i+1])
      }
      break
case 'and':
      coad+=`,`
      break
case 'end':
case '.':
      coad+=`}`
      break
case 'return':
      coad+=`\nreturn ${kwd[i+1]}`
      k=2
      break
case 'if':
      coad+=`\nif( ${kwd[i+1]})`
      k=2
      break
case 'then':
      coad+=`{`
      break
case 'else':
      if(kwd[i+1]=="if"){
      coad+=`}else `
      }else{
      coad+=`}else{`
      }
      break
case 'for':
      let len=kwd[i+4].split(",")
      if(len.length==2){
            coad+=`\nfor(let ${kwd[i+1]}=${len[0]};${kwd[i+1]}<${len[1]};${kwd[i+1]}++)`
      }else{
            coad+=`\nfor(let ${kwd[i+1]}=0;${kwd[i+1]}<${len[0]};${kwd[i+1]}++)`
      }
      k=5
      break
case 'while':
      coad+=`\n while(${kwd[i+1]})`
      k=2
      break
}
}else if(isfun(kwd[i])){
coad+='\n'+runfun(i)
}else if (kwd[i] == "''" || kwd[i].includes("''")) {
coad += kwd[i].replace(/''/g, `"${string[0]}"`);
string.splice(0,1)
}else if(isvar(kwd[i])){
coad+=`\n${kwd[i]} `
}else if(isoprend(kwd[i])){
coad+=`\n${kwd[i]}\n `
}else if(kwd[i]=='function'){
coad+=craetefunclass(i)
}else if(isclass(kwd[i])){
coad+='\n new '+runfun(i)
}else if(isclassfun(kwd[i])){
coad+='\n'+runfun(i)
}else{
coad+=`${kwd[i]} \n`
}

}




// alert(coad)

function 
craetefunclass(i){
let coad=''
if(kwd[i+2]=='='){
k=3
coad+=`\n${kwd[i+1]}(){`
classfun.push(kwd[i+1])
}else{
k=4
coad+=`\n${kwd[i+1]}(${kwd[i+2]}){`
classfun.push(kwd[i+1])
}
return coad;
}





function 
craetefun(i){
let coad=''
if(kwd[i+3]=='='){
k=4
coad+=`\nfunction ${kwd[i+2]}(){`
fun.push(kwd[i+2])
}else{
k=5
coad+=`\nfunction ${kwd[i+2]}(${kwd[i+3]}){`
fun.push(kwd[i+2])
}
return coad;
}






function
runfun(i){
let coad=''
if(!isclassfun(kwd[i+1]) || !isfun(kwd[i+1]) && kwd[i+2]!="=" && !iskeyword(kwd[i+1])){
if(kwd[i+1].includes(',')){
let data=kwd[i+1].split(',')
coad+=`${kwd[i]}(`
for(let j=0;j<data.length;j++){
if(data[j]=="''"){
coad+=`'${string[0]}',`
string.splice(0,1)
}else if(isclassfun(data[j]) ||isfun(data[j])){
coad+=`${data[j]}(),`
}else{
coad+=`${data[j]},`
}
}
coad+=`)\n`
}else if(kwd[i+1]=="''"){
coad+=`${kwd[i]}('${string[0]}')\n`
string.splice(0,1)
}else{
coad+=`${kwd[i]}(${kwd[i+1]})\n`
}
k=changer
changer=2
}else{
if(isfun(kwd[i+1]) || isclassfun(kwd[i+1])){
changer=3
coad+=`${kwd[i]}(${runfun(i+1)})\n`
}else{
coad+=`${kwd[i]}()\n`

}
}
return coad
}



eval(coad)

function 
isvar(word){
return variable.includes(word)
}
function 
iskeyword(word){
return key.includes(word)
}
function 
isfun(word){
return fun.includes(word)
}
function 
isclass(word){
return classes.includes(word)
}
function 
isoprend(word){
return oper.some(op => word.includes(op));
}
function 
isclassfun(word){
let mw=word.split('.')
return classfun.includes(mw[1])
}