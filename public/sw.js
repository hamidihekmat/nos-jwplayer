async function customHeaderRequestFetch(e) {
  const t = `https://www.googleapis.com/drive/v3/files/${new URL(
      e.request.url
    ).pathname.substring(1)}?alt=media`,
    s = await getToken(),
    a = atob(s),
    n = new Request(t, {
      headers: {
        range: e.request.headers.get('range'),
        Authorization: 'Bearer ' + a,
      },
    });
  fetch(n).then((res) => {
    return res.arrayBuffer();
  }).then((arrayBuffe) => {
      const bytes = /^bytes\=(\d+)\-(\d+)?$/g.exec(
        request.headers.get('range')
      );
      if (bytes) {
        const start = Number(bytes[1]);
        const end = Number(bytes[2]) || arrayBuffer.byteLength - 1;
        return new Response(arrayBuffer.slice(start, end + 1), {
          status: 206,
          statusText: 'Partial Content',
          headers: [
            ['Content-Range', `bytes ${start}-${end}/${arrayBuffer.byteLength}`]
          ]
        });
      } else {
        return new Response(null, {
          status: 416,
          statusText: 'Range Not Satisfiable',
          headers: [['Content-Range', `*/${arrayBuffer.byteLength}`]]
        });
      }
  });
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
