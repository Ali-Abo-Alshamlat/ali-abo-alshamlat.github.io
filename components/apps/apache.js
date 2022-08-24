import React, { Component } from 'react';

export class Apache extends Component {
    constructor() {
        super();
        this.state = {
            url: 'https://id.apache.org/',
            display_url: "https://id.apache.org/",
        }
    }


    render() {
        return (
            <div className="h-full w-full flex flex-col bg-ub-cool-grey">
                <iframe src={this.state.url} className="flex-grow" id="apache-user-screen" frameBorder="0" title="Apache Url"></iframe>
            </div>
        )
    }
}

export default Apache

export const displayApache = () => {
    return <Apache> </Apache>;
}
