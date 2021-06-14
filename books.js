const db = require('./db');

const newBook = (req, res) => {
    // const query = `SELECT * FROM users WHERE name = "John"`;
    //const { title, author, published_at, price } = req.body;
   // console.log("title",req.body.title)
    const query =`INSERT INTO books (title, author, published_at, price) VALUES (?, ?, ?, ?)`;
    let arr = ["book10", "authoe 10", 1111-2-1, null]
    db.query(query,arr, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
    });
};


const findAll = (req,res) => {
  const query = `SELECT * FROM books`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log('RESULT: ', result);
    res.json(result)
  });
};


const updateData =(req,res)=>{
  const id=req.params.id
  const query= `UPDATE books
  SET title = ?
  WHERE id = ?`;
  let arr=["hi",id]
  db.query(query,arr,(err, result) => {
    if (err) throw err;
    console.log('RESULT: ', result);
    res.json(result)
  });
};
const deleteData =(req,res)=>{
  const id=req.params.id
  const query= `DELETE FROM books WHERE id = ?`;
  let arr=[id]
  db.query(query,arr,(err, result) => {
    if (err) throw err;
    console.log('RESULT: ', result);
    res.json(result)
  });
};



const ordar =()=>{
  const query= `SELECT * FROM books ORDER BY id DESC`;
  db.query(query,(err, result) => {
    if (err) throw err;
    console.log('RESULT: ', result);
  });
};

//ordar();
console.log("____________________");
const is_null =()=>{
  const query= `SELECT *
  FROM books
  WHERE price IS NULL`;
  db.query(query,(err, result) => {
    if (err) throw err;
    console.log('RESULT: ', result);
  });
};
is_null();

const is_not_null =()=>{
  const query= `SELECT *
  FROM books
  WHERE price IS NOT NULL`;
  db.query(query,(err, result) => {
    if (err) throw err;
    console.log('RESULT: ', result);
  });
};
is_not_null();



module.exports = {
  newBook,
  findAll,
  updateData,
  deleteData,
  ordar
};