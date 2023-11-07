import React, { useState, useRef } from "react"
import circle_icon from "../Assests/Circle.jpg"
import cross_icon from "../Assests/Cross.png"
import "./TicTacToe.css"
// let data = ["", "", "", "", "", "", "", "", ""]

// const TicTacToe = () => {
//   let [count, setCount] = useState(0)
//   let [lock, setLock] = useState(false)
//   let titleRef = useRef(null)
//   let box1 = useRef(null)
//   let box2 = useRef(null)
//   let box3 = useRef(null)
//   let box4 = useRef(null)
//   let box5 = useRef(null)
//   let box6 = useRef(null)
//   let box7 = useRef(null)
//   let box8 = useRef(null)
//   let box9 = useRef(null)

//   let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

//   const checkWin = () => {
//     if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
//       won(data[0])
//     } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
//       won(data[3])
//     } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
//       won(data[6])
//     } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
//       won(data[0])
//     } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
//       won(data[1])
//     } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
//       won(data[2])
//     } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
//       won(data[0])
//     } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
//       won(data[0])
//     } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
//       won(data[2])
//     }
//   }

//   const won = (winner) => {
//     setLock(true)
//     if (winner === "x") {
//       titleRef.current.innerHTML = `Congratulations : <img src=${cross_icon}> Wins`
//     } else {
//       titleRef.current.innerHTML = `Congratulations :<img src=${circle_icon}> Wins`
//     }
//   }
//   const reset = () => {
//     setLock(false)
//     data = ["", "", "", "", "", "", "", "", ""]
//     titleRef.current.innerHtml = "Tic Tac Toe In <span>React</span>"
//     // box_array.map((e) => {
//     //   e.current.innerHTML = ""
//     // })
//   }

//   const toggle = (e, num) => {
//     if (lock) {
//       return 0
//     }
//     if (count % 2 === 0) {
//       console.log(e.target.innerHTML)
//       e.target.innerHTML = `<img src='${cross_icon}'>`
//       data[num] = "x"
//       setCount(++count)
//       console.log(data)
//     } else {
//       console.log(e.target.innerHTML)

//       e.target.innerHTML = `<img src='${circle_icon}'>`
//       data[num] = "o"
//       setCount(++count)
//     }
//     checkWin()
//   }

//   return (
//     <div className="container">
//       <h1 className="title" ref={titleRef}>
//         Tic Tac Toe Game In<span>React</span>
//       </h1>
//       <div className="board">
//         <div className="row1">
//           <div
//             className="boxes"
//             ref={box1}
//             onClick={(e) => {
//               toggle(e, 0)
//             }}
//           ></div>
//           <div
//             className="boxes"
//             ref={box2}
//             onClick={(e) => {
//               toggle(e, 1)
//             }}
//           ></div>
//           <div
//             className="boxes"
//             ref={box3}
//             onClick={(e) => {
//               toggle(e, 2)
//             }}
//           ></div>
//         </div>

//         <div className="row2">
//           <div
//             className="boxes"
//             ref={box4}
//             onClick={(e) => {
//               toggle(e, 3)
//             }}
//           ></div>
//           <div
//             className="boxes"
//             ref={box5}
//             onClick={(e) => {
//               toggle(e, 4)
//             }}
//           ></div>
//           <div
//             className="boxes"
//             ref={box6}
//             onClick={(e) => {
//               toggle(e, 5)
//             }}
//           ></div>
//         </div>
//         <div className="row3">
//           <div
//             className="boxes"
//             ref={box7}
//             onClick={(e) => {
//               toggle(e, 6)
//             }}
//           ></div>
//           <div
//             className="boxes"
//             ref={box8}
//             onClick={(e) => {
//               toggle(e, 7)
//             }}
//           ></div>
//           <div
//             className="boxes"
//             ref={box9}
//             onClick={(e) => {
//               toggle(e, 8)
//             }}
//           ></div>
//         </div>
//       </div>
//       <button
//         className="reset"
//         onClick={() => {
//           reset()
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   )
// }

// export default TicTacToe

// src/TicTacToe.js

// import React, { useState } from "react"

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (index) => {
    const newBoard = [...board]
    newBoard[index]
    // console.log(board)
    if (calculateWinner(board) || newBoard[index]) {
      return
    }

    // newBoard[index] = xIsNext ? "x" : "o"

    newBoard[index] = xIsNext ? (
      <img src={cross_icon}></img>
    ) : (
      <img src={circle_icon}></img>
    )
    setBoard(newBoard)
    setXIsNext(!xIsNext)
  }

  const renderSquare = (index) => {
    return (
      <div className="boxes" onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    )
  }

  const reset = () => {
    setBoard(Array(9).fill(null))
    setXIsNext(true)
  }
  const winner = calculateWinner(board)
  let status
  if (winner) {
    status = (
      <div className="status">
        WINNER:
        <img src={winner}></img>
      </div>
    )
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        <div className="row1">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row2">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row3">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button
        className="reset"
        onClick={() => {
          reset()
        }}
      >
        Reset
      </button>
    </div>
  )
}

// // Helper function to calculate the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]

    if (squares[a] != null && squares[b] != null && squares[c] != null) {
      if (
        squares[a].props.src &&
        squares[a].props.src === squares[b].props.src &&
        squares[a].props.src === squares[c].props.src
      ) {
        return squares[a].props.src
      }
    }
  }
  return null
}

export default TicTacToe
