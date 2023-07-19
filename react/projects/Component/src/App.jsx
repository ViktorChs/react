import { useState } from 'react'
import { Viewbooknew } from './File'
import { bookArchive } from './bookArchive'
import './App.css'




export function Bookview ({id , img , nombre, desc,  link}) {
   
  return (

    <div  className="nav_menu-content-info-book" id={id} onClick={() => Viewbooknew(id)}>
      <div className='imgcontent'><img src={img} alt='book photo'></img></div>
      <div className='titlecontent'><h3 className="nav_menu-h2-title-book">{nombre}</h3></div>
    </div>
  )
  
}





function App() {

return (
  
  <section>
  {
    bookArchive.map(book => {
      const {id,img, nombre, desc, link} = book
      return (
          <Bookview
          id={id}
          img={img}
          nombre={nombre}
          key={id}
          >
          
          </Bookview>
      )
  })
  }
  </section>

  
)

}

export default App




