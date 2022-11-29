import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import IncomesCss from './Incomes.module.css';

export function Incomes(props) {
  return <div className={IncomesCss.Incomes}>

    <div className={IncomesCss.header}>
      Create Income
    </div>
    <div className={IncomesCss.form}>
      <div className={IncomesCss.formSection}>
        <label htmlFor="name">Description:</label>
        <input placeholder='Test' onChange={e => props.handleChangeName(e)} type="text" name='name' />
      </div>
      <div className={IncomesCss.formSection}>
        <label htmlFor="categorie">Categorie:</label>
        <select onChange={e => props.handleChangeCategorie(e)} type="text" name='categorie'>
          <option value="">Choose an option</option>
          {props.categorieObjet.map(categorie => <option key={categorie.id} value={categorie.id}>{categorie.libelle}</option>)}
        </select>
      </div>
      <div className={IncomesCss.formSection}>
        <label htmlFor="price">Amount:</label>
        <input placeholder='0' onChange={e => props.handleChangePrice(e)} type="text" name='price' />
      </div>
    </div>
    <button className={IncomesCss.btn} onClick={e => props.addIncome(e)}>Add Income</button>
    <div className={IncomesCss.table}>
      <div className={IncomesCss.title}>History Incomes :</div>
      <div className={IncomesCss.tableContent}>
        {props.tableIncomes.length > 0 ?
          <div className={IncomesCss.btnTableDetails}>
            <button className={IncomesCss.btn} onClick={e => props.deleteAllI()}>Delete All Incomes</button>
            <table>
              <thead>
                <tr>
                  <td className={IncomesCss.id}>#</td>
                  <td>Name</td>
                  <td>Categorie</td>
                  <td>Price</td>
                  <td>Date</td>
                  <td>Action</td>
                </tr>
              </thead>
              {<tbody>
                {props.tableIncomes.map((incomes) => <tr key={incomes.id}>
                  <td className={IncomesCss.id}>{incomes.id}</td>
                  <td>{incomes.name}</td>
                  <td>{props.categorieObjet.filter(categorie => categorie.id == incomes.categorie)[0].libelle}</td>
                  <td>{incomes.price}</td>
                  <td>{incomes.date}</td>
                  <td className={IncomesCss.action}>
                    <button onClick={e => props.removeIncome(incomes.id)}><FontAwesomeIcon icon={faTrash} /></button>
                  </td>
                </tr>
                )}
              </tbody>}
            </table>
          </div>
          : <div className={IncomesCss.noTable}>No Incomes Inserted Yet</div>}
      </div>
    </div>
  </div>;
}
