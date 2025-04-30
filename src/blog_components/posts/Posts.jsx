import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="container" id="postes">
      <div className="row">
      {posts.map((p) => (
        <Post post={p} />
      ))}
      </div>
    </div>
    
 
  );
}
