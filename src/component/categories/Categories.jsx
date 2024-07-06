import "./Categories.css";
import CategoriesCard from "./CategoriesCard";
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

  const [style, setStyle] = useState(activeLeft);

  return (
    <div className="Categories">
      <div className="title-text">CATEGORIES</div>

      <div className="main-div">
        <div className="mover" style={style.mover}>
          <div className="container">
            <CategoriesCard
              title="Men's Apparel"
              img_url="https://down-ph.img.susercontent.com/file/2e9bfe13ce9cecfbfad8010b843651f6_tn"
            />
            <CategoriesCard
              title="Mobiles & Gadgets"
              img_url="https://down-ph.img.susercontent.com/file/b3ae45e4ea16d61f0f6cf98ed623bb67_tn"
            />
            <CategoriesCard
              title="Mobiles Accessories"
              img_url="https://down-ph.img.susercontent.com/file/9f2080fe651867bceb3a4d0f474247b3_tn"
            />
            <CategoriesCard
              title="Home entertainment"
              img_url="https://down-ph.img.susercontent.com/file/f88a53eadc71460a50ba49316235a5a5_tn"
            />
            <CategoriesCard
              title="Babies & Kids"
              img_url="https://down-ph.img.susercontent.com/file/fbf1d6707dac5f09db46e60b87aae351_tn"
            />
            <CategoriesCard
              title="Home and Living"
              img_url="https://down-ph.img.susercontent.com/file/e96e55c299602c20d369183378887a86_tn"
            />
            <CategoriesCard
              title="Groceries"
              img_url="https://down-ph.img.susercontent.com/file/f2423bdc8e19310ece9cf70c81e58897_tn"
            />
            <CategoriesCard
              title="Topys, Games & Collectibles"
              img_url="https://down-ph.img.susercontent.com/file/aff648bd1cc6d00de3d908457de3e128_tn"
            />
            <CategoriesCard
              title="Women's Bag"
              img_url="https://down-ph.img.susercontent.com/file/55267466ff3f0445bf28c21ddafd409c_tn"
            />
            <CategoriesCard
              title="Women's Accessories"
              img_url="https://down-ph.img.susercontent.com/file/9ab43516f83df1b1bc400edf56bccac7_tn"
            />
            <CategoriesCard
              title="Women's Shoes"
              img_url="https://down-ph.img.susercontent.com/file/b2e30c169f08d6820de5075c7827038d_tn"
            />
            <CategoriesCard
              title="Pet Care"
              img_url="https://down-ph.img.susercontent.com/file/e5b8744b3e1839a74a0fb37ae03fd525_tn"
            />
            <CategoriesCard
              title="Audio"
              img_url="https://down-ph.img.susercontent.com/file/a116f9d1bba1320f6af1da6ea8163ffe_tn"
            />
            <CategoriesCard
              title="Women's Apparel"
              img_url="https://down-ph.img.susercontent.com/file/372cf1ccdb799772760d819408df35ba_tn"
            />
            <CategoriesCard
              title="Health & Personal Care"
              img_url="https://down-ph.img.susercontent.com/file/5906153a145fc19c2d808012f682f2fd_tn"
            />
            <CategoriesCard
              title="Makeup & Fragrances"
              img_url="https://down-ph.img.susercontent.com/file/15bcf95dddc19a5fb0fb0f9e777761a2_tn"
            />
            <CategoriesCard
              title="Home Appliances"
              img_url="https://down-ph.img.susercontent.com/file/d31d29d2f160baeb7592964cd9090a52_tn"
            />
            <CategoriesCard
              title="Laptops & Computers"
              img_url="https://down-ph.img.susercontent.com/file/25936be031f917470cb8c8ad9f311413_tn"
            />
            <CategoriesCard
              title="Cameras"
              img_url="https://down-ph.img.susercontent.com/file/5a9d9bb1c39229501a6acec4f89fdc5c_tn"
            />
            <CategoriesCard
              title="Sports & Travel"
              img_url="https://down-ph.img.susercontent.com/file/f12cfed5944ad868e181c6583a5a4426_tn"
            />
            <CategoriesCard
              title="Men's Bags & Accessories"
              img_url="https://down-ph.img.susercontent.com/file/a3db43790bd5a473e606076fa4bc6717_tn"
            />
            <CategoriesCard
              title="Men's Shoes"
              img_url="https://down-ph.img.susercontent.com/file/4485e4fb0ed0372934c6e11ec3601d7c_tn"
            />
            <CategoriesCard
              title="Motor"
              img_url="https://down-ph.img.susercontent.com/file/34e01853a846ee2280853aa6792effca_tn"
            />
            <CategoriesCard
              title="Hobbies & Stationary"
              img_url="https://down-ph.img.susercontent.com/file/a737581aaa07e6297b43da92b4734e94_tn"
            />
            <CategoriesCard
              title="Gaming"
              img_url="https://down-ph.img.susercontent.com/file/0e6683c898fca05fbb5297fa271367dc_tn"
            />
          </div>
        </div>

        <div
          className="right"
          onClick={() => setStyle(activeRight)}
          style={style.right}
        >
          <IoMdArrowDropright />
        </div>
        <div
          className="left"
          onClick={() => setStyle(activeLeft)}
          style={style.left}
        >
          <IoMdArrowDropleft />
        </div>
      </div>
    </div>
  );
}
