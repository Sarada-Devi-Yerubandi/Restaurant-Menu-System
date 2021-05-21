import React from 'react';
import { Fragment } from "react/cjs/react.production.min";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

export default function MainPage() {
    return (
        <Fragment>
            <Header/>
            <main>
                <Meals/>
            </main>
        </Fragment>
    )
}
