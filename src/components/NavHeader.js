import React from 'react'

const NavHeader = () => {
  return (
    <header>
        <div className='BoxNavHeader'>
            <div className='NavHeaderContent'>
                <div className='HeaderLogo'>
                  <h2 className='Logo'><span className='DO'>D·O</span> DIEGO OCAMPO</h2>
                </div>
                
                <div className='NavHeaderDir'>
                <a href="t">INICIO</a>
                <a href='t'>ESTUDIOS</a>
                <a href='t'>ACERCA</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavHeader