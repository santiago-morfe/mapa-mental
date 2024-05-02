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
      <Item 
        id='item8'
        image='img/img8.png'  
        description='Herramientas colaborativas'
      />
      <Item 
        id='item9'
        image='img/img9.png'  
        description='Plataformas de contenido educativo'
      />
      <Item 
        id='item10'
        image='img/img10.png'  
        description='Herramientas de evaluación y retroalimentación'
      />
      <Item 
        id='item11'
        image='img/img11.png'  
        description='Equilibrio entre lo virtual y lo presencial'
      />
      <Item 
        id='item12'
        image='img/img12.png'  
        description='Participación y compromiso de los estudiantes'
      />
      <Item 
        id='item13'
        image='img/img13.png'  
        description='Adaptación de los métodos de enseñanza'
      />
      <Item 
        id='item14'
        image='img/img14.png'  
        description='Soporte técnico y capacitación'
      />
      <Item 
        id='item15'
        image='img/img15.png'  
        description='Acceso equitativo a la tecnología'
      />
      <Item 
        id='item16'
        image='img/img16.png'  
        description='reducción de costos'
      />
      <Item 
        id='item17'
        image='img/img17.png'  
        description='accecibilidad'
      />
      <Item 
        id='item18'
        image='img/img18.png'  
        description='Flexibilidad'
      />
      <Item 
        id='item19'
        image='img/img19.png'  
        description=' Los ambientes de aprendizaje  constructivistas proveen múltiples  representaciones de la realidad.'
      />

    </div>
  )
}