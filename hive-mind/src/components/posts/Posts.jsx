import Post from "../post/Post"
import "./posts.scss"

const Posts = () => {
  const posts = [
    {
      id:1,
      name: "Vibhor Minocha",
      userId: 1,
      profilePic: "https:media.licdn.com/dms/image/D4D35AQGUghBge0FG_Q/profile-framedphoto-shrink_400_400/0/1678209265252?e=1695290400&v=beta&t=0eYvNBJVHT83nfWyUJDqXt2tq6I2v0azkbDGDYNCCJk",
      desc: "Hanging out with my new friend",
      img: "https://media.cnn.com/api/v1/images/stellar/prod/220629132723-07-tom-turcich-man-walk-dog-around-the-world.jpg?c=original&q=h_618,c_fill"
    },
    {
      id:2,
      name: "Vibhor Minocha",
      userId: 1,
      profilePic: "https:media.licdn.com/dms/image/D4D35AQGUghBge0FG_Q/profile-framedphoto-shrink_400_400/0/1678209265252?e=1695290400&v=beta&t=0eYvNBJVHT83nfWyUJDqXt2tq6I2v0azkbDGDYNCCJk",
      desc: "I have an idea in mind, of an app, named BHATSAPP",
    },
  ];
  return <div className="posts">
  {posts.map(post=>(
    <Post post={post} key={post.id}/>
  ))}
  </div>;
};


export default Posts