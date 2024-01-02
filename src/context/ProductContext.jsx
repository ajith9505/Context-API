import { createContext, useContext, useState } from "react";
import data from "../product.json";


const UserContext = createContext({
    data: [],
    quantity: () => { },
    onOptionChangeHandler: () => { },
    options: () => { }
});

export const useUserContext = () => useContext(UserContext);

//User defined context
export function UserContextProvider({ children }) {

    const [quantity, setQuantity] = useState(Array(data.products.length).fill(1));

    //onChange handler
    const onOptionChangeHandler = (event, index) => {
        const selectedValue = event.target.value;

        setQuantity((previousValue) => {
            const newValue = [...previousValue];
            newValue[index] = parseInt(selectedValue, 6);
            return newValue
        })
    };

    //creating drop-down options for each card
    const options = () => {
        const option = [];
        for (let i = 1; i <= 5; i++) {
            option.push(<option key={i} value={i}>{i}</option>)
        }
        return option;
    }

    const value = {
        data,
        quantity,
        onOptionChangeHandler,
        options
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}