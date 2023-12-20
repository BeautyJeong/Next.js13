import React, { ReactNode } from 'react';

interface ReadProps {
    children: ReactNode;
    params: {
        id: string;
    };
}

export default function Read(props: ReadProps): JSX.Element {
    return (
        <>
            <h2>Read Page~</h2>
            parameters : {props.params.id}
        </>
    );
}