import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Button from "../components/Button.jsx"
import rise_above from "../assets/images/rise_above.jpg"

const Tutoring = () => {

  const instructors = [

    {
      "image": "https://www.giantbomb.com/a/uploads/square_medium/4/48992/1089078-bart.png",
      "name": "Bart Simpson",
      "technologies": ["Java", "Python"],
    },
    {
      "image": "https://i.pinimg.com/originals/52/8b/8a/528b8a72f82761343c0824ab2ff47d2e.png",
      "name": "Homer Simpson",
      "technologies": ["Java", "Python","JavaScript"],
    },
    {
      "image": "https://i.pinimg.com/originals/99/74/6f/99746f4a12ba6546c8d58cff456059be.png",
      "name": "Bender Bot",
      "technologies": ["JavaScript", "Python"],
    },
    {
      "image": "https://www.giantbomb.com/a/uploads/square_small/2/21673/1291758-krusty_the_clown.png",
      "name": "Krusty The Clown",
      "technologies": ["Python", "JavaScript", "C#", "Ruby"],
    },
    {
      "image": "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
      "name": "Lisa Simpson",
      "technologies": ["Python", "JavaScript", "C#"],
    },
    {
      "image": "https://pngimg.com/d/minions_PNG34.png",
      "name": "Bob the Minion",
      "technologies": ["Python", "JavaScript", "C#", "Ruby"],
    }
  ]

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Tutoring - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        {/* <div className="large_box">
          <h2>
            Meet Our Tutors
          </h2>
        </div> */}
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>
              Expert Tutoring To Improve Your Skills
            </h2>
            <p>
              <span>A</span>re you struggling with C#, Java, Python, or JavaScript programming? Our TechByte Learning instructors are here to help! With years of experience in the field, our instructors are available for one-on-one tutoring sessions to help you master these full stack platforms.
              Whether you are a beginner or an experienced coder looking to level up your skills, our instructors have the expertise to guide you every step of the way. 
            </p>
            <p>
              Don't let coding challenges hold you back any longer. Contact TechByte Learning today to schedule your personalized tutoring session and unlock your full coding potential.
            </p>
          </div>
          <div className="box_right_img">
            <img src={ rise_above } alt="Rise Above" />
          </div>
        </div>
        {/* END SECTION 2 */}
        {/* SECTION 3 */}
        {/* INSTRUCTOR CARDS */}
        <div className="card_container">
          {[...instructors].map((instructor, index) => {
            return(
              <div className="card_one" key={ index }>
                <img src={ instructor.image } alt="User Icon" />
                <h2>
                  { instructor.name }
                </h2>
                  <h4>
                    Language Specializations
                  </h4>
                  <ul>
                    {[...instructor.technologies].map((tech, idx) => {
                      return(
                        <li key={ idx }>
                          { tech }
                        </li>
                    )})}
                  </ul>
              </div>
            )
          })}
        </div>
        {/* END SECTION 3 */}
        <Button to="/pricingplans" text="PRICING PLANS" />
      </div>
    </main>
  );
};

export default Tutoring;
