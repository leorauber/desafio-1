import styles from './Input.module.css'

const Input = ( {onClick, text, onChange} ) => {
    return (
        <div>
            <input className={styles.input} value={text} onChange={onChange}></input>
            <button className={styles.button} onClick={onClick}>Add</button>
        </div>
    )
}

export default Input;