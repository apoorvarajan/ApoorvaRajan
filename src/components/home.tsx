import React, { useRef, useEffect, useState } from 'react'
import '../style/home.css'
import { VscChevronDown, VscFolderOpened, VscChevronRight, VscChromeClose, VscChevronUp } from "react-icons/vsc"
import {HiBriefcase, HiAcademicCap} from "react-icons/hi"
import {FaProjectDiagram} from "react-icons/fa"
import emailjs from '@emailjs/browser';
var { SocialIcon } = require('react-social-icons');
const Home = (props:any) =>{
    const [emailPage,setPage]=useState(false)
    const myRef0:any = useRef(null)
    const myRef1:any = useRef(null)
    const myRef2:any = useRef(null)
    const myRef3:any = useRef(null)
    const myRef4:any = useRef(null)
    const email_name:any = useRef(null);
    const email_id:any = useRef(null);
    const email_body:any = useRef(null);
    const sendEmail=(name:any,id:any,body:any)=>{
        let from_name=name.current.value
        let email_id=id.current.value
        let msg=body.current.value
        if(from_name=="" || email_id=="" || msg==""){
            alert("All fields are required")
        }
        else{
            emailjs.send('service_39ooedg', 'template_esgtfkf', {"from_name":from_name,"from_email":email_id,"message":msg}, 'CfzZYSUg6pFsrplYg');
        }
        alert("Thank you for sending me email! I will get back to you")
        setPage(false)
    }
    const header_elems =[
        {
            "tag":"Home",
            "refFunc":() => myRef0.current.scrollIntoView({block: "start", behavior: "smooth"})
        },
        {
            "tag":"Experience",
            "refFunc":() => myRef1.current.scrollIntoView({block: "start", behavior: "smooth"})
        },
        {
            "tag":"Projects",
            "refFunc":() => myRef2.current.scrollIntoView({block: "start", behavior: "smooth"})
        },
        {
            "tag":"Education",
            "refFunc":() => myRef3.current.scrollIntoView({block: "start", behavior: "smooth"})
        },
        {
            "tag":"Contact",
            "refFunc":() => myRef4.current.scrollIntoView({block: "start", behavior: "smooth"})
        }]
    const social_icons = [
        "https://email.com/in/jaketrent",
        "https://linkedin.com/in/jaketrent",
        "https://github.com/in/jaketrent"
    ]
    const skills = {
        "Technical Skills":{
            "Programming Language":["Python", "Javascript", "Typescript", "Scala", "C++"],
            "Web Development":["HTML","CSS","SCSS","React","Redux","Node.js","Express.js"],
            "Data Science":["Pandas","Numpy","Scikit-learn","Matplotlib","Seaborn"],
            "Database Management":["SQL","MongoDB"],
            "Big Data":["Apache Spark"]
        },
        "Soft Skills":{}
    }
    const work_Exp = [
        {
            "role":"Senior Software Engineer at redBus, Ibibo Group Pvt. Ltd.",
            "desc":"My responsibilities included the development and enhancements of redBus mobile website for multiple countries, in particular Peru and Colombia, lusing the MERN stack in Typescript. Collaborated with multiple teams and gained knowledge and experience in various technologies. Been part of Browser and Beyond Webinar . As well, I have frequently taken on tasks that are additional to my expected duties."
        },
        {
            "role":"Software Engineer at redBus, Ibibo Group Pvt. Ltd.",
            "desc":"My responsibilities included the development and enhancements of redBus mobile website for multiple countries, in particular Peru and Colombia, lusing the MERN stack in Typescript. Collaborated with multiple teams and gained knowledge and experience in various technologies. Been part of Browser and Beyond Webinar . As well, I have frequently taken on tasks that are additional to my expected duties."
        },
        {
            "role":"Trainee Technology at Publicis Sapient",
            "desc":"Contributed to the development of the Customer Data Platform, acquiring experience and knowledge in Apache Spark, Scala, and a range of Google Cloud Platform products."
        }
    ]
    const proj = [
        {
            "role":"Clustering and Analysis of Negative Reviews",
            "desc":"My responsibilities included the development and enhancements of redBus mobile website for multiple countries, in particular Peru and Colombia, lusing the MERN stack in Typescript. Collaborated with multiple teams and gained knowledge and experience in various technologies. Been part of Browser and Beyond Webinar . As well, I have frequently taken on tasks that are additional to my expected duties."
        },
        {
            "role":"BETTER App -- IARPA",
            "desc":"My responsibilities included the development and enhancements of redBus mobile website for multiple countries, in particular Peru and Colombia, lusing the MERN stack in Typescript. Collaborated with multiple teams and gained knowledge and experience in various technologies. Been part of Browser and Beyond Webinar . As well, I have frequently taken on tasks that are additional to my expected duties."
        },
        {
            "role":"Colorizaiton and Holographic Projection of forensic sketches",
            "desc":"Contributed to the development of the Customer Data Platform, acquiring experience and knowledge in Apache Spark, Scala, and a range of Google Cloud Platform products."
        },
        {
            "role":"Stock Price Visualization Website",
            "desc":"Contributed to the development of the Customer Data Platform, acquiring experience and knowledge in Apache Spark, Scala, and a range of Google Cloud Platform products."
        }
    ]
    const edu = [
        {
            "role":"Master of Science in Computer Science at the University of Massachusetts Amherst",
            "desc":"My responsibilities included the development and enhancements of redBus mobile website for multiple countries, in particular Peru and Colombia, lusing the MERN stack in Typescript. Collaborated with multiple teams and gained knowledge and experience in various technologies. Been part of Browser and Beyond Webinar . As well, I have frequently taken on tasks that are additional to my expected duties."
        },
        {
            "role":"Bachelor of Technology in Computer Science and Engineering from Model Engineering College, A.P.J Abdul Kalam Technological University",
            "desc":"My responsibilities included the development and enhancements of redBus mobile website for multiple countries, in particular Peru and Colombia, lusing the MERN stack in Typescript. Collaborated with multiple teams and gained knowledge and experience in various technologies. Been part of Browser and Beyond Webinar . As well, I have frequently taken on tasks that are additional to my expected duties."
        }
    ]
    const exp_section = {
        "WORK EXPERIENCE":{
            "content":work_Exp,
            "icon":<HiBriefcase className="exp-icon"/>,
            "ref":myRef1
        },
        "PROJECTS":{
            "content":proj,
            "icon":<FaProjectDiagram className="exp-icon"/>,
            "ref":myRef2
        },
        "EDUCATION":{
            "content":edu,
            "icon":<HiAcademicCap className="exp-icon"/>,
            "ref":myRef3
        }
    }
    return <div className="home-container" ref={myRef0}>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div id="title">
            <div className="header">
                {header_elems.map((item,key)=>{
                    return <div onClick={item.refFunc}>
                        {item.tag}
                    </div>
                })}
            </div>
            <div className="primary-wrap">
                <div className="primary-details">
                    <div className="name-contact">
                        <div className="name">
                            Apoorva Rajan
                        </div>
                        <div className="cur-status">
                            <div>
                                MS in CS at UMass Amherst | Software Engineer | Career Developer with CICS Careers
                            </div>
                        </div>
                        <div className="contact" ref={myRef4}>
                            {social_icons.map((item,key)=>{
                                return <div>
                                        <SocialIcon url={item}/>
                                    </div>
                            })}
                        </div>
                    </div>
                    <div className="photo-wrap">
                        <img className="photo" height="250em" src="./media/headshot.png"/>
                    </div>
                </div>
                <div className="about-me">
                    About me section TBD
                </div>
                {emailPage?<div className="email-wrap">
                        <div className="close-icon" onClick={()=>setPage(false)}>
                            Close
                        </div>
                        <div className="email-input-wrap">
                            <div className="email-elem">
                                <label htmlFor="emailName" >Name:</label>
                                <input ref={email_name} id="emailName" className="email-input"/>
                            </div>
                            <div className="email-elem">
                                <label htmlFor="emailid">Your Email id:</label>
                                <input ref={email_id} id="emailid" className="email-input"/>
                            </div>
                        </div>
                        <div className="email-elem">
                            <label htmlFor="body">Mail Body</label>
                            <textarea ref={email_body} id="body" className="email-textarea"/>
                        </div>
                        <div>
                            <button className="send-button" onClick={()=>sendEmail(email_name,email_id,email_body)}>Send</button>
                        </div>
                    </div>:null}
                <div className="send-email-button-wrap" onClick={()=>setPage(!emailPage)}>
                    <div>
                        {emailPage?"Close":"Send me an email"}
                    </div>
                    <div className="email-up-down">
                        {emailPage?<VscChevronUp/>:<VscChevronDown/>}
                    </div>
                </div>
            </div>
            <div className="details-wrap">
                <div className="skills subsec">
                    <div className="head">
                        SKILLS
                        <div className="line"/>
                    </div>
                    <div className="tech-skills">
                        <div className="subhead">
                            Technical Skills
                        </div>
                        <div className="techskill-class">
                            {Object.entries(skills['Technical Skills']).map(([key,value],index)=>{
                                return <div>
                                <div className="skill-title">
                                    <VscChevronDown/>
                                    <VscFolderOpened/>&nbsp;
                                    {key+":"}
                                </div>
                                <div className="skill-list">
                                    {value.map((val,ind)=>{
                                        return <div>
                                            <VscChevronRight/>&nbsp;
                                            {val}
                                        </div>
                                    })}
                                </div>
                            </div>

                            })}
                        </div>
                    </div>
                </div>
                {Object.entries(exp_section).map(([item,value],key)=>{
                    return <div className="subsec" ref={value.ref}>
                        <div className="head">
                            {item}
                            <div className="line"/>
                        </div>
                        <div className="exp-list">
                        {value.content.map((item2,key2)=>{
                            return <div>
                                    <div>
                                        <div className="exp-icon-wrap">
                                            {value.icon}
                                        </div>
                                        {key2<value.content.length-1 &&<div className="vertical-line"></div>}
                                    </div>
                                    <div>
                                        <div className="role">
                                            {item2.role}
                                        </div>
                                        <div className="role-desc">
                                            {item2.desc}
                                        </div>
                                    </div>
                                </div>
                        })}
                    </div>
                    </div>
                })}
            </div>
            </div>
        </div>
}

export default Home