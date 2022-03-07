import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Products from '../components/Products'

 export default function Publications({items}) {
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts(){
            const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${search}`)
                const content = await response.json()
                setProducts(content.hits)
        }
        getProducts()
    }, [search])
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <label htmlFor="search" className={styles.label}>Search for stuff</label>
            <input type="search" className={styles.input} placeholder="Search..." autoFocus required value={search} onChange={(e) =>setSearch(e.target.value)} />
            
            <button className={styles.button} type="submit">Go</button> 
            <Products products={products} />
        </div>
    </div>
    
  )
}