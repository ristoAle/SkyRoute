import styles from './business.module.css'
import { businessCards } from '../../data/data'
import Card from '../../components/Card'

const business = ({updateFunction}) => {
    return (
        <>
            <div className={styles.businessPage}>
                <h1 className={styles.title}>BUSINESS JETS</h1>
{                <p className={styles.subTitle}>Choose your journey</p>}
                <div className={styles.cardInfo}>
                    {businessCards.map((card, index) => 
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

export default business