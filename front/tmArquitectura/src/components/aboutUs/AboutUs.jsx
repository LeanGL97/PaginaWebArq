import styles from "./AboutUs.module.css"

const AboutUs = () => {
    return (
        <>
            <div>
                <img src="/assets/bannerBlanco.png" className={`img-fluid ${styles.banner}`} alt="Responsive image" />
            </div>
            <div className={styles.headerContainer}>
                <h1 className={styles.title}>Sobre Nosotros</h1>
                <div className={styles.container}>
                    <img src="/assets/aboutUs2.jpg" className={`rounded float-left ${styles.img}`} alt="aboutUs"></img>
                    <div>
                        <h6 className={styles.subtitle}>La esencia de nuestra empresa</h6>
                        <p className={styles.text}>T | M Arquitectura es una empresa fundada por la arquitecta Macarena Taboada la cual tiene como ideales la creatividad, precisión y una visión moderna del diseño. Graduada con honores de la prestigiosa Universidad de la Plata, ha destacado por su enfoque innovador y sostenible en los proyectos que lidera. <br />Su pasión por la arquitectura se fortaleció durante el transcurso de la carrera, inspirada por su fascinación por cómo los espacios bien diseñados pueden transformar la vida de las personas.
                            Teniendo un estilo que mezcla lo contemporáneo con lo funcional, siempre buscando un equilibrio entre estética y utilidad. En su corta pero prometedora carrera, ha trabajado en proyectos residenciales, comerciales y urbanos, destacándose por integrar elementos naturales en cada obra, como jardines verticales, iluminación natural y materiales ecológicos.
                            <br />
                            En el año 2024 fundo "T|M Arquitectura" la cual es una empresa de construcción reconocida por su enfoque integral y compromiso con la excelencia en cada proyecto.
                            Especializada en obras residenciales, comerciales e industriales, T|M Arquitectura ofrece soluciones adaptadas a las necesidades específicas de cada cliente. Desde el diseño arquitectónico hasta la ejecución final, su equipo multidisciplinario trabaja en estrecha colaboración para garantizar resultados que superen las expectativas.
                            <br />Con una sólida trayectoria y un enfoque centrado en la innovación y la satisfacción del cliente, T|M Arquitectura continúa construyendo espacios que no solo cumplen con altos estándares de calidad, sino que también contribuyen al bienestar de las comunidades donde opera.</p>
                    </div>
                    <img src="/assets/aboutUs3.jpg" className={`rounded float-right ${styles.img2}`} alt="..."></img>
                </div>
            </div>
        </>

    )
};

export default AboutUs;