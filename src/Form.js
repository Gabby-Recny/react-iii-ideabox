import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');

  
    const submitIdea = event => {
      event.preventDefault();
      const newIdea = {
        id: Date.now(),
        title,
        description,
      }
      props.addIdea(newIdea);
      clearInputs();
    }
    
   const clearInputs = () => {
      setTitle('');
      setDescription('');
    }
  return (
    <form>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={ title }
        onChange={event => setTitle(event.target.value)}
      />

      <input
        type='text'
        placeholder='Description'
        name='description'
        value={ description }
        onChange={event => setDescription(event.target.value)}
      />

    <button onClick={submitIdea}>SUBMIT</button>
  </form>

  )
}


// class Form extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: '',
//       description: ''
//     }
//   }

//   handleChange = event => {
//     this.setState({[event.target.name]: event.target.value})
//   }


//   render() {
//     return (
//       <form>
//         <input
//           type='text'
//           placeholder='Title'
//           name='title'
//           value={this.state.title}
//           onChange={event => this.handleChange(event)}
//         />

//         <input
//           type='text'
//           placeholder='Description'
//           name='description'
//           value={this.state.description}
//           onChange={event => this.handleChange(event)}
//         />

//         <button onClick={event => this.submitIdea(event)}>SUBMIT</button>
//       </form>
//     )
//   }
// }

export default Form;
