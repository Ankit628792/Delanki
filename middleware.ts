import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
    if (req.nextUrl.origin === process.env.nextauth_url) {
        return NextResponse.next();
    }
    else {
        return NextResponse.redirect('https://memetemplatehouse.com/wp-content/uploads/2021/01/chala-ja-bsdk-meme-template.jpg')
    }
}

