import './style.scss';


function NameInput(props) {
    return <div className="name-input">
        <input
        onChange={props.nameOnChange}
        name="names"
        type="text"
        placeholder= {props.name}
        />
    </div>
}

export default NameInput;