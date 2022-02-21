import Image from "next/image";
import classes from "./hero.module.css";
function Hello() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.JPG"
          alt="Schadrack"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi,I'm Schadrack</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        angular or React
      </p>
    </section>
  );
}

export default Hello;
