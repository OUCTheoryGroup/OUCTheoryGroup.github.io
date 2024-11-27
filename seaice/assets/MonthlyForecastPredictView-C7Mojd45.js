import{e as M,r as v,w as R,c as p,f as G,h as i,g as h,a as n,t as E,b as a,_ as j,q as F,E as q,d as c,j as U,k as y,L as z,l as A,p as T,m as Y,z as H,n as J}from"./index-D6sTHa-h.js";import{E as K,a as O}from"./el-progress-B6zd4qHm.js";import{E as o,a as Q}from"./el-scrollbar-BHmqGti-.js";const W={class:"container mx-auto flex flex-col items-center max-h-screen p-4 space-y-4"},X={key:1,class:"space-y-4"},Z={class:"text-center mb-4"},ee={class:"text-gray-600"},te={key:0,class:"upload-trigger"},le={key:1,class:"upload-trigger"},ae=["src"],se={class:"el-upload-list__item-actions"},oe=["onClick"],ne=["onClick"],re={key:2,class:"flex justify-center my-6"},ue={key:3,class:"flex items-center justify-center w-full"},ie={key:0},ce={key:1,class:"text-center text-gray-500"},de=["src"],ve={__name:"MonthlyForecastPredictView",setup(pe){const d=v(null),g=v([]),m=v(!1),l=v([]),k=v(""),w=v(!1),f=v([]),_=v(!1);R(l,e=>{e.length===12&&o.success("已成功选择12张图片")});const $=e=>new Promise((t,s)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result),r.onerror=x=>s(x)}),b=e=>e.type==="image/png"?l.value.length>=12?(o.error("已达到12张图片上限"),!1):!0:(o.error("仅支持PNG文件"),!1),B=(e,t)=>{const s=e.image_url;s&&f.value.push(s),o.success(`${t.name} 上传成功`)},C=(e,t)=>{o.error(`${t.name} 上传失败`),console.error("Upload error:",e)},P=async e=>{!e.url&&!e.preview&&(e.preview=await $(e.raw)),k.value=e.url||e.preview,w.value=!0},V=e=>{l.value=l.value.filter(s=>s.uid!==e.uid);const t=l.value.findIndex(s=>s.uid===e.uid);t!==-1&&f.value.splice(t,1),o.warning(`还需上传${12-l.value.length}张图片`)},N=async()=>{if(!d.value){o.error("请选择日期");return}if(l.value.length!==12){o.error(`请上传正好12张图片，当前已上传${l.value.length}张`);return}if(f.value.length!==12){o.error("部分图片上传未完成，请等待所有图片上传完成后重试");return}try{_.value=!0;const e=`${d.value.getFullYear()}/${(d.value.getMonth()+1).toString().padStart(2,"0")}/${d.value.getDate().toString().padStart(2,"0")}`,t=await F(e,f.value);g.value=t,m.value=!0,o.success("分析完成")}catch(e){m.value=!1,o.error("预测失败，请稍后重试"),console.error(e)}finally{_.value=!1}},D=()=>{m.value=!1,g.value=[],d.value=null,l.value=[],f.value=[],_.value=!1};return(e,t)=>{const s=q,r=A,x=K,L=Q,S=O;return c(),p("div",W,[m.value?(c(),G(s,{key:0,class:"self-start",onClick:D},{default:i(()=>t[3]||(t[3]=[U(" 返回 ")])),_:1})):h("",!0),m.value?h("",!0):(c(),p("div",X,[n("div",Z,[n("p",ee,"请上传正好12张PNG图片 (已上传: "+E(l.value.length)+"/12)",1)]),a(x,{"file-list":l.value,"onUpdate:fileList":t[0]||(t[0]=u=>l.value=u),class:"upload-demo",action:"https://seaice.52lxy.one:20443/seaice/png-upload",accept:".png","list-type":"picture-card",multiple:!0,limit:12,"before-upload":b,"on-preview":P,"on-success":B,"on-error":C,"on-remove":V,"auto-upload":!0},{default:i(()=>[l.value.length<12?(c(),p("div",te,[a(r,{class:"upload-icon"},{default:i(()=>[a(y(T))]),_:1}),t[4]||(t[4]=n("div",{class:"upload-text"},"上传",-1))])):(c(),p("div",le,[a(r,{class:"upload-icon text-green-500"},{default:i(()=>[a(y(Y))]),_:1}),t[5]||(t[5]=n("div",{class:"upload-text text-green-500"},"已完成",-1))]))]),file:i(({file:u})=>[n("div",null,[n("img",{class:"el-upload-list__item-thumbnail",src:u.url,alt:""},null,8,ae),n("span",se,[n("span",{class:"el-upload-list__item-preview",onClick:I=>P(u)},[a(r,null,{default:i(()=>[a(y(H))]),_:1})],8,oe),n("span",{class:"el-upload-list__item-delete",onClick:I=>V(u)},[a(r,null,{default:i(()=>[a(y(J))]),_:1})],8,ne)])])]),_:1},8,["file-list"]),a(L,{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=u=>d.value=u),type:"month",placeholder:"请选择月份",style:{width:"100%","max-width":"300px"}},null,8,["modelValue"]),a(s,{type:"primary",onClick:N,loading:_.value,disabled:l.value.length!==12||!d.value||f.value.length!==12},{default:i(()=>[U(E(_.value?"分析中...":"提交分析"),1)]),_:1},8,["loading","disabled"])])),_.value?(c(),p("div",re,[a(z)])):h("",!0),!_.value&&m.value?(c(),p("div",ue,[g.value.length?(c(),p("div",ie,[a(j,{images:g.value},null,8,["images"])])):(c(),p("div",ce,"请上传图片并选择日期以查看预测结果"))])):h("",!0),a(S,{modelValue:w.value,"onUpdate:modelValue":t[2]||(t[2]=u=>w.value=u),title:"预览"},{default:i(()=>[n("img",{"w-full":"",src:k.value,alt:"Preview Image"},null,8,de)]),_:1},8,["modelValue"])])}}},ge=M(ve,[["__scopeId","data-v-537f8422"]]);export{ge as default};
