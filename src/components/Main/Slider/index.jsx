// import styles from "./styles.module.scss";


// import Image from "next/image";

// import slide6 from "../../../../public/images/slides/slide6.webp";
// import slide7 from "../../../../public/images/slides/slide7.webp";
// import slide8 from "../../../../public/images/slides/slide8.webp";
// import slide9 from "../../../../public/images/slides/slide9.png";

// export function Slider() {
//   return (
//     <div className={styles.slider}>
//       <div className={styles.slides}>
//         <input type="radio" name="radio-btn" id="radio1" />
//         <input type="radio" name="radio-btn" id="radio2" />
//         <input type="radio" name="radio-btn" id="radio3" />
//         <input type="radio" name="radio-btn" id="radio4" />

//         <div className={styles.slide}>
//           <Image src={slide8} alt="slide1" />
//         </div>

//         <div className={styles.slide}>
//           <Image src={slide6} alt="slide2" />
//         </div>

//         <div className={styles.slide}>
//           <Image src={slide7} alt="slide3" />
//         </div>

//         <div className={styles.slide}>
//           <Image src={slide9} alt="slide4" />
//         </div>

//         <div className={styles.navigationAuto}>
//           <div className={styles.autoBtn1}></div> 
//           <div className={styles.autoBtn2}></div>
//           <div className={styles.autoBtn3}></div>
//           <div className={styles.autoBtn4}></div>
//         </div>
//       </div>

//       <div className={styles.manualNavigation}>
//         <label htmlFor="radio1" className={styles.manualBtn}></label>
//         <label htmlFor="radio2" className={styles.manualBtn}></label>
//         <label htmlFor="radio3" className={styles.manualBtn}></label>
//         <label htmlFor="radio4" className={styles.manualBtn}></label>
//       </div>
//     </div>
//   );
// }



import styles from "./styles.module.scss"
import SimpleImageSlider from "react-simple-image-slider";

// import Image from "next/image";

// import slide6 from "../../../../public/images/slides/slide6.webp";
// import slide7 from "../../../../public/images/slides/slide7.webp";
// import slide8 from "../../../../public/images/slides/slide8.webp";
// import slide9 from "../../../../public/images/slides/slide9.png";


const images = [
  { url: "images/slides/slide8.webp" },
  { url: "images/slides/slide7.webp" },
  { url: "images/slides/slide6.webp"},
  { url: "images/slides/slide9.png" },
]

export function Slider() {
  return (
    <div>
      <SimpleImageSlider
        width='100%'
        height={573}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={1}
        autoPlay={true}
      />
    </div>
  )
  // console.log(images)
}