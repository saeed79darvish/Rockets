import React, { Component } from 'react';

class About extends Component {

    render() {
        return (<div>
            <h1>About</h1>
            <p>From engineering to manufacturing to operations, SpaceX is looking for world-class talent ready to tackle challenging projects that will ultimately enable life on other planets. SpaceX is an equal opportunity employer offering competitive salaries, comprehensive health benefits and equity packages.</p>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TXMGu2d8c8g"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WFZwI10HEsw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>);
    }
}

export default About;