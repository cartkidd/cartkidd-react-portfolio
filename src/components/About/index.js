import React from 'react';

function About() {

  return (
    <section>
      <div className="center" id="about">
	  <h1 className="page-header">Cartrell</h1>
	  </div>
	  <div className="center">
				<img
					src={require('../../assets/images/Me.png')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
            <p>Dedicated web developer designing engaging applications focused on simplicity and purpose</p>
      </div>
    </section>
  )
}

export default About