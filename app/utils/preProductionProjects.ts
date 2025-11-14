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
						loop: true,
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
					description: `For my parkour 3D animation, I studied real parkour videos to understand natural movement, timing, and balance. I used references of urban spaces like rooftops and alleys to design a realistic setting. Inspired by games like Assassin’s Creed and Mirror’s Edge, I aimed to make the animation dynamic and visually engaging.`,
				},
				media: [
					{
						type: 'video',
						src: getVimeoEmbedUrl('https://vimeo.com/1136755189'),
						alt: 'Parkour References 1',
					},
					{
						type: 'video',
						src: getVimeoEmbedUrl('https://vimeo.com/1136755233'),
						alt: 'Parkour References 2',
					},
				],
			},
			{
				content: {
					title: 'ANIMATIC',
					description: `The animatic established timing, camera movement, and action flow using storyboard panels and rough 3D blockouts. It visualized the character’s interaction with urban obstacles—jumping, rolling, and climbing—before full animation began.`,
				},
				media: [
					{
						type: 'video',
						src: getVimeoEmbedUrl('https://vimeo.com/1136755313'),
						alt: 'Parkour Animatic',
						loop: true,
					},
				],
			},
			{
				content: {
					title: 'Blocking',
					description: `In the blocking part I have done the key poses and pose selection such as the character’s crouch before a jump was exaggerated to emphasize weight shift, and the wall grab pose ensures hand placement is believable.” Timing & spacing, Character pathing and Camera Placement.`,
				},
				media: [
					{
						type: 'video',
						src: getVimeoEmbedUrl('https://vimeo.com/1136755320'),
						alt: 'Parkour Blocking',
						loop: true,
					},
				],
			},
			{
				content: {
					title: 'LIGHTS, CAMERA, ANIMATE!',
					description: `In the final animation stage, I refined all major poses and transitions established in the blocking phase. Timing adjustments ensured jumps, vaults, and rolls maintained believable weight and momentum.

					The camera was adjusted to showcase dynamic stunts while maintaining readability of the action.

					The render part is still not done which I need to complete it for my demo reel, I will be continuing to work on this for the final render.
`,
				},
				media: [
					{
						type: 'video',
						src: getVimeoEmbedUrl('https://vimeo.com/1136755243'),
						alt: 'Parkour Animation',
						loop: true,
					},
				],
			},
		],
	},
};
