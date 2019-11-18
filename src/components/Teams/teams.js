import React from 'react'
import TeamCard from "./teamCard"
import WebDevImage from '../../images/bg-1010.jpg'
import CyberSecurityImage from '../../images/card-cybersecurity.jpg'
import EmbeddedImage from '../../images/card-embedded.jpg'
import UnityImage from '../../images/bg-blocks.jpg'

const teams = () => {
    return (
      <div id='teams' style={{padding: '1rem'}}>
          <h1 className='display-4 font-weight-bold text-dark' style={{
            padding: '1rem'
          }}>Teams</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: '1rem'
          }}
          className='text-dark'
        >
          <TeamCard
            title="Game Development"
            content="Learn to build 2D & 3D games using the Unity game development platform."
            image={UnityImage}
          />
          <TeamCard
            title="Embedded Systems"
            content="Using Arduinos and Raspberry Pi systems we build projects that are entered into competitions"
            image={EmbeddedImage}
          />
          <TeamCard
            title="Web Development"
            content="We are building front end user experiences with ReactJS. Back end APIs with NodeJS and Express. "
            image={WebDevImage}
          />
          <TeamCard
            title="Computer Repair"
            content="Our dedicated team is capable of fixing broken screens, keyboards, viruses, and much more. "
            image={CyberSecurityImage}
          />
        </div>
      </div>
    );
}

export default teams
