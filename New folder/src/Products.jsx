import React from 'react';
import  './product.css'
import x10 from './10-10.png'
import coe from './coe';












import entc from './entc.jpg'
import comp from './comp.jpg'
import mech from './mech.jpg'


function Products() {
    return (
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                 
                <center><h1>Departments </h1></center> 
                 <div>
        <style dangerouslySetInnerHTML={{__html: "\n\n" }} />
        <p style={{color: 'brown', wordSpacing: '5px', fontFamily: 'serif', fontWeight: 800, fontSize: '40px', textAlign: 'center'}}>Computer Engineering </p><br /><br />
        <div className="slideshow" style={{backgroundImage: 'url(comp.jpg),url(1.jpg)', width: '700px', height: '260px', align: 'center'}}><img src={comp}></img>
        </div>
        <p style={{color: 'blue', wordSpacing: '5px', fontSize: '20px'}}><b>MESCOE's Department OF Computer Engineering </b>is an exciting place to study and grow where thinkers become leaders and where there is thirst for knowledge . </p>
        <p style={{color: 'blue', wordSpacing: '5px', fontSize: '20px'}}>Established in the year 1999, the Computer Engineering department of MES College of Engineering, Pune with its team of dedicated, qualified and experienced faculty, offers a sound programme at both UG and PG levels. The department aims at providing a valuable resource not only to the industries but also the society through excellence in technical education and research.</p>
        <p style={{color: 'blue', wordSpacing: '5px', fontSize: '20px'}}>The department has 10 computer laboratories, all of which are, well equipped with latest equipments such as computers, printers and scanners. It also has a state of art seminar hall with a seating capacity of more than 150. </p>
        <p style={{color: 'blue', wordSpacing: '5px', fontSize: '20px'}}>The department organizes various events such as FDPs, conferences, workshops and seminars to keep the staff and students abreast with the latest technology.Cpmputer Engineering department always strives for Industry-Institution Interaction, Alumni interaction for industrial visits, campus placements, guest lectures, etc. for best guidance for our students.</p>
        <form action="mechanical.html">
          <center><b>
              <input type="submit" Value="Home >>" style={{backgroundColor: 'lightgrey', color: 'black'}} />
            </b></center>
        </form>
      </div>

             
               <div>
        <p style={{color: 'brown', wordSpacing: '5px', fontFamily: 'serif', fontWeight: 800, fontSize: '40px', textAlign: 'center'}}>E &amp; TC Engineering </p><br /><br />
        <div className="slideshow" style={{src: {entc}, width: '800px', height: '260px', align: 'center'}}><img src={entc}></img>
        </div>
        <p style={{color: 'blue', wordSpacing: '5px', fontSize: '20px'}}><b>E &amp; Tc Engineering in our college Accredited by NBA for Three Academic Years (2018-19 to 2020-21 i.e, up to 30-06-2021).</b></p>
        <p style={{color: 'blue', wordSpacing: '5px', fontSize: '20px'}}>
          The Electronics and Telecommunication Department of Modern Education Society's College of Engineering is established in 1999 with intake of 60 students. The intake of students increased to 120 in 2011. The department has also started the Post Graduation (PG) course M.E in Signal Processing since 2013 with an intake of 24 students, thus making a total strength of 144 students.
        </p>
        <p style={{color: 'blue', wordSpacing: '5px', fontSize: '20px'}}>The Department is accerdited by National Assesment And Accreditation Council ( NAAC ) an autonomous body funded by University Grants Commission Of Government of India with 'A' Grade in 2015 .
        </p>
        <p style={{color: 'blue', wordSpacing: '5px', fontSize: '20px'}}>The department organizes various events such as FDPs, conferences, workshops and seminars to keep the staff and students abreast with the latest technology.</p>
        <form action="welcome1.html">
          <center><b>
              <input type="submit" Value="Home >>"  style={{backgroundColor: 'lightgrey', color: 'black'}} />
            </b></center>
        </form>
      </div>
              
      <div>
        <p style={{color: 'brown', wordSpacing: '5px', fontFamily: 'serif', fontWeight: 800, fontSize: '40px', textAlign: 'center'}}>Mechanical Engineering </p><br /><br />
        <div className="slideshow" style={{backgroundImage: 'url(mech.jpg),url(1.jpg)', width: '700px', height: '260px', align: 'center'}}><img src={mech}></img>
        </div>
        <p style={{color: 'blue', wordSpacing: '5px', fontSize: '20px'}}><b>Mechanical Engineering in our college Accredited by NBA for Three Academic Years (2018-19 to 2020-21 i.e, up to 30-06-2021).
          </b>
        </p><p style={{color: 'blue', wordSpacing: '5px', fontSize: '20px'}}>Established in the year 1999, the Mechanical Engineering department of MES College of Engineering, Pune with its team of dedicated, qualified and experienced faculty, offers a sound programme at both UG and PG levels. The department aims at providing a valuable resource not only to the industries but also the society through excellence in technical education and research.</p>
        <p style={{color: 'blue', wordSpacing: '5px', fontSize: '20px'}}>Mechanical Engineering department always strives for Industry-Institution Interaction, Alumni interaction for industrial visits, campus placements, guest lectures, etc. for best guidance for our students.</p>
        <form action="entc.html">
          <center><b>
              <input type="submit" Value="Home >>" style={{backgroundColor: 'lightgrey', color: 'black'}} />
            </b></center>
        </form>
      </div>
                 
            </div>
            </div></div>
       
    );
}


export default Products;
