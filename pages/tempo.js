import React from 'react'

function Tempo(props) {
    console.log('> Passando pelo Frontend;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <>
            <div>
                {dynamicDateString} (dinâmico)
            </div>
            <div>
                {props.staticDateString} (estático)
            </div>
        </>
    )
}

export function getStaticProps() {
    console.log('> Passando pelo getStaticProps();')
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 4
    }
}

export default Tempo;