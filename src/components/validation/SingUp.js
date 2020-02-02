import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import axios from 'axios'
import { toast } from 'react-toastify';
// import Loading from '../addson/Loading'

let base_url = 'https://shielded-mesa-36213.herokuapp.com'

class SingUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:"",
            password:"",
        }
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        setTimeout(() => {
            this.setState(prevState => {return {isActive: !prevState.isActive}})
  
            let user_id = null
            axios.post(`${base_url}/api/users/` , 
                {user: {
                        'email': this.state.email,
                        'password': this.state.password,
                    }}
            )
            .then(r=>{
                console.log(r);
                user_id = r.data.user.id
                if (user_id != null) {
                    toast.success("Signed Up successfully", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                    });
                   
                }else{
                    toast.error("User not created!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                    });
                }
            })
            .catch(e=>{
                console.log(e);
                toast.error("Something went wrong try again! Or contact our team", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                });
            })
        },2000)
        this.setState(prevState => {return {isActive: !prevState.isActive}})
    }
    
    render(){
        return(
        <div>
            {/* <Loading isActive={this.state.isActive}></Loading> */}
            <h1 className='page-title'>Sign Up</h1>
           <Container>
                <Form>
                    <Col>
                        <FormGroup>
                            <Label>
                                Email
                            </Label>
                            <Input 
                                name= {'email'}
                                value={this.state.email} 
                                placeholder = {'Enter your email'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                       
                        <FormGroup>
                            <Label>
                                Password
                            </Label>
                            <Input 
                                type="password"
                                name= {'password'}
                                value={this.state.password} 
                                placeholder = {'Enter your password'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Password
                            </Label>
                            <Input 
                                type="password"
                                name= {'password_conf'}
                                // value={this.state.password} 
                                placeholder = {'Enter your password conformation'}
                                onChange = {e => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Button 
                        onClick= {this.handleSubmit}>    
                        Sign Up
                    </Button>
                </Form>
           </Container>
        </div>
        )
    }
}

export default SingUp;