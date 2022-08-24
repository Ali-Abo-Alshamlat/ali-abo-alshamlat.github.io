import React, { Component } from 'react';

export class ZoomEye extends Component {
    constructor() {
        super();
        this.state = {
            url: 'https://www.zoomeye.org/',
            display_url: "https://www.zoomeye.org/",
        }
    }


    render() {
        return (
            <div className="h-full w-full flex flex-col bg-ub-cool-grey">
                <iframe src={this.state.url} className="flex-grow" id="zoomeye" frameBorder="0" title="ZoomEye Url"></iframe>
            </div>
        )
    }
}

export default ZoomEye

export const displayZoomEye = () => {
    return <ZoomEye> </ZoomEye>;
}
