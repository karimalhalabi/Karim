(()=>{const e=new XMLhttpRQ("https://public.connectnow.org.uk/applicant-test/");let t=document.querySelector("#searchStr"),r=document.querySelector("#minScore"),o=document.querySelector("#orderby"),c=document.querySelector("#toggleSort"),n=document.querySelector("#clear"),s=document.querySelector("#page1"),l=document.querySelector("#page2"),i=document.querySelector("#menu1"),u=document.querySelector("#menu2"),y=0;const a=()=>{document.querySelector("#searchStr").value="",document.querySelector("#minScore").value="",document.querySelector("#orderby").value="",document.querySelector("#toggleSort").innerHTML="&uArr;",score=!1,filterString=!1,sortType=!1,e.getURLData(score,filterString,sortType)};a(),t.addEventListener("keyup",(()=>{filterString=t.value,e.getURLData(score,filterString,sortType),console.log(filterString)})),r.addEventListener("change",(()=>{score=r.value,e.getURLData(score,filterString,sortType),console.log(score)})),o.addEventListener("select",(()=>{switch(sortStr=o.value,sortStr){case"Release Date":sortType=10+y;break;case"Score":sortType=20+y;break;case"Name":sortType=30+y}e.getURLData(score,filterString,sortType),console.log(sortStr)})),c.addEventListener("click",(()=>{sortType=sortType%2==0?sortType+=1:sortType-=1,y=0==y?1:0,document.querySelector("#toggleSort").innerHTML=0==y?"&uArr;":"&dArr;",e.getURLData(score,filterString,sortType),console.log(sortType)})),n.addEventListener("click",(()=>{a()})),i.addEventListener("click",(()=>{a(),l.style.opacity=0,window.setTimeout(l.style.zIndex=1,1500),s.style.opacity=1,window.setTimeout(s.style.zIndex=249,1500),console.log("Z: ",s.style.zIndex)})),u.addEventListener("click",(()=>{a(),s.style.opacity=0,window.setTimeout(s.style.zIndex=1,1500),l.style.opacity=1,window.setTimeout(l.style.zIndex=249,1500),console.log("Z: ",l.style.zIndex)}))})();