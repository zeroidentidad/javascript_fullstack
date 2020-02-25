import React, { useState, useEffect, useRef } from 'react';

const Form = ({showed}) => {

  let [titulo, setTitulo] = useState('')
  let [cuerpo, setCuerpo] = useState('')

  const tituloRef = useRef()

  useEffect(() => {
    if(showed){
      tituloRef.current.focus()
    }
  }, [showed])

  const sendForm = (e) => {
    e.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titulo,
        body: cuerpo,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setTitulo("")
        setCuerpo("")
      })

  }

  return(
    <form onSubmit={(e)=>sendForm(e)}>
      <div>
        <label htmlFor="titulo">Titulo </label>
        <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}
        ref={tituloRef} />
      </div>  

      <div>
        <label htmlFor="cuerpo">Cuerpo </label>
        <textarea id="cuerpo" value={cuerpo} onChange={(e) => setCuerpo(e.target.value)}></textarea>
      </div>

        <input type="submit" value="Enviar"/>
    </form>
  )
}

const Accordion = () => {
  const [show, setShow] = useState(false) 
  return(
    <div>
      <button onClick={()=>setShow(!show)}>Motrar formulario</button>
      {show && <Form showed={show}/>}
    </div>
  )
}

function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

export default App;
