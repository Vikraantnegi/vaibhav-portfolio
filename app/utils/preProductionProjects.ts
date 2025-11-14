import { Section } from '@/components/PreProductionDetail';
import JeepPreProduction from '@/assets/images/Jeep_model2.jpg';
import ParkourPreProduction from '@/assets/images/Parkour.png';
import JeepReference1 from '@/assets/images/JeepRefrence1.jpg';
import JeepReference2 from '@/assets/images/JeepReference2.jpg';
import JeepReference3 from '@/assets/images/JeepReference3.jpeg';
import JeepModel1 from '@/assets/images/Jeep_model2.jpg';
import JeepModel2 from '@/assets/images/Jeep_model.jpg';
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
		title: 'Jeep',
		heroImage: JeepPreProduction,
		sections: [
			{
				content: {
					title: 'REFERENCES',
					description: `I begin by collecting high-quality reference images of Jeep models from multiple angles These images help establish correct proportions, scale, and surface flow. I also study close-up details such as the tires, headlights, grills, interiors, and textures. Using these references ensures that the 3D model remains true to real-world design standards.

In addition to visual references, I analyze various Jeep versions—both classic and modern—to understand their mechanical structure, styling trends, and functional elements. Research also includes looking at blueprints, technical drawings, or manufacturer specifications to ensure correct measurements and realistic. modeling. This helps in identifying what makes a Jeep recognizable and how its components fit together.`,
				},
				media: [
					{
						type: 'image',
						src: JeepReference1,
						alt: 'Jeep Reference 1',
					},
					{
						type: 'image',
						src: JeepReference2,
						alt: 'Jeep Reference 2',
					},
					{
						type: 'image',
						src: JeepReference3,
						alt: 'Jeep Reference 3',
					},
				],
			},
			{
				content: {
					title: 'MODEL',
					description: `After completing the modeling, texturing, and rigging stages, the 3D Jeep model was finalized and prepared for animation. At this point, the vehicle had all its details, materials, and lighting correctly set up to achieve a realistic and visually appealing result. The finished Jeep model accurately reflects the proportions, design, and surface details established during the reference and concept phases.`,
				},
				media: [
					{
						type: 'image',
						src: JeepModel1,
						alt: 'Jeep Model 1',
					},
					{
						type: 'image',
						src: JeepModel2,
						alt: 'Jeep Model 2',
					},
				],
			},
			{
				content: {
					title: 'LIGHTS, CAMERA, ANIMATE!',
					description: `To bring the model to life, a simple rig was created for animating key components such as the wheels, suspension, steering, and doors. This allowed smooth motion and realistic movement in driving or turning sequences. The Jeep was then animated following a short camera path to demonstrate its mechanics and design in motion. Basic physics and timing were applied to make the animation feel natural and believable.`,
				},
				media: [
					{
						type: 'video',
						src: getVimeoEmbedUrl('https://vimeo.com/1136756361'),
						alt: 'Jeep Animation',
					},
				],
			},
		],
	},
	parkour: {
		title: 'Parkour',
		heroImage: ParkourPreProduction,
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
