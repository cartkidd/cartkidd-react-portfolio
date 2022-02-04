import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Shoehub-Selection',
			description: 
			'Shoehub is a place where you can go rate and upload pictures',
			image: '3.png',
			technologies: [
                'Node',
                'Apollo',
                'React',
                'Graphql',
                'Bulma',
                'MongoDB Atlas',
                'Heroku',
            ],
			github: "https://github.com/cartkidd/shoehub-selection"
		},
	

		// {
		// 	name: 'Personal_Training',

		// 	description:
        // 		'This personal training web app allows users to register for personal trainers depending on their Bmi.',

		// 	image: '0.png',
		// 	technologies: [
		// 		'HTML',
		// 		'CSS',
		// 		'JavaScript',
		// 		'Bulma',
		// 	],
		// 	github: "https://https://github.com/kingo86/Personal_Training",
		// 	deployed: "https://kingo86.github.io/Personal_Training/",
		// },
		{
			name: 'Vacation Packages',
			description:
			'Vacation Packages is a travel application that offers a variety of group trip packages. With this application, a user does not have to worry about the details of planning a trip. All a user does is signup for a trip and join a group of other adventurous people on a one of a kind trip!',
				
			image: '1.png',
			technologies: [
				'Node.js',
				'Express.js',
				'Sequelize',
				'Mysql2',
				'Bcrypt',
				'Express Handlebars',
				'.env',
				'Bulma (CSS framework)',
				'jawsDB',
			],
			github: "https://github.com/akidane23/vacation_packages",
			deployed: "https://vacation-packages.herokuapp.com/",
		},
		
		{
			name: 'Tech-Blog',
			description:
			'The application contained within is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
			image: '2.png',
			technologies: [
				'Javascript', 
				'CSS', 
				'Handlebars'
			],
			github: "https://github.com/cartkidd/tech-blog",
		},
	
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
