import React from 'react'
//UI
import { BigButton } from "../ui/lib.tsx";

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
            <div className={"h-150 px-10 bg-blue-50"}>

            </div>
        </div>
    )
}

export default Home