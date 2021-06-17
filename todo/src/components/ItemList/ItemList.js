import React from 'react';
import Item from '../Item/Items'
import styles from './ItemList.module.css'

const ItemList = ({itemList, setTaskIsDone}) => (
  <div className={styles.listWrap}>
      {itemList.map(item => (
        <Item
            task={item}
            key={item.value}
            setTaskIsDone={setTaskIsDone}
        />
      ))}
  </div>
);

export default ItemList;