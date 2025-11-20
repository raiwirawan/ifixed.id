import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
	title: "iFixed.id - Jasa Service iPhone Profesional di Bali",
	description:
		"Service iPhone cepat, bergaransi & transparan di Bali. Layar, baterai, water damage, motherboard – semua seri iPhone ditangani teknisi berpengalaman.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="id">
			<body className="font-sans antialiased bg-white">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
