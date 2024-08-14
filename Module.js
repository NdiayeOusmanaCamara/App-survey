// Module.js
const con = require('./db');

async function addLoan(book_id, member_id, loan_date, return_date) {
  try {
    const [result] = await con.query('INSERT INTO loans (book_id, member_id, loan_date, return_date) VALUES (?, ?, ?, ?)', [book_id, member_id, loan_date, return_date]);
    console.log('Loan added with ID:', result.insertId);
  } catch (err) {
    console.error('Error adding loan:', err);
  }
}

async function listLoans() {
  try {
    const [rows] = await con.query('SELECT * FROM loans');
    console.table(rows);
  } catch (err) {
    console.error('Error listing loans:', err);
  }
}

async function updateLoan(id, book_id, member_id, loan_date, return_date) {
  try {
    await con.query('UPDATE loans SET book_id = ?, member_id = ?, loan_date = ?, return_date = ? WHERE id = ?', [book_id, member_id, loan_date, return_date, id]);
    console.log('Loan updated');
  } catch (err) {
    console.error('Error updating loan:', err);
  }
}

async function deleteLoan(id) {
  try {
    await con.query('DELETE FROM loans WHERE id = ?', [id]);
    console.log('Loan deleted');
  } catch (err) {
    console.error('Error deleting loan:', err);
  }
}

module.exports = {
  addLoan,
  listLoans,
  updateLoan,
  deleteLoan
};
