import React from 'react'

const about = () => {
    return (
      <div
        className="bg-dark"
        style={{
          margin: "0 auto",
          padding: "1rem 0",
          color: "white"
        }}
      >
        <h1
          className="display-4 font-weight-bold"
        >
          What we do
        </h1>
        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "1rem"
          }}
        >
          The Tech Club is where a variety of technology-focused teams at
          Valencia College meet and collaborate on projects, tutoring, and
          entertainment. We regularly host events with industry professionals,
          repair computer equipment, design and develop projects, and help with
          coursework. Though our focus is often on programming, networking, or
          general IT, we welcome anyone interested from any field of study.
        </p>
      </div>
    );
}

export default about
