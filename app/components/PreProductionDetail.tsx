'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

export interface MediaItem {
	type: 'image' | 'video';
	src: StaticImageData | string;
	alt?: string;
	thumbnail?: StaticImageData | string;
}

export interface Section {
	content: {
		title: string;
		description: string;
	};
	media: MediaItem[];
}

interface PreProductionDetailProps {
	projectTitle: string;
	heroImage?: StaticImageData | string;
	description?: string;
	sections: Section[];
}

const PreProductionDetail = ({
	projectTitle,
	heroImage,
	description,
	sections,
}: PreProductionDetailProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const stickyRef = useRef<HTMLDivElement>(null);
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [isMobile, setIsMobile] = useState(false);

	// Check if mobile on mount and resize
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// GSAP only for desktop
	useEffect(() => {
		if (typeof window === 'undefined' || isMobile) return;

		const ctx = gsap.context(() => {
			const leftColumn =
				containerRef.current?.querySelector('.sections-column');
			const stickyContainer = stickyRef.current;
			const lastSection = sectionRefs.current[sections.length - 1];

			if (!leftColumn || !stickyContainer) return;

			if (lastSection) {
				ScrollTrigger.create({
					trigger: leftColumn,
					start: 'top top',
					endTrigger: lastSection,
					end: 'top top',
					pin: stickyContainer,
					pinSpacing: true,
					anticipatePin: 1,
				});
			} else {
				ScrollTrigger.create({
					trigger: leftColumn,
					start: 'top top',
					end: () =>
						`+=${leftColumn.scrollHeight - window.innerHeight}`,
					pin: stickyContainer,
					pinSpacing: true,
				});
			}

			sectionRefs.current.forEach((section) => {
				if (section) {
					gsap.from(section, {
						scrollTrigger: {
							trigger: section,
							start: 'top 80%',
							toggleActions: 'play none none reverse',
						},
						opacity: 0,
						y: 50,
						duration: 0.8,
						ease: 'power3.out',
					});
				}
			});

			sections.forEach((section, index) => {
				if (sectionRefs.current[index] && stickyContainer) {
					ScrollTrigger.create({
						trigger: sectionRefs.current[index]!,
						start: 'top bottom',
						end: 'bottom top',
						onEnter: () => {
							const allSections =
								stickyContainer.querySelectorAll(
									'[data-section]'
								);
							allSections.forEach((sectionEl) => {
								gsap.to(sectionEl, {
									opacity: 0,
									duration: 0.3,
									onComplete: () => {
										sectionEl.classList.remove(
											'active-media'
										);
										(
											sectionEl as HTMLElement
										).style.pointerEvents = 'none';
									},
								});
							});

							const currentSection =
								stickyContainer.querySelector(
									`[data-section="${index}"]`
								);
							if (currentSection) {
								gsap.to(currentSection, {
									opacity: 1,
									duration: 0.3,
									onStart: () => {
										currentSection.classList.add(
											'active-media'
										);
										(
											currentSection as HTMLElement
										).style.pointerEvents = 'auto';
									},
								});
							}
						},
						onLeaveBack: () => {
							if (index > 0 && stickyContainer) {
								const allSections =
									stickyContainer.querySelectorAll(
										'[data-section]'
									);
								allSections.forEach((sectionEl) => {
									gsap.to(sectionEl, {
										opacity: 0,
										duration: 0.3,
										onComplete: () => {
											sectionEl.classList.remove(
												'active-media'
											);
											(
												sectionEl as HTMLElement
											).style.pointerEvents = 'none';
										},
									});
								});

								const prevSection =
									stickyContainer.querySelector(
										`[data-section="${index - 1}"]`
									);
								if (prevSection) {
									gsap.to(prevSection, {
										opacity: 1,
										duration: 0.3,
										onStart: () => {
											prevSection.classList.add(
												'active-media'
											);
											(
												prevSection as HTMLElement
											).style.pointerEvents = 'auto';
										},
									});
								}
							}
						},
					});
				}
			});
		}, containerRef);

		return () => ctx.revert();
	}, [sections, isMobile]);

	const renderMedia = (item: MediaItem, sectionIndex: number) => {
		if (item.type === 'image') {
			return (
				<Image
					src={item.src as StaticImageData}
					alt={
						item.alt ||
						`${projectTitle} - Section ${sectionIndex + 1}`
					}
					fill
					className="object-contain"
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
			);
		} else if (item.type === 'video') {
			return (
				<iframe
					src={item.src as string}
					width="100%"
					height="100%"
					allow="autoplay; fullscreen; picture-in-picture"
					allowFullScreen
					className="border-0 rounded-lg"
				/>
			);
		}
		return null;
	};

	return (
		<div ref={containerRef} className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
			<div className="py-12 md:py-16 w-full max-w-full">
				<div className="flex flex-col max-w-[64rem] w-full mx-auto px-4 md:px-0">
					{heroImage && (
						<div className="relative w-full max-w-full aspect-video rounded-2xl overflow-hidden mb-8">
							<Image
								src={heroImage as StaticImageData}
								alt={`${projectTitle} Hero`}
								fill
								className="object-cover"
								sizes="100vw"
								priority
								style={{ maxWidth: '100%' }}
							/>
						</div>
					)}
					<h1 className="text-4xl md:text-6xl font-bold text-center md:text-left mb-4 break-words">
						{projectTitle}
					</h1>
					{description && (
						<p className="text-lg md:text-xl text-black leading-relaxed text-center md:text-left break-words">
							{description}
						</p>
					)}
				</div>
			</div>

			{/* Mobile View - Normal Sections with Sliders */}
			{isMobile ? (
				<div className="flex flex-col gap-12 w-full mx-auto px-4 pb-20">
					{sections.map((section, index) => (
						<div key={index} className="w-full space-y-6">
							<div className="w-full">
								<h2 className="text-3xl font-bold text-black mb-6">
									{section.content.title}
								</h2>
								<div className="bg-black h-0.5 rounded-sm mb-6" />
								<div className="text-base text-black leading-relaxed whitespace-pre-line">
									{section.content.description}
								</div>
							</div>
							
							{/* Media Slider for Mobile */}
							{section.media.length > 0 && (
								<div className="w-full max-w-full">
									{section.media.length === 1 ? (
										<div className="relative w-full max-w-full aspect-video rounded-lg overflow-hidden">
											{renderMedia(section.media[0], index)}
										</div>
									) : (
										<Swiper
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
											className="w-full max-w-full pb-10"
											autoplay={{ delay: 3000, disableOnInteraction: false }}
										>
											{section.media.map((item, mediaIndex) => (
												<SwiperSlide key={mediaIndex} className="!w-full">
													<div className="relative w-full max-w-full aspect-video rounded-lg overflow-hidden">
														{renderMedia(item, index)}
													</div>
												</SwiperSlide>
											))}
										</Swiper>
									)}
								</div>
							)}
						</div>
					))}
				</div>
			) : (
				/* Desktop View - GSAP Sticky Layout */
				<div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-[64rem] w-full mx-auto px-8 md:px-0">
					<div className="sections-column w-full md:w-1/2 space-y-32 md:space-y-40 pb-20">
						{sections.map((section, index) => (
							<div
								key={index}
								ref={(el: HTMLDivElement | null) => {
									if (el) {
										sectionRefs.current[index] = el;
									}
								}}
								className="min-h-screen flex items-start"
								data-section-index={index}
							>
								<div className="w-full">
									<h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
										{section.content.title}
									</h2>
									<div className="bg-black h-0.5 rounded-sm mb-6" />
									<div className="text-base md:text-lg text-black leading-relaxed whitespace-pre-line">
										{section.content.description}
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="w-full md:w-1/2">
						<div
							ref={stickyRef}
							className="sticky top-8 h-[calc(100vh-4rem)]"
						>
							<div className="relative w-full h-full overflow-y-auto">
								{sections.map((section, sectionIndex) => {
									const isInitiallyVisible = sectionIndex === 0;
									return (
										<div
											key={sectionIndex}
											data-section={sectionIndex}
											className={`absolute inset-0 w-full transition-opacity duration-300 ${
												isInitiallyVisible
													? 'opacity-100 active-media'
													: 'opacity-0 pointer-events-none'
											}`}
										>
											<div className="flex flex-col items-center justify-start py-8 gap-4 h-full overflow-y-auto">
												{section.media.map(
													(item, mediaIndex) => (
														<div
															key={mediaIndex}
															className="relative w-full aspect-video"
														>
															{renderMedia(
																item,
																sectionIndex
															)}
														</div>
													)
												)}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PreProductionDetail;
