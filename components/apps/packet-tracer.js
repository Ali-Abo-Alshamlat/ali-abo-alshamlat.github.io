import React, { Component } from 'react';

export class Tracer extends Component {
    constructor() {
        super();
        this.state = {
            url: 'https://forge.kmi.open.ac.uk/pt/app/default.html#/',
            display_url: "https://forge.kmi.open.ac.uk/pt/app/default.html#/",
        }
    }


    render() {
        return (
            <div className="h-full w-full flex flex-col bg-ub-cool-grey">
                <iframe src={this.state.url} className="flex-grow" id="Tracer-screen" frameBorder="0"></iframe>
            </div>
        )
    }
}

export default Tracer

export const displayTracer = () => {
    return <Tracer> </Tracer>;
}
