import React from 'react'
import Link from "next/link";

function Home() {
    return  (
        <>
            <h2>Home</h2>
            <Link href="/sobre">
                Acessar página Sobre
            </Link>
        </>
    )
};

export default Home