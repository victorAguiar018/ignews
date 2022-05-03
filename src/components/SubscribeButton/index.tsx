import styles from './styles.module.scss'

interface SunbscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }:SunbscribeButtonProps)  {
    return(
        <button
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    );
}