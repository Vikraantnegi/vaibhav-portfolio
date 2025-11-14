import PreProductionDetail from '@/components/PreProductionDetail';
import { preProductionProjects } from '@/utils/preProductionProjects';

export default function PreProductionDetailPage({
	params,
}: {
	params: { slug: string };
}) {
	const project = preProductionProjects[params.slug.toLowerCase()];

	if (!project) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-bold mb-4">
						Project Not Found
					</h1>
					<p className="text-gray-600">
						The requested project could not be found.
					</p>
				</div>
			</div>
		);
	}

	return (
		<PreProductionDetail
			projectTitle={project.title}
			heroImage={project.heroImage}
			description={project.description}
			sections={project.sections}
		/>
	);
}
