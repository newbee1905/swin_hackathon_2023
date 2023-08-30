import React, { useState } from "react";
import "../assets/css/uploader.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import Axios from "axios";

function Uploader() {
  const url = "";
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const [data, setData] = useState({
    image: "",
    image_mode: "",
    neg_prompt: "",
    pos_prompt: "",
    images_number: "",
    alignment_strength: "",
    tile_refinement: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    Axios.post(url, {
      image: data.image,
      image_mode: data.image_mode,
      neg_prompt: data.neg_prompt,
      pos_prompt: data.pos_prompt,
      images_number: data.images_number,
      alignment_strength: data.alignment_strength,
      tile_refinement: data.tile_refinement,
    });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  return (
    <div>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <fieldset>
          <input
            type="file"
            onChange={(e) => handle(e)}
            accept="image/*"
            className="input-field"
            id="image"
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
          <img src={image} width={250} height={250} alt={fileName} />
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
          <label for="mask-align-str" className="form-label">
            Mask Align Strength
          </label>
          <br></br>
          <input type="number" id="mask-align-str" className="form-input" />
          <label for="pos_prompt" className="form-label">
            Positive Prompt
          </label>
          <br></br>
          <input
            type="text"
            id="pos_prompt"
            onChange={(e) => handle(e)}
            className="form-input"
          />
          <label for="neg_prompt" className="form-label">
            Negative Prompt
          </label>
          <br></br>
          <input
            type="text"
            id="neg_prompt"
            onChange={(e) => handle(e)}
            className="form-input"
          />
          <label for="images_number" className="form-label">
            Image Number
          </label>
          <br></br>
          <input
            type="number"
            id="images_number"
            onChange={(e) => handle(e)}
            className="form-input"
          />
          <label for="alignment_strength" className="form-label">
            Alignment Strength
          </label>
          <br></br>
          <input
            type="number"
            id="alignment_strength"
            onChange={(e) => handle(e)}
            className="form-input"
          />
          {/* <label for="alignment_strength" className='form-label'>Alignment Strength</label><br></br>        
            <input type="number" id="alignment_strength" className='form-input'/>  */}
          <label for="image_mode" className="form-label select-label">
            Choose a mode:
          </label>
          <select
            id="image_mode"
            onChange={(e) => handle(e)}
            name="cars"
            className="form-input"
          >
            <option value="foreground">Foreground Point</option>
            <option value="background">Background Point</option>
          </select>

          <p className="form-label select-label">Refinement</p>
          <div className="check-box">
            <input
              type="checkbox"
              id="tile_refinement"
              onChange={(e) => handle(e)}
              name="tile_refinement"
              value="tile_refinement"
            />
            <label for="tile_refinement"> Do tile refinement</label>
            {/* <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            <label for="vehicle2"> I have a car</label>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
            <label for="vehicle3"> I have a boat</label> */}
          </div>
        </fieldset>
        <button type="submit" className="submit_button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Uploader;
