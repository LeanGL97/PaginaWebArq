import styles from "./Recognitions.module.css"

const Recognitions = () => {
    return (
        <>
            <div className={styles.body}>

                <div className={styles.title}>
                    <h1>Reconocimientos y premios</h1>
                </div>

                <div className="card bg-black">

                    <div className="card-body">
                        <h5 className={`card-title text-white ${styles.cardTitle}`}>PRIMER PREMIO: CONCURSO NACIONAL DE IDEAS POLO FERROCULTURAL Y ARCHIVO GENERAL FERROVIARIO "ESTACIÓN FRANCISCO ALVAREZ" MORENO, BUENOS AIRES</h5>
                        <p className={`card-text ${styles.cardText}`}>Asociada con Estudio SMF Arquitectos. Mayo de 2022.</p>
                        <p className={`card-text text-white ${styles.smallText}`}><small >Expedida por:<a href="http://socearq.org/2022/02/01/concurso-nacional-de-anteproyectos/" target="_blank" rel="noopener noreferrer"> http://socearq.org/2022/02/01/concurso-nacional-de-anteproyectos/</a></small></p>
                    </div>

                    <div className={styles.imgContainer}>
                        <img className={`card-img-bottom ${styles.cardImg}`} src="/assets/logros.jpg" alt="Card image cap" />
                    </div>
                </div>
                <div>

                    <div className="card bg-black">

                        <div className="card-body">
                            <h5 className={`card-title text-white ${styles.cardTitle}`}>PREMIO ESTIMULO 2022 - MENCIÓN S/ORDEN DE MERITO. Proyecto: "IDENTIDAD PARA INTEGRAR"</h5>
                            <p className={`card-text ${styles.cardText}`}>Categoría Proyecto de Intervención Territorial. Ganador de una mención de honor. <br /> El día 7 de diciembre de 2022, en La Ciudad de La Plata.</p>
                            <p className={`card-text text-white ${styles.smallText}`}><small>Expedida por: <a href="https://www.capbacs.com/_files/ugd/4a82b8_899527de21b34c5ba730cea48ed18e32.pdf" target="_blank" rel="noopener noreferrer">
                                https://www.capbacs.com/_files/ugd/4a82b8_899527de21b34c5ba730cea48ed18e32.pdf</a></small></p>
                        </div>

                        <div className={styles.imgContainer}>
                            <img className={`card-img-bottom ${styles.cardImg}`} src="/assets/logros1.jpg" alt="Card image cap" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Recognitions;