import { Item } from './Item'

export function Map() {
  return (
    <div
    style={
      {
        width: '3000px',
        height: '2000px',
        border: '1px solid black',
      }
    }>
      <div id='letrero-1'>
        Ambientes hibribidos de aprendizaje
      </div>
      <div id='letrero-2'>
        Contexto
      </div>
      <div id='letrero-3'>
        Interacciónes
      </div>
      <div id='letrero-4'>
        Herramientas
      </div>
      <div id='letrero-5'>
        Retos
      </div>
      <div id='letrero-6'>
        ventajas
      </div>
      <div id='letrero-7'>
        Ambientes de aprendizaje construtivistas
      </div>
      <div className="arrow1" id="arrow01" />
      <div className="arrow1" id="arrow02" />
      <div className="arrow1" id="arrow03" />
      <div className="arrow1" id="arrow04" />
      <div className="arrow-double" id="arrow05" />
      <div className="arrow-double" id="arrow06" />
      <div className="arrow-double" id="arrow07" />
      <div className="arrow-vertical" id="arrow08" />

      <Item 
        id='item1'
        image='img/img1.png'  
        description='Aula virtual' 
      />
      <Item 
        id='item2'
        image='img/img2.png'  
        description='Trabajo autónomo'
      />
      <Item 
        id='item3'
        image='img/img3.png'  
        description='Aula de clase'
      />
      <Item 
        id='item4'
        image='img/img4.png'  
        description='E - E'
      />
      <Item 
        id='item5'
        image='img/img5.png'  
        description='E - P'
      />
      <Item 
        id='item6'
        image='img/img6.png'  
        description='Plataformas de gestión del aprendizaje (LMS)'
      />
      <Item 
        id='item7'
        image='img/img7.png'  
        description='Herramientas de videoconferencia'
      />

    </div>
  )
}