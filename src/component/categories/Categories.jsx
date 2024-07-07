import style from "./Categories.module.css";
import Card from "./Card";
import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

export default function Categories() {
  const activeLeft = {
    mover: {
      justifyContent: "start",
    },
    right: {
      display: "flex",
    },
    left: {
      display: "none",
    },
  };

  const activeRight = {
    mover: {
      justifyContent: "end",
    },
    right: {
      display: "none",
    },
    left: {
      display: "flex",
    },
  };

  const [css, setcss] = useState(activeLeft);

  return (
    <div className={style.categories}>
      <div className={style.title}>CATEGORIES</div>

      <div className={style.mainDiv}>
        <div className={style.mover} style={css.mover}>
          <div className={style.container}>
            <Card
              title="Men's Apparel"
              img_url="https://down-ph.img.susercontent.com/file/2e9bfe13ce9cecfbfad8010b843651f6_tn"
            />
            <Card
              title="Mobiles & Gadgets"
              img_url="https://down-ph.img.susercontent.com/file/b3ae45e4ea16d61f0f6cf98ed623bb67_tn"
            />
            <Card
              title="Mobiles Accessories"
              img_url="https://down-ph.img.susercontent.com/file/9f2080fe651867bceb3a4d0f474247b3_tn"
            />
            <Card
              title="Home entertainment"
              img_url="https://down-ph.img.susercontent.com/file/f88a53eadc71460a50ba49316235a5a5_tn"
            />
            <Card
              title="Babies & Kids"
              img_url="https://down-ph.img.susercontent.com/file/fbf1d6707dac5f09db46e60b87aae351_tn"
            />
            <Card
              title="Home and Living"
              img_url="https://down-ph.img.susercontent.com/file/e96e55c299602c20d369183378887a86_tn"
            />
            <Card
              title="Groceries"
              img_url="https://down-ph.img.susercontent.com/file/f2423bdc8e19310ece9cf70c81e58897_tn"
            />
            <Card
              title="Topys, Games & Collectibles"
              img_url="https://down-ph.img.susercontent.com/file/aff648bd1cc6d00de3d908457de3e128_tn"
            />
            <Card
              title="Women's Bag"
              img_url="https://down-ph.img.susercontent.com/file/55267466ff3f0445bf28c21ddafd409c_tn"
            />
            <Card
              title="Women's Accessories"
              img_url="https://down-ph.img.susercontent.com/file/9ab43516f83df1b1bc400edf56bccac7_tn"
            />
            <Card
              title="Women's Shoes"
              img_url="https://down-ph.img.susercontent.com/file/b2e30c169f08d6820de5075c7827038d_tn"
            />
            <Card
              title="Pet Care"
              img_url="https://down-ph.img.susercontent.com/file/e5b8744b3e1839a74a0fb37ae03fd525_tn"
            />
            <Card
              title="Audio"
              img_url="https://down-ph.img.susercontent.com/file/a116f9d1bba1320f6af1da6ea8163ffe_tn"
            />
            <Card
              title="Women's Apparel"
              img_url="https://down-ph.img.susercontent.com/file/372cf1ccdb799772760d819408df35ba_tn"
            />
            <Card
              title="Health & Personal Care"
              img_url="https://down-ph.img.susercontent.com/file/5906153a145fc19c2d808012f682f2fd_tn"
            />
            <Card
              title="Makeup & Fragrances"
              img_url="https://down-ph.img.susercontent.com/file/15bcf95dddc19a5fb0fb0f9e777761a2_tn"
            />
            <Card
              title="Home Appliances"
              img_url="https://down-ph.img.susercontent.com/file/d31d29d2f160baeb7592964cd9090a52_tn"
            />
            <Card
              title="Laptops & Computers"
              img_url="https://down-ph.img.susercontent.com/file/25936be031f917470cb8c8ad9f311413_tn"
            />
            <Card
              title="Cameras"
              img_url="https://down-ph.img.susercontent.com/file/5a9d9bb1c39229501a6acec4f89fdc5c_tn"
            />
            <Card
              title="Sports & Travel"
              img_url="https://down-ph.img.susercontent.com/file/f12cfed5944ad868e181c6583a5a4426_tn"
            />
            <Card
              title="Men's Bags & Accessories"
              img_url="https://down-ph.img.susercontent.com/file/a3db43790bd5a473e606076fa4bc6717_tn"
            />
            <Card
              title="Men's Shoes"
              img_url="https://down-ph.img.susercontent.com/file/4485e4fb0ed0372934c6e11ec3601d7c_tn"
            />
            <Card
              title="Motor"
              img_url="https://down-ph.img.susercontent.com/file/34e01853a846ee2280853aa6792effca_tn"
            />
            <Card
              title="Hobbies & Stationary"
              img_url="https://down-ph.img.susercontent.com/file/a737581aaa07e6297b43da92b4734e94_tn"
            />
            <Card
              title="Gaming"
              img_url="https://down-ph.img.susercontent.com/file/0e6683c898fca05fbb5297fa271367dc_tn"
            />
          </div>
        </div>

        <div
          className={style.right}
          onClick={() => setcss(activeRight)}
          style={css.right}
        >
          <IoMdArrowDropright />
        </div>
        <div
          className={style.left}
          onClick={() => setcss(activeLeft)}
          style={css.left}
        >
          <IoMdArrowDropleft />
        </div>
      </div>
    </div>
  );
}
