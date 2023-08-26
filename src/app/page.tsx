// import BrButton from '@/components/BrButton'

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Título h1</h1>
      <p>
        Parágrafo de exemplo <Link href="/POC">link de exemplo</Link>.{' '}
        <Link href="/Dashboard">Dashboard</Link>
      </p>
      <h2>Título h2</h2>
      <h3>Título h3</h3>
      <h4>Título h4</h4>
      <h5>Título h5</h5>
      <h6>Título h6</h6>
      <div className="row">
        <div className="col-auto">
          <ul>
            <li>item sem ordenação</li>
            <li>item sem ordenação</li>
            <li>item sem ordenação</li>
          </ul>
        </div>
        <div className="col-auto">
          <ol>
            <li>item ordenado</li>
            <li>item ordenado</li>
            <li>item ordenado</li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <fieldset>
            <legend>Nome Completo (Legend)</legend>
            <div className="row">
              <div className="col-md-7 mb-3">
                <div className="br-input">
                  <label htmlFor="name">Nome</label>
                  <input
                    id="name"
                    value="Fulano (input preenchido)"
                    type="text"
                    readOnly
                  />
                </div>
              </div>
              <div className="col-md-7 mb-3">
                <div className="br-input">
                  <label htmlFor="surname">Sobrenome</label>
                  <input
                    id="surname"
                    type="text"
                    placeholder="Placeholder"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="col-sm">
          <fieldset>
            <legend>Outros Dados (Legend)</legend>
            <div className="row">
              <div className="col-md-7 mb-3">
                <div className="br-input">
                  <label htmlFor="cpf">CPF</label>
                  <input
                    id="cpf"
                    type="text"
                    placeholder="Placeholder"
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="col-md-7 mb-3">
                <div className="br-input input-button">
                  <label htmlFor="input-password">Senha</label>
                  <input
                    id="input-password"
                    type="password"
                    placeholder="Digite sua senha"
                    readOnly={true}
                  />
                  <button
                    className="br-button"
                    type="button"
                    aria-label="Mostrar senha"
                  >
                    <i className="fas fa-eye" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="row">
        <div className="col-sm d-flex">
          <div className="br-card">
            <div className="card-header">Card de exemplo 1</div>
            <div className="card-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
              dignissimos, recusandae at accusamus autem error hic adipisci
              eligendi eum debitis dolores magnam quod sint doloribus omnis
              vitae placeat. Natus, minus.
            </div>
          </div>
        </div>
        <div className="col-sm d-flex">
          <div className="br-card">
            <div className="card-header">Card de exemplo 2</div>
            <div className="card-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis culpa inventore mollitia vitae a nesciunt reiciendis
              incidunt, labore repudiandae voluptate nisi. Numquam illo est
              maiores doloribus recusandae rem inventore ea?
            </div>
          </div>
        </div>
        <div className="col-sm d-flex">
          <div className="br-card">
            <div className="card-header">Card de exemplo 3</div>
            <div className="card-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam cupiditate nihil facere autem dignissimos ex beatae
              labore? Fuga consequuntur consectetur voluptatum incidunt,
              tenetur, dolore magnam inventore hic iusto amet ipsa.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
