import React, { Component } from 'react';
import axios from 'axios' ;
import DietInfo from './DietInfo' ;


        class Diet extends Component {
            constructor(){
              super()
              this.state ={
                  arr: [],
                  picture: "",
                  name: "",
                  description: "",
                  
              }
          }
          
          componentDidMount(){
            axios.get(`https://cors-anywhere.herokuapp.com/https://ifit-ga.herokuapp.com/diets.json`)
             .then(data =>{
             console.log("Ssssss")
             console.log(data.data)
             this.setState({
                  arr:  data.data
             })
          }) }
          
          
          
              render() {
          
                  return (
                    <div >
                    <section className="bg-light page-section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Diets</h2>
               
              </div>
            </div>
            <div className="row container" >
                {this.state.arr.map((item)=>(
          <DietInfo name={item.name} 
          picture={item.picture} 
          description={item.description} 
          ></DietInfo>
                ))}
           
            </div>
                    </div>
                    </section>
                </div>
            );
          }
          }
          

export default Diet;