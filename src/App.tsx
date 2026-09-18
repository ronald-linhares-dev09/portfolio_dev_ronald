import { useState, useEffect } from "react";
import "./App.css";
import fotoRonald from "./assets/ronald.jpg";
import { CircleChevronLeft, CircleChevronRight, X } from "lucide-react";


// ============================================================
//  Portfólio — Ronald Linhares Assis
// ============================================================

interface Imagem {
  src : string
  legenda : string
}

interface Projeto {
  nome: string;
  tag: string;
  estado: string | null;
  resumo: string;
  detalhe: string;
  stack: string[];
  imagens : Imagem[]
}


const projetos: Projeto[] = [
  {
    nome: "Selah",
    tag: "Controladoria Estratégica",
    estado: "Em deploy",
    resumo:
      "Plataforma de consultoria financeira que une CRM, diagnóstico empresarial e previsão de receita num só ecossistema.",
    detalhe:
      "Módulo de diagnóstico com questionário de 7 pilares estratégicos e índices calculados de maturidade (IMS) e conexões entre áreas (ICS). CRM com pipeline de estágios, dashboards de previsão de receita e gestão de contratos. Relatórios em PDF e exportação Excel.",
    stack: ["React", "TypeScript", "FastAPI", "Supabase", "Pandas"],
    imagens : [{src : '/docs-Selah/dashboard.png', legenda : 'Dashboards Financeiros'},{src : '/docs-Selah/clientes.png', legenda : 'Pipeline de Clientes'},{src : '/docs-Selah/vendas.png', legenda : 'Pipeline de Vendas'},{src : '/docs-Selah/questionario.png', legenda : 'Questionário de Consultoria'}]
  },
  {
    nome: "Outbox Canecas",
    tag: "Sistema de gestão · ERP",
    estado: "Em desenvolvimento",
    resumo:
      "Sistema de gestão para uma fábrica de canecas personalizadas, com controle transacional de pedidos e estoque.",
    detalhe:
      "Três módulos integrados: clientes com classificação automática por regra de negócio, estoque por modelo com cálculo de receita, e pedidos com baixa transacional de estoque, snapshot de preço e persistência em cascata. Backend em arquitetura de camadas com ORM assíncrono.",
    stack: ["React", "TypeScript", "FastAPI", "SQLAlchemy", "Alembic", "Supabase"],
    imagens : [{src : '/docs-outbox/postcliente.png', legenda : 'Adição de Clientes'},{src : '/docs-outbox/postpedido.png', legenda : 'Criação de Pedidos'},{src : '/docs-outbox/patchestoque.png', legenda : 'Edição de Produtos em Estoque'},{src : '/docs-outbox/getestoque.png', legenda : 'Consulta de Estoque'}]
  },
  {
    nome: "FinControl",
    tag: "Finanças pessoais",
    estado: "Em deploy",
    resumo:
      "Webapp que transforma extratos bancários em análises financeiras acionáveis.",
    detalhe:
      "Importação de faturas em CSV tratadas e categorizadas com Pandas. Histórico de despesas por usuário como base de categorização inteligente, metas de gasto, análises por mês e categoria. Multiusuário com autenticação JWT e planos Básico/PRO. Em roadmap: LLM como camada final de categorização.",
    stack: ["React", "TypeScript", "FastAPI", "Supabase", "Pandas"],
    imagens : [{src : '/docs-FinControl/dashboards.png', legenda : 'Dashboards de Gastos'},{src : '/docs-FinControl/add.png', legenda : 'Adição de Despesas'},{src : '/docs-FinControl/categoria.png', legenda : 'Análise de Gastos por Categoria'},{src : '/docs-FinControl/mensal.png', legenda : 'Análise de Gastos por Mês'}]
  },
  {
    nome: "Eleev",
    tag: "E-commerce",
    estado: "Em deploy",
    resumo:
      "Site e-commerce para marca de moda fitness, integrado ao checkout da Nuvemshop.",
    detalhe:
      "Integração via OAuth que consome o catálogo da Nuvemshop e o reflete no design próprio do site, com tratamento visual dinâmico de disponibilidade de estoque. Em produção, com serverless functions na Vercel, atendendo cliente real.",
    stack: ["React", "Vite", "CSS Modules", "API Nuvemshop", "Vercel"],
    imagens : [{ src : '/docs-eleev/categoria.png', legenda : 'Lista de Peças por Categoria'},{src : '/docs-eleev/busca.png', legenda : 'Ferramenta de Busca de Peças'},{src : '/docs-eleev/carroselpecas.png', legenda : 'Carrosel de Peças'},{src : '/docs-eleev/pecaindividual.png', legenda : 'Card de Peça Individual'}]
  },
];

const skills: Record<string, string[]> = {
  Backend: ["Python", "FastAPI", "PostgreSQL","Pandas", "SQLAlchemy", "Alembic"],
  Frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
  "Infra & Ferramentas": ["Supabase", "Vercel", "Railway", "Git", "REST APIs"],
};

export default function App() {
  const [aberto, setAberto] = useState<number | null>(null);
  const [entrada, setEntrada] = useState(false);
  const [projeto, setProjeto] = useState<number | null>(null)
  const [imagem, setImagem] = useState<number | null>(null)


  useEffect(() => {
    const t = setTimeout(() => setEntrada(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
    <div className="page">
      {/* NAV */}
      <nav className="nav">
        <div className="mark-mold">
         <span className="nav-mark">RA</span>
        </div>
        <div className="nav-links">
          <a href="#trabalho" className="nav-link">Trabalho</a>
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#contato" className="nav-link">Contato</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className={`hero-text${entrada ? " is-visible" : ""}`}>
          <h1 className="h1">
            Transformo processos de negócio em softwares inteligentes e eficientes
          </h1>
          <p className="hero-sub">
            Desenvolvedor full-stack — Python/FastAPI + React/TypeScript
          </p>
          <div className="hero-ctas">
            <a href="#trabalho" className="btn-primary">Ver projetos</a>
            <a href="#contato" className="btn-ghost">Entrar em contato</a>
          </div>
        </div>
        <div className="hero-img-wrap">
          <img src={fotoRonald} alt="Ronald Linhares Assis" className="hero-img" />
          
        </div>
      </header>

      {/* TRABALHO */}
      <section id="trabalho" className="section">
        <h2 className="h2">Trabalho selecionado</h2>
        <div className="proj-grid">
          {projetos.map((p, i) => {
            const isOpen = aberto === i;
            return (
              <article
                key={p.nome}
                className={`card${isOpen ? " is-open" : ""}`}
              >
                <div className="wrapper-main">
                 <img className="img-main" src={p.imagens[0].src} alt={p.imagens[0].legenda} />
                </div>
                
                <div className="card-head">
                  <div>
                    <h3 className="card-title">{p.nome}</h3>
                    <span className="card-tag">{p.tag}</span>
                  </div>
                  {p.estado && <span className="badge">{p.estado}</span>}
                </div>
                <p className="card-resumo">{p.resumo}</p>
                <div className={`card-detalhe${isOpen ? " is-open" : ""}`}>
                  <p className="card-detalhe-text">{p.detalhe}</p>
                </div>
                <div className="stack-row">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
    

                <div className="actions">
                  <button className="expand" onClick={() => setAberto(isOpen ? null : i)}>{isOpen ? "Fechar" : "Detalhes"}</button>
                  <button className="expand" onClick={() => {setProjeto(i) ; setImagem(0)}} >Ver Galeria</button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section">
        <h2 className="h2">Sobre</h2>
        <div className="sobre-grid">
          <div>
            <p className="p">
              Me chamo <strong>Ronald Linhares Assis</strong> e construo soluções que
              resolvem problemas reais de negócio. Para mim, programar é automatizar o
              operacional e liberar as pessoas para o que importa: pensar e decidir.
            </p>
            <p className="p">
              Desenvolvo sistemas de gestão (ERP), integrações com bancos de dados e
              plataformas de e-commerce como a Nuvemshop, e mantenho projetos próprios na
              área de finanças. Minha stack de base é <strong>Python/FastAPI + PostgreSQL</strong> no
              backend e <strong>React/TypeScript</strong> no frontend.
            </p>
          </div>
          <div className="skills-box">
            {Object.entries(skills).map(([grupo, itens]) => (
              <div key={grupo} className="skill-group">
                <h4 className="skill-title">{grupo}</h4>
                <div className="skill-chips">
                  {itens.map((s) => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
            ))}
            <p className="transversal">
              Autenticação e autorização com JWT aplicadas de forma transversal aos projetos.
            </p>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="contato">
        <h2 className="h2">Vamos conversar</h2>
        <p className="contato-lead">
          Aberto a projetos freelancer e a oportunidades de trabalho. Se você tem um
          processo que pode virar software, entre em contato comigo.
        </p>
        <div className="contato-links">
          <a href="mailto:ronald.assis.dev09@gmail.com" className="contato-link">E-mail</a>
          <a href="https://linkedin.com/in/ronald-linhares-assis" className="contato-link">LinkedIn</a>
          <a href="https://github.com/ronald-linhares-dev09" className="contato-link">GitHub</a>
          <a href="https://wa.me/5544997177332" className="contato-link">WhatsApp</a>
        </div>
        <footer className="footer">
          © {new Date().getFullYear()} Ronald Linhares Assis
        </footer>
      </section>
    </div>

    {(projeto !== null) && (imagem !== null) && (
      <div className="blur-modal">
        <div className="modal-galery">

          <button className="close-galery" onClick={() => {setProjeto(null); setImagem(null)}}>
            <X className="close-icon"/>
          </button>

            <div className="carrosel-galery">

              <button className="set-left" onClick={() =>  {
                if (imagem === 0) {
                  return;
                } else { 
                  setImagem(imagem - 1)
                }}}>
                 <CircleChevronLeft className="chevron" />
              </button> 

              <button className="set-right" onClick={() =>  {
                if (imagem === 3) {
                  return;
                } else { 
                  setImagem(imagem + 1)
                }}}>
                 <CircleChevronRight className="chevron" />
              </button>

              <div className="img-wrapper-grid">
                <img className="img-main-galery" src={projetos[projeto].imagens[imagem].src} alt={projetos[projeto].imagens[imagem].legenda} />
              </div>
            </div>

            <div className="legenda-grid">
                <p className="legenda-img">{projetos[projeto].imagens[imagem].legenda}</p>
                <p className="index-galery">{imagem + 1} / {projetos[projeto].imagens.length}</p>
            </div>

            <div className="nav-img">
            {projetos[projeto].imagens.map((p, i) => (
              <button className={imagem === i ? "img-button-active" : "img-button"} onClick={() => setImagem(i)}>
                <img className="img-reduce" src={p.src} alt={p.legenda} />
              </button>
            ))}
            </div>
        </div>
      </div>
    )}
    </>
  );
}
