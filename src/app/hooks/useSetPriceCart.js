import {  useEffect, useReducer, useRef, useState } from 'react';

const useSetPriceCart = (product) => {
     
  console.log(product)
    const previousSelectedRefMemory = useRef(null);
    const previousSelectedRefRam = useRef(null)

    const initialState = {
        price: product.price,
        selectedMemory: product.memory[0],
        selectedRam: product.ram[0], 
        counter: 1,
		
    }

    const handleMemory = (e) => { //trebuie returnata
			
            dispatch({
                    type: 'setValueMemory',
                    id:e.target.id,
                    value:e.target.value,
                    
           });
           dispatch({
            type: 'setSelectedMemory',
            value: e.target.value
        })
       }
    const handleRam = (e) => {
       
        dispatch({
            type: 'setValueRam',
            id: e.target.id,
            value: e.target.value,
            
        })
        dispatch({
            type: 'setSelectedRam',
            value: e.target.value
        })
    }

    const handleCounter = (e) => { //trebuie returnata
    
        dispatch({
            type: 'count',
            value: e.currentTarget.dataset.value,
            onchange: e.target.value
        })
    }


    const reducer = (state, action) => {
       
        let { price, selectedMemory, counter, selectedRam } = state;
        
        switch (action.type) {
			
            case 'count': 
            console.log('case count');
            // console.log(typeof action.onchange);
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
                switch (action.onchange){
                    
                    case typeof action.onchange == 'string':
                        console.log('action.onchange');
                        if (counter > 1) {
                            return {

                                ...state,
                                counter: Number(action.onchange) ,
                                price: product.price * (Number(action.onchange))
                            }
                        }
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
                let newPrice = 0;
                        if (action.id == 'size') {
                            newPrice = Number(action.idOption) * 500 + price * counter
                        } else {
                            newPrice = Number(action.id) * 500 + price * counter
                        }
            
                
              return {
                ...state,
                price: newPrice
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
			
                const updatedSelectedRam = state.selectedRam === action.value ? null : action.value;
                if (action.value === updatedSelectedRam && updatedSelectedRam !== previousSelectedRefRam.current) { // de inlaturat bag cu calculare
                    console.log('primul if');
                    let newPrice
                        if (previousSelectedRefRam.current != updatedSelectedRam) {
                            console.log(action.id);
                             newPrice = (price - (price - product.price * counter))  ;  // aflu diferenta
                            console.log(newPrice);
                            newPrice = newPrice + Number(action.id)  * 500 * counter

                        } else {
                            let dif = price - product.price * counter ; console.log(dif);
                            newPrice = (price - (price - product.price * counter)) + dif ; 
                            console.log(newPrice);
                            newPrice = newPrice + Number(action.id) * 500 * counter
                        } 
                        if (action.id == 'size') {
                            if (previousSelectedRefRam.current != updatedSelectedRam) {
                                console.log('pret', price, typeof product.price);
                                 newPrice = (price - (price - product.price * counter))  ; 
                                console.log(action.id);
                                newPrice = newPrice + Number(action.idOption) * 500 * counter
                                console.log(newPrice);
                            } else {
                                let dif = price - product.price * counter ; console.log(dif);
                                newPrice = (price - (price - product.price * counter)) + dif ; 
                                console.log(newPrice);
                                newPrice = newPrice + Number(action.idOption) * 500 * counter
                            }      
                        }                   
                        return {
                        ...state,
                        price: newPrice
                        };
                    } else if (action.value === updatedSelectedRam) {
                        let newPrice = 0;
                        if (action.id == 'size') {
                            newPrice = Number(action.idOption) * 500 + price * counter
                        } else {
                            newPrice = Number(action.id) * 500 + price * counter
                        }
                    return {
                        ...state,
                        price: newPrice
                    };
                    } else if (!updatedSelectedRam) {
                        console.log('3lea if');
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

export default useSetPriceCart