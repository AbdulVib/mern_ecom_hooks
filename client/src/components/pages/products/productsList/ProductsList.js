import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './ProductsList.css'

import AppContext from '../../../store/context/context'

export default function ProductsList() {
    
    const { state, fetchProducts } = useContext(AppContext)

    useEffect(() => {
        fetchProducts()
    }, [])

    const { productsData } = state

    // console.log(productsData, ' state')
    
    return (
        <div className={ styles.ProductsList }>
            <ul className={ styles.ProductsList_Items }>
                {
                    productsData.map(( product, i )=> {
                        const { id, name, price, description, sku, mediaUrl } = product 
                        return(
                            <li key={ i }>
                                <Link to={`/product/${ id }`}>
                                    <img src={ mediaUrl } alt={ description }/>
                                    <h4>{ name }</h4>
                                    <h5>Rs. { price }</h5>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
