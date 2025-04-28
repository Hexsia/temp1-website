import React from 'react';

const Navbar: React.FC  = () => {

    //Link component
    type LinkProps = { name: string }
    const Links: React.FC<LinkProps> = (props) => {
        return (
            <a href={"/"} className={"text-black text-xl font-semibold"}>{props.name}</a>
        )
    }


    return (
        <nav className={"bg-gray-50 grid grid-cols-2 h-25"}>
            {/* Logo */}
            <div className={"max-w-sm ml-10 flex items-center"}>
                <img className={"size-20"} src={"../../public/assets/Template_Logo.svg"} alt={"logo"}/>
            </div>

            {/* Navigation */}
            <div className={"md:flex justify-evenly items-center"}>
                <Links name={"Home"}/>
                <Links name={"About"}/>
                <Links name={"Services"}/>
                <Links name={"Contact"}/>
            </div>
        </nav>
    )
}

export default Navbar;