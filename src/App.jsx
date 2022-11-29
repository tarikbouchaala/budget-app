import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Nav } from './components/Nav/Nav';
import { Home } from './components/Home/Home';
import { Expenses } from './components/Expenses/Expenses';
import { Incomes } from './components/Incomes/Incomes';
import { Analysis } from './components/Analysis/Analysis';
function App() {
  useEffect(() => {
    if (localStorage.getItem('expenses') == null) {
      localStorage.setItem('expenses', JSON.stringify([
        { categorie: 1, date: "2022-01-01 00:00:00", id: 1, name: "Test 1", price: 5000 },
        { categorie: 1, date: "2022-02-01 00:00:00", id: 2, name: "Test 2", price: 3500 },
        { categorie: 2, date: "2022-03-01 00:00:00", id: 3, name: "Test 3", price: 4000 },
        { categorie: 4, date: "2022-03-01 12:00:00", id: 4, name: "Test 4", price: 4000 },
        { categorie: 3, date: "2022-04-01 00:00:00", id: 5, name: "Test 5", price: 5000 },
        { categorie: 3, date: "2022-05-01 00:00:00", id: 6, name: "Test 6", price: 3500 },
        { categorie: 4, date: "2022-05-01 12:00:00", id: 7, name: "Test 7", price: 5000 },
        { categorie: 5, date: "2022-06-01 00:00:00", id: 8, name: "Test 8", price: 4000 },
        { categorie: 5, date: "2022-07-01 00:00:00", id: 9, name: "Test 9", price: 5000 },
        { categorie: 5, date: "2022-08-01 00:00:00", id: 10, name: "Test 10", price: 3500 },
        { categorie: 4, date: "2022-09-01 00:00:00", id: 11, name: "Test 11", price: 4000 },
        { categorie: 4, date: "2022-10-01 00:00:00", id: 12, name: "Test 12", price: 3500 },
      ]));
    }
    if (localStorage.getItem('incomes') == null) {
      localStorage.setItem('incomes', JSON.stringify(
        [
          { categorie: 1, date: "2022-01-01 00:00:00", id: 1, name: "Test 1", price: 5000 },
          { categorie: 1, date: "2022-02-01 00:00:00", id: 2, name: "Test 2", price: 3500 },
          { categorie: 2, date: "2022-03-01 00:00:00", id: 3, name: "Test 3", price: 4000 },
          { categorie: 4, date: "2022-03-01 12:00:00", id: 4, name: "Test 4", price: 4000 },
          { categorie: 3, date: "2022-04-01 00:00:00", id: 5, name: "Test 5", price: 5000 },
          { categorie: 3, date: "2022-05-01 00:00:00", id: 6, name: "Test 6", price: 3500 },
          { categorie: 4, date: "2022-05-01 12:00:00", id: 7, name: "Test 7", price: 5000 },
          { categorie: 5, date: "2022-06-01 00:00:00", id: 8, name: "Test 8", price: 4000 },
          { categorie: 5, date: "2022-07-01 00:00:00", id: 9, name: "Test 9", price: 5000 },
          { categorie: 5, date: "2022-08-01 00:00:00", id: 10, name: "Test 10", price: 3500 },
          { categorie: 4, date: "2022-09-01 00:00:00", id: 11, name: "Test 11", price: 4000 },
          { categorie: 4, date: "2022-10-01 00:00:00", id: 12, name: "Test 12", price: 3500 },
        ]));
    }
  }, [])
  const [tableExpanses, setTableExpanses] = useState(localStorage.getItem('expenses') != null ? JSON.parse(localStorage.getItem('expenses')) : [
    { categorie: 1, date: "2022-01-01 00:00:00", id: 1, name: "Test 1", price: 5000 },
    { categorie: 1, date: "2022-02-01 00:00:00", id: 2, name: "Test 2", price: 3500 },
    { categorie: 2, date: "2022-03-01 00:00:00", id: 3, name: "Test 3", price: 4000 },
    { categorie: 4, date: "2022-03-01 12:00:00", id: 4, name: "Test 4", price: 4000 },
    { categorie: 3, date: "2022-04-01 00:00:00", id: 5, name: "Test 5", price: 5000 },
    { categorie: 3, date: "2022-05-01 00:00:00", id: 6, name: "Test 6", price: 3500 },
    { categorie: 4, date: "2022-05-01 12:00:00", id: 7, name: "Test 7", price: 5000 },
    { categorie: 5, date: "2022-06-01 00:00:00", id: 8, name: "Test 8", price: 4000 },
    { categorie: 5, date: "2022-07-01 00:00:00", id: 9, name: "Test 9", price: 5000 },
    { categorie: 5, date: "2022-08-01 00:00:00", id: 10, name: "Test 10", price: 3500 },
    { categorie: 4, date: "2022-09-01 00:00:00", id: 11, name: "Test 11", price: 4000 },
    { categorie: 4, date: "2022-10-01 00:00:00", id: 12, name: "Test 12", price: 3500 },
  ])

  const [tableIncomes, setTableIncomes] = useState(localStorage.getItem('incomes') != null ? JSON.parse(localStorage.getItem('incomes')) : [
    { categorie: 1, date: "2022-01-01 00:00:00", id: 1, name: "Test 1", price: 5000 },
    { categorie: 1, date: "2022-02-01 00:00:00", id: 2, name: "Test 2", price: 3500 },
    { categorie: 2, date: "2022-03-01 00:00:00", id: 3, name: "Test 3", price: 4000 },
    { categorie: 4, date: "2022-03-01 12:00:00", id: 4, name: "Test 4", price: 4000 },
    { categorie: 3, date: "2022-04-01 00:00:00", id: 5, name: "Test 5", price: 5000 },
    { categorie: 3, date: "2022-05-01 00:00:00", id: 6, name: "Test 6", price: 3500 },
    { categorie: 4, date: "2022-05-01 12:00:00", id: 7, name: "Test 7", price: 5000 },
    { categorie: 5, date: "2022-06-01 00:00:00", id: 8, name: "Test 8", price: 4000 },
    { categorie: 5, date: "2022-07-01 00:00:00", id: 9, name: "Test 9", price: 5000 },
    { categorie: 5, date: "2022-08-01 00:00:00", id: 10, name: "Test 10", price: 3500 },
    { categorie: 4, date: "2022-09-01 00:00:00", id: 11, name: "Test 11", price: 4000 },
    { categorie: 4, date: "2022-10-01 00:00:00", id: 12, name: "Test 12", price: 3500 },
  ])

  const [nameE, setNameE] = useState("")
  const [categorieE, setCategorieE] = useState("")
  const [priceE, setPriceE] = useState("")

  const [nameI, setNameI] = useState("")
  const [categorieI, setCategorieI] = useState("")
  const [priceI, setPriceI] = useState("")

  const [categorieAnalysisE, setcategorieAnalysisE] = useState(0)
  const [categorieAnalysisI, setcategorieAnalysisI] = useState(0)

  useEffect(() => {
    setNameE("")
    setCategorieE("")
    setPriceE("")

    setNameI("")
    setCategorieI("")
    setPriceI("")
  }, [tableExpanses, tableIncomes])



  useEffect(() => {
    if (categorieAnalysisE == "") {
      setcategorieAnalysisE(0)
    } else if (categorieAnalysisI == "") {
      setcategorieAnalysisI(0)
    }
  }, [categorieAnalysisE, categorieAnalysisI])

  const categorieObjetE = [
    {
      id: 1, libelle: "Education"
    },
    {
      id: 2, libelle: "Shopping"
    },
    {
      id: 3, libelle: "Personal Care"
    },
    {
      id: 4, libelle: "Kids"
    },
    {
      id: 5, libelle: "Health & Fitness"
    },
    {
      id: 6, libelle: "Food & Dining"
    },
    {
      id: 7, libelle: "Gifts & Donations"
    },
    {
      id: 8, libelle: "Investments",
    },
    {
      id: 9, libelle: "Auto & Transport"
    },
    {
      id: 10, libelle: "Travel Fees & Charges"
    },
    {
      id: 11, libelle: "Business Services"
    },
    {
      id: 12, libelle: "Taxes"
    },
    {
      id: 13, libelle: "Entertainment"
    },
    {
      id: 14, libelle: "Other"
    }]
  const categorieObjetI = [
    {
      id: 1, libelle: "Paycheck"
    },
    {
      id: 2, libelle: "Investment"
    },
    {
      id: 3, libelle: "Returned Purchase"
    },
    {
      id: 4, libelle: "Bonus"
    },
    {
      id: 5, libelle: "Interest Income"
    },
    {
      id: 6, libelle: "Reimbursement"
    },
    {
      id: 7, libelle: "Rental Income"
    },
    {
      id: 8, libelle: "Other"
    }]

  const addExpanse = (event) => {
    if (nameE != "" && categorieE != "" && priceE != "") {
      if (isNaN(priceE)) {
        Swal.fire({
          title: 'Error!',
          text: "The price should be a number",
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
      else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your expense has been added',
          showConfirmButton: false,
          timer: 1500
        })
        let currentDate = new Date()
        currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.toLocaleTimeString()}`
        let newTableExpanses = [...tableExpanses, { id: tableExpanses.length > 0 ? tableExpanses[tableExpanses.length - 1].id + 1 : 1, name: nameE, categorie: parseInt(categorieE), price: parseFloat(priceE), date: currentDate }]
        setTableExpanses([...newTableExpanses])
        console.log(newTableExpanses)
        localStorage.setItem('expenses', JSON.stringify(newTableExpanses))
        Array.from(event.target.previousSibling.children).forEach(formSection => {
          formSection.children[1].value = ""
        });
      }
    }
    else {
      if (nameE == "" && categorieE == "" && priceE == "") {
        Swal.fire({
          title: 'Error!',
          text: "Please enter the values",
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
      else {
        if (nameE == "") {
          Swal.fire({
            title: 'Error!',
            text: "Please enter the name",
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
        else if (categorieE == "") {
          Swal.fire({
            title: 'Error!',
            text: "Please choose the categorie",
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
        else {
          Swal.fire({
            title: 'Error!',
            text: "Please enter the price",
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
      }
    }
  }

  const addIncome = (event) => {
    if (nameI != "" && categorieI != "" && priceI != "") {
      if (isNaN(priceI)) {
        Swal.fire({
          title: 'Error!',
          text: "The price should be a number",
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
      else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your income has been added',
          showConfirmButton: false,
          timer: 1500
        })
        let currentDate = new Date()
        currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.toLocaleTimeString()}`
        let newTableIncomes = [...tableIncomes, { id: tableIncomes.length > 0 ? tableIncomes[tableIncomes.length - 1].id + 1 : 1, name: nameI, categorie: parseInt(categorieI), price: parseFloat(priceI), date: currentDate }]
        setTableIncomes([...newTableIncomes])
        localStorage.setItem('incomes', JSON.stringify(newTableIncomes))
        Array.from(event.target.previousSibling.children).forEach(formSection => {
          formSection.children[1].value = ""
        });
      }
    }
    else {
      if (nameI == "" && categorieI == "" && priceI == "") {
        Swal.fire({
          title: 'Error!',
          text: "Please enter the values",
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
      else {
        if (nameI == "") {
          Swal.fire({
            title: 'Error!',
            text: "Please enter the name",
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
        else if (categorieI == "") {
          Swal.fire({
            title: 'Error!',
            text: "Please choose the categorie",
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
        else {
          Swal.fire({
            title: 'Error!',
            text: "Please enter the price",
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
      }
    }
  }

  const removeExpense = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let newTableExpanses = tableExpanses.filter(expenses => expenses.id != id)
        setTableExpanses([...newTableExpanses])
        localStorage.setItem('expenses', JSON.stringify(newTableExpanses))
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your Expense has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })

  }

  const removeIncome = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let newTableIncomes = tableIncomes.filter(incomes => incomes.id != id)
        setTableIncomes([...newTableIncomes])
        localStorage.setItem('incomes', JSON.stringify(newTableIncomes))
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your Income has been deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  }
  const deleteAllI = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let newTableIncomes = []
        setTableIncomes([...newTableIncomes])
        localStorage.setItem('incomes', JSON.stringify(newTableIncomes))
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'All the Incomes are deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  }
  const deleteAllE = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        let newTableExpanses = []
        setTableExpanses([...newTableExpanses])
        localStorage.setItem('expenses', JSON.stringify(newTableExpanses))
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'All the Expenses are deleted.',
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  }
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='expenses' element={<Expenses deleteAllE={deleteAllE} tableExpanses={tableExpanses} removeExpense={removeExpense} categorieObjet={categorieObjetE} handleChangeName={(e) => setNameE(e.target.value)} handleChangeCategorie={(e) => setCategorieE(e.target.value)} handleChangePrice={(e) => setPriceE(e.target.value)} addExpanse={addExpanse} />} />
          <Route path='incomes' element={<Incomes deleteAllI={deleteAllI} tableIncomes={tableIncomes} removeIncome={removeIncome} categorieObjet={categorieObjetI} handleChangeName={(e) => setNameI(e.target.value)} handleChangeCategorie={(e) => setCategorieI(e.target.value)} handleChangePrice={(e) => setPriceI(e.target.value)} addIncome={addIncome} />} />
          <Route path='analysis' element={<Analysis categorieAnalysisI={categorieAnalysisI} categorieAnalysisE={categorieAnalysisE} categorieObjetI={categorieObjetI} categorieObjetE={categorieObjetE} filterCategorieAnalysisI={e => setcategorieAnalysisI(e.target.value)} filterCategorieAnalysisE={e => setcategorieAnalysisE(e.target.value)} />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;