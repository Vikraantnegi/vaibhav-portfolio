'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export interface MediaItem {
	type: 'image' | 'video';
	src: StaticImageData | string;
	alt?: string;
	thumbnail?: StaticImageData | string;
	loop?: boolean;
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

// Video component with Intersection Observer for viewport-based playing
const VideoPlayer = ({
	src,
	shouldPlay,
	alt,
	loop = false,
}: {
	src: string;
	shouldPlay: boolean;
	alt?: string;
	loop?: boolean;
}) => {
	const videoRef = useRef<HTMLDivElement>(null);
	const iframeRef = useRef<HTMLIFrameElement>(null);
	const [isInViewport, setIsInViewport] = useState(false);
	const [hasStarted, setHasStarted] = useState(false);

	useEffect(() => {
		if (!videoRef.current || !shouldPlay) {
			if (!shouldPlay) {
				setIsInViewport(false);
				setHasStarted(false);
			}
			return;
		}

		const currentElement = videoRef.current;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasStarted) {
						setIsInViewport(true);
						setHasStarted(true);
					}
				});
			},
			{
				threshold: 0.5,
			}
		);

		observer.observe(currentElement);

		return () => {
			observer.unobserve(currentElement);
		};
	}, [shouldPlay, hasStarted]);

	const getVideoUrl = () => {
		let videoId: string | undefined;

		if (src.includes('player.vimeo.com')) {
			const match = src.match(/\/video\/(\d+)/);
			videoId = match ? match[1] : src.split('/').pop()?.split('?')[0];
		} else if (src.includes('vimeo.com')) {
			videoId = src.split('/').pop()?.split('?')[0];
		} else {
			videoId = src.split('/').pop()?.split('?')[0];
		}

		if (!videoId) {
			return src;
		}

		const params = new URLSearchParams();
		params.set('title', '0');
		params.set('controls', '1');

		if (loop) {
			params.set('loop', '1');
		}

		if (isInViewport && shouldPlay) {
			params.set('autoplay', '1');
			params.set('muted', '1');
		}

		return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
	};

	return (
		<div ref={videoRef} className="relative w-full h-full">
			<iframe
				ref={iframeRef}
				src={getVideoUrl()}
				width="100%"
				height="100%"
				allow="autoplay; fullscreen; picture-in-picture"
				allowFullScreen
				className="border-0 rounded-lg"
				title={alt || 'Video'}
				key={getVideoUrl()}
			/>
		</div>
	);
};

const PreProductionDetail = ({
	projectTitle,
	heroImage,
	description,
	sections,
}: PreProductionDetailProps) => {
	const renderMedia = (
		item: MediaItem,
		sectionIndex: number,
		mediaIndex: number = 0
	) => {
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
			const shouldPlay = mediaIndex === 0;

			return (
				<VideoPlayer
					src={item.src as string}
					shouldPlay={shouldPlay}
					alt={
						item.alt ||
						`${projectTitle} - Section ${sectionIndex + 1}`
					}
					loop={item.loop || false}
				/>
			);
		}
		return null;
	};

	return (
		<div className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
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

			<div className="flex flex-col gap-12 md:gap-24 w-full max-w-[64rem] mx-auto px-4 md:px-0 pb-20">
				{sections.map((section, index) => (
					<div
						key={index}
						className="flex flex-col md:flex-row md:gap-12 md:items-start w-full gap-6"
					>
						<div className="w-full md:w-1/2 shrink-0">
							<h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
								{section.content.title}
							</h2>
							<div className="bg-black h-0.5 rounded-sm mb-6" />
							<div className="text-base md:text-lg text-black leading-relaxed whitespace-pre-line">
								{section.content.description}
							</div>
						</div>

						{section.media.length > 0 && (
							<div className="w-full md:w-1/2 max-w-full">
								{section.media.length === 1 ? (
									<div className="relative w-full max-w-full aspect-video rounded-lg overflow-hidden">
										{renderMedia(section.media[0], index, 0)}
									</div>
								) : (
									<Swiper
										modules={[Pagination]}
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
									>
										{section.media.map((item, mediaIndex) => (
											<SwiperSlide
												key={mediaIndex}
												className="!w-full"
											>
												<div className="relative w-full max-w-full aspect-video rounded-lg overflow-hidden">
													{renderMedia(
														item,
														index,
														mediaIndex
													)}
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
		</div>
	);
};

export default PreProductionDetail;
