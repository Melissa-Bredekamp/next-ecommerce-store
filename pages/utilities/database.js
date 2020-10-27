import postgres from 'postgres';
import dotenv from 'dotenv';
import camelcaseKeys from 'camelcase-keys';

dotenv.config();

const sql = postgres({ idle_timeout: 5 });

export async function getAlbums() {
  const albums = await sql`
SELECT * from albums;
`;
  return albums.map(camelcaseKeys);
}

export const albums = [
  {
    id: '1',
    productImage: '/product-images/beastie-boys.png',
    artist: 'Beastie Boys ',
    album: 'License to Ill',
    price: '120 EUR',
  },
  {
    id: '2',
    productImage: '/product-images/bon-jovi.jpeg',
    artist: 'Bon Jovi',
    album: 'New Jersey',
    price: '120 EUR',
  },
  {
    id: '3',
    productImage: '/product-images/iron-maiden.jpg',
    artist: 'Iron Maiden',
    album: 'Somewhere in Time Album',
    price: '120 EUR',
  },
  {
    id: '4',
    productImage: '/product-images/prince.png',
    artist: 'Prince',
    album: 'Purple Rain Album',
    price: '120 EUR',
  },
];
export async function getProductById(id) {
  if (!/^\d+$/.test(id)) return undefined;
}

export function getAlbumById(albumId) {
  return albums.find((album) => album.id === albumId);
}
