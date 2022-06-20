import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  const {item} = props
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{item?.item_name}</h4>

      <ul className="fact-list">{
        
        nutritionFacts.map((facts) => {
          return <NutritionalLabelFact
            key = {facts.id}
            label ={facts.id}
            attribute = {facts.attribute}
            item = {item}
          />
        })
        }
        </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {

  return (
    <li className="nutrition-fact">
      <span className="fact-label">{}</span>{props.attribute + ": "}
      <span className="fact-value">{props.item[props.attribute]}</span>
         
    </li>

  )
}
;

export default NutritionalLabel
