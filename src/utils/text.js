export const pors = (num, singular, plural) => (num > 1) ? ((!plural)? `${singular}s`: plural) : singular;
