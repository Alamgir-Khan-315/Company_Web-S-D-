import React, { useEffect, useState } from "react";

const Form = ({ sendDataToParent }) => {
  const [Data, setData] = useState({
    item_code: "",
    item_name: "",
    catogary: "",
    sub_catogary: "",
    original_brand:'',
    size:'',
    Color:'',
    material:'',
    condition:'',
    purchase_price:'',
    redesign_cost:'',
    selling_price:'',
    description:'',
    redesign_notes:'',
    tags:'',
    front_img:'',
    back_img:'',
    detail_img:'',
  });

  function handleInputData(e) {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setData({ ...Data, [e.target.name]: imageUrl }); // ✅ using computed property
    }
  };
  
  
  useEffect(() => {
    sendDataToParent(Data);
  }, [Data]);

  return (

    <section>

      <div className="form-body grid md:grid-cols-2 place-items-center p-3">

        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Item Code :</h2>
          <input
            className="input"
            type="text"
            name="item_code"
            onChange={handleInputData}
          />
        </div>
        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Item Name :</h2>
          <input
            className="input"
            type="text"
            name="item_name"
            onChange={handleInputData}
            required
          />
        </div>
        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Catogary :</h2>
          <select
            className="input text-sm"
            name="catogary"
            onChange={handleInputData}
          >
            <option> </option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Sub Catogary :</h2>
          <select
            className="input text-sm"
            name="sub_catogary"
            required
            onChange={handleInputData}
          >
            <option> </option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Original Brand:</h2>
          <input
            className="input"
            type="text"
            name="original_brand"
            onChange={handleInputData}
          />
        </div>
        
        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Size :</h2>
          <input
            className="input"
            type="text"
            name="size"
            onChange={handleInputData}
            required
          />
        </div>
        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Color :</h2>
          <input
            className="input"
            type="text"
            name="Color"
            onChange={handleInputData}
            required
          />
        </div>

        <div> </div>

        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Material :</h2>
          <input
            className="input"
            type="text"
            name="material"
            onChange={handleInputData}
            required
          />
        </div>
        <div className="flex w-[80%] items-center gap-5 p-2">
          <h2 className="label">Condition :</h2>
          <input
            className="input"
            type="text"
            name="condition"
            onChange={handleInputData}
            required
          />
        </div>     

      </div>

      <div className="Rounded_Title !bg-blue-300/20 drop-shadow-md mb-4">Pricing Information
        <div className="form-body grid md:grid-cols-2 place-items-center p-3">

          <div className="flex w-[80%] items-center gap-5 p-2">
            <h2 className="label">Item Name :</h2>
            <input
              className="input"
              type="text"
              name="purchase_price"
              placeholder="0.00"
              onChange={handleInputData}
              required
            />
          </div>


          <div className="flex w-[80%] items-center gap-5 p-2">
            <h2 className="label">Original Brand:</h2>
            <input
              className="input"
              type="text"
              placeholder="0.00"
              name="redesign_cost"
              onChange={handleInputData}
            />
          </div>

          <div className="flex w-[80%] items-center gap-5 p-2">
            <h2 className="label">Selling price :</h2>
            <input
              className="input"
              type="text"
              name="selling_price"
              placeholder="0.00"
              onChange={handleInputData}
              required
            />
          </div>

          <div className="w-[80%] p-2 rounded-2xl mt-3 md:mt-0 text-center bg-green-500">
            <h1>Profilt Margin : XXX</h1>
          </div>
            
        </div>
      </div>

      <div>
        <div className="form-body grid md:grid-cols-2 place-items-center p-3">

          <div className="flex w-[80%] items-center gap-5 p-2">
            <h2 className="label">Description :</h2>
            <input
              className="input"
              type="text"
              name="description"
              placeholder="Describe item and its features"
              onChange={handleInputData}
              required
            />
          </div>


          <div className="flex w-[80%] items-center gap-5 p-2">
            <h2 className="label">Redesign Notes:</h2>
            <input
              className="input"
              type="text"
              name="redesign_notes"
              placeholder="What modification were made?"
              onChange={handleInputData}
            />
          </div>
            
        </div>

        <div className="lg:w-[90%] px-4 flex mx-auto items-center gap-5 p-2">
            <h2 className="label max-w-fit md:min-w-fit">Tags :</h2>
            <input  
              className="input"
              type="text"
              name="tags"
              onChange={handleInputData}
              placeholder="Comma separated e.g vintage , denim"
              required
            />
          </div>
      </div>

      <div className="py-5">
        <div className="Rounded_Title">
          <h2 className="label font-bold">Add Images</h2>
        </div>

        <div className="box">

          <div className="img flex gap-3 items-center justify-center border-gray-400 border-2 my-2 p-3 border-dashed">

            {Data.front_img && (
            <img
              src={Data.front_img}
              alt="Uploaded"
              className="w-[250px]"
            />
          )}
          {Data.back_img && (
            <img
              src={Data.back_img}
              alt="Uploaded"
              className="w-[250px]"
            />
          )}
          {Data.detail_img && (
            <img
              src={Data.detail_img}
              alt="Uploaded"
              className="w-[250px]"
            />
          )}
          </div>

          <div className="grid gap-x-5 grid-cols-2">
            <div className="flex items-center gap-5 p-2">
              <h2 className="label">Front Image :</h2>
              <input
                className="input"
                type="file"
                name="front_img"
                accept="image/*" 
                onChange={handleImageChange}
              />
            </div>

            <div className="flex items-center gap-5 p-2">
              <h2 className="label">Back Image :</h2>
              <input
                className="input"
                type="file"
                name="back_img"
                accept="image/*" 
                onChange={handleImageChange}
              />
            </div>

            <div className="flex w-full mx-auto items-center col-span-2 gap-5 p-2">
              <h2 className="label">Back Image :</h2>
              <input
                className="input"
                type="file"
                name="detail_img"
                accept="image/*" 
                onChange={handleImageChange}
              />
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Form;
