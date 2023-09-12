import React, { useRef, useEffect, useState } from 'react'
import '../style/home.css'
import { VscChevronDown, VscFolderOpened, VscChevronRight, VscChromeClose, VscChevronUp } from "react-icons/vsc"
import { MdOpenInNew } from 'react-icons/md';
import {HiBriefcase, HiAcademicCap} from "react-icons/hi"
import {FaProjectDiagram, FaTrophy} from "react-icons/fa"
import emailjs from '@emailjs/browser';
var { SocialIcon } = require('react-social-icons');

const Home = (props:any) =>{
    const [emailPage,setPage]=useState(false)
    const myRef0:any = useRef(null)
    const myRef1:any = useRef(null)
    const myRef2:any = useRef(null)
    const myRef3:any = useRef(null)
    const myRef4:any = useRef(null)
    const myRef5:any = useRef(null)
    const myRef6:any = useRef(null)
    const myRef7:any = useRef(null)
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
            "tag":"Skills",
            "refFunc":() => myRef5.current.scrollIntoView({block: "start", behavior: "smooth"})
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
            "tag":"Achievements",
            "refFunc":() => myRef6.current.scrollIntoView({block: "start", behavior: "smooth"})
        },
        {
            "tag":"Online Courses",
            "refFunc":() => myRef7.current.scrollIntoView({block: "start", behavior: "smooth"})
        },
        {
            "tag":"Contact",
            "refFunc":() => myRef4.current.scrollIntoView({block: "start", behavior: "smooth"})
        },
        {
            "tag":"Leave me a message",
            "refFunc":()=>setPage(true)
        }]
    const social_icons = [
        "mailto:apoorvarajan1997@gmail.com",
        "https://www.linkedin.com/in/apoorva-rajan/",
        "https://github.com/apoorvarajan"
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
            "role":"Graduate Research Assistant",
            "company":"at Manning College of Information and Computer Science (University of Massachusetts Amherst)",
            "desc":["Designed and Implemented a search web application using React, Redux, Typescript, CSS, HTML to enable analysts to efficiently search and explore entity relationships of events in a cross-lingual event and argument retrieval model","Demonstrated the project’s capabilities in a live presentation at IARPA’s Better Demo Day."],
            "time":"Jan 2023 - Mar 2023"
        },
        {
            "role":"Graduate Research Assistant",
            "company":"at Elaine Marieb College of Nursing (University of Massachusetts Amherst)",
            "desc":["Designed and implemented a WordPress-based web toolkit for the Elaine Marieb College of Nursing, enabling Doctor of Nursing Practice (DNP) students to culturally adapt Cognitive Behavioral Therapy (CBT) and Motivational Interviewing techniques."],
            "time":"Jun 2023 - Aug 2023"
        },
        {
            "role":"Senior Software Engineer",
            "company":"at redBus,Ibibo Group Pvt. Ltd",
            "desc":[],
            "time":"Jan 2022 - July 2022"
        },
        {
            "role":"Software Engineer",
            "company":"at redBus,Ibibo Group Pvt. Ltd",
            "desc":["My responsibilities included the development and enhancements of redBus mobile website for multiple countries, in particular Peru and Colombia, lusing the MERN stack in Typescript.Collaborated with multiple teams and gained knowledge and experience in various technologies.Been part of Browser and Beyond Webinar .As well, I have frequently taken on tasks that are additional to my expected duties."],
            "time":"Aug 2019 - Jan 2022"
        },
        {
            "role":"Trainee Technology",
            "company":"at Publicis Sapient",
            "desc":["Contributed to the development of the Customer Data Platform, acquiring experience and knowledge in Apache Spark, Scala, and a range of Google Cloud Platform products."],
            "time":"May 2018 - July 2018"
        },
        {
            "role":"Career Developer",
            "company":"at Manning College of Information and Computer Science (University of Massachusetts Amherst)",
            "desc":["Assisting fellow students in their pursuit of a career by furnishing them with valuable resources and services to facilitate career planning, guiding them through career strategies, and assisting them in exploring a wide range of career opportunities."],
            "time":"Jun 2023 - Present"
        }
    ]
    const proj = [
        {
            "role":"Clustering and Analysis of Negative Reviews",
            "desc":["Employed PySpark and SparkNLP to cluster and categorize negative Amazon reviews into product and service issues, resulting in the discovery that over 30% of negative reviews were related to service issues."],
            "link":"https://github.com/apoorvarajan/negativeReviewAnalysis"
        },
        {
            "role":"BETTER App -- IARPA",
            "desc":["Implemented a search web application using React, Redux, Typescript, CSS, HTML to enable analysts to efficiently search and explore entity relationships of events in a cross-lingual event and argument retrieval model"],
            "link":"https://github.com/apoorvarajan/better_app_CIIR"
        },
        {
            "role":"Colorization and Holographic Projection of forensic sketches",
            "desc":["Built a Convolutional Neural Network (CNN) Model for colorization and holographic representation of forensic sketches using TensorFlow and TFLearn libraries aimed to improve forensic sketch analysis",
            "The model utilizes batch normalization and dropout regularization techniques to generate colored images with 0.7 accuracy and projected them using a hologram leveraging image processing techniques with Python"],
            "link":"https://github.com/apoorvarajan/s8-colorization_and_holographic-representation-of-forensic-sketches."
        },
        {
            "role":"Stock Price Analysis and Prediction using LSTM",
            "desc":["Analyzed and predicted future stock prices of tech companies using LSTM with an accuracy of 93.2% by implementing an LSTM model and visualizing the predictions to identify trends in the data."],
            "link":"https://github.com/apoorvarajan/StockPricePrediction"
        }
    ]
    const edu = [
        {
            "role":"Master of Science in Computer Science at the University of Massachusetts Amherst",
            "desc":["Relevant Courses: Applied Information Retrieval, Machine Learning, Distributed and Operating Systems, Advanced Algorithms, Systems for Data Science",
                    "Web and Social Media Team Head of Voices of Data Science (Sep 2022 - April 2023)",
                    "Career Developer with Manning College of Information & Computer Science Careers (Jan 2023 - Present)",
                    "Software Developer at Center for Intelligent Information Retrieval (Jan 2023 - Mar 2023)",
                    "Research Assistant at College of Nursing (June 2023 - Present)"]
        },
        {
            "role":"Bachelor of Technology in Computer Science and Engineering from Model Engineering College, A.P.J Abdul Kalam Technological University",
            "desc":["Relevant Courses: Data Structures, Machine Learning, Cloud Computing, Data Mining and Warehousing, Object Oriented Design and Programming, Principles of Database Design",
                    "IEEE Computer Society Coordinator (2017 - 2018)",
                    "Social Initiative Event Coordinator of Excel 2018"]
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
    const Achievements = [
        {
            "title":"Trailblazer Award",
            "doc":"../documents/trailblazer_Redbus.jpeg",
            "time":"Quarter 2, 2021-2022"
        },
        {
            "title":"Titans of Quarter 3",
            "doc":"../documents/titans_Redbus.jpeg",
            "time":"Quarter 3, 2019-2020"
        }
    ]
    const Online_Courses = [
        {
            "Provider":"Stanford|Online, Coursera",
            "CourseName":"Machine Learning",
            "Certificate":"../documents/stanford_ml.jpg"
        },
        {
            "Provider":"Binx.io and Xebia Academy",
            "CourseName":"GCP Big Data & ML Fndamentals",
            "Certificate":"../documents/gcp-bigdataml-fundamentals-certificate.jpg"
        },
        {
            "Provider":"Udemy",
            "CourseName":"Python for Data Science and Machine Learning Bootcamp",
            "Certificate":"../documents/python_ml_dl_datascience.jpeg"
        },
        {
            "Provider":"Udemy",
            "CourseName":"Scala and Spark for Big Data and Machine Learning",
            "Certificate":"../documents/SparkScala_Course_Certificate.jpg"
        },
        {
            "Provider":"Udemy",
            "CourseName":"Progressive Web Apps (PWA) - The Complete Course Guide",
            "Certificate":"../documents/PWA-UDEMY-CERTIFICATE.jpg"
        }
    ]
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
                                MS in CS at UMass Amherst | Software Engineer | <a target="_blank" className="anchor_cd" href="https://www.cics.umass.edu/people/apoorva-rajan" > Career Developer with CICS Careers <MdOpenInNew /> </a>
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
                        <img className="photo" height="250em" src="./headshot.png"/>
                    </div>
                </div>
                <div className="about-me">
                <div>Hey there! Great to have you here! I'm Apoorva, a tech enthusiast on a mission to unravel the mysteries of technology.</div>
                    After working three years as Software Engineer in the field, I am currently pursuing Mater's in Computer Science.
                    Learning, for me, knows no limits. It's a lifelong adventure that goes beyond the classroom. 
                    I'm always eager to apply my growing expertise, collaborate with like-minded folks, and make a positive impact in the tech world.
                    I believe that great software is not just about code; it's about understanding the needs of users and crafting solutions that enhance their lives. 
                    I'm passionate about creating meaningful experiences through elegant designs, seamless functionality, and scalable solutions.
                    So, whether you have a challenging project in mind or simply want to geek out about the latest tech trends, I'm here for it!
                    Looking forward to embarking on this exciting journey with you!
                </div>
                {emailPage?
                <div className="modal-popup">
                    <div className="email-wrap">
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
                        </div>
                    </div>:null}
                    {/* <div className="send-email-button-wrap" onClick={()=>setPage(!emailPage)}>
                        <div>
                            {emailPage?"Close":"Send me a message"}
                        </div>
                    </div> */}
                </div>
            <div className="details-wrap">
                <div className="skills subsec" ref={myRef5}>
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
                        {value.content.map((item2:any,key2:any)=>{
                            return <div className="wrap-exp" onClick={()=>{
                                        let elem = document.getElementById("desc_"+key+key2)
                                        if(item2.role=="Senior Software Engineer"){
                                            elem= document.getElementById("desc_"+key+(key2+1))
                                        }
                                        if(elem){
                                            if(elem.style.display=='block'){
                                                elem.style.display='none'
                                            }
                                            else{
                                                elem.style.display='block'
                                            }
                                        }
                                    }}>
                                    <div>
                                        <div className="exp-icon-wrap">
                                            {value.icon}
                                        </div>
                                        {key2<value.content.length-1 &&<div className="vertical-line"></div>}
                                    </div>
                                    <div className="ach-div">
                                        <div className="role">
                                            {item2.link? <a target="_blank" className="anchor_cd" href={item2.link}>{item2.role}<MdOpenInNew /></a>:item2.role}
                                            {item2.time?<span style={{float: 'right',color: 'black',fontWeight: 'normal'}}>{item2.time}</span>:null}
                                        </div>
                                        {item2.company?<div className="company-name">{item2.company}</div>:null}
                                        <div style={{minHeight:"2em"}}>
                                            <ul   className="expand-sec" id={"desc_"+key+key2} style={{display:'none'}}>
                                                {item2.desc.map((descitem:any,desckey:any)=>{
                                                    return <li>
                                                                <div className="role-desc">
                                                                    {descitem}
                                                                </div>
                                                            </li>
                                                })}
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                        })}
                    </div>
                    </div>
                })}
                <div className="subsec" ref={myRef6}>
                        <div className="head">
                            {"Achievements"}
                            <div className="line"/>
                        </div>
                        <div className="exp-list ach">
                        {Achievements.map((item,key2)=>{
                            return <div>
                                    <div>
                                        <div className="exp-icon-wrap">
                                            <FaTrophy/>
                                        </div>
                                        {key2<Achievements.length-1 &&<div className="vertical-line"></div>}
                                    </div>
                                    <div className="ach-div">
                                        <div className="role">
                                            {item.title}
                                            <span style={{float: 'right',color: 'black',fontWeight: 'normal'}}>{item.time}</span>
                                        </div>
                                        <div className="view-button" onClick={()=>{
                                            let elem = document.getElementById("cert_"+key2)
                                            if(elem){
                                                if(elem.style.display=='block'){
                                                    elem.style.display='none'
                                                }
                                                else{
                                                    elem.style.display='block'
                                                }
                                            }
                                        }}>
                                            VIEW CERTIFICATE
                                        </div>
                                        {/* <embed src={item.doc} width="800px" height="2100px" /> */}
                                        <img src={item.doc} width="500em" id={"cert_"+key2} hidden/>
                                    </div>
                                </div>
                        })}
                    </div>
                    </div>
                    <div className="subsec" ref={myRef7}>
                        <div className="head">
                            {"Online Course and Certifications"}
                            <div className="line"/>
                        </div>
                    <div className="exp-list ach">
                        {Online_Courses.map((item,key2)=>{
                            return <div>
                                    <div>
                                        <div className="exp-icon-wrap">
                                            <FaTrophy/>
                                        </div>
                                        {key2<Online_Courses.length-1 &&<div className="vertical-line"></div>}
                                    </div>
                                    <div className="ach-div">
                                        <div className="role">
                                            {item.CourseName}
                                            <span style={{float: 'right',color: 'black',fontWeight: 'normal'}}>{item.Provider}</span>
                                        </div>
                                        <div className="view-button" onClick={()=>{
                                            let elem = document.getElementById("course_"+key2)
                                            if(elem){
                                                if(elem.style.display=='block'){
                                                    elem.style.display='none'
                                                }
                                                else{
                                                    elem.style.display='block'
                                                }
                                            }
                                        }}>
                                            VIEW CERTIFICATE
                                        </div>
                                        {/* <embed src={item.Certificate} width="800px" height="2100px" /> */}
                                        <img src={item.Certificate} width="500em" id={"course_"+key2} hidden/>
                                    </div>
                                </div>
                        })}
                    </div>
                    </div>
            </div>
            </div>
        </div>
}

export default Home