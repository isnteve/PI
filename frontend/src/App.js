import axios from 'axios';
import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Outlet, Link } from "react-router-dom";


function App() {

 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="listar" element={<Listar />} />
         <Route path="cadastrar" element={<Cadastrar />} />
       </Route>
     </Routes>
   </BrowserRouter>
 );

}

const Layout = () => {
 return (
   <>
     <nav>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/listar">Listar</Link>
         </li>
         <li>
           <Link to="/cadastrar">Cadastrar</Link>
         </li>
       </ul>
     </nav>
     <hr></hr>

     <Outlet />
   </>
 )
};

const Home = () => {
 return(
   <>
   <h1>Home</h1>
   </>
 )
};

function ListarUsuarios(){
 const [usuario, setData] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
     const resposta = await axios.get('http://localhost:3306/usuario');
     setData(resposta.data);
   };
   fetchData();
 }, []);

 return (
   <table style={{ borderCollapse: 'collapse', width: '100%' }}>
       <thead>
         <tr style={{ borderBottom: '1px solid #ddd' }}>
           <th style={{ padding: '8px', textAlign: 'left' }}>Nome</th>
           <th style={{ padding: '8px', textAlign: 'left' }}>Email</th>
           <th style={{ padding: '8px', textAlign: 'left' }}>Senha</th>
         </tr>
       </thead>
       <tbody>
         {usuario.map((pessoa, index) => (
           <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
             <td style={{ padding: '8px' }}>{usuario.nome}</td>
             <td style={{ padding: '8px' }}>{usuario.email}</td>
             <td style={{ padding: '8px' }}>{usuario.senha}</td>
           </tr>
         ))}
       </tbody>
     </table>




 );

}



const Listar = () => {
 return (
   <>
   <h1>Listar</h1>
<ListarUsuarios></ListarUsuarios>
   </>
   
)
};




const CadastrarUsuario = () => {
 const [nome, setNome] = useState('');
 const [email, setEmail] = useState('');
 const [senha, setSenha] = useState('');
 

 const handleSubmit = async (e) => {
   e.preventDefault();

   try {
     await axios.post('http://localhost:3306/usuario', { nome, email, senha });
     alert('Dados enviados com sucesso!');
     setNome('');
     setEmail('');
     setSenha('');

   } catch (error) {
     console.error('Erro ao enviar dados:', error);
     alert('Erro ao enviar dados. Consulte o console para mais detalhes.');
   }
 };

 return (
   <div>
     <h2>Formulário de Usuário</h2>
     <form onSubmit={handleSubmit}>
       <label>
         Nome:
         <input
           type="text"
           value={nome}
           onChange={(e) => setNome(e.target.value)}
           required
         />
       </label>
       <br />
       <label>
         Email:
         <input
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
         />
       </label>
       <br />
       <br />
       <label>
         Senha:
         <input
           type="password"
           value={senha}
           onChange={(e) => setSenha(e.target.value)}
           required
         />
       </label>
       <br />
       <button type="submit">Enviar</button>
     </form>
   </div>
 );
};


const Cadastrar = () => {
  
 return (
   <>
   <h1>Cadastrar</h1>;
<CadastrarUsuario></CadastrarUsuario>
   </>
   
)
};


export default App;