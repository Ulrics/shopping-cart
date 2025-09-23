import styles from './button.module.css';

function PrimaryButton( {action, label} ){
    
    return(
        <button
            className={styles.primaryBtn}
            onClick={action}>
                {label}
        </button>
    )
}

export default PrimaryButton;