import{e as I,r as d,w as M,c as p,f as R,g as w,a as o,t as G,b as a,h as u,_ as L,i as j,E as z,d as c,j as V,k as g,l as F,p as S,m as T,z as q,n as A}from"./index-Iqvq-Q9v.js";import{E as n,a as H,b as J}from"./el-progress-Cdp7lh3a.js";import{E as K}from"./el-scrollbar-C10gEXCO.js";const O={class:"container mx-auto flex flex-col items-center max-h-screen p-4 space-y-4"},Q={key:1,class:"space-y-4"},W={class:"text-center mb-4"},X={class:"text-gray-600"},Z={key:0,class:"upload-trigger"},ee={key:1,class:"upload-trigger"},te=["src"],le={class:"el-upload-list__item-actions"},ae=["onClick"],se=["onClick"],oe={key:2,class:"flex items-center justify-center w-full"},ne={key:0},re={key:1,class:"text-center text-gray-500"},ie=["src"],ue={__name:"DailyForecastPredictView",setup(ce){const _=d(null),f=d([]),m=d(!1),l=d([]),x=d(""),h=d(!1),v=d([]);M(l,e=>{e.length===14&&n.success("已成功选择14张图片")});const D=e=>new Promise((t,s)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result),r.onerror=y=>s(y)}),E=e=>e.type==="image/png"?l.value.length>=14?(n.error("已达到14张图片上限"),!1):!0:(n.error("仅支持PNG文件"),!1),b=(e,t)=>{const s=e.image_url;s&&v.value.push(s),n.success(`${t.name} 上传成功`)},U=(e,t)=>{n.error(`${t.name} 上传失败`),console.error("Upload error:",e)},k=async e=>{!e.url&&!e.preview&&(e.preview=await D(e.raw)),x.value=e.url||e.preview,h.value=!0},P=e=>{l.value=l.value.filter(s=>s.uid!==e.uid);const t=l.value.findIndex(s=>s.uid===e.uid);t!==-1&&v.value.splice(t,1),n.warning(`还需上传${14-l.value.length}张图片`)},B=()=>{if(!_.value){n.error("请选择日期");return}if(l.value.length!==14){n.error(`请上传正好14张图片，当前已上传${l.value.length}张`);return}if(v.value.length!==14){n.error("部分图片上传未完成，请等待所有图片上传完成后重试");return}j(_.value,v.value).then(e=>{f.value=e,m.value=!0}).catch(e=>{n.error("预测失败，请稍后重试"),console.error(e)})},C=()=>{m.value=!1,f.value=[],_.value=null,l.value=[],v.value=[]};return(e,t)=>{const s=z,r=F,y=H,N=K,Y=J;return c(),p("div",O,[m.value?(c(),R(s,{key:0,class:"self-start",onClick:C},{default:u(()=>t[3]||(t[3]=[V(" 返回 ")])),_:1})):w("",!0),m.value?w("",!0):(c(),p("div",Q,[o("div",W,[o("p",X,"请上传正好14张PNG图片 (已上传: "+G(l.value.length)+"/14)",1)]),a(y,{"file-list":l.value,"onUpdate:fileList":t[0]||(t[0]=i=>l.value=i),class:"upload-demo",action:"https://seaice.52lxy.one:20443/seaice/png-upload",accept:".png","list-type":"picture-card",multiple:!0,limit:14,"before-upload":E,"on-preview":k,"on-success":b,"on-error":U,"on-remove":P,"auto-upload":!0},{default:u(()=>[l.value.length<14?(c(),p("div",Z,[a(r,{class:"upload-icon"},{default:u(()=>[a(g(S))]),_:1}),t[4]||(t[4]=o("div",{class:"upload-text"},"上传",-1))])):(c(),p("div",ee,[a(r,{class:"upload-icon text-green-500"},{default:u(()=>[a(g(T))]),_:1}),t[5]||(t[5]=o("div",{class:"upload-text text-green-500"},"已完成",-1))]))]),file:u(({file:i})=>[o("div",null,[o("img",{class:"el-upload-list__item-thumbnail",src:i.url,alt:""},null,8,te),o("span",le,[o("span",{class:"el-upload-list__item-preview",onClick:$=>k(i)},[a(r,null,{default:u(()=>[a(g(q))]),_:1})],8,ae),o("span",{class:"el-upload-list__item-delete",onClick:$=>P(i)},[a(r,null,{default:u(()=>[a(g(A))]),_:1})],8,se)])])]),_:1},8,["file-list"]),a(N,{modelValue:_.value,"onUpdate:modelValue":t[1]||(t[1]=i=>_.value=i),type:"date",placeholder:"选择日期",format:"YYYY/MM/DD",style:{width:"100%","max-width":"300px"},"value-format":"YYYY/MM/DD"},null,8,["modelValue"]),a(s,{type:"primary",onClick:B,disabled:l.value.length!==14||!_.value||v.value.length!==14},{default:u(()=>t[6]||(t[6]=[V(" 提交 ")])),_:1},8,["disabled"])])),m.value?(c(),p("div",oe,[f.value.length?(c(),p("div",ne,[a(L,{images:f.value},null,8,["images"])])):(c(),p("div",re,"请上传图片并选择日期以查看预测结果"))])):w("",!0),a(Y,{modelValue:h.value,"onUpdate:modelValue":t[2]||(t[2]=i=>h.value=i),title:"预览"},{default:u(()=>[o("img",{"w-full":"",src:x.value,alt:"Preview Image"},null,8,ie)]),_:1},8,["modelValue"])])}}},ve=I(ue,[["__scopeId","data-v-3667df43"]]);export{ve as default};
