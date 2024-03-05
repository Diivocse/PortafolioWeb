import React from 'react'

const info = {
  webConsulta: "WEB DE CONSULTA DE UBICACIÓN DE ESTUDIANTES",
  deswebConsulta: "Desarrollo en el apartado FRONT-END, diseño y funcionamiento. Con la finalidad de que los estudiantes de nuevo ingreso puedan ubicarse dentro de las instalaciones de la universidad.",

  webCrud: "CRUD · CREATE, READ, UPDATE AND DELETE",
  deswebCrud: "Desarrollo en el apartado Front-End, con conexión a base de datos, interpretación de funcionamiento Back-End.",
  
  avatarHtml: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  avatarCss: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  avatarJs: "https://cdn-icons-png.freepik.com/512/5968/5968292.png?ga=GA1.1.1426447371.1708812741&",
  avatarNode: "https://img.icons8.com/?size=256&id=54087&format=png",
  avatarMongo: "https://img.icons8.com/?size=256&id=74402&format=png",
}

const CardV1 = () => {
  return (
    <div className='BoxCard'>
      <div className='CardContent'>
        <img src='https://i.imgur.com/cCilHN1.png' className='Imgs' alt='si'></img>
          <div className='BoxTextCard'>
          <h2>WEB CONSULTA DE UBICACIÓN DE ESTUDIANTES</h2>
          <p>Diseño y desarollo FRONT-END de la web de consulta de estudiantes de la Universidad Cooperativa de Colombia. Que permite la ubicación de aulas de clase.</p>

            <div className='BoxLanguagesIconsContent'>
           
              <div className='BtnIcon'><img src={info.avatarHtml} className='ImgIcon'/></div>
              <div className='BtnIcon'><img src={info.avatarCss} className='ImgIcon'/></div>
              <div className='BtnIcon'><img src={info.avatarJs} className='ImgIcon'/></div>
             
              
            </div>
          </div>

      </div>

      <div className='CardContent'>
        <img src='https://i.imgur.com/JeOZOCt.jpeg' className='Imgs' alt='si'></img>
          <div className='BoxTextCard'>
          <h2>SERVICIO CRUD</h2>
          <p>Diseño y desarrollo FRONT-END, interpretación e implementación del apartado BACK-END para el funcionamiento interno del servicio crud.</p>

          <div className='BoxLanguagesIconsContent'>
           
           <div className='BtnIcon'><img src={info.avatarHtml} className='ImgIcon'/></div>
           <div className='BtnIcon'><img src={info.avatarCss} className='ImgIcon'/></div>
           <div className='BtnIcon'><img src={info.avatarJs} className='ImgIcon'/></div>
           <div className='BtnIcon'><img src={info.avatarNode} className='ImgIcon'/></div>
           <div className='BtnIcon'><img src={info.avatarMongo} className='ImgIcon'/></div>
           
         </div>
          </div>

      </div>
    </div>
  )
}

export default CardV1