import React from 'react'

const profile = {
  nameProfile: "Diego Ocampo",
  avatarProfile: "https://i.imgur.com/hlNWrAX.png"
}

const ProfileInfo = () => {
  return (
    <div>
        <div className='BoxProfile'>
            <div className='BoxProfileContent'>
                <h2>Hola, soy</h2>
                <h1>{profile.nameProfile}</h1>
                <p>Tecnólogo en <b>Desarrollo y Administración de Aplicaciones Informáticas</b>, con formación en programación, bases de datos, redes computacionales y manejo de aplicaciones informáticas. Con la objetividad de brindar soluciones informáticas eficientes para la satisfacción de las necesidades de los clientes.</p>
            </div>
            <div className='BoxProfileAvatar'>
               <img className='ProfileAvatarImg' src={profile.avatarProfile} alt='ProfileAvatarImg'/>
            </div>
        </div>
    </div>
  )
}

export default ProfileInfo