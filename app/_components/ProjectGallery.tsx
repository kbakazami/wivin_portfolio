"use client";
import { useKeenSlider } from 'keen-slider/react'
import ThumbnailPlugin from "@/app/_utils/ThumbnailPlugin";


export default function ProjectGallery({ images }: { images: string[] }) {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        loop: true,
    });

    const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            slides: {
                perView: Math.min(images.length, 5),
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    );

    return (
        <div className="mb-8">
            <div ref={sliderRef} className="keen-slider mb-4 rounded overflow-hidden">
                {images.map((url, index) => (
                    <div className="keen-slider__slide" key={index}>
                        <img
                            src={url}
                            alt={`Image ${index + 1}`}
                            className="w-full h-96 object-contain"
                        />
                    </div>
                ))}
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail">
                {images.map((url, index) => (
                    <div className="keen-slider__slide" key={index}>
                        <img
                            src={url}
                            alt={`Miniature ${index + 1}`}
                            className="w-full h-24 object-cover rounded cursor-pointer"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}