let s='';
process.stdin.on('data',d=>s+=d);
process.stdin.on('end',()=>{
  const listeners={};
  const els={};
  const app={innerHTML:''};
  const document={
    getElementById:(id)=>id==='app'?app:(els[id]||(els[id]={oninput:null,onchange:null,value:'',checked:false})),
    addEventListener:(n,fn)=>listeners[n]=fn,
    createElement:()=>({click(){},remove(){}}),
    body:{appendChild(){}}
  };
  const localStorage={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};
  global.document=document;
  global.localStorage=localStorage;
  global.fetch=async()=>({});
  global.clearTimeout=()=>{};
  global.setTimeout=(fn)=>0;
  global.URL={createObjectURL:()=>'',revokeObjectURL:()=>{}};
  global.Blob=function(){};
  global.window={open:()=>({document:{open(){},write(){},close(){}},focus(){},print(){}})};
  try {
    eval(s);
    listeners.click({target:{closest:(sel)=>sel==='[data-action]'?{dataset:{action:'go-history'}}:null}});
    console.log(app.innerHTML.includes('history-type-filter') ? 'HISTORY_OK' : 'HISTORY_FAIL');
    listeners.click({target:{closest:(sel)=>sel==='[data-action]'?{dataset:{action:'go-stats'}}:null}});
    console.log(app.innerHTML.includes('data-action="set-range"') ? 'STATS_OK' : 'STATS_FAIL');
  } catch (e) {
    console.error(e.stack || e.message);
    process.exit(1);
  }
});
