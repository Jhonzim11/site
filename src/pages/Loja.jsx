import React, { useState } from 'react'
const products = [
  {id:1,name:'Raquete Pro',price:349,img:'https://cdn.discordapp.com/attachments/1265814338258866216/1429312363558862990/download_2.jpg?ex=68f5ae5e&is=68f45cde&hm=7ce2e06a7292070fd157d2e049f6305dae1e23b18e8f57b85e3ce4ccf30c12b1&'},
  {id:2,name:'Bolsa de Raquete',price:129,img:'https://cdn.discordapp.com/attachments/1265814338258866216/1429312363852726334/download_1.jpg?ex=68f5ae5e&is=68f45cde&hm=2638bcdd186ffff9e9725f891b1ef22286845887b51200d5f871703af6aab67d&'},
  {id:3,name:'Bolas (3)',price:29,img:'https://cdn.discordapp.com/attachments/1265814338258866216/1429312364183945307/download.jpg?ex=68f5ae5e&is=68f45cde&hm=269e90a0f5b1a8abec6b7913452e4d95ff5e2829768cf088f3f5707d2ae30847&'}
]
export default function Loja(){
  const [cart,setCart] = useState([])
  function add(p){ setCart(c=>[...c,p]) }
  return (
    <div className="grid-2">
      <div>
        <h2>Loja</h2>
        <div className="products">
          {products.map(p=>(
            <div className="card product" key={p.id}>
              <img src={p.img} alt={p.name}/>
              <h4>{p.name}</h4>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><strong>R$ {p.price}</strong><button className="btn" onClick={()=>add(p)}>Adicionar</button></div>
            </div>
          ))}
        </div>
      </div>
      <aside style={{position:'relative'}}>
        <div className="card">
          <h4>Carrinho ({cart.length})</h4>
          {cart.length===0 ? <div>Nenhum item</div> : cart.map((c,i)=>(<div key={i} style={{display:'flex',justifyContent:'space-between'}}>{c.name}<span>R$ {c.price}</span></div>))}
          <div style={{marginTop:10,display:'flex',justifyContent:'space-between'}}><strong>Total</strong><strong>R$ {cart.reduce((s,i)=>s+i.price,0)}</strong></div>
          <button className="btn" style={{marginTop:10}}>Finalizar compra</button>
        </div>
      </aside>
    </div>
  )
}
