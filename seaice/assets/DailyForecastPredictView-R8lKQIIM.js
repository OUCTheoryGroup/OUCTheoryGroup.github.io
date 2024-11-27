import{e as M,r as d,w as R,c as v,f as G,g as h,a as o,t as D,b as t,h as u,_ as j,i as z,E as A,d as c,j as E,k as y,L as F,l as S,p as T,m as q,z as H,n as J}from"./index-D6sTHa-h.js";import{E as K,a as O}from"./el-progress-B6zd4qHm.js";import{E as n,a as Q}from"./el-scrollbar-BHmqGti-.js";const W={class:"container mx-auto flex flex-col items-center max-h-screen p-4 space-y-4"},X={key:1,class:"space-y-4"},Z={class:"text-center mb-4"},ee={class:"text-gray-600"},le={key:0,class:"upload-trigger"},ae={key:1,class:"upload-trigger"},te=["src"],se={class:"el-upload-list__item-actions"},oe=["onClick"],ne=["onClick"],re={key:2,class:"flex justify-center my-6"},ie={key:3,class:"flex items-center justify-center w-full"},ue={key:0},ce={key:1,class:"text-center text-gray-500"},de=["src"],ve={__name:"DailyForecastPredictView",setup(_e){const p=d(null),g=d([]),m=d(!1),a=d([]),k=d(""),w=d(!1),f=d([]),_=d(!1);R(a,e=>{e.length===14&&n.success("已成功选择14张图片")});const U=e=>new Promise((l,s)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>l(r.result),r.onerror=x=>s(x)}),b=e=>e.type==="image/png"?a.value.length>=14?(n.error("已达到14张图片上限"),!1):!0:(n.error("仅支持PNG文件"),!1),B=(e,l)=>{const s=e.image_url;s&&f.value.push(s),n.success(`${l.name} 上传成功`)},C=(e,l)=>{n.error(`${l.name} 上传失败`),console.error("Upload error:",e)},P=async e=>{!e.url&&!e.preview&&(e.preview=await U(e.raw)),k.value=e.url||e.preview,w.value=!0},V=e=>{a.value=a.value.filter(s=>s.uid!==e.uid);const l=a.value.findIndex(s=>s.uid===e.uid);l!==-1&&f.value.splice(l,1),n.warning(`还需上传${14-a.value.length}张图片`)},N=async()=>{if(!p.value){n.error("请选择日期");return}if(a.value.length!==14){n.error(`请上传正好14张图片，当前已上传${a.value.length}张`);return}if(f.value.length!==14){n.error("部分图片上传未完成，请等待所有图片上传完成后重试");return}try{_.value=!0;const e=await z(p.value,f.value);g.value=e,m.value=!0}catch(e){m.value=!1,n.error("预测失败，请稍后重试"),console.error(e)}finally{_.value=!1}},Y=()=>{m.value=!1,g.value=[],p.value=null,a.value=[],f.value=[],_.value=!1};return(e,l)=>{const s=A,r=S,x=K,$=Q,L=O;return c(),v("div",W,[m.value?(c(),G(s,{key:0,class:"self-start",onClick:Y},{default:u(()=>l[3]||(l[3]=[E(" 返回 ")])),_:1})):h("",!0),m.value?h("",!0):(c(),v("div",X,[o("div",Z,[o("p",ee,"请上传正好14张PNG图片 (已上传: "+D(a.value.length)+"/14)",1)]),t(x,{"file-list":a.value,"onUpdate:fileList":l[0]||(l[0]=i=>a.value=i),class:"upload-demo",action:"https://seaice.52lxy.one:20443/seaice/png-upload",accept:".png","list-type":"picture-card",multiple:!0,limit:14,"before-upload":b,"on-preview":P,"on-success":B,"on-error":C,"on-remove":V,"auto-upload":!0},{default:u(()=>[a.value.length<14?(c(),v("div",le,[t(r,{class:"upload-icon"},{default:u(()=>[t(y(T))]),_:1}),l[4]||(l[4]=o("div",{class:"upload-text"},"上传",-1))])):(c(),v("div",ae,[t(r,{class:"upload-icon text-green-500"},{default:u(()=>[t(y(q))]),_:1}),l[5]||(l[5]=o("div",{class:"upload-text text-green-500"},"已完成",-1))]))]),file:u(({file:i})=>[o("div",null,[o("img",{class:"el-upload-list__item-thumbnail",src:i.url,alt:""},null,8,te),o("span",se,[o("span",{class:"el-upload-list__item-preview",onClick:I=>P(i)},[t(r,null,{default:u(()=>[t(y(H))]),_:1})],8,oe),o("span",{class:"el-upload-list__item-delete",onClick:I=>V(i)},[t(r,null,{default:u(()=>[t(y(J))]),_:1})],8,ne)])])]),_:1},8,["file-list"]),t($,{modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=i=>p.value=i),type:"date",placeholder:"选择日期",format:"YYYY/MM/DD",style:{width:"100%","max-width":"300px"},"value-format":"YYYY/MM/DD"},null,8,["modelValue"]),t(s,{type:"primary",onClick:N,loading:_.value,disabled:a.value.length!==14||!p.value||f.value.length!==14},{default:u(()=>[E(D(_.value?"分析中...":"提交分析"),1)]),_:1},8,["loading","disabled"])])),_.value?(c(),v("div",re,[t(F)])):h("",!0),!_.value&&m.value?(c(),v("div",ie,[g.value.length?(c(),v("div",ue,[t(j,{images:g.value},null,8,["images"])])):(c(),v("div",ce,"请上传图片并选择日期以查看预测结果"))])):h("",!0),t(L,{modelValue:w.value,"onUpdate:modelValue":l[2]||(l[2]=i=>w.value=i),title:"预览"},{default:u(()=>[o("img",{"w-full":"",src:k.value,alt:"Preview Image"},null,8,de)]),_:1},8,["modelValue"])])}}},ge=M(ve,[["__scopeId","data-v-7a7dd149"]]);export{ge as default};
