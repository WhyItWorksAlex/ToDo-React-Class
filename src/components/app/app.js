import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {name: 'John C.', salary: 800, increase: false, favourite: true, id: 1},
          {name: 'Alex M.', salary: 3000, increase: true, favourite: false, id: 2},
          {name: 'Carl W.', salary: 5000, increase: false, favourite: false, id: 3}
        ],
        startId: 4,
        qty: '',
        term: '',
        btn: 'all',
      }
    }

    deleteItem = (id) => {
      this.setState(({data}) => {   
        return {
          data: data.filter(elem => elem.id !== id)
        }
      })
    }

    addItem = (name, salary) => {
      this.setState(({data, startId}) => {  
        const newItem = {
          name,
          salary,
          id: this.state.startId,
          increase: false,
          favourite: false,
        }
        const newArr = [...data, newItem];
        return {
          data: newArr,
          startId: startId + 1
        }
      })
    }

    onToggleProp = (id, prop) => {
      this.setState(({data}) => ({
        data: data.map((item) => {
          if (item.id === id) {
            return {...item, [prop]: !item[prop]}
          }
          return item;
        })
      }))
    }

    searchEmp = (items, term) => {
      if (term.length === 0) {
        return items
      }

      return items.filter(item => {
        return item.name.toLowerCase().startsWith(term.toLowerCase())
      })
    }

    setTerm = (term) => {
      this.setState({term})
    }


    filterPost = (btn, items) => {

      switch (btn) {
        case 'favourite': 
          return items.filter(item => item.favourite);
        case 'rich': 
          return items.filter(item => item.salary >= 1000);
        default:
          return items;
      }
    }

    onFilterSelect = (btn) => {
      this.setState({btn})
    }

    onUpdatedSalary = (id, value) => {
      this.setState(({data}) => ({
        data: data.map((item) => {
          if (item.id === id) {
            return {...item, salary: value}
          }
          return item;
        })
      }))
    }

    render() {
      const {data, term, btn} = this.state;
      const employees = data.length;
      const increased = data.filter(item => item.increase).length;
      const tempData = this.filterPost(btn, data);
      const visibleData = this.searchEmp(tempData, term);

      return (
        <div className="app">
            <AppInfo employees={employees} increased={increased} />

            <div className="search-panel">
                <SearchPanel setTerm={this.setTerm} />
                <AppFilter onFilterSelect={this.onFilterSelect} btn={btn} />
            </div>
            
            <EmployeesList data={visibleData} onDelete={this.deleteItem} onToggleProp={this.onToggleProp} onUpdatedSalary={this.onUpdatedSalary} />
            <EmployeesAddForm onSubmit={this.addItem} />
        </div>
    );
    }



}

export default App;