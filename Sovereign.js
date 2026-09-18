use client";
import {useEffect,useState} from "react";
const modes=["DECIDE","BUILD","INVEST","ESCAPE","CREATE","RESET"];
const blank={hear:"",distort:"",decision:"",sovereignty:"",tradeoff:"",next:"",question:""};
export default function Sovereign(){
 const [mode,setMode]=useState("DECIDE"),[text,setText]=useState(""),[out,setOut]=useState(null),[loading,setLoading]=useState(false),[history,setHistory]=useState([]);
 useEffect(()=>setHistory(JSON.parse(localStorage.getItem("sovereign_history")||"[]")),[]);
 async function run(){
  if(!text.trim())return; setLoading(true);setOut(null);
  const r=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mode,message:text,history})});
  const d=await r.json(); setLoading(false);
  if(d.error){setOut({...blank,error:d.error});return}
  const item={mode,text,date:new Date().toISOString(),out:d};const h=[item,...history].slice(0,30);
  setHistory(h);localStorage.setItem("sovereign_history",JSON.stringify(h));setOut(d);
 }
 return <main><nav><b>SOVEREIGN</b><span>PRIVATE THINKING SYSTEM</span></nav>
 <section className="hero"><small>STRATEGIC THINKING SYSTEM</small><h1>Build a life you don't need to escape from.</h1><p>An AI thinking partner for decisions about business, money, time, ownership, relationships, health, creativity and freedom.</p></section>
 <div className="modes">{modes.map(m=><button className={m===mode?"selected":""} onClick={()=>setMode(m)} key={m}>{m}</button>)}</div>
 <section className="box"><textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Tell me what's going on. Don't polish it. Give me the real situation."/><div className="bar"><small>Your analysis is private to this browser in this V3 build.</small><button onClick={run} disabled={loading}>{loading?"Thinking…":"Run Sovereign Analysis →"}</button></div></section>
 {out&&<section className="output">{out.error?<div className="error">{out.error}</div>:Object.entries({hear:"WHAT I HEAR",distort:"WHAT MAY BE DISTORTING YOUR THINKING",decision:"THE REAL DECISION",sovereignty:"THE SOVEREIGNTY TEST",tradeoff:"THE TRADEOFF",next:"NEXT MOVE",question:"ONE QUESTION"}).map(([k,label])=><article key={k}><small>{label}</small><p>{out[k]}</p></article>)}</section>}
 <section className="archive"><small>RECENT THINKING</small>{history.slice(0,5).map((h,i)=><div key={i}><b>{h.mode}</b><p>{h.text}</p></div>)}</section>
 <footer>SOVEREIGN AI · V3 · Think better. Own more. Live freer.</footer>
 </main>
}