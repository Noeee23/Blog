// Ejemplo de export sin default:
export function algo() {
  return <><p>Cosas</p></>
}
// El Footer se exporta con default
// Más info: https://react.dev/learn/importing-and-exporting-components
const Footer = () => {
  // Fuente: https://mdbootstrap.com/docs/standard/navigation/footer#subsection-links
  return (
  <>
  <div className='border border-danger'>
  <footer  className="text-center text-lg-start" style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
  
  <div  className="container py-4" >
    <div  className="row"> 
      <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5  className="text-uppercase">Col 1</h5>
        <ul  className="list-unstyled mb-0">
          <li>
            <a href="#!"  className="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 4</a>
          </li>
        </ul>
      </div>
       
      <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5  className="text-uppercase mb-0">Col 2</h5>
        <ul  className="list-unstyled">
          <li>
            <a href="#!"  className="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 4</a>
          </li>
        </ul>
      </div>
    
      <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5  className="text-uppercase">Col 3</h5>
        <ul  className="list-unstyled mb-0">
          <li>
            <a href="#!"  className="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 4</a>
          </li>
        </ul>
      </div>
    
      <div  className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5  className="text-uppercase mb-0">Col 4</h5>
        <ul  className="list-unstyled">
          <li>
            <a href="#!"  className="text-dark">Link 1</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 2</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 3</a>
          </li>
          <li>
            <a href="#!"  className="text-dark">Link 4</a>
          </li>
        </ul>
      </div>
    </div> 
  </div>

  <div  className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2023 Copyright:&nbsp;
    <a  className="text-dark" href="#!">MiBlog.com</a>
  </div>
  
</footer> 
  </div>
  </>
)}

export default Footer;
