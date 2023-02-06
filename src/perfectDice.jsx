

import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"

// import '../dicegame/dicegame.css'

function PerfectDice() {

  const [dis, setdis] = useState("d-none");
  const [amountbtndisable, setAmountBtnDisable] = useState(false);
  const [totalWinning, setTotalWinning] = useState(parseInt(0));


  const [data, setdata] = useState([20, 60, 100, 600, 1000, 2000]);
  const [inputvalue, setInputvalue] = useState(parseInt(0));
  const [img, setImg] = useState("dice-4")
  const [computer1, setComputer1] = useState()
  // const [computer2, setComputer2] = useState()

  // const [costomer1, setCostomer1] = useState()
  const [costomer2, setCostomer2] = useState()

  const [Dice, setRolldice] = useState(true)

  let [totalAmount, setTotalAmount] = useState(parseInt(1000));





  function rollDice() {
    setAmountBtnDisable(true)
    if (inputvalue <= totalAmount) {
      const dice = [...document.querySelectorAll(".die-list")];
      var datas = []
      dice.forEach((die, index) => {

        toggleClasses(die);

        var total = die.dataset.roll = getRandomNumber(1, 6);
        console.log(total)
        datas.push(total)
        console.log(total)



      });
      console.log(datas)

      var computer1 = (datas[0] + datas[1]);
      var costomer2 = (datas[2] + datas[3]);
      console.log(computer1, costomer2)

      setComputer1(computer1)
      setCostomer2(costomer2)
      console.log(data[0], data[1])

      setTotalAmount(totalAmount = totalAmount - inputvalue)




      setInputvalue(0)





      setTimeout(() => {
        debugger


        if (computer1 == costomer2) {

          setTotalAmount(totalAmount + inputvalue)


          toast(` Draw the match ${computer1} == ${costomer2}`,
            {
              position: toast.POSITION.TOP_CENTER,
              className: 'toasts',



            });
          setAmountBtnDisable(false)

        }
        else if (computer1 > costomer2) {
          toast(`Computer win the game by ${computer1 - costomer2} points`, {
            position: toast.POSITION.TOP_CENTER,
            className: 'toasts'
            //  toast("computer win the game",{


          })


          //  const wincolor = [...document.querySelectorAll(".die-item")];
          //     wincolor.classList.style.backgroundColor="black";

          setAmountBtnDisable(false)


        } else {
          debugger
          let x = totalAmount + inputvalue * 1.5;
          setTotalAmount(x)

          toast(`Coustomer win the game ${costomer2 - computer1} points`, {
            position: toast.POSITION.TOP_CENTER,
            className: 'toasts'

          });




          setTotalWinning(inputvalue * 1.5)

          setAmountBtnDisable(false)

        }
        setTimeout(() => {
          document.querySelector(".count_box").classList.remove("d-none")
        }, 50);
        setTimeout(() => {
          document.querySelector(".count_box").classList.add("d-none")
        }, 1500);




      }, 3000);




    } else {
      // alert('amount will be low')



      toast(`amount will be low ${''}`, {
        position: toast.POSITION.TOP_CENTER,
        className: 'toasts'

      });
      setInputvalue(0)
      setAmountBtnDisable(false)


    }




  }


  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }

  function getRandomNumber(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    // console.log(min)

    return Math.floor(Math.random() * (max - min + 1)) + min;


  }



  const btnpaise = (e) => {

    setInputvalue(inputvalue + parseInt(e))

  }




  const restbtn = () => {
    debugger
    setInputvalue(0)
    setTotalAmount(1000)
    setTotalWinning(0)


  }

  return (

    <>

      <ToastContainer autoClose={1500} />

      <div>
        <div className='main-Background' >
          <div className="row block" >
            <div className="col-lg-3 col-12  col-sm-12">
              <div className=" d-flex" style={{ display: "inline" }}>
                {/* <a className="mt-5  emojyimg text-decoration-none" href="#">🤑🤑 / 👻👽</a> */}
                <h1 className="text-white mt-2 dices  mx-5 ">Dice <img src="images/DiceIcon-header.png" className="diceImg" alt="" /></h1>
                {/* === mobil  */}
                <span className=" p-2 winAmountNone" style={{ color: '#F5DC8A', marginLeft: '-20px' }}> <span className="text-white">Win Amount :</span>  {totalWinning}</span>

              </div>
              <div className="text-white count_box mx-3 d-none" >
                <div className="score rounded mx-2 text-danger mar-Computer"     >Computer : <span style={{ color: '#F2D388' }}> {computer1}</span></div>
                {/* <div className="score rounded mx-2 text-danger mar-Computer"     >Computer : <span style={{color:'#F2D388'}}> {computer1 + computer2}</span></div> */}

                {/* :<span className=" " style={{ color: '#F5DC8A' }}>  </span> */}
                <div className="score rounded mx-2 text-success mar-customer"     >Customer :  <span style={{ color: '#F2D388' }}>{costomer2}</span> </div>

              </div>

            </div>
            <div className="col-lg-6 col-sm-12 mt-3">
              <div className="alertprint mt-2">
                <div class="alert border border-info   alertsize opacity-75 text-center  " style={{ backgroundColor: "#0E1B2B", color: 'white' }} role="alert">
                  This is a primary alert—check it out!
                </div>
              </div>


              <div className="text-white text-center fw-bolder fs-3" style={{ color: '#F5DC8A', marginTop: '60px' }}>
                STAKE : <span className=" p-2 " style={{ color: '#F5DC8A' }}>{inputvalue} INR</span>

                <p > TotalAmount : <span className=" p-2 " style={{ color: '#F5DC8A' }}>{totalAmount}</span></p>

              </div>
            </div>
            <div className="col-3">

              <div className="text-white text-center fw-bolder fs-3 jackpotimg">
                {/* <img src="images/jackpot-header-bg.png" className="mt-5 jackpotimg" alt="" /> */}
                <img src="images/DiceImg/jackpot-header-bg.png" className="mt-5 " alt="" />
                <p>  Win Amount : <span className=" p-2 " style={{ color: '#F5DC8A' }}>{totalWinning} INR</span></p>

              </div>
            </div>
            <div class="dice" style={{}}>

              <ol class="die-list even-roll ol1" data-roll="1" id="die-1">
                <li class="die-item" data-side="1">
                  <span class="dot"></span>
                </li>
                <li class="die-item" data-side="2">
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-item" data-side="3">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-item" data-side="4">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-item" data-side="5">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-item" data-side="6">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
              </ol>
              <ol class="die-list even-roll ol2" data-roll="1" id="die-1">
                <li class="die-item" data-side="1">
                  <span class="dot"></span>
                </li>
                <li class="die-item" data-side="2">
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-item" data-side="3">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-item" data-side="4">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-item" data-side="5">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-item" data-side="6">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
              </ol>

              <ol class="die-list odd-roll ol3" data-roll="1" id="die-2">
                <li class="die-items" data-side="1">
                  <span class="dot"></span>
                </li>
                <li class="die-items" data-side="2">
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-items" data-side="3">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-items" data-side="4">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-items" data-side="5">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
                <li class="die-items" data-side="6">
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                </li>
              </ol>

              <ol class="die-list odd-roll ol4" data-roll="1" id="die-2">
                <li class="die-items" data-side="1" >
                  <span class="dot onedots"></span>
                </li>
                <li class="die-items" data-side="2">
                  <span class="dot onedots"></span>
                  <span class="dot onedots"></span>
                </li>
                <li class="die-items" data-side="3">
                  <span class="dot onedots"></span>
                  <span class="dot onedots"></span>
                  <span class="dot onedots"></span>
                </li>
                <li class="die-items" data-side="4">
                  <span class="dot  onedots"></span>
                  <span class="dot  onedots"></span>
                  <span class="dot  onedots"></span>
                  <span class="dot  onedots"></span>
                </li>
                <li class="die-items" data-side="5">
                  <span class="dot onedots"></span>
                  <span class="dot onedots"></span>
                  <span class="dot onedots"></span>
                  <span class="dot onedots"></span>
                  <span class="dot onedots"></span>
                </li>
                <li class="die-items" data-side="6">
                  <span class="dot onedots"></span>
                  <span class="dot onedots"></span>
                  <span class="dot onedots"></span>
                  <span class="dot onedots"></span>
                  <span class="dot onedots"></span>
                  <span class="dot onedots"></span>
                </li>
              </ol>
            </div>





          </div>




          <div class="alert border border-info   fs-4 opacity-75  mainkeyboardss col-6 " style={{ backgroundColor: "#0E1B2B", color: 'white', marginLeft: '25%', marginTop: '8%' }} role="alert">
            <input value={inputvalue} onChange={(e) => setInputvalue(parseInt(e.target.value))} placeholder={0} type="number" className=' border-2 rounded border-warming  text-white fff' style={{ width: '15%', backgroundColor: "#2D432D" }} />

            {/* Dicess */}
            {data.map(d => <button type="button" onClick={(e) => btnpaise(e.target.value)} disabled={(amountbtndisable ? true : false)} key={d} value={d} className="xbtn mx-2 rounded px-2 ">{d}</button>)}

            <button disabled={(inputvalue >= 20) ? false : true} className="playbtn fw-bold rounded px-4 text-white disabl" onClick={rollDice}>PLAY</button>

            <button className="playbtn fw-bold rounded px-4 text-white" onClick={restbtn}>Reset</button>

          </div>



          {/* =============  mobil phone*/}
          <div className="mainkeyboard p-5">
            <div class="  border-info mainkeyboard fs-4 opacity-75  alert" style={{ backgroundColor: "#0E1B2B", color: 'white', marginTop: '-6%', width: "100%" }} role="">



              <input value={inputvalue} onChange={(e) => setInputvalue(parseInt(e.target.value))} onFocus={(e) => setdis()} placeholder={0} type="number" className=' border-2 c border-warming mx-3 text-white mt-2 mx-1' style={{ width: '85%', backgroundColor: "#2D432D" }} />



              {data.map(d => <button type="button" onClick={(e) => btnpaise(e.target.value)} disabled={(amountbtndisable ? true : false)} key={d} value={d} className={`xbtn mx-2 rounded  col-3 mt-2 ${dis}`}>{d}</button>)}


              {/* <p className="dice" style={{ hight: '50px', width: '50px' }}></p> */}

            </div>
            <button disabled={(inputvalue >= 20) ? false : true} className="playbtn fw-bold rounded p-2  text-white disabl w-100" onClick={rollDice} >PLAY</button>
          </div>
          {/* ======== */}
          {/* <button className="playbtn fw-bold rounded px-4 text-white" onClick={restbtn}>Reset</button> */}


        </div>


      </div>
      {/* ++++++++======== */}


    </>
  )
}

export default PerfectDice;


