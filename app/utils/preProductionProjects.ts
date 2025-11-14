import { Section } from '@/components/PreProductionDetail';
import JeepPreProduction from '@/assets/images/Jeep_model2.jpg';
import ParkourPreProduction from '@/assets/images/Parkour.png';
import { getVimeoEmbedUrl } from '@/utils/common';

export const preProductionProjects: Record<
	string,
	{
		title: string;
		heroImage: typeof JeepPreProduction | typeof ParkourPreProduction;
		description?: string;
		sections: Section[];
	}
> = {
	jeep: {
		title: 'JEEP',
		heroImage: JeepPreProduction,
		description: 'Maya',
		sections: [
			{
				content: {
					title: 'REFERENCES',
					description: `Gathering references is the foundation of any 3D project. I collected images of classic military Jeeps, studying their proportions, details, and distinctive features. This research phase helped me understand the vehicle's form, from the iconic vertical grille to the chunky off-road tires.

Key reference points included:
• Classic Willys Jeep proportions
• Military vehicle detailing
• Off-road vehicle characteristics
• Real-world texture and material references`,
				},
				media: [
					{
						type: 'image',
						src: JeepPreProduction,
						alt: 'Jeep References',
					},
				],
			},
			{
				content: {
					title: 'MODEL',
					description: `The modeling phase involved creating the base geometry in Maya, focusing on accurate proportions and clean topology. I then moved to ZBrush for sculpting finer details and adding character to the model.

After establishing the primary forms, I used Substance Painter to create realistic textures and materials. The goal was to achieve a weathered, authentic look while maintaining the classic Jeep aesthetic.

Process:
• Base modeling in Maya
• Detail sculpting in ZBrush
• UV unwrapping and optimization
• Texture painting in Substance Painter`,
				},
				media: [
					{
						type: 'image',
						src: JeepPreProduction,
						alt: 'Jeep Model',
					},
				],
			},
			{
				content: {
					title: 'RIGGING',
					description: `Rigging the Jeep involved setting up control systems for movable parts like doors, wheels, and steering. I created a hierarchical bone structure that would allow for realistic movement and animation.

The rigging process required careful attention to pivot points and constraints to ensure smooth operation during animation.

Key components:
• Door opening mechanisms
• Wheel rotation controls
• Steering system setup
• Suspension system rigging`,
				},
				media: [
					{
						type: 'image',
						src: JeepPreProduction,
						alt: 'Jeep Rigging',
					},
				],
			},
			{
				content: {
					title: 'LIGHTS, CAMERA, ANIMATE!',
					description: `The final stage involved setting up lighting, camera angles, and bringing the Jeep to life through animation. I created a sequence showcasing the vehicle's movement capabilities and personality.

Animation highlights include smooth rolling motion, door mechanics, and dynamic camera work that emphasizes the Jeep's rugged character.

Final touches:
• Lighting setup for dramatic presentation
• Camera choreography
• Animation polish
• Render optimization`,
				},
				media: [
					{
						type: 'video',
						src: getVimeoEmbedUrl('https://vimeo.com/1074850549'),
						alt: 'Jeep Animation',
					},
				],
			},
		],
	},
	parkour: {
		title: 'PARKOUR',
		heroImage: ParkourPreProduction,
		description: 'Maya',
		sections: [
			{
				content: {
					title: 'REFERENCES',
					description: `For the Parkour character, I gathered references focusing on parkour movements, character anatomy, and dynamic poses. This included studying real parkour athletes and their fluid movement patterns.

The reference phase helped establish the character's athletic build and movement capabilities, informing both the design and eventual animation.

Key reference areas:
• Parkour movement sequences
• Athletic character proportions
• Dynamic pose studies
• Urban environment inspiration`,
				},
				media: [
					{
						type: 'image',
						src: ParkourPreProduction,
						alt: 'Parkour References',
					},
				],
			},
			{
				content: {
					title: 'MODEL',
					description: `Character modeling began with blocking out the basic form in Maya, ensuring proper proportions for an athletic build. I then moved to ZBrush for detailed sculpting, adding muscle definition and character features.

The modeling process emphasized clean topology for animation, while Substance Painter was used to create detailed textures that bring the character to life.

Modeling workflow:
• Base mesh creation in Maya
• Character sculpting in ZBrush
• Retopology for animation
• Texture development in Substance Painter`,
				},
				media: [
					{
						type: 'image',
						src: ParkourPreProduction,
						alt: 'Parkour Model',
					},
				],
			},
			{
				content: {
					title: 'RIGGING',
					description: `Rigging the Parkour character required a comprehensive bone structure capable of handling complex movements. I set up FK/IK systems for the limbs, facial controls for expression, and secondary controls for natural movement.

The rig needed to support dynamic parkour movements while maintaining flexibility for various poses and animations.

Rigging features:
• Full body IK/FK systems
• Advanced spine controls
• Facial rigging setup
• Secondary animation controls`,
				},
				media: [
					{
						type: 'image',
						src: ParkourPreProduction,
						alt: 'Parkour Rigging',
					},
				],
			},
			{
				content: {
					title: 'LIGHTS, CAMERA, ANIMATE!',
					description: `The animation phase brought the Parkour character to life with fluid, dynamic movements. I created sequences showcasing various parkour techniques, emphasizing the character's agility and athleticism.

Lighting and camera work were choreographed to highlight the movement and create an engaging visual experience.

Animation focus:
• Parkour movement sequences
• Character personality through motion
• Dynamic camera tracking
• Polished final render`,
				},
				media: [
					{
						type: 'video',
						src: getVimeoEmbedUrl('https://vimeo.com/1074850549'),
						alt: 'Parkour Animation',
					},
				],
			},
		],
	},
};
