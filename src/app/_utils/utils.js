export const searchLocation = async (event, router) => {
  event.preventDefault();

  const isNumeric = /\p{N}+/u;
  const isSpecial = /[\p{P}\p{S}_]/u;

  const formData = new FormData(event.target);
  const location = formData.get('location');

  const words = location.split(' ');

  const isValidLocation = words.every((word) => {
    return word !== '' && !isNumeric.test(word) && !isSpecial.test(word);
  });

  if (isValidLocation) {
    router.push(`${location}`);
  } else {
    alert('Please be sure to enter valid location.');
  }
};
