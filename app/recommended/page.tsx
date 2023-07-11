import { title } from "@/components/primitives";

export default function RecommendedPage() {
	return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center">
				<h1 className={title()}>Recommended&nbsp;</h1>
				<h1 className={title({color: 'blue'})}>For YOU&nbsp;</h1>
			</div>
		</section>
	);
}