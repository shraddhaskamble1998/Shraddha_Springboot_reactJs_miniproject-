import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.jsx';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Services from './Services.jsx';
import Department from './Products.jsx';
import Contact from './Contact.jsx';
import logo1 from './logo.png'
import './Welcome.css'
import new5 from'./new5.gif'

function App() {
  return (
    <>
     
   <div class="header">
  
<marquee style={{textColor: 'brown'}} bgcolor = "00997F" vspace = "20" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();" >
 <strong>
<img src={new5} />  <a href="documents/exam2020/Student circular.pdf" style={{ color: 'black' }} >Guidelines for Students - In Semester Examination (Sem I Year 2020-21)   </a> || 
<img src={new5} /> <a href="studentcorner_examination.php" target="_blank" style={{ color: 'black' }}> Class-wise common timetables for Insem Exam </a> &nbsp;  &nbsp; 

<img src={new5} /> <a href="documents/fe2021/Student_Notice02.03.2021.jpg" style={{ color: 'black' }}>Important Notice for First Year and Direct SE Students </a>   &nbsp;  &nbsp; 
<img src={new5} />  <a href="documents/fe2021/Circular_Students.jpg" style={{ color: 'black' }}>Circular: Regarding FE to BE and ME Online Class </a>   &nbsp;  &nbsp; 
<img src={new5} />  <a href="documents/fe2021/FE &amp;DSE Vruddhi Software.jpg" style={{ color: 'black' }}>Notice : FE &amp; DSE Students Fillup Vruddhi Form </a>   
<img src={new5} />  <a href="first-year-about.php" style={{ color: 'black' }}> First Year Timetable  </a> ||
<img src={new5} /> <a href="studentcorner_examination.php" style={{ color: 'black' }}> Important Circulars regarding Exam</a> ||
   
<img src={new5} /> <a href="College Information brochure-2020-21.pdf" style={{ color: 'black' }}>College Information brochure-2020-21</a> ||

</strong>
</marquee>
     
<centre>
<table >
<tr>
<td width="50px">
  </td>
  
  <td>
      <img src={logo1} />
      </td>
<td>

</td>
<td width="50px">
  </td>

  <td width="50px">
  </td>
  
      <td>
     
  <h1>MODERN EDUCATION SOCIETY'S</h1>
  <p> COLLEGE OF ENGINEERING ,PUNE</p>
 
<marquee> Accredited By NACC with Grade 'A'</marquee>

</td>


</tr>

      
</table>
</centre>

</div>

      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
     
        <Route exact path="/services" component={Services} />
        <Route exact path="/products" component={Department} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
