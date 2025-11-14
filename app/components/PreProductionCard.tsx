import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface PreProductionCardProps {
	title: string;
	description: string;
	image: StaticImageData;
	alt: string;
	onClick?: () => void;
}

const PreProductionCard = ({
	title,
	description,
	image,
	alt,
	onClick,
}: PreProductionCardProps) => {
	return (
		<div
			onClick={onClick}
			className={`
        relative w-full md:w-[48%] bg-white rounded-2xl overflow-hidden
        border border-gray-200 group
        transition-all duration-300 ease-in-out
        hover:shadow-xl hover:border-gray-300 hover:-translate-y-1
        ${onClick ? 'cursor-pointer' : ''}
      `}
		>
			<div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50 rounded-t-2xl">
				<Image
					alt={alt}
					src={image}
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					fill
					sizes="(max-width: 768px) 100vw, 48vw"
				/>
			</div>

			<div className="p-5 md:p-6 flex flex-col relative border-t border-gray-200">
				<h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
					{title}
				</h3>
				<p className="text-base md:text-lg text-black font-medium leading-relaxed mb-4">
					{description}
				</p>

				<div className="mt-auto flex items-center justify-end">
					<button
						onClick={(e) => {
							e.stopPropagation();
							if (onClick) onClick();
						}}
						className="w-12 h-12 rounded-full bg-gray-900 hover:bg-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg active:scale-95"
						aria-label="View details"
					>
						<svg
							className="w-6 h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2.5}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PreProductionCard;
