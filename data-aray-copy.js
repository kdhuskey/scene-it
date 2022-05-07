var movieData = [
	{
		Title: "The Dark Knight",
		Year: "2008",
		imdbID: "tt0468569",
		Type: "movie",
		About:"With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
		Rated: "PG-13"
	},
	{
		Title: "The Dark Knight Rises",
		Year: "2012",
		imdbID: "tt1345836",
		Type: "movie",
		About: "It has been eight years since Batman (Christian Bale), in collusion with Commissioner Gordon (Gary Oldman), vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar (Anne Hathaway) and a merciless terrorist named Bane (Tom Hardy) force Batman out of exile and into a battle he may not be able to win.",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
		Rated: "pg-13"

	},
	{
		Title: "Thor: The Dark World",
		Year: "2013",
		imdbID: "tt1981115",
		Type: "movie",
		About: "In ancient times, the gods of Asgard fought and won a war against an evil race known as the Dark Elves. The survivors were neutralized, and their ultimate weapon -- the Aether -- was buried in a secret location. Hundreds of years later, Jane Foster (Natalie Portman) finds the Aether and becomes its host, forcing Thor (Chris Hemsworth) to bring her to Asgard before Dark Elf Malekith (Christopher Eccleston) captures her and uses the weapon to destroy the Nine Realms -- including Earth.",
		Poster:
			"https://ia.media-imdb.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg",
		Rated: "pg-13"

	},
	{
		Title: "Transformers: Dark of the Moon",
		Year: "2011",
		imdbID: "tt1399103",
		Type: "movie",
		About: "Sam Witwicky (Shia LaBeouf) and his new girlfriend, Carly (Rosie Huntington-Whiteley), join the fray when the evil Decepticons renew their longstanding war against the Autobots. Optimus Prime (Peter Cullen) believes that resurrecting ancient Transformer Sentinel Prime (Leonard Nimoy), once the leader of the Autobots, may lead to victory. That decision, however, has devastating consequences; the war appears to tip in favor of the Decepticons, leading to a climactic battle in Chicago.",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg",
		Rated: "pg-13"

	},
	{
		Title: "Zero Dark Thirty",
		Year: "2012",
		imdbID: "tt1790885",
		Type: "movie",
		About: "Following the terrorist attacks of Sept. 11, 2001, Osama bin Laden becomes one of the most-wanted men on the planet. The worldwide manhunt for the terrorist leader occupies the resources and attention of two U.S. presidential administrations. Ultimately, it is the work of a dedicated female operative (Jessica Chastain) that proves instrumental in finally locating bin Laden. In May 2011, Navy SEALs launch a nighttime strike, killing bin Laden in his compound in Abbottabad, Pakistan.",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4OTUyNzcwN15BMl5BanBnXkFtZTcwMTQ1NDE3OA@@._V1_SX300.jpg",
		Rated: "pg-13"

	},
	{
		Title: "Dark Shadows",
		Year: "2012",
		imdbID: "tt1077368",
		Type: "movie",
		About: "In 18th-century Maine, Barnabas Collins (Johnny Depp) presides over the town of Collinsport. A rich and powerful playboy, Barnabas seals his own doom when he breaks the heart of a witch named Angelique (Eva Green). Angelique turns Barnabas into a vampire and buries him alive. Two centuries later, Barnabas escapes from his tomb and finds 1972 Collinsport a very different place. His once-grand estate has fallen into ruin, and the dysfunctional remnants of his family have fared little better.",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjc0NzAyMzI1MF5BMl5BanBnXkFtZTcwMTE0NDQ1Nw@@._V1_SX300.jpg",
			Rated: "pg-13"

	},
	{
		Title: "Dark City",
		Year: "1998",
		imdbID: "tt0118929",
		Type: "movie",
		About: "John Murdoch (Rufus Sewell) awakens alone in a strange hotel to find that he is wanted for a series of brutal murders. The problem is that he can't remember whether he committed the murders or not. For one brief moment, he is convinced that he has gone completely mad. Murdoch seeks to unravel the twisted riddle of his identity. As he edges closer to solving the mystery, he stumbles upon a fiendish underworld controlled by a group of ominous beings collectively known as the Strangers.",
		Poster:
			"https://ia.media-imdb.com/images/M/MV5BMGExOGExM2UtNWM5ZS00OWEzLTllNzYtM2NlMTJlYjBlZTJkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		Rated: "pg-13"

	},
	{
		Title: "Dancer in the Dark",
		Year: "2000",
		imdbID: "tt0168629",
		Type: "movie",
		About: "Selma is a Czech immigrant, a single mother working in a factory in rural America. Her salvation is passion for music, specifically, the all-singing, all-dancing numbers found in classic Hollywood musicals. Selma harbors a sad secret: she is losing her eyesight and her son Gene stands to suffer the same fate if she can't put away enough money to secure him an operation. When a desperate neighbor falsely accuses Selma of stealing his savings, the drama of her life escalates to a tragic finale.",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BNDVkYWMxNWEtNjc2MC00OGI5LWI3NmUtYWUwNDQyOTc3YmY5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		Rated: "pg-13"

	},
	{
		Title: "The Dark Tower",
		Year: "2017",
		imdbID: "tt1648190",
		Type: "movie",
		About: "Roland Deschain (Idris Elba), the last Gunslinger, is locked in an eternal battle with Walter O'Dim (Matthew McConaughey), also known as the Man in Black. The Gunslinger must prevent the Man in Black from toppling the Dark Tower, the key that holds the universe together. With the fate of worlds at stake, two men collide in the ultimate battle between good and evil.",
		Poster:
			"https://ia.media-imdb.com/images/M/MV5BMTU3MjUwMzQ3MF5BMl5BanBnXkFtZTgwMjcwNjkxMjI@._V1_SX300.jpg",
		Rated: "pg-13"

	},
	{
		Title: "Dark Skies",
		Year: "2013",
		imdbID: "tt2387433",
		Type: "movie",
		About: "Lacy (Keri Russell) and Daniel Barrett (Josh Hamilton) share a peaceful life in the suburbs with their sons, Jesse (Dakota Goyo) and Sam (Kadan Rockett). However, that peace soon shatters with a series of disturbing events that escalate. When it becomes clear that their family is being targeted by an unimaginably terrifying, deadly -- and possibly alien -- threat, Daniel and Lacy draw on their courage and determination to protect their family and identify what is after them.",
		Poster:
			"https://ia.media-imdb.com/images/M/MV5BMTcxNDE1OTgyOF5BMl5BanBnXkFtZTcwMTEyMzMxOQ@@._V1_SX300.jpg",
		Rated: "pg-13"

	}
];
