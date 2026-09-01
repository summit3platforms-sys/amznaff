import { NextRequest, NextResponse } from 'next/server';

// Password-gates the admin dashboard (/admin) and its API routes
// (/api/admin) with standard HTTP Basic Auth. This runs on the Edge
// runtime, so it uses the web-standard atob() rather than Node's Buffer.
// Username is fixed ("admin"); the password comes from ADMIN_PASSWORD.
//
// There is deliberately no fallback password. A literal default committed to
// the repository is not a lock — anyone who can read the source can open the
// dashboard, and the dashboard holds a GitHub token with write access to this
// repo. If ADMIN_PASSWORD is unset, admin is closed to everyone rather than
// open to everyone.

const REALM = 'The Comparison Report Admin';

function unauthorized() {
  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': `Basic realm="${REALM}"` }
  });
}

export function middleware(req: NextRequest) {
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedPassword) {
    return new NextResponse(
      'Admin is disabled: ADMIN_PASSWORD is not set in this environment.',
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    );
  }

  const header = req.headers.get('authorization');

  if (header && header.startsWith('Basic ')) {
    try {
      const decoded = atob(header.slice('Basic '.length));
      const separatorIndex = decoded.indexOf(':');
      const password = separatorIndex >= 0 ? decoded.slice(separatorIndex + 1) : '';
      if (password === expectedPassword) {
        return NextResponse.next();
      }
    } catch {
      // Fall through to unauthorized on malformed header
    }
  }

  return unauthorized();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*']
};
