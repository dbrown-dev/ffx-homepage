const myHeaders = new Headers({
  'Accept-Version': 'v1',
  Authorization: 'Client-ID '
});

const myRequest = new Request('https://api.unsplash.com/photos/random?orientation=landscape', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
});

fetch(myRequest)
  .then(r => r.json())
  .then(j => {
    document.body.style.backgroundImage = `url('${j.urls.regular}')`;
    document.body.style.backgroundSize = 'cover';
  });
