import styles from "./Carrousel.module.css"

const Carrousel = () => {
    return (
        <div>
<div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="5000"
>
    <div className="carousel-indicators">
        <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
        ></button>
        <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
        ></button>
        <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
        ></button>
        <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
        ></button>
        <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
        ></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img className={`d-block w-100 ${styles.carouselImage}`} src="/assets/quincho.png" alt="First slide" />
        </div>
        <div className="carousel-item">
            <img className={`d-block w-100 ${styles.carouselImage}`} src="/assets/roomLadrillo.png" alt="Second slide" />
        </div>
        <div className="carousel-item">
            <img className={`d-block w-100 ${styles.carouselImage}`} src="/assets/room1b.png" alt="Third slide" />
        </div>
        <div className="carousel-item">
            <img className={`d-block w-100 ${styles.carouselImage}`} src="/assets/kitchen1.png" alt="Four slide" />
        </div>
        <div className="carousel-item">
            <img className={`d-block w-100 ${styles.carouselImage}`} src="/assets/livingRoom.png" alt="Five slide" />
        </div>
    </div>
    <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
    >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
    </button>
    <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
    >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden"></span>
    </button>
</div>

        </div>
    )
};

export default Carrousel;