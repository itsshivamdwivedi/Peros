import React from 'react';
import { PerosLogo } from './PerosLogo';

type Props ={};


export default function Header ({}: Props) {
    return(
    <header className="-mb-36 flex justify-center py-4 ">
       <PerosLogo className=" mb-24 h-20 z-10 cursor-pointer "/>
    </header>
    );
}


