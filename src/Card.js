import React , {useState}  from "react";
import { FaUser } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

function Card () {
  const [ count1,setCount1 ] = useState(0);
  const [ count2,setCount2 ] = useState(0);
  const [ count3,setCount3 ] = useState(0);

  return(
    <div class='section' id='content-section'>
      <div class='container'>
        <div class='cards'>

        <div class='card1'>
          <div class='c' id='red' >

            <div id='logo1'><FaUser /> </div>

            <div>
              <div class='num' onClick={()=>setCount1(count1+1)}>
                {count1}
              </div>
              <div class='num-student'>Regular student</div>
            </div>

          </div>
        </div>

        <div class='card1'>
          <div class='c' id='violet' >

            <div id='logo1'><FaUser /> </div>

            <div>
            <div class='num' onClick={()=>setCount2(count2+1)}>
                {count2}
              </div>
              <div class='num-student'>Remedial student</div>
            </div>

          </div>

        </div>

        <div class='card1'>
          <div class='c' id='green' >

            <div id='logo1'><FaPerson /> </div>

            <div>
            <div class='num' onClick={()=>setCount3(count3+1)}>
                {count3} 
              </div>
              <div class='num-student'> In  paid  clubs</div>
            </div>

          </div>

        </div>

        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default  Card;