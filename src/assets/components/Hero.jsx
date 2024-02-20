import "./hero.css";
import Count from "./Count";

export default function Hero() {
  return (
    <>
      <section>
        <div className="hero-text">
          <h1>Welcome by my practise project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fuga, vero voluptatum quod, sunt perferendis
            at cum facilis quis voluptate corrupti sint error ratione accusamus laboriosam magnam unde autem asperiores?
          </p>
          <a href="#" className="cta-hero">
            Link
          </a>
        </div>
        <div className="hero-action">
          <img src="./public/vite.svg" />
          <h1>Lets count!!</h1>
          <Count />
        </div>
      </section>
    </>
  );
}
