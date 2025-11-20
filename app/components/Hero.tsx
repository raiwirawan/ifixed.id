// components/Hero.tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
	const [offsetY, setOffsetY] = useState(0);

	const handleScroll = () => setOffsetY(window.scrollY);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
			{/* Parallax Background */}
			<div
				className="absolute inset-0 -z-10"
				style={{
					transform: `translateY(${offsetY * 0.5}px)`, // Parallax speed 50%
				}}
			>
				<Image
					src="/images/hero-parallax.webp" // atau .jpg
					alt="Service iPhone Profesional di Bali - iFixed.id"
					fill
					priority
					quality={85}
					className="object-cover object-center"
					sizes="100vw"
				/>
				{/* Dark Overlay agar teks tetap terbaca */}
				<div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 text-center text-white relative z-10">
				<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
					Jasa Perbaikan iPhone <br />
					<span className="text-yellow-400">Profesional di Bali</span>
				</h1>
				<p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
					Cepat, Andal, dan Bergaransi! Kembalikan performa optimal iPhone
					kesayangan Anda.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<a
						href="https://wa.me/6281234567890"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-3 shadow-2xl"
					>
						<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.6.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.584.597-3.65-.215-.361a9.865 9.865 0 01-1.32-5.015 9.92 9.92 0 0117.507-6.373c2.291 2.472 2.748 6.013 1.353 9.002a9.854 9.854 0 01-8.785 6.105z" />
						</svg>
						Tanyakan Sekarang via WhatsApp
					</a>

					<a
						href="#layanan"
						className="text-white border-2 border-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-primary transition text-lg"
					>
						Lihat Layanan Kami
					</a>
				</div>

				<p className="mt-12 text-sm opacity-80">
					Solusi perbaikan terpercaya yang berbasis lokal di Bali
				</p>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
				<svg
					className="w-8 h-8 text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</section>
	);
}
