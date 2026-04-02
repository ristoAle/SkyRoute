import styles from './home.module.css'
import { homeCards } from '../../data/data'
import Card from '../../components/Card'

const Home = ({updateFunction}) => {
    return (
        <>
            <div className={styles.homePage}>
                <h1 className={styles.title}>EXPLORE AVIATION</h1>
                <div className={styles.cardInfo}>
                    {homeCards.map((card, index) => 
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            image={card.image}
                            page={card.page}
                            updateFunction={updateFunction}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default Home