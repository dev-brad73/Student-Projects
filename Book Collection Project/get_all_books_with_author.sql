SELECT "Book Information".author_id
	, author_first_name
	, author_last_name
	, owner_id
	, book_title
	, edition_num
	, book_id
	, publisher_id
	, book_genre
	, "ISBN"
	, serial_num
	, book_condition
	, book_rarity
	
FROM public."Book Information"
INNER JOIN "Authors" ON "Book Information".author_id = "Authors".author_id
ORDER BY author_id;