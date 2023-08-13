import config from "./config.js";

export const pors = (num, singular, plural) => (num > 1) ? ((!plural)? `${singular}s`: plural) : singular;

export const cap = word => word.charAt(0).toUpperCase() + word.slice(1);

export const capitalize = sentence => ((sentence.split(' ')).map(word => cap(word))).join(' ');

export const mainAPI = path => config.api.url+path;

export const rating = rating => {
  let text;
  if (rating > 0 && rating <= 2) { text = 'Not bad'; }
  else if (rating >= 2 && rating < 4) { text = 'Good'; }
  else if (rating >= 4 && rating < 6) { text = 'Great'; }
  else if (rating >= 6 && rating < 8) { text = 'Excellent'; }
  else { text = 'Awesome'; }
  return text;
}