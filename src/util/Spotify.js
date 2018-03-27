const clientId = '28f62eac59e64a4397138f9a08ed77ea'; // Insert client ID here.
const redirectUri = window.location.href; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.

let accessToken;

const Spotify = {

  getAccessToken(){
    // situation #1 if already signed in - with unexpired access token
    if(accessToken) {
      console.log('accessToken saved:', accessToken)
      return accessToken;
    }

    // situation #2 - signed in to Spotify and accessToken is already sent through a redirect URL by Spotify

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if(accessTokenMatch && expiresInMatch) {
      // regex returns an array, the string at index 0 is the whole string containing access_token string or expires_in string
      // the second string at index 1 is the token itself
      accessToken = accessTokenMatch[1];
      const expirationTime = Number(expiresInMatch[1]);

      // when the expiration time comes, an arrow function fires that reassigns an empty string to accessToken global variable
      window.setTimeout(() => accessToken = '', expirationTime * 1000);
      // and clear the URL so it won't contain the old access token and expiration time
      window.history.pushState('Access Token', null, '/');

      console.log('returned from oauth')
      return accessToken;

    } else {

      console.log('redirecting to spotify login')
      // situation #3 - not signed in

      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      // display on users' browsers, the url that contains our clientId, the scope and the redirect uri
      window.location = accessUrl;
    }
  },

  search(term){
    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    const trackURL = `https://api.spotify.com/v1/search?type=track&q=${term}`;

    return fetch(trackURL, {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },

  savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      // take just the user ID returned by Spotify
      userId = jsonResponse.id;

      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name}) // sending the name of the playlist with a key 'name'
      }).then(response => response.json()
      ).then(jsonResponse => {
        // got a playlist id for the new playlist that was just created from spotify
        const playlistId = jsonResponse.id;

        // ready to send the tracks to spotify for the stored playlist
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        });
      });
    });
  }

}

export default Spotify;
