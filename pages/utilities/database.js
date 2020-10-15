export const products = [
  {
    id: '1',
    img: '/product-images/beastie-boys.png',
    artist: 'Beastie Boys ',
    album: 'License to Ill',
    price: '120 EUR',
  },
  {
    id: '2',
    img: '/product-images/bon-jovi.jpeg',
    artist: 'Bon Jovi',
    album: 'New Jersey',
    price: '120 EUR',
  },
];
export async function getUserById(id) {
  if (!/^\d+$/.test(id)) return undefined;
}
