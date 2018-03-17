const clientId = ''; // Insert client ID here.
const redirectUri = 'http://localhost:3000/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.

let accessToken = ;

const Spotify = {

  getAccessToken(){
    // situation #1 if already signed in - with unexpired access token
    if(accessToken) {
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

      return accessToken;

    } else {

      // situation #3 - not signed in

      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      // display on users' browsers, the url that contains our clientId, the scope and the redirect uri
      window.location = accessUrl;
    }
  },

}

export default Spotify;
