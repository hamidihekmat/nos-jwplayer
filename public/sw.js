async function customHeaderRequestFetch(e) {
  const t = `https://www.googleapis.com/drive/v3/files/${new URL(
      e.request.url
    ).pathname.substring(1)}?alt=media`,
    s = await getToken(),
    a = atob(s),
    n = new Request(t, {
      headers: {
        range: e.request.headers.get('range'),
        Authorization:
          'Bearer ' +
          'ya29.a0AfH6SMB90DYJ1oNNMtRtrAe1kX1BP-q14RECI9tDJpWGavkc9gHwlilFrWEwc-xPc1K-4ljiYL4TCpZPxM6LuzuLXK7rrEnO4SxXyEEOCN_AIIXbXaUPIV9x-6INkMVxmUxbh8ZLwNven3wWW_sn09vklwtnhtU',
      },
    });
  return fetch(n);
}
async function getToken() {
  const e = await fetch('https://token.noss.workers.dev/');
  return await e.text();
}
self.addEventListener('install', (e) => {
  self.skipWaiting();
}),
  self.addEventListener('fetch', (e) => {
    e.request.headers.has('range') &&
      e.respondWith(customHeaderRequestFetch(e));
  });
