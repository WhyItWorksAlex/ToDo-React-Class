import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onUpdatedSalary}) => {

    const elements = data.map(item => {
        return (
            <EmployeesListItem 
                key={item.id} 
                {...item}
                onDelete={() => onDelete(item.id)}
                onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
                onUpdatedSalary={onUpdatedSalary}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;