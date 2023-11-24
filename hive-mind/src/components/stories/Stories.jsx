import { useContext, useState } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
// import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useMutation } from "@tanstack/react-query";
const Stories = () => {
  const [strPic,setStrPic] = useState(null)
  const { currentUser } = useContext(AuthContext);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", strPic);
      const res = await makeRequest.post("/upload",formData,{
        headers:{
          Authorization:`Bearer ${currentUser.accessToken}`
        }
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  // const { isLoading, error, data } = useQuery(["stories"], () =>
  //   makeRequest.get("/stories").then((res) => {
  //     return res.data;
  //   })
  // );

  const mutation = useMutation(
    (newStry) => {
      makeRequest.post("/stories",newStry,{
        headers:{
          Authorization:'Bearer ' + currentUser.accessToken
        }
      })
    }
  )

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (strPic) imgUrl = await upload();
    mutation.mutate({ imgName:"123", img: imgUrl });
    setStrPic(null)
  }

  return (
    <div className="stories">
      <div className="story">
        <img src={'http://20.219.183.21:1000/Uploads/' + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      <div>
        <form>
          <input type="file" accept="image/*" onChange={(e)=>setStrPic(e.target.files[0])} />
          <button type="button" onClick={handleClick}>Add Story</button>
        </form>
      </div>
      {/* //* {error ? 'Something went wrong' : isLoading ? 'Loading' : data.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))} */ }
    </div>
  );
};

export default Stories;