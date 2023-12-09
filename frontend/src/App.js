import axios from 'axios';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

import BannerImg from './img/banner.png';
import DestaqueImg from './img/destaque.png';
import Campanha1 from './img/campanha1.png';
import Campanha2 from './img/campanha2.png';

// Rotas
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="listardoacao" element={<Listar_Doacao />} />
          <Route path="listarusuarios" element={<Listar_Usuarios />} />
          <Route path="cadastrar" element={<Cadastrar />} />
          <Route path="doacao" element={<Doar />} />
          <Route path="campanha" element={<Campanha />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <>
      <header>
        <div class="container justify">
          <div class="logo">
            <h1>$hare</h1>
          </div>
          <div class="links">
            <Link to="/">Início</Link>
            <Link to="/listarusuarios">Listar</Link>
            <Link to="/cadastrar">Cadastrar</Link>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  )
};

// Html da página principal/início
const Home = () => {
  return (
    <>
      <section class="banner">
        <div class="container">
          <div>
            <h1>
              Ajude-nos a mudar o futuro<br></br>
              Faça uma doação
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div class="container gap">

          <div class="card">
            <h2>Destaque</h2>
            <a href="/campanha"><img src={DestaqueImg}></img></a>
          </div>

          <div class="card">
            <h2>Todas as campanhas</h2>

            <div class="grid">

              <div class="item">
                <div class="card2">
                  <div class="card-content">
                    <img src={Campanha1}></img>
                    <h2>Prédio escolar</h2>
                    <progress max="100" value="50"> </progress>

                    <div class="horizontal">
                      <p>50% arrecadado</p>
                      <p>Objetivo: R$ 1.800.000,00</p>
                    </div>

                    <a href="/campanha" class="btn">Ver campanha</a>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="card2">
                  <div class="card-content">
                    <img src={Campanha2}></img>
                    <h2>Livros</h2>
                    <progress max="100" value="33"> </progress>

                    <div class="horizontal">
                      <p>33% arrecadado</p>
                      <p>Objetivo: R$ 6.000,00</p>
                    </div>

                    <a href="/campanha" class="btn">Ver campanha</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2>Sobre a instituição</h2>
            <section class='justify'>
              <div class="w50">
                <div class="foto">
                  <img src={Campanha1} alt="Prédio de uma instituição de ensino"></img>
                </div>
              </div>

              <div class="w50">
                <div class="texto">
                  <p>Somos uma instituição dedicada a proporcionar oportunidades de educação de qualidade para jovens talentosos. Fundada em 2003, nossa missão é nivelar o campo de jogo educacional, oferecendo cursos preparatórios de alta qualidade e apoio personalizado para estudantes que desejam alcançar o sucesso em seus exames vestibulares.
                    <br></br>
                    <br></br>
                    Graças ao nosso compromisso com a excelência educacional, vemos nossos ex-alunos ingressando nas melhores instituições de ensino superior do país. Nossa abordagem inclusiva e de apoio emocional tem transformado vidas e continuamos a trabalhar incansavelmente para construir um futuro mais brilhante para a juventude.</p>
                </div>
              </div>
            </section>
          </div>

          <div>
            <h2>Gostaria de nos dizer algo?</h2>
            <p>Caso tenha alguma dúvida, sugestão, reclamação ou queira conversar com a gente, pode entrar em contato  enviando um e-mail para contato@instituicaodeensino.com.</p>
          </div>
          <section class="justify">
              <div class="w50">
                <div class="texto">
                  <h2>Alguns dados sobre nós</h2>
                  <p>Instituição de Ensino<br></br>
                    CNPJ: 10.882.594/0011-37<br></br>
                    Endereço:<br></br>
                    Av. Bahia, 1739 - Indaiá, 11665-071<br></br>
                    Caraguatatuba - SP
                  </p>
                </div>
              </div>
              <div class="w50 mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7310.183499644032!2d-45.43028667569162!3d-23.636885034635675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd631551d2d585%3A0xbe6efd4b81fb3cd0!2sIFSP!5e0!3m2!1spt-BR!2sbr!4v1688133567379!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </section>
        </div>
      </section>

      <footer>
        <div class="container">
          <p>© 2023 Instituição de Ensino. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
};

// Html da página de cadastro de usuário
const Cadastrar = () => {
  return (
    <>
      <div class="centralizar container">
        <div class="container-doacao">
          <div class="card ">
            <div class="card-doacao">
              <CadastrarUsuario></CadastrarUsuario>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

// Html da página da campanha
const Campanha = () => {
  return (
    <>
      <section class="banner" id="campanha">
      <div class="container">
          <div>
            <h1>
              Prédio escolar
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div class="container gap">
            <div class="info">
              <h1>Prédio escolar</h1>
              <progress max="100" value="50"> </progress>

                <div class="horizontal">
                  <p>50% arrecadado</p>
                  <p>Objetivo: R$ 1.800.000,00</p>
                </div>
                
                <div class="horizontal">
                  <a href="/doacao" class="btn">Fazer uma doação</a>
                  <a href="/listardoacao" class="btn2">Listar doações realizadas</a>
                </div>
            </div>

          <div class="card">
            <h2>Descrição da campanha</h2>

            <div class="horizontal">
              <p class='w50'>
                Somos uma instituição de ensino, o prédio onde funcionamos é alugado e o proprietário venderá o imóvel, precisamos de ajuda para comprá-lo, se não arrecadarmos dinheiro suficiente, teremos que encerrar nossas atividades, pois não haverá onde funcionar.
              </p>
              <img src={Campanha1} class='w50'></img> 
            </div>

          </div>
        </div>
      </section>

      <footer>
        <div class="container">
          <p>© 2023 Instituição de Ensino. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
};

// Html da página de doação para a campanha 
const Doar = () => {
  return (
    <>
      <div class="centralizar container">
        <div class="container-doacao">
          <div class="card ">
            <div class="card-doacao">
              <FazerDoacao></FazerDoacao>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

// Html da página listar doações
const Listar_Doacao = () => {
  return (
    <>
      <div class="container listarusuarios">
        <h1>Listar</h1>
        <ListarDoacao></ListarDoacao>
      </div>
    </>
  )
};

// Html da página listar usuários
const Listar_Usuarios = () => {
  return (
    <>
      <div class="container listarusuarios">
        <h1>Listar</h1>
        <ListarUsuarios></ListarUsuarios>
      </div>
    </>
  )
};

//Função De listagem dos usuários 
function ListarUsuarios() {
  const [usuario, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resposta = await axios.get('http://localhost:9000/usuario');
      setData(resposta.data);
    };
    fetchData();
  }, []);

  return (
      <div>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <th style={{ padding: '8px', textAlign: 'left' }}>Nome</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>CPF</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Telefone</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Cep</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Cidade</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {usuario.map((usuario, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '8px' }}>{usuario.nome}</td>
                <td style={{ padding: '8px' }}>{usuario.email}</td>
                <td style={{ padding: '8px' }}>{usuario.cpf}</td>
                <td style={{ padding: '8px' }}>{usuario.telefone}</td>
                <td style={{ padding: '8px' }}>{usuario.cep}</td>
                <td style={{ padding: '8px' }}>{usuario.cidade}</td>
                <td style={{ padding: '8px' }}>{usuario.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

//Função de Cadastrar usuários
const CadastrarUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envia os dados para a rota usando o método POST
      await axios.post('http://localhost:9000/usuario', { nome, email, cpf, telefone, senha, cep, cidade, estado });
      alert('Dados enviados com sucesso!');
      // Limpa os campos após o envio bem-sucedido
      setNome('');
      setEmail('');
      setCpf('');
      setTelefone('');
      setSenha('');
      setCep('');
      setCidade('');
      setEstado('');

    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao enviar dados. Consulte o console para mais detalhes.');
    }
  };

  return (
    <div class="User-form">
      <h2>Novo usuário</h2>
      <form onSubmit={handleSubmit}>
        <h3>Informações pessoais</h3>
        <label>
          Nome:<br></br>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:<br></br>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          CPF:<br></br>
          <input
            type="number"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </label>
        <br />

        <h3>Informações de contato</h3>
        <label>
          Telefone:<br></br>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Cep:<br></br>
          <input
            type="number"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Cidade:<br></br>
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Estado:<br></br>
          <input
            type="text"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          />
        </label>
        <br />

        <h3>Informações para acesso</h3>
        <label>
          Senha:<br></br>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

//Função de cadastrar doação
const FazerDoacao = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [valor, setValor] = useState('');
  const [modelo, setModelo] = useState('');
  const [mensagem, setMensagem] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envia os dados para a rota usando o método POST
      await axios.post('http://localhost:9000/doacao', { nome, cpf, valor, modelo, mensagem });
      alert('Dados enviados com sucesso!');
      // Limpa os campos após o envio bem-sucedido
      setNome('');
      setCpf('');
      setValor('');
      setModelo('');
      setMensagem('');

    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao enviar dados. Consulte o console para mais detalhes.');
    }
  };


  return (
    <div>
      <h2>Formulário de doação</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:<br></br>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          CPF:<br></br>
          <input
            type="number"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Valor:<br></br>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Forma de Pagamento:<br></br>
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Mensagem:<br></br>
          <input
            type="text"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

//Função de listar doações
function ListarDoacao() {
  const [doacao, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resposta = await axios.get('http://localhost:9000/doacao');
      setData(resposta.data);
    };
    fetchData();
  }, []);

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr style={{ borderBottom: '1px solid #ddd' }}>
          <th style={{ padding: '8px', textAlign: 'left' }}>Nome</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>CPF</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Valor</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Forma de Pagamento</th>
          <th style={{ padding: '8px', textAlign: 'left' }}>Mensagem</th>
        </tr>
      </thead>
      <tbody>
        {doacao.map((doacao, index) => (
          <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '8px' }}>{doacao.nome}</td>
            <td style={{ padding: '8px' }}>{doacao.cpf}</td>
            <td style={{ padding: '8px' }}>{doacao.valor}</td>
            <td style={{ padding: '8px' }}>{doacao.modelo}</td>
            <td style={{ padding: '8px' }}>{doacao.mensagem}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;