'use client';

import React, { useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
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

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const ctx = gsap.context(() => {
			const leftColumn = containerRef.current?.querySelector('.sections-column');
			const stickyContainer = stickyRef.current;

			if (!leftColumn || !stickyContainer) return;

			// Set up sticky behavior for the media container
			ScrollTrigger.create({
				trigger: leftColumn,
				start: 'top top',
				end: () => `+=${leftColumn.scrollHeight - window.innerHeight}`,
				pin: stickyContainer,
				pinSpacing: true,
			});

			// Animate sections entering
			sectionRefs.current.forEach((section, index) => {
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

			// Update active media based on scroll position
			sections.forEach((section, index) => {
				if (sectionRefs.current[index] && stickyContainer) {
					ScrollTrigger.create({
						trigger: sectionRefs.current[index]!,
						start: 'top center',
						end: 'bottom center',
						onEnter: () => {
							// Hide all media
							const allMedia = stickyContainer.querySelectorAll('[data-section]');
							allMedia.forEach((media) => {
								gsap.to(media, {
									opacity: 0,
									duration: 0.3,
								});
								media.classList.remove('active-media');
							});

							// Show current section's media
							const mediaElement = stickyContainer.querySelector(
								`[data-section="${index}"]`
							);
							if (mediaElement) {
								gsap.to(mediaElement, {
									opacity: 1,
									duration: 0.3,
								});
								mediaElement.classList.add('active-media');
							}
						},
						onLeaveBack: () => {
							if (index > 0 && stickyContainer) {
								// Hide all media
								const allMedia = stickyContainer.querySelectorAll('[data-section]');
								allMedia.forEach((media) => {
									gsap.to(media, {
										opacity: 0,
										duration: 0.3,
									});
									media.classList.remove('active-media');
								});

								// Show previous section's media
								const prevMediaElement = stickyContainer.querySelector(
									`[data-section="${index - 1}"]`
								);
								if (prevMediaElement) {
									gsap.to(prevMediaElement, {
										opacity: 1,
										duration: 0.3,
									});
									prevMediaElement.classList.add('active-media');
								}
							}
						},
					});
				}
			});
		}, containerRef);

		return () => ctx.revert();
	}, [sections]);

	const renderMedia = (
		item: MediaItem,
		sectionIndex: number,
		mediaIndex: number
	) => {
		const uniqueIndex = sectionIndex * 100 + mediaIndex;
		if (item.type === 'image') {
			return (
				<div
					key={uniqueIndex}
					data-section={sectionIndex}
					className={`absolute inset-0 ${
						sectionIndex === 0 && mediaIndex === 0
							? 'opacity-100 active-media'
							: 'opacity-0'
					}`}
				>
					<Image
						src={item.src as StaticImageData}
						alt={item.alt || `${projectTitle} - Section ${sectionIndex + 1}`}
						fill
						className="object-contain rounded-lg"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>
			);
		} else if (item.type === 'video') {
			return (
				<div
					key={uniqueIndex}
					data-section={sectionIndex}
					className={`absolute inset-0 ${
						sectionIndex === 0 && mediaIndex === 0
							? 'opacity-100 active-media'
							: 'opacity-0'
					}`}
				>
					<iframe
						src={item.src as string}
						width="100%"
						height="100%"
						allow="autoplay; fullscreen; picture-in-picture"
						allowFullScreen
						className="rounded-lg border-0"
					/>
				</div>
			);
		}
		return null;
	};

	return (
		<div ref={containerRef} className="min-h-screen bg-background">
			{/* Header Section */}
			<div className="py-12 md:py-16 w-full">
				<div className="flex flex-col max-w-[64rem] w-full mx-auto px-8 md:px-0">
					{heroImage && (
						<div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
							<Image
								src={heroImage as StaticImageData}
								alt={`${projectTitle} Hero`}
								fill
								className="object-cover"
								sizes="100vw"
								priority
							/>
						</div>
					)}
					<h1 className="text-4xl md:text-6xl font-bold text-center md:text-left mb-4">
						{projectTitle}
					</h1>
					{description && (
						<p className="text-lg md:text-xl text-black leading-relaxed text-center md:text-left">
							{description}
						</p>
					)}
				</div>
			</div>

			{/* Main Content - Two Column Layout */}
			<div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-[64rem] w-full mx-auto px-8 md:px-0 pb-20">
				{/* Left Column - Content Sections */}
				<div className="sections-column w-full md:w-1/2 space-y-32 md:space-y-40">
					{sections.map((section, index) => (
						<div
							key={index}
							ref={(el) => (sectionRefs.current[index] = el)}
							className="min-h-screen flex items-start"
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

				{/* Right Column - Sticky Media Container */}
				<div className="w-full md:w-1/2">
					<div
						ref={stickyRef}
						className="sticky top-8 h-[calc(100vh-4rem)] flex items-start justify-center"
					>
						{/* Transparent container for GSAP pinning - takes full height */}
						<div className="relative w-full h-full flex items-center justify-center py-8">
							{/* Actual media container - centered, contained */}
							<div className="relative w-full max-w-full aspect-video rounded-2xl overflow-hidden bg-gray-50">
								{sections.map((section, sectionIndex) =>
									section.media.map((item, mediaIndex) =>
										renderMedia(item, sectionIndex, mediaIndex)
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PreProductionDetail;

