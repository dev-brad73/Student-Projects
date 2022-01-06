const fs = require("fs");
const { resolve } = require("path");
const Pool = require("pg").Pool;
const pool = new Pool();
const rare_book = require("./files/rare.json");

module.exports.getBooksById = (req, res) => {
  return new Promise((resolve, reject) => {
    let bookID = req.params.id;

    var SQL = `SELECT "Book_Information".author_id \
	, CONCAT(author_first_name, ' ', author_last_name) as full_name \
	, CONCAT(owner_first_name, ' ', owner_last_name) as "owner_full_name" \
  , "Book_Information".owner_id \
	, book_title \
	, edition_num \
	, book_id \
	, publisher_name \
  , "Book_Information".publisher_id \
	, book_genre \
	, "book_ISBN" \
	, serial_num \
	, book_condition \
	, book_rarity \
	FROM public."Book_Information" \
  INNER JOIN "Authors" ON "Book_Information".author_id = "Authors".author_id \
  INNER JOIN "Owners" ON "Book_Information".owner_id = "Owners".owner_id \
  INNER JOIN "Publisher" ON "Book_Information".publisher_id = "Publisher".publisher_id \
  WHERE book_id = $1 \
  ORDER BY book_id`;

    pool.query(SQL, [bookID], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({
        status: "success",
        data: {
          books: results.rows[0],
        },
      });
    });

    resolve();
  });
};

module.exports.getAllBooks = (req, res) => {
  return new Promise((resolve, reject) => {
    var SQL = `SELECT "Book_Information".author_id \
	, CONCAT(author_first_name, ' ', author_last_name) as full_name \
	, CONCAT(owner_first_name, ' ', owner_last_name) as "owner_full_name" \
  , "Book_Information".owner_id \
	, book_title \
	, edition_num \
	, book_id \
	, publisher_name \
  , "Book_Information".publisher_id \
	, book_genre \
	, "book_ISBN" \
	, serial_num \
	, book_condition \
	, book_rarity \
	FROM public."Book_Information" \
  INNER JOIN "Authors" ON "Book_Information".author_id = "Authors".author_id \
  INNER JOIN "Owners" ON "Book_Information".owner_id = "Owners".owner_id \
  INNER JOIN "Publisher" ON "Book_Information".publisher_id = "Publisher".publisher_id \
  ORDER BY book_id`;

    pool.query(SQL, (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({
        status: "success",
        data: {
          books: results.rows,
        },
      });
    });

    resolve();
  });
};

module.exports.getBookByRarity = (req, res) => {
  return new Promise((resolve, reject) => {
    let rarity = req.params.book_rarity;

    var SQL = `SELECT "Book_Information".author_id \
    , CONCAT(author_first_name, ' ', author_last_name) as full_name \
    , CONCAT(owner_first_name, ' ', owner_last_name) as "owner_full_name" \
    , book_title \
    , edition_num \
    , book_id \
    , publisher_name \
    , book_genre \
    , "book_ISBN" \
    , serial_num \
    , book_condition \
    , book_rarity \
    FROM public."Book_Information" \
    INNER JOIN "Authors" ON "Book_Information".author_id = "Authors".author_id \
    INNER JOIN "Owners" ON "Book_Information".owner_id = "Owners".owner_id \
    INNER JOIN "Publisher" ON "Book_Information".publisher_id = "Publisher".publisher_id \
    WHERE book_rarity = $1 \
    ORDER BY book_id`;

    pool.query(SQL, [rarity], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({
        status: "success",
        data: {
          books: results.rows,
        },
      });
    });
    resolve();
  });
};

module.exports.getBookByTitle = (req, res) => {
  return new Promise((resolve, reject) => {
    const title = req.params.book_title;

    var SQL = `SELECT "Book_Information".author_id \
	, CONCAT(author_first_name, ' ', author_last_name) as full_name \
	, CONCAT(owner_first_name, ' ', owner_last_name) as "owner_full_name" \
	, book_title \
	, edition_num \
	, book_id \
	, publisher_name \
	, book_genre \
	, "book_ISBN" \
	, serial_num \
	, book_condition \
	, book_rarity \
	FROM public."Book_Information" \
  INNER JOIN "Authors" ON "Book_Information".author_id = "Authors".author_id \
  INNER JOIN "Owners" ON "Book_Information".owner_id = "Owners".owner_id \
  INNER JOIN "Publisher" ON "Book_Information".publisher_id = "Publisher".publisher_id \
  WHERE book_title = $1 \
  ORDER BY book_title`;

    pool.query(SQL, [title], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({
        status: "success",
        data: {
          books: results.rows,
        },
      });
    });
    resolve();
  });
};

module.exports.getBookByISBN = (req, res) => {
  return new Promise((resolve, reject) => {
    const isbn = req.params.book_ISBN;

    var SQL = `SELECT "Book_Information".author_id \
	, CONCAT(author_first_name, ' ', author_last_name) as full_name \
	, CONCAT(owner_first_name, ' ', owner_last_name) as "owner_full_name" \
	, book_title \
	, edition_num \
	, book_id \
	, publisher_name \
	, book_genre \
	, "book_ISBN" \
	, serial_num \
	, book_condition \
	, book_rarity \
	FROM public."Book_Information" \
  INNER JOIN "Authors" ON "Book_Information".author_id = "Authors".author_id \
  INNER JOIN "Owners" ON "Book_Information".owner_id = "Owners".owner_id \
  INNER JOIN "Publisher" ON "Book_Information".publisher_id = "Publisher".publisher_id \
  WHERE "book_ISBN" = $1 \
  ORDER BY "book_ISBN"`;

    pool.query(SQL, [isbn], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({
        status: "success",
        data: {
          books: results.rows,
        },
      });
    });
    resolve();
  });
};

module.exports.getBookByGenre = (req, res) => {
  return new Promise((resolve, reject) => {
    const genre = req.params.book_genre;

    var SQL = `SELECT "Book_Information".author_id \
	, CONCAT(author_first_name, ' ', author_last_name) as full_name \
	, CONCAT(owner_first_name, ' ', owner_last_name) as "owner_full_name" \
	, book_title \
	, edition_num \
	, book_id \
	, publisher_name \
	, book_genre \
	, "book_ISBN" \
	, serial_num \
	, book_condition \
	, book_rarity \
	FROM public."Book_Information" \
  INNER JOIN "Authors" ON "Book_Information".author_id = "Authors".author_id \
  INNER JOIN "Owners" ON "Book_Information".owner_id = "Owners".owner_id \
  INNER JOIN "Publisher" ON "Book_Information".publisher_id = "Publisher".publisher_id \
  WHERE book_genre = $1 \
  ORDER BY book_genre`;

    pool.query(SQL, [genre], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({
        status: "success",
        data: {
          books: results.rows,
        },
      });
    });
    resolve();
  });
};

module.exports.getBookByAuthor = (req, res) => {
  return new Promise((resolve, reject) => {
    const authorFname = req.params.full_name;

    var SQL = `SELECT "Book_Information".author_id \
	, CONCAT("Authors".author_first_name || ' ' || "Authors".author_last_name) as full_name \
	, CONCAT(owner_first_name, ' ', owner_last_name) as "owner_full_name" \
	, book_title \
	, edition_num \
	, book_id \
	, publisher_name \
	, book_genre \
	, "book_ISBN" \
	, serial_num \
	, book_condition \
	, book_rarity \
	FROM public."Book_Information" \
  INNER JOIN "Authors" ON "Book_Information".author_id = "Authors".author_id \
  INNER JOIN "Owners" ON "Book_Information".owner_id = "Owners".owner_id \
  INNER JOIN "Publisher" ON "Book_Information".publisher_id = "Publisher".publisher_id \
  WHERE CONCAT("Authors".author_first_name || ' ' || "Authors".author_last_name) = $1 \
  ORDER BY book_id`;

    pool.query(SQL, [authorFname], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({
        status: "success",
        data: {
          books: results.rows,
        },
      });
    });
    resolve();
  });
};

module.exports.addBook = (req, res) => {
  return new Promise((resolve, reject) => {
    class Node {
      constructor(element) {
        this.element = element;
        this.next = undefined;
      }
    }

    class LinkedList {
      constructor(equalsFn = this.defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
      }

      defaultEquals(a, b) {
        return a === b;
      }

      insertFirst(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
          this.head = node;
        } else {
          current = this.head;
          while (current.next != null) {
            current = current.next;
          }
          current.next = node;
        }
        this.count++;
      }

      search(input) {
        let current = this.head;
        while (current != null) {
          if (current.element.Title == input) return current.element; // data found
          current = current.next;
        }
        return false; // data not found
      }
    }

    const addLink = new LinkedList();

    rare_book.forEach((book) => {
      addLink.insertFirst(book);
    });

    var search = addLink.search(`${req.body.book_title}`);
    if (search.Title === req.body.book_title) {
      var book_rarity = search.Rarity;
    } else {
      var book_rarity = "Uncommon";
    }

    var SQL = `INSERT INTO public."Book_Information"( \
	  owner_id \
	, book_title \
	, edition_num \
	, author_id \
	, publisher_id \
	, book_genre \
	, "book_ISBN" \
	, serial_num \
	, book_condition \
	, book_rarity) \
	VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) \
  returning *;`;

    pool.query(
      SQL,
      [
        req.body.owner_id,
        req.body.book_title,
        req.body.edition_num,
        req.body.author_id,
        req.body.publisher_id,
        req.body.book_genre,
        req.body.book_ISBN,
        req.body.serial_num,
        req.body.book_condition,
        book_rarity,
      ],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).json({
          status: "success",
          data: {
            books: results.rows[0],
          },
        });
      }
    );
    resolve();
  });
};

module.exports.updateBook = (req, res) => {
  return new Promise((resolve, reject) => {
    var SQL = `UPDATE public."Book_Information" \
    SET book_id = $1 \
    , owner_id = $2 \
    , book_title = $3 \
    , edition_num = $4 \
    , author_id = $5 \
    , publisher_id = $6 \
    , book_genre = $7 \
    , "book_ISBN" = $8 \
    , serial_num = $9 \
    , book_condition = $10 \
    , book_rarity = $11 \
    WHERE book_id = $1`;

    pool.query(
      SQL,
      [
        req.body.book_id,
        req.body.owner_id,
        req.body.book_title,
        req.body.edition_num,
        req.body.author_id,
        req.body.publisher_id,
        req.body.book_genre,
        req.body.book_ISBN,
        req.body.serial_num,
        req.body.book_condition,
        req.body.book_rarity,
      ],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json({
          status: "success",
          data: {
            books: results.rows[0],
          },
        });
      }
    );
    resolve();
  });
};

module.exports.deleteBook = (req, res) => {
  return new Promise((resolve, reject) => {
    const delete_book = req.params.id;

    var SQL = `DELETE FROM public."Book_Information" \
    WHERE book_id = $1;`;

    pool.query(SQL, [delete_book], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(204).json({
        status: "success",
      });
    });
    resolve();
  });
};
