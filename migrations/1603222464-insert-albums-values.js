exports.up = async (sql) => {
  await sql`
	INSERT INTO albums (artist, album, year, product_image,
 price, alt) VALUES
	('Beastie Boys', 'License to Ill', 1986, '/product-images/beastie-boys.png', 120, 'License to Ill Album'),
	('Bon Jovi', 'New Jersey', 1988, '/product-images/bon-jovi.jpeg', 120  , 'New Jersey Album'),
  ('Iron Maiden', 'Somewhere in Time', 1986, '/product-images/iron-maiden.jpg', 120, 'Somewhere in Time Album'),
  ('Prince', 'Purple Rain', 1984, '/product-images/prince.png', 120, 'Purple Rain'),
  ('Public Enemy', 'It takes a nation of millions...' , 1988, '/product-images/public-enemy.jpg', 120, 'Public Enenmy Album'),
  ('Guns n Roses', 'Appetite for Destruction', 1987, '/product-images/guns-n-roses.jpg', 120, 'Appetite for Destruction Album'),
  ('David Bowie', 'Scary Monster', 1980, '/product-images/david-bowie.jpg', 120, 'Scary Monster Album'),
  ('Bruce Sprinsteen', 'Born in the USA', 1984, '/product-images/bruce-springsteen.jpg', 120, 'Born in the USA Album'),
  ('Salt n Pepa', 'Hot, Cool and Vicious', 1986, '/product-images/salt-and-pepa.png', 120, 'Hot, Cool and Vicious Album'),
 ('Guardians of the Galaxy', 'Awesome Mix Volume 1 Album', 1980, '/product-images/guardians-of-the-galaxy.jpg', 120, 'Awesome Mix Volume 1 Album'),
 ('ACDC', 'Back in Black', 1980, '/product-images/acdc.jpeg', 120, 'Back in Black Album'),
 ('Dirty Dancing', 'Dirty Dancing', 1987, '/product-images/dirty-dancing.jpg', 120, 'Dirty Dancing Album'),
 ('Madonna', 'Like a Virgin', 1984, '/product-images/madonna.png', 120, 'Like a Virgin Album'),
 ('Pet Shop Boys', 'Please', 1986, '/product-images/pet-shop-boys.jpg', 120, 'Please Album'),
 ('Queen', 'The Works', 1984, '/product-images/queen.jpg', 120, 'The Works Album'),
 ('Sade', 'Promise', 1985, '/product-images/sade.jpg', 120, 'Promise Album'),
 ('Whitney Houston', 'Whitney', 1987, '/product-images/whitney-houston.png', 120, 'Whitney Album'),
 ('Pink Floyd', 'Prism', 1987, '/product-images/pink-floyd.jpeg', 120, 'Prism Album'),
 ('Bob Marley', 'Legend: The Best of Bob Marley', 1984, '/product-images/bob-marley.jpg', 120, 'Legend: The Best of Bob Marley Album'),
 ('Paul Simon', 'Graceland', 1985, '/product-images/paul-simon.jpg', 120, 'Graceland Album'),
 ('Depeche Mode', 'Music of Masters', 1987, '/product-images/depeche-mode.jpg', 120, 'Music of Masters Album'),
 ('Lionel Richie', 'Dancing on the Ceiling', 1986, '/product-images/lionel-richie.jpg', 120, 'Dancing on the Ceiling Album'),
 ('Michael Jackson', 'Thriller', 1982, '/product-images/michael-jackson.png', 120, 'Thriller Album'),
 ('Nirvana', 'Bleach', 1989, '/product-images/nirvana.jpg', 120, 'Bleach Album'),
 ('Run DMC', 'Raising Hell', 1986, '/product-images/run-dmc.jpg', 120, 'Raising Hell Album'),
 ('Tracy Chapman', 'Tracy Chapman', 1988, '/product-images/tracy-chapman.png', 120, 'Tracy Chapman Album'),
 ('Wham', 'Make it Baig', 1984, '/product-images/wham.jpeg', 120, 'Wham Album');
		 `;
};

exports.down = async (sql) => {
  await sql`
	DELETE FROM albums
 `;
};
