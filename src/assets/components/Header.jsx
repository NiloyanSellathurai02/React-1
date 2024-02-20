import "./header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <h1 className="primary-heading">React</h1>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </>
  );
}
