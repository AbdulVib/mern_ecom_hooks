import React, { useReducer } from 'react';
import Context from './context'

import axios from 'axios'

//reducer
import reducer, { initialState } from '../reducers/reducer'


export default function contextProvider(props) {
    
    const [ state, dispatch ] = useReducer(reducer, initialState)

    const fetchProducts = _ => {
        axios.get('http://localhost:5000/products')
            .then(res => res)
            .then(res => dispatch( { type: 'SET_PRODUCTS', payload: res.data } ))
    }
    
    const fetchSingleProduct = id => {
        const findData = state.productsData.find(i => i.id === id)
        dispatch( { type: 'SINGLE_PRODUCT', payload: findData } )
    }
    
    const addCart = (item, count) => {
        // console.log(item, ' item')
        const addData = { ...item, count }
        dispatch( { type: 'ADD_CART', payload: addData } )
        axios.get('http://localhost:5000/addProduct', addData)
    }


    return (
        <Context.Provider value={{ state, dispatch, fetchProducts, fetchSingleProduct, addCart }}>
            { props.children }
        </Context.Provider>
    )
}

