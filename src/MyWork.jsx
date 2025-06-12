import { Link } from "react-router-dom";

export default function MyWork() {
  return (
    <div>
      <h1>This is the MyWork Page</h1>
      <Link to="/Home">
        <button>Back</button>
      </Link>
    </div>
  );
}
