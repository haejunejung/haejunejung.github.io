import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const url = request.nextUrl;

	if (url.pathname === "/") {
		url.pathname = "/home";
		return NextResponse.rewrite(url);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/"],
};
