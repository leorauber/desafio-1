import styles from './List.module.css'

const List = ({ list, onClick}) => {

    return(
      <div className={styles.list}>
      
        <ul className={styles.ul}>
          {list.map((item) => (
            <li key={item.id} className={`${item.todo && styles.checked}`} >
                <input 
                  className={styles.checkbox}
                  type="checkbox" 
                  id={item.id}
                  defaultChecked={item.todo} 
                  onClick={onClick}
                  disabled={item.todo}
                >
                </input> {item.name}
            </li>
          ))}
        </ul>
      </div>
    )
}


export default List;