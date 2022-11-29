import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ExpensesCss from './Expenses.module.css';

export function Expenses(props) {
  return <div className={ExpensesCss.Expenses}>
    <div className={ExpensesCss.header}>
      Create Expense
    </div>
    <div className={ExpensesCss.form}>
      <div className={ExpensesCss.formSection}>
        <label htmlFor="name">Description:</label>
        <input placeholder='Test' onChange={e => props.handleChangeName(e)} type="text" name='name' />
      </div>
      <div className={ExpensesCss.formSection}>
        <label htmlFor="categorie">Categorie:</label>
        <select onChange={e => props.handleChangeCategorie(e)} type="text" name='categorie'>
          <option value="">Choose an option</option>
          {props.categorieObjet.map(categorie => <option key={categorie.id} value={categorie.id}>{categorie.libelle}</option>)}
        </select>
      </div>
      <div className={ExpensesCss.formSection}>
        <label htmlFor="price">Amount:</label>
        <input placeholder='0' onChange={e => props.handleChangePrice(e)} type="text" name='price' />
      </div>
    </div>
    <button className={ExpensesCss.btn} onClick={e => props.addExpanse(e)}>Add Expense</button>
    <div className={ExpensesCss.table}>
      <div className={ExpensesCss.title}>History Expenses :</div>
      <div className={ExpensesCss.tableContent}>
        {props.tableExpanses.length > 0 ?
          <div className={ExpensesCss.btnTableDetails}>
            <button className={ExpensesCss.btn} onClick={e => props.deleteAllE()}>Delete All Expenses</button>
            <table>
              <thead>
                <tr>
                  <td className={ExpensesCss.id}>#</td>
                  <td>Name</td>
                  <td>Categorie</td>
                  <td>Price</td>
                  <td>Date</td>
                  <td>Action</td>
                </tr>
              </thead>
              {<tbody>
                {props.tableExpanses.map((expense) => <tr key={expense.id}>
                  <td className={ExpensesCss.id}>{expense.id}</td>
                  <td>{expense.name}</td>
                  <td>{props.categorieObjet.filter(categorie => categorie.id == expense.categorie)[0].libelle}</td>
                  <td>{expense.price}</td>
                  <td>{expense.date}</td>
                  <td className={ExpensesCss.action}>
                    <button onClick={e => props.removeExpense(expense.id)}><FontAwesomeIcon icon={faTrash} /></button>
                  </td>
                </tr>
                )}
              </tbody>}
            </table>
          </div>
          : <div className={ExpensesCss.noTable}>No Expenses Inserted Yet</div>}
      </div>
    </div>
  </div>;
}
