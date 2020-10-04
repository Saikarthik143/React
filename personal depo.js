import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import { Link } from 'react-router-dom';

const Depoist=()=>{
    let[accountType,setAccountType]=useState('');
    const[depoistAmount,setDepoistAmount]=useState('');
    const[availableBalance,setAvailableBalance]=useState(parseInt(localStorage.getItem('idm')));
    const[accountValue,setAccountValue]=useState('');
    const[accountTypeErr,setAccountTypeErr]=useState({});
    const[depoistAmountErr,setDepoistAmountErr]=useState({});
    const[availableBalanceErr,setAvailableBalanceErr]=useState({})
localStorage.setItem('total',availableBalance);
    const DisplayBalance=()=>{
        //availableBalance=availableBalance+depoistAmount;
        console.log(depoistAmount.value)
        if(!isNaN(parseInt(depoistAmount)))
        {
            
            setAvailableBalance(parseInt(parseInt(availableBalance)+parseInt(depoistAmount)));
            setAccountValue(true);
            console.log(availableBalance)
        }
        else{
            setAvailableBalance(parseInt(parseInt(availableBalance)));

        }
        

    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const isValid=formValidation();
        //console.log(availableBalance);
        if(isValid){
            alert('success your balance is' +availableBalance);
            console.log("submitted");
           
          // localStorage.setItem(Response.data[0].idm,'availableBalance');
          // console.log(Response.data[0].idm)
          //  yaxios.post('http://localhost:3000/Users',array).then(Response=>{
           //     console.log(Response)
           // })
           // .catch(error=>{
            //    console.log(error)
           // })
            
        }
        else
        alert('invalid');
    }
    const formValidation=()=>{
        let isValid=true;
        const accountType={};
        const depoistAmountErr={};
        const availableBalance={};
        let x=depoistAmount.value;
        console.log(x);
        if(!depoistAmount){
            isValid=false;
            depoistAmountErr.nodata="cannot be empty";
        }
        if(typeof depoistAmount!=='undefined'){
            var reg=new RegExp('^[0-9]+$');
            if(depoistAmount<=0||!(reg.test(depoistAmount))){
                isValid=false;
                depoistAmountErr.nodata="amount should be greather than zero";
            }
        }
setDepoistAmountErr(depoistAmountErr);
return isValid;
    }
    accountType=localStorage.getItem('accountType');
  
    const Logut=()=>{
        localStorage.clear();

    }
    // localStorage.setItem('idm',availableBalance);
    // var existing=localStorage.getItem('idm');
    // var present=existing?existing:availableBalance;
    // localStorage.getItem(present)


    return <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-danger">
    <div class="col">
        <ul class="nav row nav pills">
            <li class="col-sm-3 nav-item text-center">
                <a class="nav-link btn-outline-warning" ><i class="fa fa-fw fa-home"></i>Home</a>
            </li>
            
            <li class="col-sm-3 nav-item text-center">
                <a class="nav-link btn-outline-warning"  ><i class="fa fa-fw fa-user "></i>About</a>
            </li>
           
            <li class="col-sm-3 nav-item text-center">
                <a class="nav-link btn-outline-warning" ><i class="fa fa-shopping-cart"></i>Contact</a>
            </li>
            <li class="col-sm-3 nav-item text-center">
            <Link to={{pathname:'/Login',hash:'#Login'}}>
                 <button class="btn btn-outline-warning" onClick={Logut}><i class="fa  fa-sign-out"></i>Logout </button> 
               </Link>
            </li>
        </ul>
    </div>
</nav>

         <div className="container" >
        <div className="row">
            <div className="col-3"></div>
            <div className="card m-3 col-6" style={{backgroundColor:"#d0c9c3",borderRadius:"1.5rem",backgroundColor:"#90EE90"}}>
                <br/>
                <h3 className="card-header text-center" style={{backgroundColor:"#414654",color:"whitesmoke",borderRadius:"1.5rem"}}>Loan Form</h3>
           
            <div className="card-body">
         <form onSubmit={submitHandler}>
             <div className="offset-2">
        <div className="form-group">
            <label htmlFor="accountType">Account Type</label>
           <input type="accountType" className="form-control" value={accountType} onChange={(e)=>setAccountType(e.target.value)}></input>
        </div>
        <div className="form-group">
            <label htmlFor="depoistAmount">Depoist Amount</label>
            <input type="depoistAmount" className="form-control" name="depoistAmount" id="depoistAmount"  onChange={(e)=>(setDepoistAmount(e.target.value))}></input>
            {Object.keys(depoistAmountErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{depoistAmountErr[key]}</div>
            })}
        </div>
        <div>
        <button type="submit" className="btn btn-primary mr-1" onClick={DisplayBalance}>Submit</button>
        </div>
        {/* <div className="form-group">
            <label htmlFor="availableBalance">Available balance</label>
            <input type="availableBalance" className="form-control" name="availableBalance" id="availableBalance" onChange={(e)=>setAvailableBalance(e.target.value)}></input>
            {Object.keys(availableBalanceErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{availableBalanceErr[key]}</div>
            })}
        </div>
        <div>
        <button type="submit" className="btn btn-primary mr-1">Submit</button>
        </div> */}
        {

accountValue===true?<div> <textarea value={availableBalance}>{availableBalance}</textarea></div>:<textarea value={availableBalance}>{availableBalance}</textarea>
        }
       
        </div>
        </form>
        
        </div>
        </div>
        </div>
        </div>
    </div>
}
export default Depoist;
