import greekSaladURL from '../Assets/greek salad.jpg';
import bruchettaURL from '../Assets/bruchetta.jpg';
import lemonDessertURL from '../Assets/lemon dessert.jpg';
import reviewer1URL from '../Assets/Reviewer1.jpg';
import reviewer2URL from '../Assets/Reviewer2.jpg';
import reviewer3URL from '../Assets/Reviewer3.jpg';
import reviewer4URL from '../Assets/Reviewer4.jpg';
import adrianImgURL from '../Assets/Adrian.jpg';
import marioImgURL from '../Assets/Mario.jpg';

export const navItems = [
  'Home',
  'About',
  'Menu',
  'Reservations',
  'Order Online',
  'Login',
];

export const specialsData = [
  {
    id: 1,
    title: 'Greek Salad',
    price: 12.99,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
    imgURL: greekSaladURL,
  },
  {
    id: 2,
    title: 'Bruchetta',
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    imgURL: bruchettaURL,
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: 5.0,
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    imgURL: lemonDessertURL,
  },
];

export const reviewers = [
  {
    id: 1,
    name: 'Tim',
    review: `The food here is amazing, and the service is top-notch!`,
    avatarURL: reviewer1URL,
  },
  {
    id: 2,
    name: 'Anna',
    review: `Authentic flavors and a friendly staff. A must-visit!`,
    avatarURL: reviewer2URL,
  },
  {
    id: 3,
    name: 'Steve',
    review: `Perfect for events. Delicious food and great service.`,
    avatarURL: reviewer3URL,
  },
  {
    id: 4,
    name: 'Sarah',
    review: `Hidden gem with fantastic Mediterranean dishes!`,
    avatarURL: reviewer4URL,
  },
];

export const aboutUsData = {
  adrianImgURL: adrianImgURL,
  marioImgURL: marioImgURL,
  description: `Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.`,
};
