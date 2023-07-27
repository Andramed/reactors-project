import {  useEffect, useReducer, useRef, useState } from 'react';

const useSetPrice = (product) => {
    
  console.log(product)
    const previousSelectedRefMemory = useRef(null);
    const previousSelectedRefRam = useRef(null)
    let initialState 
    if (product) {
         initialState = {
            price: product.price,
            selectedMemory: product.memory,
            selectedRam: product.ram, 
            counter: 1,
            
        } else {
             initialState = {
                price: 0,
                selectedMemory: 100,
                selectedRam: 100, 
                counter: 1,
                
            }
        }
    }
console.log(product)
    const handleMemory = (e) => { //trebuie returnata
			
            dispatch({
                    type: 'setValueMemory',
                    id:e.target.id,
                    value:e.target.value
           });
           dispatch({
            type: 'setSelectedMemory',
            value: e.target.value
        })
       }
    const handleRam = (e) => { //trebuie returnata
        dispatch({
            type: 'setValueRam',
            id: e.target.id,
            value: e.target.value
        })
        dispatch({
            type: 'setSelectedRam',
            value: e.target.value
        })
    }

    const handleCounter = (e) => { //trebuie returnata
        // console.log('ai apasat pe minus');
    console.log(e.currentTarget.value);
        dispatch({
            type: 'count',
            value: e.currentTarget.dataset.value
        })
    }


    const reducer = (state, action) => {
       
        let { price, selectedMemory, counter, selectedRam } = state;
        
        switch (action.type) {
			
            case 'count': 
                switch (action.value) {
                    case '-':
                        if (counter>1) {
                        return{
                            ...state,
                            counter: counter -1,
                            price: product.price * (counter - 1)
                        }
                        }
                    case '+':
                        console.log(action.value);
                        return{
                            ...state,
                            counter: counter+1,
                            price: product.price * (counter+1)
                        }
                    default:
                        break;
                }
            case 'setSelectedMemory':
                const value = action.value;
                
                return {
                  ...state,
                  selectedMemory: selectedMemory === value ? null : value,
                };
            case 'setValueMemory':

                const updatedSelectedMemory = state.selectedMemory === action.value ? null : action.value;
                console.log(selectedMemory, updatedSelectedMemory, previousSelectedRefMemory);
            if (action.value === updatedSelectedMemory && updatedSelectedMemory !== previousSelectedRefMemory.current) {
                
				console.log('primul if');
				let newPrice
                if (previousSelectedRefMemory.current != updatedSelectedMemory) {
					console.log('pret', price, typeof product.price);
                     newPrice = (price - (price - product.price * counter))  ; 
					console.log(action.id);
                    newPrice = newPrice + Number(action.id) * 500 * counter
					console.log(newPrice);
                } else {
                    let dif = price - product.price * counter ; console.log(dif);
                    newPrice = (price - (price - product.price * counter)) + dif ; 
                    console.log(newPrice);
                    newPrice = newPrice + Number(action.id) * 500 * counter
                }                    
				
                return {
                ...state,
                price: newPrice
              };
            } else if (action.value === updatedSelectedMemory) {
                console.log('action == selectedMemory');
              return {
                ...state,
                price: Number(action.id) * 500 + price * counter,
              };
            } else if (!updatedSelectedMemory) {
                console.log('nui selcted memory');
              return {
                ...state,
                price: price - Number(action.id) * 500 * counter,
              };
            }
            case'setSelectedRam' :
                const valueRam = action.value;
                console.log(valueRam);
                    // console.log('valoarea selectata', valueRam);
                    return {
                    ...state,
                    selectedRam: selectedRam === valueRam ? null : valueRam
                };
            case 'setValueRam': 
			console.log(action.value);
                const updatedSelectedRam = state.selectedRam === action.value ? null : action.value;
                if (action.value === updatedSelectedRam && updatedSelectedRam !== previousSelectedRefRam.current) { // de inlaturat bag cu calculare
                    console.log('primul if ram');
                    let newPrice
                        if (previousSelectedRefRam.current != updatedSelectedRam) {
                             newPrice = (price - (price - product.price * counter))  ; 
                            console.log(newPrice);
                            newPrice = newPrice + Number(action.id) * 500 * counter
                        } else {
                            let dif = price - product.price * counter ; console.log(dif);
                            newPrice = (price - (price - product.price * counter)) + dif ; 
                            console.log(newPrice);
                            newPrice = newPrice + Number(action.id) * 500 * counter
                        }                    
                        return {
                        ...state,
                        price: newPrice
                        };
                    } else if (action.value === updatedSelectedRam) {
                        console.log(selectedRam, updatedSelectedRam );
                        console.log('action == selectedMemory ram');
                    return {
                        ...state,
                        price: Number(action.id) * 500 + price * counter,
                    };
                    } else if (!updatedSelectedRam) {
                        console.log('nui selcted ram');
                    return {
                        ...state,
                        price: price - Number(action.id) * 500 * counter,
                    };
                    }

            
            break;
         
          default:
            return state; // Returnează starea nemodificată pentru cazurile nedefinite
        }
      };
  
      
const [state, dispatch] = useReducer(reducer, initialState);
const {price, selectedMemory, counter, selectedRam} = state
useEffect(() => {
    previousSelectedRefMemory.current = selectedMemory;
  }, [selectedMemory]);
  
  useEffect(() => {
      previousSelectedRefRam.current = selectedRam
  }, [selectedRam]);

  return {state, handleCounter, handleMemory, handleRam, dispatch}

}

export default useSetPrice