import styles from './commercial.module.css'
import { commercialCards } from '../../data/data'
import Card from '../../components/Card'

const Commercial = ({updateFunction}) => {
    return (
        <>
            <div className={styles.commercialPage}>
                <h1 className={styles.title}>COMMERCIAL</h1>
{                <p className={styles.subTitle}>Choose your journey</p>}
                <div className={styles.cardInfo}>
                    {commercialCards.map((card, index) => 
                        <div className={styles.cardWrapper} key={index}>
                            <Card
                                title={card.title}
                                description={card.description}
                                capacity={card.capacity}
                                image={card.image}
                                page={card.page}
                                updateFunction={updateFunction}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Commercial