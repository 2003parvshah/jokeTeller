// const button = document.getElementById('button');
// const audioElement = document.getElementById('audio');

// // Disable/Enable Button
// function toggleButton() {
//   button.disabled = !button.disabled;
// }

// // VoiceRSS Speech Function
// function tellMe(joke) {
//   const jokeString = joke.trim().replace(/ /g, '%20');
//   // VoiceRSS Speech Parameters
//   VoiceRSS.speech({
//     key: 'YOUR_API_KEY_HERE',
//     src: jokeString,
//     hl: 'en-us',
//     r: 0,
//     c: 'mp3',
//     f: '44khz_16bit_stereo',
//     ssml: false,
//   });
// }

// // Get jokes from Joke API
// async function getJokes() {
//   let joke = '';
//   const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist';
//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     // Assign One or Two Part Joke
//     if (data.setup) {
//       joke = `${data.setup} ... ${data.delivery}`;
//     } else {
//       joke = data.joke;
//     }
//     // Passing Joke to VoiceRSS API
//     tellMe(joke);
//     // Disable Button
//     toggleButton();
//   } catch (error) {
//     // Catch Error Here
//   }
// }

// // Event Listeners
// button.addEventListener('click', getJokes);
// audioElement.addEventListener('ended', toggleButton);



const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
}

// VoiceRSS Speech Function
function tellMe(joke) {
  const jokeString = joke.trim().replace(/ /g, '%20');
  // VoiceRSS Speech Parameters
  VoiceRSS.speech({
    // Normally, don't write out API Keys like this, but an exception made here because it's free.
    key: 'e985f868e96c46d9b0789c3855350152',
    src: jokeString,
    hl: 'hi-in',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

// Get jokes from Joke API
async function getJokes() {
  let joke = '';
  // https://v2.jokeapi.dev/joke/Programming,Dark
  // const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,racist,sexist';
  const apiUrl = 'https://hindi-jokes-api.onrender.com/jokes?api_key=2d98ae6465da6a38fd6bb25229ba';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Assign One or Two Part Joke
    // if (data.setup) {
    //   joke = `${data.setup} ... ${data.delivery}`;
    // } else 
    {
      joke = data.jokeContent;
    }
    // Passing Joke to VoiceRSS API
    tellMe(joke);
    // Disable Button
    toggleButton();
  } catch (error) {
    // Catch Error Here
  }
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
