import{r as y,m as d,a as E,w as b,c as f,d as h,e,t as i,F as k,i as C,n as L}from"./index-5fG1oHt6.js";const j={class:"calendar"},z={class:"title"},N={class:"body"},S=e("div",{class:"row gray"},[e("p",null,"日"),e("p",null,"一"),e("p",null,"二"),e("p",null,"三"),e("p",null,"四"),e("p",null,"五"),e("p",null,"六")],-1),V=["onClick"],G={__name:"index",setup($){const t=y(d().year()),a=y(d().month());y(d().date());const _=y(""),D=E({data:[]});function B(){a.value===11?(t.value++,a.value=0):a.value++}function F(){a.value===0?(t.value--,a.value=11):a.value--}const g=[31,29,31,30,31,30,31,31,30,31,30,31],w=[31,28,31,30,31,30,31,31,30,31,30,31];b(()=>{D.data=[];const p=t.value+"-"+(a.value+1)+"-1";let r,n;t.value%4===0?(r=g[a.value],a.value==0?n=31:n=g[a.value-1]):(a.value-1,r=w[a.value],a.value==0?n=31:n=w[a.value-1]);const o=d(p).day(),Y=t.value+"-"+(a.value+1)+"-"+r,x=d(Y).day();let c=[];for(let l=1;l<=r;l++){const s=t.value+"-"+(+a.value+1)+"-"+l;c.push({date:l,info:s,class:"normal"})}if(o!==0){let l=n,s=t.value;a.value===0&&s--;let u;a.value===0?u=12:u=a.value;for(let v=o;v>0;v--){const m=s+"-"+u+"-"+l;c.unshift({date:l,info:m,class:"gray"}),l--}}if(x!==6){let l=1,s=t.value;a.value===11&&s++;let u;a.value===11?u=1:u=a.value+2;for(let v=x;v<6;v++){const m=s+"-"+u+"-"+l;c.push({date:l,info:m,class:"gray"}),l++}}for(let l=0;l<c.length;l+=7)D.data.push(c.slice(l,l+7))});function A(p){_.value=p}return(p,r)=>(f(),h(k,null,[e("div",j,[e("div",z,[e("div",{class:"left",onClick:F},i("<")),e("div",null,[e("span",null,i(t.value)+"年",1),e("span",null,i(a.value+1)+"月",1)]),e("div",{class:"right",onClick:B},i(">"))]),e("div",N,[S,(f(!0),h(k,null,C(D.data,(n,M)=>(f(),h("div",{class:"row",key:M},[(f(!0),h(k,null,C(n,o=>(f(),h("p",{class:L(["circle",_.value===o.info?"clicked":""]),onClick:Y=>A(o.info)},[e("span",{class:L(o.class)},i(o.date),3)],10,V))),256))]))),128))])]),e("div",null,[e("h1",null,"你選擇的日期："+i(_.value),1)])],64))}};export{G as default};
