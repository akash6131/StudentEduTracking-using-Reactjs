import React from "react";
import { AiFillSketchCircle } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { BiSolidBookContent } from "react-icons/bi";
import { TbCirclePercentageFilled } from "react-icons/tb";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { RiFileChartFill } from "react-icons/ri";

function Sidenav(){
    return(
       <div class="section">
        <div class="container-fluid">
            <div class="row">
                <div class="side">
                <div class="icon"><AiFillSketchCircle /></div>
                </div>
                <div class="side">
                <div class="icon"><HiUsers /></div>
                <p class="sidetitle">Student Management</p>
                </div>
                <div class="side">
                <div class="icon"><BiSolidBookContent /></div>
                <p class="sidetitle">Financial Management</p>  
                </div>
                <div class="side">
                <div class="icon"><TbCirclePercentageFilled /></div>
                <p class="sidetitle">Quality Control</p>    
                </div>
                <div class="side">
                <div class="icon"><HiMiniSquares2X2 /></div>
                <p class="sidetitle">Report Delivery</p>
                </div>
                <div class="side">
                <div class="icon"><RiFileChartFill /></div>
                <p class="sidetitle">Attendance</p>
                </div>
            </div>
        </div>
       </div>
    )
}
export default Sidenav;