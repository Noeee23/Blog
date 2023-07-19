const Hero = () => {
  // Fuente: https://mdbootstrap.com/docs/react/extended/hero/
  return (
  <>
  <div
    className='p-0 text-center bg-image'
    style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
      >
      <div className='mask' style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.45)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white'>
            <h1 className='mb-3'>Heading</h1>
            <h4 className='mb-3'>Subheading</h4>
            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
              Call to action
            </a>
          </div>
        </div>
      </div>
  </div> 
  </>
)}

export default Hero;