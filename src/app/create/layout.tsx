import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout(props: LayoutProps): JSX.Element {
    console.log(props.children);
    return (
        <form>
            <h2>Create Layout</h2>
            {props.children}
        </form>
    );
}