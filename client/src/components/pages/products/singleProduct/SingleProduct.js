import React, { useContext, useState, useEffect } from 'react'

import AppContext from '../../../store/context/context'

import styles from './SingleProduct.css'

export default function SingleProduct(props) {
    const [ itemCount, setItemCount ] = useState(1)
    const { state, fetchSingleProduct, addCart, fetchProducts  } = useContext(AppContext)

    useEffect(() => {
        fetchSingleProduct(parseInt(props.match.params.singleId))
    }, [])


    const handleChange = e => {
        setItemCount(e.target.value)
    }

    const handleSubmit = (e, i, num) => {
        e.preventDefault()
        if(itemCount > 0){
            addCart(i, num)
            props.history.push('/')
        }
        else{
            alert('Please a valid number')
        }
    }

    const { singleProduct } = state

    
    
    // let getDescription = getId = getMediaUrl = getName = getPrice = getSku = ''
    let getDescription = ''
    let getId = ''
    let getMediaUrl = ''
    let getName = ''
    let getPrice = ''
    let getSku = '' 
    
    if(Object.keys(singleProduct).length){
        // console.log('hello')
         const { description, id, mediaUrl, name, price, sku } = singleProduct
         getDescription = description,
         getId = id,
         getMediaUrl = mediaUrl,
         getName = name,
         getPrice = price,
         getSku = sku
    }
    // console.log(state, ' singleee')

    return (
        <div className={ styles.SingleProduct }>
            <div className={ styles.SingleProduct_Item }>
                <div className={ styles.SingleProduct_Item_Image }>
                    <img src={ getMediaUrl } alt={ getName }/>
                    <div className={ styles.SingleProduct_Item_Image_Price }>
                    <h3>{ getName }</h3>
                    <h4>Rs. { getPrice }</h4>
                    <h5> sku : { getSku }</h5>
                    <form onSubmit={ (e) => handleSubmit(e, singleProduct, itemCount) }>
                        <input autoFocus type="number" placeholder="Quantity" min="1" value={ itemCount } onChange={ handleChange }/>
                        <button type="submit">ADD</button>
                    </form>
                    </div>
                </div>
                <hr/>
                <div className={ styles.SingleProduct_Description }>
                    <h5>About this product</h5>
                    <p>{ getDescription }</p>
                    <button>DELETE</button>
                </div>
            </div> 
        </div>
    )
}
