import React, { useState } from 'react'
import "./newProduct.css"
import { useDispatch } from 'react-redux';
import { publicRequest } from '../../requestMethods';
import { addProduct } from '../../redux/apiCalls';
 
export default function NewProduct() {
  const [inputs,setInputs] = useState({});
  const [file,setFile] = useState(null);
  const [img,setImage] = useState(null);

  const handleChange = (e)=>{
    setInputs(prev=>{
        return {...prev,[e.target.name]:e.target.value}
    })
  }
 
  const handleClick = async (e) =>{
        e.preventDefault();
        const fileInput = document.getElementById('file');
        const imageInput = document.getElementById('img');
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);
        formData.append('img', imageInput.files[0]);
      const res = await publicRequest.post("/upload",formData);
       const imgpath = res.data.uploadedImg;
       const pdfpath = res.data.uploadedFile;
       const book = { ...inputs, image: imgpath, path: pdfpath };
       console.log(book);
     const res2 =  await publicRequest.post("/books",book);
    //  console.log(res2.data);
}

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Create New Book</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            required
            name="img"
            id="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Book pdf</label>
          <input
            type="file"
            name="file"
            id="img"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            required
            placeholder="Infrared Signatures, Sensors and Technologies"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>About the book</label>
          <input
            name="descBook"
            type="text"
            placeholder="This monograph on 'Infrared Signatures, Sensors, and Technologies', a topic, on which the availability of literature, especially at one place, is the need of the hour for the scientists engaged in Infrared Signatures, Sensors and Technologies in particular, and the researchers and academicians in general. Practically, all types of the IR Signatures, Sensors, and Technologies including Infrared Spectrum and Sensors, Infrared (IR) Signatures, Deceiving Technologies - Types, Analysis and Modeling of IR Signatures and Countermeasures, Thermal and Radar Signature Management, Fabrication of IR Sensors, Detector Technology and Discussion on QWIPs and QDIPs IR Detectors, IR Threats - RADAR Technology, and IR Seekers, have been discussed in reasonable detail in this monograph, thereby making it very useful indeed for the scientific community in the world..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>About the author</label>
          <input
            name="descAuthor"
            type="text"
            placeholder="Dr Kamal Nain Chopra has done BSc (University of Delhi), MSc (Physics- IIT, Delhi), MTech (Opto-Electronics - IIT, Delhi), and PhD (Applied Physics- IIT, Delhi). He has served DRDO for a period of 33 years and superannuated as Scientist G, from Laser Science and Technology Centre (LASTEC), Delhi, in the year 2005. Subsequently, he has also served as Professor (Physics) in NSIT (DU) and MAIT (GGSIPU), and as Project Scientist in IIT, Delhi, in various projects, on topics including Photonics, Thin Films, and Optical Testing..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>ISBN</label>
          <input name="isbn" type="text" placeholder="978-93-94166-10-3" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input name="year" type="text" placeholder="978-93-94166-10-3" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Author</label>
          <input name="author" type="text" placeholder="Kamal Nain Chopra" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Publisher</label>
          <input name="publisher" type="text" placeholder="Desidoc" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Language</label>
          <input name="language"  type="text" placeholder="English" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Dimensions</label>
          <input name="dimensions" type="text" placeholder="6.25 X 9.5 in" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Pages</label>
          <input name="pages" type="number" placeholder="216" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value = "1">Yes</option>
            <option value = "0">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
