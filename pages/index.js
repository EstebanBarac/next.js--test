import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>ESBA Dive</title>
        <meta name="description" content="Entra y descubri todos nuestros Cursos de Buceo PADI con certificación internacional!" />
        <link rel="icon" href="https://cdn.emojidex.com/emoji/seal/scuba_diver.png" />
      </Head>
      <nav className={styles.nav}>
        <a href='#cursos' className={styles.links}>Cursos</a>
        <a href='#cursos' className={styles.links}>Salidas</a>
        <a href='#cursos' className={styles.links}>Equipos</a>
        <a href='#cursos' className={styles.links}>Nuestros viajes</a>
      </nav>
     <div className={styles.divVideo}>
        <video className={styles.video} src="https://pro-cms.padi.com/sites/default/files/documents/marketing-hub/Lead%20Adventure%20Video_ENGLISH.mp4?_ga=2.210710038.248074504.1667315833-516230998.1662745008" autoPlay={true} muted={true} loop={true} ></video>
      </div>
      <main className={styles.main} >
        <h1 className={styles.title}>
          Bienvenido a <a>ESBA DIVE</a>
        </h1>

        <div className={styles.floatContainer}>
          <div className={styles.divDerechaArriba}>
            <div className={styles.divDerechaText}>
                  <p>Soy Esteban Barac, Instructor de Buceo de PADI desde el año 2017, realicé mi formación en la
                    Riviera Maya-México. Buceando en el mar y en cenotes, convirtiéndome en Instructor de
                    Especialidades y también en Instructor de Primeros Auxilios. Continúo disfrutando del buceo
                    en distintas partes del mundo y he realizado +1000 inmersiones. Te invito a conocer algunos
                    de mis viajes.
                  </p>
            </div>
            <img className={styles.imgDivDerecha} src='https://cdn.discordapp.com/attachments/841443299839574017/1038239732200644709/Ellipse_1.png'></img>
          </div>    
          <div className={styles.divIzquierdaAbajo}>
          <div className={styles.divIzquierdaText}>
              <p> Descubrí el buceo y aventúrate a conocer nuevos lugares. Te acompaño desde el nivel inicial
                  hasta los niveles mas avanzados del buceo recreativo, disfrutando de las especialidades que
                  tenemos disponibles. Si tu interés es ser profesional de buceo te puedo ofrecer convertirte en
                  Divemaster y comenzar el camino a ser Instructor de buceo.
              ​</p>
            </div>
            <img className={styles.imgDivIzquierda} src='https://cdn.discordapp.com/attachments/841443299839574017/1038244254004301824/Ellipse_1_1.png'></img>
          </div>    

        </div>
        
        <div className={styles.banner}>
          <img className={styles.bannerImg} src='https://cdn.discordapp.com/attachments/841443299839574017/1038255449688002660/Rectangle_1.png'></img>
        </div>


        <div className={styles.divCursos} id='cursos'>
          <h2 className={styles.h2}>Nuestros Cursos</h2>

          <div className={styles.divCardsCursos}>
          
          
          <div className={styles.cardCursos}>
              
              <img className={styles.CardImg} src="https://cdn.discordapp.com/attachments/841443299839574017/1038264440279269436/Rectangle_2_1.png" alt="Avatar" />
              
              <div className={styles.CardContainer}>
                <h4><b>PADI Open Water</b></h4>
                <p>El PADI Open Water Diver es el primer nivel de certificación de buceo. Un PADI Instructor altamente entrenado te enseñará a bucear en un entorno de aprendizaje relajado y seguro. Aprende los principios y la terminología del buceo, adquiere las destrezas básicas de buceo y conocimientos para bucear en tu entorno local o en el extranjero y ser un embajador del mundo subacuático.</p>
                <button className={styles.btnCard} onClick={() => setShowModal1(true)} >Ver mas</button>
              </div>
            </div>
            
            <div className={styles.cardCursos}>
              <img className={styles.CardImg} src="https://cdn.discordapp.com/attachments/841443299839574017/1038264126243340328/Rectangle_2.png" alt="Avatar" />
              <div className={styles.CardContainer}>
                <h4><b>PADI Advanced Open Water Diver</b></h4>
                <p>El curso Advanced Open Water Diver perfecciona tus técnicas. Practicarás navegación y
                  flotabilidad, probarás el buceo a profundidad y harás tres inmersiones de especialidad de tu
                  elección. Por cada inmersión de especialidad que completes, puedes obtener crédito para
                  conseguir certificaciones de especialidad PADI
                </p>
                <button className={styles.btnCard} onClick={() => setShowModal2(true)} >Ver mas</button>
              </div>
            </div>
            
            <div className={styles.cardCursos}>
              <img className={styles.CardImg} src="https://cdn.discordapp.com/attachments/841443299839574017/1038261724953972746/Rectangle_1_2.png" alt="Avatar" />
              <div className={styles.CardContainer}>
                <h4><b>PADI Specialities</b></h4>
                <p>Bucea a mayor profundidad en la exploración del planeta azul con habilidades avanzadas de
                    buceo y certificaciones de especialidad. Tanto si quieres ampliar tus conocimientos de buceo
                    como experimentar una nueva especialidad de buceo, nuestros cursos te prepararán para la
                    aventura subacuática.
                </p>
                <button className={styles.btnCard} onClick={() => setShowModal3(true)} >Ver mas</button>
              </div>
            </div>
          </div>
        </div>
        
      {showModal1 ? ( 
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h3>Información Curso de Buceo PADI- Open Water Diver</h3>
          <p>El curso Open Water, es el primer nivel de las certificaciones de Buceo PADI, finalizado el curso te permite realizar inmersiones en cualquier parte del mundo hasta una profundidad máxima de 18 metros, habilitando también a la renta de equipamiento en caso de ser necesario.</p>
          <h4>El curso consta de tres áreas:</h4>
          <p>- Parte Teórica, modalidad online o presencial</p> 
             <p>- Parte Práctica Aguas Confinadas ( 5-inmersiones en piscina climatizada)</p>
             <p>- Parte Práctica Aguas Abiertas      ( 4- inmersiones en Lago Marimenuco)</p>
             <h4>Incluye:</h4>
             <p>- Clases Personalizadas con Instructor PADI</p>
             <p>- Manuales y Material PADI</p>
             <p>- Equipamiento de buceo completo durante el curso (traje neoprene, BCD, tanque, aletas, etc.)</p>
             <p>- Inmersiones Parte práctica ( No incluye traslados)</p>
             <p>- Certificación Internacional</p>   
          <h4>Tiempo: 10hs teoría, 5 a 7 días práctica</h4>
          <h4>Requisitos: Saber nadar y ser mayor de 15 años</h4>   
          <p>(de 10 a 14 años reciben certificación Junior)</p>
             
             
             
          <button className={styles.modalBtnInteresa}><Link href='https://api.whatsapp.com/send?phone=5492995125034&text=Buenas!%20Quiero%20mas%20informacion%20sobre%20el%20curso%20PADI%20Open%20Water'>Me interesa !!</Link></button>

          <button className={styles.modalCerrar} onClick={() => setShowModal1(false)}>Cerrar</button>
        </div>
        
      </div>
      
      )

       :
      
      null}


      {showModal2 ? ( 
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h3>Continúa tu viaje de buceo con el curso PADI Advanced Open Water Diver.</h3>
          <p>Bucea a mayor profundidad en la exploración del planeta azul con habilidades avanzadas de
              buceo y certificaciones de especialidad. Tanto si quieres ampliar tus conocimientos de buceo
              como experimentar una nueva especialidad de buceo, nuestros cursos te prepararán para la
              aventura subacuática.
          </p>
          <p>Bucea a mayor profundidad en la exploración del planeta azul con habilidades avanzadas de
            buceo y certificaciones de especialidad. Tanto si quieres ampliar tus conocimientos de buceo
            como experimentar una nueva especialidad de buceo, nuestros cursos te prepararán para la
            aventura subacuática.
          </p> 
              <p>Vive nuevas aventuras con un PADI Instructor a tu lado. Perfecciona tus habilidades de
                flotabilidad, aumenta la confianza en tus técnicas de navegación y prueba nuevas actividades
                de buceo a más de 18m/60pies de profundidad.
              </p>
             <h4>Lleva tus habilidades de buceo al siguiente nivel.</h4>
             <p>El curso incluye cinco inmersiones: una inmersión profunda por debajo de los 18 m/60 pies,
                una inmersión de navegación, y tres inmersiones de especialidad. Obtén experiencia, crea
                confianza y descubre tus capacidades de buceo.
                </p> 
          <p>Tiempo total: 2-3 días</p>
          <p>Requisitos: Open Water Diver / Junior Open Water Diver (o certificación equivalente de otra
              asociación)</p>   
          <p>Edad mínima: 12 años o más</p>
          <p>Profundidad: La profundidad máxima es de hasta 30 metros/100 pies</p>
          <p>El curso contiene 2 especialidades obligatorias (especialidad en navegación y buceo profundo),
            mientras que la parte restante del curso consiste en 3 especialidades a su elección y puede
            escoger de los siguientes buceos de aventura:
          </p>
          <p>-Buceo Nocturno</p>
          <p>-Buceo Profundo</p>
          <p>-Búsqueda y Rescate</p>
          <p>-Navegación Subacuática</p>
          <p>-Buceo en Altura</p>
          <p>-Sidemount</p>

          <p>Entre otras opciones de especialidades.</p>
             
             
             
          <button className={styles.modalBtnInteresa}><Link href='https://api.whatsapp.com/send?phone=5492995125034&text=Buenas!%20Quiero%20mas%20informacion%20sobre%20el%20curso%20ADVANCED%20Open%20Water%20Diver'>Me interesa !!</Link></button>

          <button className={styles.modalCerrar} onClick={() => setShowModal2(false)}>Cerrar</button>
        </div>
        
      </div>
      
      )

       :
      
      null}

     {showModal3 ? ( 
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h3>Especialidades</h3>
          <p>Bucea a mayor profundidad en la exploración del planeta azul con habilidades avanzadas de
              buceo y certificaciones de especialidad. Tanto si quieres ampliar tus conocimientos de buceo
              como experimentar una nueva especialidad de buceo, nuestros cursos te prepararán para la
              aventura subacuática.
          </p>
          
          <h4>--Rescue Diver – Buzo de Rescate</h4>
          <p>Mejora tu confianza y conviértete en un mejor compañero de buceo a través de divertidos
            juegos de rol y la práctica de destrezas.</p> 
            <h4>--ReActivate Scuba Refresher Program</h4>
          <p>Bucea hacia tu próxima aventura con confianza. Recupera las destrezas aprendidas en tu
              primer curso de buceo sin empezar desde cero.</p> 
            <h4>Deep Diver – Buceo Profundo</h4>
          <p>Amplía tus límites y ve más cosas del mundo subacuático.</p> 
            <h4>--Underwater Navigator – Navegación Subacuática</h4>
          <p>¿Cansado de perderte? Aprende cómo navegar bajo el agua como un profesional.</p> 
          <h4>--Peak Performance Buoyancy – Flotabilidad</h4>
          <p>Mejora tu control de flotabilidad, bucea con menos lastre y mejora el consumo de aire.</p> 
          <h4>--Night Diver – Buceo Nocturno</h4>
          <p>Ve el mundo subacuático con una luz completamente nueva después del atardecer.</p> 
          <h4>--Search and Recovery Diver – Busqueda y Rescate</h4>
          <p>Ayuda a recuperar objetos perdidos. Aprende las técnicas de búsqueda subacuática y
              cómo usar un globo elevador.</p> 
             
             
          <button className={styles.modalBtnInteresa}><Link href='https://api.whatsapp.com/send?phone=5492995125034&text=Buenas!%20Quiero%20mas%20informacion%20sobre%20el%20curso%20PADI%20Specialities'>Me interesa !!</Link></button>

          <button className={styles.modalCerrar} onClick={() => setShowModal3(false)}>Cerrar</button>
        </div>
        
      </div>
      
      )

       :
      
      null}





      </main>





      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
