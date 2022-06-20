import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false , onClick = () => {}, }) {
  return (
    <button className={(isActive ? "chip active" : "chip")} onClick={(onClick)}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={(onClick)}>{`X`}</span>
    </button>
  )
}

export default Chip
