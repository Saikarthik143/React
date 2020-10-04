import React,{useState, useEffect} from'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './loan.css';
import bank from './bank.png';

const Loan=()=>{
    let [accountHolderName,setAccountHolderName]=useState(localStorage.getItem('userName'));
    const [loanType,setLoanType]=useState('');
    const[loanAmount,setLoanAmount]=useState('');
    const [loanApplyDate,setLoanApplyDate]=useState('');
    const[ROI,setROI]=useState('');
    const[duriation,setDuriation]=useState('');
    const[accountHolderNameErr,setAccountHolderNameErr]=useState({});
    const[loanTypeErr,setLoanTypeErr]=useState({});
    const[loanAmountErr,setLoanAmountErr]=useState({});
    const[loanApplyDateErr,setLoanApplyDateErr]=useState({});
    const[ROIErr,setROIErr]=useState({});
    const[duriationErr,setDuriationErr]=useState({});
    let[selectedVal,setSelectedVal]=useState('');
    const[annualIncome,setAnnualIncome]=useState('');
    const[companyName,setCompanyName]=useState('');
    const[designation,setDesignation]=useState('');
    const[totalExp,setTotalexp]=useState('');
    const[currentExp,setCurrentExp]=useState('');
    const[annualIncomeErr,setAnnualIncomeErr]=useState({});
    const[companyNameErr,setCompanyNameErr]=useState({});
    const[designationErr,setDesignationErr]=useState({});
    const[totalExpErr,setTotalexpErr]=useState({});
    const[currentExpErr,setCurrentExpErr]=useState({});
    const[courseFee,setCourseFee]=useState('');
    const[Course,setCourse]=useState('');
    const[fatherName,setFatherName]=useState('');
    const[fatherOccupation,setFatherOccupation]=useState('');
    const[courseFeeErr,setCourseFeeErr]=useState({});
    const[CourseErr,setCourseErr]=useState({});
    const[fatherNameErr,setFatherNameErr]=useState({});
    const[fatherOccupationErr,setFatherOccupationErr]=useState({});
    let id=localStorage.getItem('id');
    const array1={
        id,
        accountHolderName,
       
        loanAmount,
        selectedVal,
        loanApplyDate,
        ROI,
        duriation,
        fatherName,
        fatherOccupation,
        Course,
        courseFee,
        annualIncome,
        companyName,
        totalExp,
        currentExp
    }



    const submitHandler=(e)=>{
        e.preventDefault();
        const isValid=formValidation();
        if(isValid){
            alert('success');
            console.log("submitted");
            axios.post('http://localhost:3000/loan',array1).then(Response=>{
                console.log(Response)
                
            })
            .catch(error=>{
                console.log(error)
            })
        
        }
        else
        alert('invalid');
    }
        accountHolderName=localStorage.getItem('userName');
        console.log(accountHolderName);
            

        const handleChange=(event)=>{
            setSelectedVal(event.target.value);
        }

        const dateChange=(loanApplyDate)=>{
            setLoanApplyDate(loanApplyDate);
        }
    
        const formValidation=()=>{
            let isValid=true;
           // const accountHolderNameErr={};
            //const loanTypeErr={};
            const loanAmountErr={};
            const loanApplyDateErr={};
            const ROIErr={};
            const duriationErr={};
            const annualIncomeErr={};
           // const duriationErr={};
            const courseFeeErr={};
            const CourseErr={};
            const fatherNameErr={};
            const fatherOccupationErr={};
            const totalExpErr={};
            const currentExpErr={};
            const designationErr={};
            const companyNameErr={};
          



          
            if(!loanAmount){
                loanAmountErr.noamount="amount not mentioned";
            }
            if(typeof loanAmount!=='undefined'){
                var reg=new RegExp('^[0-9]+$');
                if(loanAmount<=0||!(reg.test(loanAmount))){
                    isValid=false;
                    loanAmountErr.nodata="amount should be greather than zero";
                }
            }
           if(!loanApplyDate){
               loanApplyDateErr.nodate="mention date";

           }
           if(!ROI){
               ROIErr.norate="mention it";
           }
           if(!courseFee){
            courseFeeErr.norate="mention it";
        }
        if(!Course){
            CourseErr.norate="mention it";
        }
        if(!fatherName){
            fatherNameErr.norate="mention it";
        }
        if(!fatherOccupation){
            fatherOccupationErr.norate="mention it";
        }
        if(!annualIncome){
            annualIncomeErr.norate="mention it";
        }
        if(!companyName){
            companyNameErr.norate="mention it";
        }
        if(!designation){
            designationErr.norate="mention it";
        }
        if(!totalExp){
            totalExpErr.norate="mention it";
        }
        if(!currentExp){
            currentExpErr.norate="mention it";
        }








           if(!duriation){
               duriationErr.notime="mention";
           }
           setDuriationErr(duriationErr);
           setLoanAmountErr(loanAmountErr);
           setLoanApplyDateErr(loanApplyDateErr);
           setROIErr(ROIErr);
           //setLoanTypeErr(loanTypeErr);
           setAnnualIncomeErr(annualIncomeErr);
           setCourseErr(CourseErr);
           setCourseFeeErr(courseFeeErr);
           setFatherOccupationErr(fatherOccupationErr);
           setFatherNameErr(fatherNameErr);
           setCompanyNameErr(companyNameErr);
           setDesignationErr(designationErr);
           setTotalexpErr(totalExpErr);
           setCurrentExpErr(currentExpErr);
           return isValid;

        }
     
        const Logout=()=>{
            localStorage.clear();
        }



    return <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#fa983a"}}>
    <div className="col">
        <ul className="nav row nav pills">
            <li className="col-sm-3 nav-item text-center">
            <Link to={{pathname:'/Demo'}}>
                    <img className="card-img-top" src={bank} alt="card" style={{width:"100px",height:"50px"}}/>
                   
                        </Link>
            </li>
            <li class="col-sm-3 nav-item text-center" style={{fontFamily:"David Libre",fontWeight:"bold"}}>
                <Link className="nav-link btn-outline-light"   ><i className="fa fa-search"></i>Search</Link>
            </li>
            <li className="col-sm-3 nav-item text-center">
                <Link className="nav-link btn-outline-light" style={{fontFamily:"David Libre",fontWeight:"bold"}} ><i className="fa fa-fw fa-user "></i>ViewProfile</Link>
            </li>
            <li className="col-sm-3 nav-item text-center">
            <Link to={{pathname:'/Login',hash:'#Login'}}>
                 <button className="btn btn-outline-light" style={{fontFamily:"David Libre",fontWeight:"bold"}} onClick={Logout}><i className="fa  fa-sign-out"></i>Logout </button> 
               </Link>
            </li>
        </ul>
    </div>
</nav>
   
<div className="bgclr">
         <div className="container">
        <div className="row">
            <div className="col-3"></div>
            <div className="card m-3 col-6" style={{backgroundColor:"#d0c9c3",borderRadius:"1.5rem"}}>
                <br/>
                <h3 className="card-header text-center" style={{backgroundColor:"#414654",color:"whitesmoke",borderRadius:"1.5rem"}}>Loan Form</h3>
           
            <div className="card-body">
        <form onSubmit={submitHandler}>
            <div className="offset-2">
                     <div className="form-group">
            <label htmlFor="accountHolderName">accountHolderName</label>
            <input type="accountHolderName" className="form-control" name="accountHolderName" id="accountHolderName" value={accountHolderName} onChange={(e)=>setAccountHolderName(e.target.value)}></input>
            {Object.keys(accountHolderNameErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{accountHolderNameErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="loanType">Loan Type</label>
            <select value={selectedVal} onChange={handleChange}>
                <option value="none">Select Option</option>
                <option value="Personal/Home Loan">Personal/Home Loan</option>
                <option value="Education">Education</option>
            </select>
         
            {
                selectedVal==='Personal/Home Loan'?<div><form>
                     <div className="form-group">
            <label htmlFor="annualIncome">Annual Income</label>
            <input type="annualIncome" className="form-control" name="annualIncome" id="annualIncome" onChange={(e)=>setAnnualIncome(e.target.value)}></input>
            {Object.keys(annualIncomeErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{annualIncomeErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input type="companyName" className="form-control" name="companyName" id="companyName" onChange={(e)=>setCompanyName(e.target.value)}></input>
            {Object.keys(companyNameErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{companyNameErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="designation">Designation</label>
            <input type="designation" className="form-control" name="designation" id="designation" onChange={(e)=>setDesignation(e.target.value)}></input>
            {Object.keys(designationErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{designationErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="totalExp">Total Experience</label>
            <input type="totalExp" className="form-control" name="totalExp" id="totalExp" onChange={(e)=>setTotalexp(e.target.value)}></input>
            {Object.keys(totalExpErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{totalExpErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="currentExp">current Experience</label>
            <input type="currentExp" className="form-control" name="currentExp" id="currentExp" onChange={(e)=>setCurrentExp(e.target.value)}></input>
            {Object.keys(currentExpErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{currentExpErr[key]}</div>
            })}
        </div>
                </form></div>
                :selectedVal==='Education'?<div><form>
                     <div className="form-group">
            <label htmlFor="courseFee">CourseFee</label>
            <input type="courseFee" className="form-control" name="courseFee" id="courseFee" onChange={(e)=>setCourseFee(e.target.value)}></input>
            {Object.keys(courseFeeErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{courseFeeErr[key]}</div>
            })}

        </div>
        <div className="form-group">
            <label htmlFor="course">Course</label>
            <input type="course" className="form-control" name="course" id="course" onChange={(e)=>setCourse(e.target.value)}></input>
            {Object.keys(CourseErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{CourseErr[key]}</div>
            })}
            
        </div>
        <div className="form-group">
            <label htmlFor="fatherName">Father Name</label>
            <input type="fatherName" className="form-control" name="fatherName" id="fatherName" onChange={(e)=>setFatherName(e.target.value)}></input>
            {Object.keys(fatherNameErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{fatherNameErr[key]}</div>
            })}
            
        </div>
        <div className="form-group">
            <label htmlFor="fatherOccupation">father Occupation</label>
            <input type="fatherOccupation" className="form-control" name="fatherOccuption" id="fatherOccuption" onChange={(e)=>setFatherOccupation(e.target.value)}></input>
            {Object.keys(fatherOccupationErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{fatherOccupationErr[key]}</div>
            })}
            
        </div>
        <div className="form-group">
            <label htmlFor="annualIncome">Annual Income</label>
            <input type="annualIncome" className="form-control" name="annualIncome" id="annualIncome" onChange={(e)=>setAnnualIncome(e.target.value)}></input>
            {Object.keys(annualIncomeErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{annualIncomeErr[key]}</div>
            })}
            
        </div>
                </form></div>:null
            }
           
        </div>
        <div className="form-group">
            <label htmlFor="loanAmount">loanAmount</label>
            <input type="loanAmount" className="form-control" name="loanAmount" id="loanAmount" onChange={(e)=>setLoanAmount(e.target.value)}></input>
            {Object.keys(loanAmountErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{loanAmountErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="loanApplyDate">loanApplyDate</label>
            <DatePicker type="loanApplyDate" className="form-control" name="loanApplyDate" id="loanApplyDate" selected={loanApplyDate} onChange={dateChange} minDate={new Date()} maxDate={new Date()}/>
            {Object.keys(loanApplyDateErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{loanApplyDateErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="ROI">ROI</label>
            <input type="ROI" className="form-control" name="ROI" id="ROI" onChange={(e)=>setROI(e.target.value)}></input>
            {Object.keys(ROIErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{ROIErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="duriation">Duriation</label>
            <input type="duriation" className="form-control" name="duriation" id="duriation" onChange={(e)=>setDuriation(e.target.value)}></input>
            {Object.keys(duriationErr).map((key)=>{
                return <div key={key} style={{color:"red"}}>{duriationErr[key]}</div>
            })}
        </div>
        <div>
        <button type="submit" className="btn btn-primary mr-1">Submit</button>
        </div>
</div>
        </form>
        </div>
    </div>
  
    </div>
    </div>
</div>
  </div>
}
export default Loan;