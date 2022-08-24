import React, { Component } from 'react';

export class Shodan extends Component {
    constructor() {
        super();
        this.state = {
            url: 'https://www.shodan.io/',
            display_url: "https://www.shodan.io/",
        }
    }


    render() {
        return (
            <div className="h-full w-full flex flex-col bg-ub-cool-grey">
                <iframe src={this.state.url} className="flex-grow" id="shodan" frameBorder="0" title="Shodan"></iframe>
            </div>
        )
    }
}

export default Shodan

export const displayShodan = () => {
    return <Shodan> </Shodan>;
}
