import '../App.css'
import { useState } from 'react'
import BoxContainer from './BoxContainer'


const Form = () => {
    const [boxes, setBoxes] = useState([]);
    const [newBox, setNewBox] = useState({ color: '', width: '', height: '' });

    const handleChange = (event) => {
        setNewBox({ ...newBox, [event.target.name]: event.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setBoxes([...boxes, newBox]);
        setNewBox({ color: '', width: '', height: '' });
    };


    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="color">Color</label>
                <input type="text" id="color" name="color" value={newBox.color} onChange={handleChange} />
                <label htmlFor="width">Width</label>
                <input type="number" id="width" name="width" value={newBox.width} onChange={handleChange} />
                <label htmlFor="height">Height</label>
                <input type="number" id="height" name="height" value={newBox.height} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
            <BoxContainer data={boxes} />
        </div>
    )
}

export default Form
