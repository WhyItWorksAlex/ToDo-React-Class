import "./app-filter.css";

const AppFilter = ({onFilterSelect, btn}) => {
    const buttons = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'favourite', label: 'На повышение'},
        {name: 'rich', label: 'З/П больше 1000$'},
    ];

    const button = buttons.map((button) => {
        const active = btn === button.name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={button.name}
                onClick={() => onFilterSelect(button.name)}>
                {button.label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {button}
        </div>
    )
}

export default AppFilter;