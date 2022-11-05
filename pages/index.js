import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
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
        <video className={styles.video} src="https://pro-cms.padi.com/sites/default/files/documents/marketing-hub/Lead%20Adventure%20Video_ENGLISH.mp4?_ga=2.210710038.248074504.1667315833-516230998.1662745008" autoplay="true" muted="true" loop="true"></video>
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
          <img className={styles.bannerImg} src='https://cdn.discordapp.com/attachments/841443299839574017/1038257680344694885/Rectangle_1_1.png'></img>
        </div>


        <div className={styles.divCursos}>
          <h2 className={styles.h2}>Nuestros Cursos</h2>

          <div className={styles.divCardsCursos}>
          
          
          <div className={styles.cardCursos}>
              
              <img className={styles.CardImg} src="https://cdn.discordapp.com/attachments/841443299839574017/1038261724953972746/Rectangle_1_2.png" alt="Avatar" />
              
              <div className={styles.CardContainer}>
                <h4><b>PADI Open Water</b></h4>
                <p>El PADI Open Water Diver es el primer nivel de certificación de buceo. Un PADI Instructor altamente entrenado te enseñará a bucear en un entorno de aprendizaje relajado y seguro.</p>
              </div>
            </div>
            
            <div className={styles.cardCursos}>
              <img className={styles.CardImg} src="https://cdn.discordapp.com/attachments/841443299839574017/1038264126243340328/Rectangle_2.png" alt="Avatar" />
              <div className={styles.CardContainer}>
                <h4><b>PADI Open Water</b></h4>
                <p>El PADI Open Water Diver es el primer nivel de certificación de buceo. Un PADI Instructor altamente entrenado te enseñará a bucear en un entorno de aprendizaje relajado y seguro.</p>
              </div>
            </div>
            
            <div className={styles.cardCursos}>
              <img className={styles.CardImg} src="https://cdn.discordapp.com/attachments/841443299839574017/1038264440279269436/Rectangle_2_1.png" alt="Avatar" />
              <div className={styles.CardContainer}>
                <h4><b>PADI Open Water</b></h4>
                <p>El PADI Open Water Diver es el primer nivel de certificación de buceo. Un PADI Instructor altamente entrenado te enseñará a bucear en un entorno de aprendizaje relajado y seguro.</p>
              </div>
            </div>
          </div>
        </div>
      
      
      
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
