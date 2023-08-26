export const AnaBreadcumb = () => {
  return (
    <div className="br-breadcrumb">
      <ul className="crumb-list">
        <li className="crumb home">
          <a className="br-button circle" href="#">
            <span className="sr-only">Página inicial</span>
            <i className="fas fa-home"></i>
          </a>
        </li>
        <li className="crumb">
          <i className="icon fas fa-chevron-right"></i>
          <a href="#">Tela Anterior</a>
        </li>
        <li className="crumb">
          <i className="icon fas fa-chevron-right"></i>
          <a href="#">Tela Anterior2</a>
        </li>
        <li className="crumb">
          <i className="icon fas fa-chevron-right"></i>
          <a href="#">Tela Anterior3</a>
        </li>
        <li className="crumb">
          <i className="icon fas fa-chevron-right"></i>
          <a href="#">Tela Anterior4</a>
        </li>
        <li className="crumb" data-active="active">
          <i className="icon fas fa-chevron-right"></i>
          <span>Tela Atual</span>
        </li>
      </ul>
    </div>
  )
}
