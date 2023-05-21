import React from 'react';
import '../styles/Section.css';



const styles = {
  sectionStyles: {
    background: 'lightblue',
  },
};

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>Projects</h2>
      <p>
        <h3>About Me!</h3>
      </p>
      <p>
       <h4> Hi, I'm Valerie! I am from the DFW area. I am a student at UTA pursuing a bachelor's degree. I recently enrolled in a Full Stack Web Development Bootcamp at SMU. I am learning how to use HTML, CSS, and JavaScript. This course will help open new doors for me, and I hope to be a great developer come the end of this bootcamp. Aside from school, I work at Apple as a product-zone specialist. When I am not having to do school work or regular work, I enjoy shopping, traveling, and watching tv. I also like to keep an active lifestyle, just to have a good over-all health.</h4>
      </p>
      <p>
       <h4>  My current work is available on Github.
                <a href="https://floating-brushlands-04245.herokuapp.com/">Click here</a></h4>

      </p>
    </section>
  );
}

export default Section;
