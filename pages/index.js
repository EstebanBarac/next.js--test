import Head from 'next/head'
import Image from 'next/image'
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
      <main className={styles.main} id='cursos'>
        <h1 className={styles.title}>
          Bienvenido a <a>ESBA DIVE</a>
        </h1>

        <div className={styles.floatContainer}>
          <div className={styles.divDerechaArriba}>
            <div className={styles.divDerechaText}>
              <p>Napoleón I Bonaparte (Ajaccio, 15 de agosto de 1769-Longwood, 5 de mayo de 1821) fue un militar y estadista francés, general republicano durante la Revolución francesa y el Directorio, </p>
            </div>
            <img className={styles.imgDivDerecha} src='https://cdn.discordapp.com/attachments/841443299839574017/1038239732200644709/Ellipse_1.png'></img>
          </div>    
          <div className={styles.divIzquierdaAbajo}>
          <div className={styles.divIzquierdaText}>
              <p>LGBT o LGTB es la sigla compuesta por las iniciales de las palabras Lesbianas, Gais,3​ Bisexuales y Trans (transgénero, transexuales y travestis).4​ En sentido estricto​</p>
            </div>
            <img className={styles.imgDivIzquierda} src='https://cdn.discordapp.com/attachments/841443299839574017/1038244254004301824/Ellipse_1_1.png'></img>
          </div>    

        </div>
        
        <div className={styles.banner}>
          <img className={styles.bannerImg} src='https://cdn.discordapp.com/attachments/841443299839574017/1038255449688002660/Rectangle_1.png'></img>
        </div>


        <div className={styles.divCursos}>
          <h2 className={styles.h2}>Nuestros Cursos</h2>

          <div className={styles.divCardsCursos}>
          
          
          <div className={styles.cardCursos}>
              
              <img className={styles.CardImg} src="https://cdn.discordapp.com/attachments/841443299839574017/1038264440279269436/Rectangle_2_1.png" alt="Avatar" />
              
              <div className={styles.CardContainer}>
                <h4><b>PADI Open Water</b></h4>
                <p>El PADI Open Water Diver es el primer nivel de certificación de buceo. Un PADI Instructor altamente entrenado te enseñará a bucear en un entorno de aprendizaje relajado y seguro.</p>
                <button className={styles.btnCard} onClick={() => setShowModal1(true)} >Ver mas</button>
              </div>
            </div>
            
            <div className={styles.cardCursos}>
              <img className={styles.CardImg} src="https://cdn.discordapp.com/attachments/841443299839574017/1038264126243340328/Rectangle_2.png" alt="Avatar" />
              <div className={styles.CardContainer}>
                <h4><b>PADI Advanced Open Water Diver</b></h4>
                <p>El PADI Open Water Diver es el primer nivel de certificación de buceo. Un PADI Instructor altamente entrenado te enseñará a bucear en un entorno de aprendizaje relajado y seguro.</p>
                <button className={styles.btnCard} onClick={() => setShowModal2(true)} >Ver mas</button>
              </div>
            </div>
            
            <div className={styles.cardCursos}>
              <img className={styles.CardImg} src="https://cdn.discordapp.com/attachments/841443299839574017/1038261724953972746/Rectangle_1_2.png" alt="Avatar" />
              <div className={styles.CardContainer}>
                <h4><b>PADI Specialities</b></h4>
                <p>El PADI Open Water Diver es el primer nivel de certificación de buceo. Un PADI Instructor altamente entrenado te enseñará a bucear en un entorno de aprendizaje relajado y seguro.</p>
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
             
             
             
          <button className={styles.modalBtnInteresa}>Me interesa !!</button>
          <button className={styles.modalCerrar} onClick={() => setShowModal1(false)}>Cerrar</button>
        </div>
        
      </div>
      
      )

       :
      
      null}


      {showModal2 ? ( 
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h3>Información Curso de Buceo PADI- Open Advanced Diver</h3>
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
             
             
             
          <button className={styles.modalBtnInteresa}>Me interesa !!</button>
          <button className={styles.modalCerrar} onClick={() => setShowModal2(false)}>Cerrar</button>
        </div>
        
      </div>
      
      )

       :
      
      null}

     {showModal3 ? ( 
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h3>Información Curso de Buceo PADI- Specialities Diver</h3>
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
             
             
             
          <button className={styles.modalBtnInteresa}>Me interesa !!</button>
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
