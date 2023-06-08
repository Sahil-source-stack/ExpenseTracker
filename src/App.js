import React, {useState} from "react";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense";
import './App.css';

let DUMMY_EXPENSE = [
        {
            id:'e1',
            title:'Fees',
            amount:'200',
            date: new Date(2023, 6, 5)

        },
        {
            id:'e2',
            title:'Food',
            amount:'300',
            date: new Date(2023, 6, 10)

        },
        {
            id:'e3',
            title:'Insurance',
            amount:'400',
            date: new Date(2023, 6, 15)

        },
        {
            id:'e4',
            title:'Rent',
            amount:'500',
            date: new Date(2023, 6, 20)

        },
    ];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    }
    return (
        <div>
        <h1 className="heading">Expenses CheckList Application</h1>
        <NewExpense onAddExpense = {addExpenseHandler} />
        <Expenses item={expenses}/>
        </div>
        );
}
export default App;