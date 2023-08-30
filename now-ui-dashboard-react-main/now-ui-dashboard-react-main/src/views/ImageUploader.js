import React, { useState } from "react";
import "../assets/css/uploader.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import Axios from "axios";
import one from "../assets/img/1.png";
import two from "../assets/img/2.png";
import three from "../assets/img/33.png";

function Uploader() {
  const url = "";
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const [isUploaded, setIsUploaded] = useState(false);
  

  function submitHandler(e) {
    e.preventDefault();
    setIsUploaded(true);
  }
  function backHandler() {
    
    setIsUploaded(false);
  }

  return (
    <div>
      {
        !isUploaded ? 
        (<form action=""  enctype="multipart/form-data" onSubmit={(e) => submitHandler(e)}>
        <fieldset>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            id="image"
            name="image"
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
            hidden
          ></input>
        </fieldset>

        {image ? (
          <img src={image} height={250} alt={fileName} />
        ) : (
          <div
            className="uf"
            onClick={() => document.querySelector(".input-field").click()}
          >
            <MdCloudUpload color="#1475cf" size={60} />
            <p>Browse Files to Upload</p>
          </div>
        )}
        <section className="uploaded-row-gg">
          <AiFillFileImage color="#1475cf" />
          <div>
            {fileName}
            <MdDelete
              onClick={() => {
                setFileName("No selected File");
                setImage(null);
              }}
            />
          </div>
        </section>
        <fieldset className="input-field">
          <label for="pos_prompt" className="form-label">
            Prompt
          </label>
          <br></br>
          <input
            type="text"
            id="prompt"
            name="prompt"
            className="form-input"
          />
          <label for="images_number" className="form-label">
            Image Number
          </label>
          <br></br>
          <input
            type="number"
            id="images_number"
            name="images_number"
            className="form-input"
          />
          <label for="alignment_strength" className="form-label">
            Alignment Strength
          </label>
          <br></br>
          <input
            type="number"
            id="alignment_strength"
            name="alignment_strength"
            className="form-input"
          />
          {/* <label for="alignment_strength" className='form-label'>Alignment Strength</label><br></br>        
            <input type="number" id="alignment_strength" className='form-input'/>  */}
          {/* <label for="image_mode" className="form-label select-label">
            Choose a mode:
          </label>
          <select
            id="image_mode"
            name="image_mode"
            className="form-input"
          >
            <option value="foreground">Foreground Point</option>
            <option value="background">Background Point</option>
          </select>

          <p className="form-label select-label">Refinement</p> */}
          {/* <div className="check-box">
            <input
              type="checkbox"
              id="tile_refinement"
              name="tile_refinement"
              value="tile_refinement"
            />
            <label for="tile_refinement"> Do tile refinement</label>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            <label for="vehicle2"> I have a car</label>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
            <label for="vehicle3"> I have a boat</label>
          </div> */}
        </fieldset>
        <button type="submit" className="submit_button">
          Submit
        </button>
      </form>):
        (<div className="gene">
          <img src={one} alt="gg" height={704} width={512} className="gene-ima"/>
          <img src={two} alt="gg" height={704} width={512}  className="gene-ima"/>
          <img src={three} alt="gg" height={704} width={512}  className="gene-ima"/>
          <button onClick = {backHandler} className="but">Back</button>
        </div>)
      
      }
    </div>
  );
}

export default Uploader;
