import React, { Component } from 'react';


class LiveVideo extends Component {
   
    render() { 
        return (<div>
            <h1>Live Lunches</h1>
            <p>Three Falcon 9 boosters strapped together, the behemoth will lift off from historic Pad 39A here at NASA's Kennedy Space Center.

The upcoming mission, dubbed Arabsat 6A, will launch a large communications satellite for Saudi Arabian corporation Arabsat. Built by Lockheed Martin, the satellite is an advanced commercial communications satellite, designed to provide internet and communications services to residents of the Middle East, Africa and parts of Europe.

If all goes according to plan, the two side boosters will touch down in unison on their designated landing pad at Cape Canaveral Air Force Station, while the central booster will land at sea, on one of the company’s two drone ships. 

Falcon Heavy is the most powerful rocket flying today, but it has only one spaceflight under its belt so far. The reusable rocket first launched on Feb. 6, 2018, ferrying Elon Musk's cherry-red Tesla Roadster.

Fetching a price between $90 million and $150 million per launch, Falcon Heavy has already been certified by the U.S. Air Force to fly national security payloads. </p>
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DPfHHls50-w"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
        </div>);
    }
}
 
export default LiveVideo;