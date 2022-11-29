import React from 'react';
import { Bar } from 'react-chartjs-2';
import AnalysisCss from './Analysis.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)


export function Analysis(props) {
  //function to get value for each month
  function getMonthValue(month, data) {
    let value = 0;
    for (let i of data) {
      if (i.date.split(' ')[0].split("-")[1] == month) {
        value += i.price
      }
    }
    return value
  }
  let dataE;
  let optionsE;
  let dataI;
  let optionsI;
  //Expenses Chart:
  if (localStorage.getItem('expenses') != null) {
    const getLocalStorageE = JSON.parse(localStorage.getItem('expenses'));
    let getLocalStorageELabel;

    if (props.categorieAnalysisE == 0) {
      getLocalStorageELabel = getLocalStorageE;
    }
    else {
      getLocalStorageELabel = getLocalStorageE.filter(expense => expense.categorie == props.categorieAnalysisE);
    }
    let dataToUse = [];
    for (let i = 1; i <= 12; i++) {
      dataToUse.push(getMonthValue(i, getLocalStorageELabel))
    }
    dataE = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: props.categorieObjetE.filter(categorie => categorie.id == props.categorieAnalysisE) == 0 ? "All Expense Categories" : props.categorieObjetE.filter(categorie => categorie.id == props.categorieAnalysisE)[0].libelle,
          borderColor: ['rgb(53,162,235)', 'rgb(255,26,104)', "rgb(255,159,64)", "rgb(0,206,86)"],
          backgroundColor: ["rgba(53,162,235,0.4)", "rgba(255,26,104,0.4)", "rgba(255,159,64,0.4)", "rgba(0,206,86,0.4)"]
          , data: dataToUse
        }
      ]
    };
    optionsE = {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Expenses Chart"
        },
        tooltip: {
          yAlign: 'top',
          displayColors: false,
          padding: 10
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
  }
  // Incomes Chart:
  if (localStorage.getItem('incomes') != null) {
    const getLocalStorageI = JSON.parse(localStorage.getItem('incomes'));
    let getLocalStorageILabel;

    if (props.categorieAnalysisI == 0) {
      getLocalStorageILabel = getLocalStorageI;
    }
    else {
      getLocalStorageILabel = getLocalStorageI.filter(income => income.categorie == props.categorieAnalysisI);
    }

    let dataToUseI = [];
    for (let i = 1; i <= 12; i++) {
      dataToUseI.push(getMonthValue(i, getLocalStorageILabel))
    }

    dataI = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: props.categorieObjetI.filter(categorie => categorie.id == props.categorieAnalysisI) == 0 ? "All Income Categories" : props.categorieObjetI.filter(categorie => categorie.id == props.categorieAnalysisI)[0].libelle,
          data: dataToUseI,
          borderColor: ['rgb(53,162,235)', 'rgb(255,26,104)', "rgb(255,159,64)", "rgb(0,206,86)"],
          backgroundColor: ["rgba(53,162,235,0.4)", "rgba(255,26,104,0.4)", "rgba(255,159,64,0.4)", "rgba(0,206,86,0.4)"]
        }
      ]
    };

    optionsI = {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Incomes Chart"
        },
        tooltip: {
          yAlign: 'top',
          displayColors: false,
          padding: 10
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
  }


  return <div className={AnalysisCss.Analysis}>
    <div className={AnalysisCss.header}>Analysis</div>
    <div className={AnalysisCss.Charts}>
      {localStorage.getItem('expenses') != null && JSON.parse(localStorage.getItem('expenses')).length!=0? <div className={AnalysisCss.AnalysisExpenses}>
        <div className={AnalysisCss.headerChart}>
          <label htmlFor="categorie">Expenses Categorie:</label>
          <select onChange={e => props.filterCategorieAnalysisE(e)} type="text" name='categorie'>
            <option value="">All Categories</option>
            {props.categorieObjetE.map(categorie => <option key={categorie.id} value={categorie.id}>{categorie.libelle}</option>)}
          </select>
        </div>
        <Bar data={dataE} options={optionsE} width={600} height={400} />
      </div> : <h1>No Expenses Inserted Yet</h1>}
      {localStorage.getItem('incomes') != null && JSON.parse(localStorage.getItem('incomes')).length!=0? <div className={AnalysisCss.AnalysisIncomes}>
        <div className={AnalysisCss.headerChart}>
          <label htmlFor="categorie">Incomes Categorie:</label>
          <select onChange={e => props.filterCategorieAnalysisI(e)} type="text" name='categorie'>
            <option value="">All Categories</option>
            {props.categorieObjetI.map(categorie => <option key={categorie.id} value={categorie.id}>{categorie.libelle}</option>)}
          </select>
        </div>
        <Bar data={dataI} options={optionsI} width={600} height={400} />
      </div> : <h1>No Incomes Inserted Yet</h1>}
    </div>

  </div>;
}
