import React,{Component} from 'react';
import {FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';
class Login extends Component{
    state={
        firstName:"",
        firstNameError:false,
        phonenumber:"",
        phonenumberError:false,
        password:"",
        passwordError:false,
    }
    componentDidMount(){

    }
    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=e=>{
      
        const{firstName,phonenumber,password}=this.state
        if(firstName===""||phonenumber===""||password===""){
            if(firstName===""){
                this.setState({firstNameError:true})
            }else{
                this.setState({firstNameError:false})
            }
            if(phonenumber===""){
                this.setState({phonenumberError:true})
            }else{
                this.setState({phonenumberError:false})
            }
            if(password===""){
                this.setState({passwordError:true})
            }else{
                this.setState({passwordError:false})
                fetch('/create',{
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                    'content-type':'application/json' ,
                                   },
                                body:JSON.stringify({firstName,phonenumber,password})
                               }).then(res=>res.json())
                            .then(res=>console.log(res))                   }
        }
    }
    render(){
    
        const{firstNameError,phonenumberError,passwordError}=this.state
        return(
            <div>
                <form>
                
                    <FormGroup bsSize="large">
                    <ControlLabel>FirstName</ControlLabel>
                    <FormControl
                    name="firstname"
                    onChange={this.handleChange}/>
                    </FormGroup>
                    {firstNameError &&<p>firstNameError</p>}
                    <FormGroup bsSize="large">
                    <ControlLabel>phonenumber</ControlLabel>
                    <FormControl
                    name="phonenumber"
                    onChange={this.handleChange}/>
                    </FormGroup>
                    {phonenumberError &&<p>phonenumberError</p>}
                    <FormGroup bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                    name="password"
                    onChange={this.handleChange}/>
                    </FormGroup>
                    {passwordError &&<p>passwordError</p>}
                  <Button
                      block
                      bsSize="large"
                      onClick={this.handleSubmit}
                      type="submit">Submit</Button>
               </form>
               </div>
        )
    }
}
export default Login;