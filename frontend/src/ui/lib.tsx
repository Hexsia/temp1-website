import React from "react";

//Titles and Texts
const TitleText: React.FC<{title: string}> = ({title}) => {
    return(
        <h2>{title}</h2>
    )
}

export {TitleText}

//Buttons
const BigButton: React.FC<{title: string}> = ({title}) => {
    return(
        <button className={
            "w-xs h-15 rounded-xl bg-blue-100 hover:bg-blue-200 cursor-pointer font-calsans text-2xl"}>{title}</button>
    )
}

export {BigButton}