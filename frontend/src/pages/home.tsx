import React from 'react'
//UI
import { BigButton, ProductContainer } from "../ui/lib.tsx";

//Icons etc
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home: React.FC = () => {
    return (
        <div>
            <div className={"h-150 px-10 bg-red-50 grid grid-cols-2"}>
                <div className={"flex flex-col justify-center"}>
                    <h1 className={"font-calsans text-7xl"}>Where Technology Meets Creativity</h1>
                    <br />
                    <p className={"text-xl"}>Nova Enterprise will give you the most creative website ever.</p>
                </div>
                <div className={"flex flex-col justify-center items-center"}>
                    <BigButton title={"Sign Up Here"}/>
                </div>
            </div>
            <div className={"h-150 px-10 bg-blue-50 grid grid-cols-3 justify-items-center"}>
                <ArrowBackIosIcon sx={{dislay: "flex", justifySelf: "center", alignSelf: "center"}} />
                <ProductContainer title={"Product One"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                <ArrowForwardIosIcon sx={{dislay: "flex", justifySelf: "center", alignSelf: "center"}} />
            </div>
        </div>
    )
}

export default Home