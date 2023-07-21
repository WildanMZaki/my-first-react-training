import "./subs.css"

function Subs() {
  return (
    <div className="subs">
      <h1 className="subsTitle">Save time, save money</h1>
      <span className="subsDesc">Sign up, and we will offer best deal for you</span>
      <div className="subsInputContainer">
        <input type="email" placeholder="Your email" />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  )
}

export default Subs
