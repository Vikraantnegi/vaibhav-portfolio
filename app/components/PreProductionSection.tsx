'use client';

import React, { useEffect, useRef } from 'react';
import PreProductionCard from './PreProductionCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { useRouter } from 'next/navigation';

import 'swiper/css';
import 'swiper/css/pagination';

import JeepPreProduction from '@/assets/images/Jeep_model2.jpg';
import ParkourPreProduction from '@/assets/images/Parkour.png';

const preProductionProjects = [
	{
		title: 'JEEP',
		slug: 'jeep',
		description: 'Maya',
		image: JeepPreProduction,
		alt: 'Jeep Pre Production',
	},
	{
		title: 'PARKOUR',
		slug: 'parkour',
		description: 'Maya',
		image: ParkourPreProduction,
		alt: 'Parkour Pre Production',
	},
];

const PreProductionSection = () => {
	const swiperRef = useRef<SwiperRef>(null);
	const router = useRouter();

	const handleCardClick = (slug: string) => {
		router.push(`/pre-production/${slug}`);
	};

	useEffect(() => {
		if (swiperRef.current) {
			setTimeout(() => {
				swiperRef.current?.swiper.autoplay.start();
			}, 500);
		}
	}, []);

	return (
		<section id="pre-production" className="py-6 w-full md:py-10">
			<div className="flex flex-col">
				<p className="text-3xl md:text-4xl font-bold text-center md:text-left">
					PRE-PRODUCTION
				</p>
				<div className="bg-black mt-2 mb-6 h-0.5 rounded-sm" />

				<div className="md:hidden">
					<Swiper
						ref={swiperRef}
						modules={[Pagination, Autoplay]}
						spaceBetween={20}
						slidesPerView={1}
						pagination={{
							clickable: true,
							bulletClass:
								'swiper-pagination-bullet !w-8 !h-1 !rounded-none !bg-gray-300',
							bulletActiveClass:
								'swiper-pagination-bullet-active !bg-black',
						}}
						className="w-full pb-10"
						autoplay={{ delay: 2000, disableOnInteraction: false }}
						speed={2000}
					>
						{preProductionProjects.map((project, index) => (
							<SwiperSlide key={index}>
								<PreProductionCard
									title={project.title}
									description={project.description}
									image={project.image}
									alt={project.alt}
									onClick={() =>
										handleCardClick(project.slug)
									}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="hidden md:flex md:flex-row md:flex-wrap items-stretch w-full gap-6">
					{preProductionProjects.map((project, index) => (
						<PreProductionCard
							key={index}
							title={project.title}
							description={project.description}
							image={project.image}
							alt={project.alt}
							onClick={() => handleCardClick(project.slug)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default PreProductionSection;
