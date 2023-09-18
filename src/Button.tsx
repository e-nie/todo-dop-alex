import React from 'react';

type ButtonPropsType = {
    name: string
    callback: ()=> void

}
const Button = (props:ButtonPropsType) => {

    const onClickHandler = () => {
        return props.callback()
    }
    return (
        <button onClick= {onClickHandler} >{props.name} </button>
    );
};

export default Button;
