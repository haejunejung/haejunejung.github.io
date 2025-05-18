import Link from "next/link";

export default function RootNotFound() {
	return (
		<section className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center w-full h-full gap-4">
			<h1 className="text-4xl font-bold">404</h1>
			<h2 className="text-2xl">페이지를 찾을 수 없습니다.</h2>
			<Link href="/" className="text-blue-500 underline">
				홈으로 돌아가기
			</Link>
		</section>
	);
}
