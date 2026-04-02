import styles from './card.module.css'

const Card = ({title, description, capacity, image, page, updateFunction}) => {
    const handleClick = () => {
        updateFunction(page)
    }

    return (
        <>
            <div className={styles.card} onClick={handleClick}>
                <img className={styles.image} src={image} />
                <div className={styles.content}>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.capacity}>{capacity}</p>
                </div>
            </div>
        </>
    )
}

export default Card