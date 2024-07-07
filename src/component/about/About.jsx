import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.about}>
      <div className={style.about}>
        <h1 className={style.title}>
          Buy and Sell Online on Shopee Philippines
        </h1>
        <p className={style.p}>
          Shopee is a fun, free, and trusted way to buy and sell instantly
          online. We are a leading mobile-first marketplace platform in
          Southeast Asia <span className={style.underline}>Singapore</span>,{" "}
          <span className={style.underline}>Malaysia</span>,{" "}
          <span className={style.underline}>Thailand</span>,{" "}
          <span className={style.underline}>Indonesia</span>,{" "}
          <span className={style.underline}>Vietnam</span>, the Philippines,{" "}
          <span className={style.underline}>Taiwan</span>,{" "}
          <span className={style.underline}>Brazil</span>,{" "}
          <span className={style.underline}>Mexico</span>,{" "}
          <span className={style.underline}>Colombia</span>,{" "}
          <span className={style.underline}>Chile</span>, and{" "}
          <span className={style.underline}>Poland</span>. Join millions of
          others on Shopee to list products and shop for deals online. Doing
          your Shopee online shopping is safe and we make sure of it. Get the
          item you ordered or get your money back with Shopee Guarantee. Create
          and browse listings for free, at no extra charge. Join our Shopee
          community and start shopping today!
          <div className={style.space}></div>
          Shopee Philippines is dedicated to bringing the best Shopee online
          shopping experience to every Filipino household. Known for the
          numerous campaigns all year round, the company aims to make shopping a
          fun and memorable experience for all. From free shipping specials to
          discount vouchers, Shopee Philippines never fails to impress loyal
          fans and new shopping enthusiasts. Download the Shopee app now and
          visit the Shopee website too!
        </p>
      </div>
    </div>
  );
}
