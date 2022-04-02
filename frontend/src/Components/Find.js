import React, { Component } from 'react'
import Select from 'react-select'
import gettingin from "./assets/gettingin.jpg"
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"
import NavBarCommon from "./NavBar_Common";



import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

const options = [
  { value: 'gainesville', label: 'Gainesville' },
  { value: 'orlando', label: 'Orlando' },
  { value: 'jacksonville', label: 'Jacksonville' },
  { value: 'tampa', label: 'Tampa' },
  { value: 'miami', label: 'Miami' },
  { value: 'orlando', label: 'Orlando' },
  { value: 'tallahassee', label: 'Tallahassee' }
]

class MyComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      from:'',
      to:'',
      date:''
    };
  }
  

  handleFromChange = (selectedOption) => {
    this.setState({
      from: selectedOption
    })
  }

  handleToChange = (selectedOption) => {
    this.setState({
      to: selectedOption
    })
  }

  handleDateChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }

   handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.from.value} ${this.state.to.value} ${this.state.date}`)
    //axios.get('http://awesomeserver/users.username')
   // .then((response)=>{
    //  this.setState({})
   // })
   
   fetch("./MOCK_DATA.json")
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        from: data
      })
    })
  }

  render(){
    
    return(
      <Section>
        <div>
          <NavBarCommon />
        </div>
        
        <div className="background">
          <img src={gettingin} alt="" />
        </div>
        <div className='FindPageContent'>
        <h1 className="display-4" style={{color:'white'}}> FIND A RIDE! </h1>         
        <br/>
          <form class="finding" onSubmit={this.handleSubmit}>
            <label class="la"> From:</label> <br/>
              <Select name = 'from' id="from" options={options} value={this.state.from} onChange={this.handleFromChange} />
            <br></br>
            
            <label class="la"> To: </label> <br/>
              <Select name = 'to' id="to" options={options} value={this.state.to} onChange={this.handleToChange} />
            <br></br>

            <label class="la"> Date: </label> <br/>
              <input type="datetime-local" name="date" value={this.state.date} onChange={this.handleDateChange} />
            
            <br/>

              <input type="submit" color="primary mt-3" value="Find" />

          </form>
        
        </div>
      </Section>
      
    );
  }
}

export default MyComponent

const Section = styled.section`
position: relative;
  width: 100%;
  height: 100%;
  .background {
    img {
      margin-top: 0.01rem;
      height: 15%;
      width: 100%;
      filter: brightness(60%);
    }
  }
  .FindPageContent {
    margin-top: 6rem;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    .finding {
      margin: 0 auto;
      box-sizing: border-box;
      padding: 2rem;
      padding-left: 13.5rem;
      border-radius: 1rem;
      width: 40%;
      background-color: rgba(0, 0, 0, 0.6);
      border: 4px solid rgb(255, 255, 255, 0.6);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      .finding-label{
        color:white;
      }
      .la{
        color:white;
      }
    input {
      background-color: white;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
    }   
  }
    .title {
      color: white;
      h1 {
        color: white;
        margin-top: 0rem;
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 15vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
  }
`;