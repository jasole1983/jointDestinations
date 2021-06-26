/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import React, { useState, } from 'react'
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { createNewFlower } from '../../store/flower';




export default function AddFlowerForm() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const reportedEffects = ["Aroused", "Creative", "Energetic", "Euphoric", "Focused", "Giggly", "Happy", "Hungry", "Relaxed", "Sleepy", "Talkative", "Tingly", "Uplifted"]
  const isCheckedArray = new Array(reportedEffects.length).fill(false);
  
  const [checkedState, setCheckedState] = useState(isCheckedArray)
  const [strain, setStrain] = useState('')

  // const sessionUser = useSelector(state => state.session.user);
  
  const handleChange = (e) => setStrain(e.target.value)
  const handleChecked = (num) => {
    const updatedCheckedState = checkedState.map((ele, idx) => idx === num ? !ele : ele);
    setCheckedState(updatedCheckedState);
    
  }

  const createListElements = reportedEffects.map((name, index) => {
    return (
      <li className="chxbx rep_eff_li" key={index}>
        <div className="chxbx_div">
          <input type="checkbox" id={`${name}_checkbox_${index}`} name={name} value={name} checked={checkedState[index]} onChange={() => handleChecked(index)}/>
          <label htmlFor={`${name}_checkbox_${index}`} className="chxbx_lab">{name}</label>
        </div>
      </li>
    )
  })
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(createNewFlower({location, commonName, botanicalName, strain, imageURL, THC, flavors, product, proPrice}))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
  }

function NewFlower() {
  return (
    <div>
      <form onSubmit={handleSubmit} className="forms new_flower">
        <h3>CREATE NEW FLOWER</h3>
        <div id="naming-section">
          <div>
            <label htmlFor="location">Location</label>
            <input name="location" value={location} className="input nam-sec"/>
          </div>
          <div>
            <label htmlFor="common-name">Common Name</label>
            <input name="common-name" className="input nam-sec" value={commonName}/>
          </div>
          <div>
            <label htmlFor="botanical">Botanical Name</label>
            <input name="botanical-name" className="input nam-sec" value={botanicalName}/>
          </div>
        </div>
        <div className="radio_div">
          <label htmlFor="sativa">Sativa</label>        
          <input type="radio" value="sativa" id="sativa" onChange={handleChange} name="strain"/>
          <label htmlFor="hybrid">Hybrid</label>        
          <input type="radio" value="hybrid" id="hybrid" onChange={handleChange} name="strain"/>
          <label htmlFor="Indica">Indica</label>        
          <input type="radio" value="indica" id="indica" onChange={handleChange} name="strain"/>
        </div>
        <div>
          <label htmlFor="image_url">Add Image (optional)</label>
          <input name="image_url" value={imageURL} className="input url txt" />
        </div>
        <div className="checkboxDiv">
          <ul className="chxbx_ul">
            {createListElements}
          </ul>
        </div>
        <div className="new_flower_stats_sec">
          <ul>
            <li>
              <input value={THC} id="THC_Content" className="stats" name="THC_Content"/>
              <label htmlFor="THC_Content">THC Content</label>
            </li>
            <li>
              <div className="flavors_div">Flavors Available:
                <ul>
                  <li>
                    <input value={flavors[0]} className="flavors stats" placeholder="Flavor"/>
                  </li>
                  <li>
                    <input value={flavors[1]} className="flavors stats" placeholder="Flavor"/>
                  </li>
                  <li>
                    <input value={flavors[2]} className="flavors stats" placeholder="Flavor"/>
                  </li>
                  <li>
                    <input value={flavors[2]} className="flavors stats" placeholder="Flavor"/>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="products_div">Products Available:
                <ul>
                  <li>
                    <input value={product[0]} name="pro0" className="product stats"/><span>:   $</span><input value={proPrice[0]} type="number" className="pro_price stats" name="pp0"/>
                  </li>
                  <li>
                    <input value={product[1]} name="pro1" className="product stats"/><span>:   $</span><input value={proPrice[1]} type="number" className="pro_price stats" name="pp1"/>
                  </li>
                  <li>
                    <input value={product[2]} name="pro2" className="product stats"/><span>:   $</span><input value={proPrice[2]} type="number" className="pro_price stats" name="pp2"/>
                  </li>
                  <li>
                    <input value={product[3]} name="pro3" className="product stats"/><span>:   $</span><input value={proPrice[3]} type="number" className="pro_price stats" name="pp3"/>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <button type="cancel" className="btn alert_btn cancel strain_form_btn">Cancel</button>
        </div>
        <div>
          <button type="submit" className="btn submit_btn strain_form_btn">Create</button>
        </div>
      </form>
    </div>
  )
}

export default NewFlower
