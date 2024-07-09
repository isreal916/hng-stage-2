import Image from "next/image";
import mobel from "../../public/mobel.png";
import couchimage from "../../public/img/couch-image-free-transparent-image-hq.png";
import sofashow from "../../public/img/sofa-show.jpg";
import sofa from "../../public/img/sofa.png";
import kede from "../../public/img/image.png";
import { data } from "@/data";
export default function Home() {
  return (
    <div className="space-y-5 ">
      <header className=" text-[#909090] bg-white flex justify-between  p-[15px] ">
        <Image src={mobel} className="w-[200px] h-[62px] " />

        <div className="feature flex mt-[15px]">
          <div className="feature-list w-[211px] h-[75px] flex ">
            <div className="feature-logo w-[43px] h-[43px] rounded-[80px] bg-[#D9D9D9] flex content-center mx-[12px]">
              <div className="flex m-auto">
                {" "}
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 14 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.4744 1.74443L0.919674 9.01136C0.665287 9.62378 0.5 10.6163 0.5 11.0887C0.5 11.561 0.5 13.9543 0.5 13.9543C0.5 14.7319 1.129 15.3704 1.89971 15.3704H3.57532C3.74383 17.1274 5.20689 18.5 6.98767 18.5C8.76845 18.5 10.2325 17.1274 10.4011 15.3704H13.5V0.5H5.54179C4.77217 0.5 3.84152 1.06036 3.4744 1.74443ZM6.98767 16.7647C6.04095 16.7647 5.27236 15.9872 5.27236 15.0294C5.27236 14.0717 6.04095 13.2963 6.98767 13.2963C7.93549 13.2963 8.70298 14.0716 8.70298 15.0294C8.70298 15.9872 7.93542 16.7647 6.98767 16.7647ZM11.8899 2.34608V7.87229H3.7202L5.32601 2.8956C5.46663 2.63283 5.94429 2.34615 6.23838 2.34615L11.8899 2.34608Z"
                    fill="#696969"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 0.5V17.3455H10.5005C10.6652 19.1165 12.114 20.5 13.8761 20.5C15.6394 20.5 17.0861 19.1165 17.255 17.3455H20.5V0.5H0.5ZM13.8762 18.7509C12.9394 18.7509 12.1788 17.9671 12.1788 17.0017C12.1788 16.0363 12.9394 15.2547 13.8762 15.2547C14.8141 15.2547 15.5736 16.0363 15.5736 17.0017C15.5736 17.9672 14.8141 18.7509 13.8762 18.7509Z"
                    fill="#696969"
                  />
                </svg>
              </div>
            </div>
            <div className="feature-desc">
              <p className="font-bold">LEVERAGE</p>
              <p className="text-[12px]">Fast Delivery</p>
            </div>
          </div>
          <div className="feature-list w-[211px] h-[75px] flex ">
            <div className="feature-logo w-[43px] h-[43px] rounded-[80px] bg-[#D9D9D9] flex content-center mx-[12px]">
              <div className="flex m-auto">
                <svg
                  width="25"
                  height="29"
                  viewBox="0 0 25 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7625 7.27106H13.1934C13.4514 7.27106 13.6605 7.06126 13.6605 6.80397V4.64287C13.6605 4.38509 13.4514 4.17529 13.1934 4.17529H11.7625C11.5045 4.17529 11.2952 4.38509 11.2952 4.64287V6.80397C11.2953 7.06131 11.5045 7.27106 11.7625 7.27106Z"
                    fill="#696969"
                  />
                  <path
                    d="M10.5845 7.25231C10.6896 7.14447 10.7532 7.00144 10.7816 6.86537C10.811 6.72785 10.8177 6.58881 10.8182 6.42354C10.8182 5.48948 10.8182 4.63297 10.8182 4.39894V4.1417C9.95977 3.72114 9.0467 2.78211 8.36048 2.11122C8.01661 1.77674 7.67992 1.45717 7.32224 1.20187C6.96553 0.947548 6.58059 0.751624 6.14621 0.70213C6.02823 0.689284 5.91564 0.682861 5.80807 0.682861C5.47931 0.682861 5.19525 0.743204 4.95782 0.851583C4.60062 1.01188 4.3626 1.28003 4.22707 1.54773C4.09052 1.81641 4.04475 2.08261 4.04378 2.29732C4.04475 2.48482 4.00098 2.82421 3.89389 3.19879C3.78773 3.57579 3.61852 3.99387 3.37936 4.36591C3.17324 4.687 3.02854 5.03286 3.02756 5.40587C3.02514 5.7166 3.14037 6.03375 3.36625 6.29746C3.59207 6.56366 3.91613 6.78479 4.34959 6.97823C5.67135 7.56503 6.93401 7.79858 8.05186 7.79858C8.7737 7.79858 9.43574 7.70164 10.0168 7.54031C10.1388 7.50669 10.2479 7.47209 10.355 7.41812C10.4353 7.37747 10.5154 7.32453 10.5845 7.25231ZM4.30717 6.16733C4.12285 6.0575 3.98732 5.94766 3.90118 5.84522C3.77083 5.68789 3.73025 5.55727 3.72825 5.40587C3.72679 5.22582 3.80522 4.99773 3.9687 4.74486C4.25498 4.29915 4.44572 3.82116 4.56835 3.39023C4.59312 3.30117 4.6139 3.21611 4.63295 3.131C4.76206 3.25859 4.91491 3.37096 5.07899 3.47686C5.01811 4.40893 4.67403 5.38558 4.30717 6.16733ZM5.05724 2.56292C4.77447 2.32344 4.8393 1.93262 4.88701 1.8223L4.87961 1.81884C4.92787 1.7367 4.99042 1.66005 5.07306 1.59518C5.22202 1.47897 5.44018 1.38544 5.80807 1.38441C5.88795 1.38441 5.97479 1.38884 6.06854 1.39877C6.33571 1.42802 6.61303 1.55664 6.91534 1.77237C7.36731 2.09395 7.85215 2.60254 8.39864 3.12603C8.69349 3.40756 9.00919 3.69254 9.35397 3.95431C9.0005 3.93601 8.55322 3.88506 8.00722 3.77371C7.11396 3.59263 6.28174 3.3423 5.70487 3.03654C5.41595 2.88552 5.21679 2.69748 5.05724 2.56292Z"
                    fill="#696969"
                  />
                  <path
                    d="M20.6509 6.97818C21.0841 6.78474 21.4082 6.56361 21.6338 6.29741C21.8599 6.03369 21.9752 5.71655 21.9725 5.40582C21.9714 5.03281 21.8267 4.68695 21.6207 4.36586C21.3815 3.99376 21.2125 3.57568 21.1061 3.19873C20.999 2.82416 20.9558 2.48477 20.9562 2.29727C20.9558 2.08256 20.9097 1.81636 20.7729 1.54768C20.6373 1.28003 20.3993 1.01183 20.0421 0.851529C19.8049 0.743204 19.5209 0.682861 19.1921 0.682861C19.0842 0.682861 18.9717 0.689284 18.8537 0.70213C18.4198 0.751624 18.0344 0.947548 17.6779 1.20187C17.3202 1.45717 16.9837 1.77674 16.6397 2.11122C15.9534 2.78211 15.0401 3.72114 14.1821 4.1417V4.39894C14.1821 4.63297 14.1821 5.48942 14.1821 6.42355C14.1821 6.58881 14.1888 6.72785 14.2185 6.86537C14.2472 7.00139 14.3103 7.14442 14.4155 7.25231C14.4847 7.32453 14.5646 7.37742 14.645 7.41801C14.7526 7.47198 14.8612 7.50658 14.9837 7.54021C15.5645 7.70153 16.2263 7.79847 16.9484 7.79847C18.0666 7.79852 19.3287 7.56498 20.6509 6.97818ZM19.1921 1.38441C19.5597 1.38544 19.7782 1.47897 19.9268 1.59518C20.0094 1.66005 20.0723 1.7367 20.1202 1.81884L20.1129 1.8223C20.1606 1.93262 20.2254 2.3235 19.9426 2.56292C19.7833 2.69748 19.5839 2.88552 19.2953 3.03643C18.7181 3.34219 17.886 3.59252 16.9926 3.7736C16.4467 3.88495 15.9994 3.93596 15.6464 3.9542C15.9909 3.69248 16.3064 3.4075 16.6012 3.12592C17.148 2.60249 17.6326 2.09384 18.0847 1.77226C18.3868 1.55653 18.6644 1.42791 18.9313 1.39866C19.0251 1.38884 19.112 1.38441 19.1921 1.38441Z"
                    fill="#696969"
                  />
                  <path
                    d="M14.9078 8.65454H10.092V14.473H14.9078V8.65454Z"
                    fill="#696969"
                  />
                  <path
                    d="M9.08882 8.65454H0.5V14.473H9.08882V8.65454Z"
                    fill="#696969"
                  />
                  <path
                    d="M24.5 8.65454H15.9108V14.473H24.5V8.65454Z"
                    fill="#696969"
                  />
                  <path
                    d="M9.08885 15.2759H1.30273V28.3173H9.08885V15.2759Z"
                    fill="#696969"
                  />
                  <path
                    d="M14.9078 15.2759H10.092V28.3173H14.9078V15.2759Z"
                    fill="#696969"
                  />
                  <path
                    d="M23.6972 15.2759H15.9108V28.3173H23.6972V15.2759Z"
                    fill="#696969"
                  />
                </svg>
              </div>
            </div>
            <div className="feature-desc">
              <p className="font-bold">BUILDING HOMES</p>
              <p className="text-[12px]">Best Gift items</p>
            </div>
          </div>
          <div className="feature-list w-[211px] h-[75px] flex ">
            <div className="feature-logo w-[43px] h-[43px] rounded-[80px] bg-[#D9D9D9] flex content-center mx-[12px]">
              <div className="flex m-auto">
                <svg
                  width="25"
                  height="23"
                  viewBox="0 0 25 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2416 14.7083L16.6342 15.3121C16.6342 15.3121 15.1908 16.7474 11.2508 12.8297C7.31082 8.91208 8.75426 7.47683 8.75426 7.47683L9.13666 7.09658C10.0788 6.15986 10.1676 4.65595 9.34559 3.55805L7.66434 1.31218C6.64703 -0.0466963 4.68127 -0.226203 3.51526 0.933183L1.42246 3.0141C0.844304 3.58898 0.456864 4.33419 0.503851 5.16089C0.624051 7.27583 1.58094 11.8263 6.92047 17.1355C12.5828 22.7657 17.8957 22.9894 20.0684 22.7869C20.7556 22.7229 21.3532 22.3729 21.8348 21.8939L23.7289 20.0107C25.0074 18.7394 24.6469 16.5599 23.011 15.6707L20.4637 14.2859C19.3896 13.7021 18.081 13.8735 17.2416 14.7083Z"
                    fill="#696969"
                  />
                </svg>
              </div>
            </div>
            <div className="feature-desc">
              <p className="font-bold">ORDER NOW</p>
              <p className="text-[12px]">Contact Us</p>
            </div>
          </div>
        </div>
      </header>
      <section className="navbar flex justify-between border-t-4 border-b-4 border-[#D9D9D9] p-[10px]">
        <ul>
          <li className="inline mx-[5px]">HOME</li>
          <li className="inline mx-[5px]">FURNITURE</li>
          <li className="inline mx-[5px]">MOBILE</li>
          <li className="inline mx-[5px]">BLOG</li>
          <li className="inline mx-[5px]">JOIN US</li>
          <li className="inline mx-[5px]">CONTACT</li>
        </ul>

        <div className="nav-icon flex">
          <svg
            width="20"
            height="20"
            className="mx-[24px]"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.46 24.45C7.16999 24.45 2.07101 19.44 2.07101 13.25C2.07101 7.06 7.16999 2.04004 13.46 2.04004C19.75 2.04004 24.85 7.06 24.85 13.25C24.85 19.44 19.75 24.45 13.46 24.45ZM31.688 30.25L23.429 22.12C25.591 19.77 26.92 16.67 26.92 13.25C26.92 5.93 20.894 0 13.46 0C6.02599 0 0 5.93 0 13.25C0 20.56 6.02599 26.49 13.46 26.49C16.672 26.49 19.618 25.38 21.932 23.53L30.224 31.6899C30.629 32.0899 31.284 32.0899 31.688 31.6899C32.093 31.2999 32.093 30.65 31.688 30.25Z"
              fill="black"
            />
          </svg>
          <p className="flex content-center">
            <svg
              width="17"
              height="17"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.4609 25.8906C20.5469 25.8906 19.8203 25.1641 19.8203 24.25C19.8203 23.3359 20.5469 22.6094 21.4609 22.6094C22.375 22.6094 23.1016 23.3359 23.1016 24.25C23.1016 25.1641 22.3516 25.8906 21.4609 25.8906ZM8.33594 25.8906C7.42187 25.8906 6.69531 25.1641 6.69531 24.25C6.69531 23.3359 7.42187 22.6094 8.33594 22.6094C9.25 22.6094 9.97656 23.3359 9.97656 24.25C9.97656 25.1641 9.22656 25.8906 8.33594 25.8906ZM8.07812 21.2031C6.83594 21.2031 5.75781 20.2188 5.61719 18.9766L4.02344 7.77344L3.10937 2.54688C3.03906 1.98437 2.54688 1.51562 2.00781 1.51562H0.8125C0.414062 1.51562 0.109375 1.21094 0.109375 0.8125C0.109375 0.414062 0.414062 0.109375 0.8125 0.109375H2.00781C3.25 0.109375 4.35156 1.09375 4.51562 2.33594L5.42969 7.5625L7.02344 18.7891C7.07031 19.3281 7.5625 19.7969 8.07812 19.7969H23.3125C23.7109 19.7969 24.0156 20.1016 24.0156 20.5C24.0156 20.8984 23.7109 21.2031 23.3125 21.2031H8.07812ZM9.25 17.4531C8.875 17.4531 8.57031 17.1719 8.54688 16.7969C8.52344 16.6094 8.59375 16.4219 8.71094 16.2812C8.82812 16.1406 9.01562 16.0469 9.17969 16.0469L21.9062 15.1094C22.4688 15.1094 22.9609 14.6641 23.0312 14.125L24.5078 5.6875C24.5547 5.28906 24.4375 4.86719 24.2031 4.60938C24.0391 4.42188 23.8281 4.32812 23.5703 4.32812H7.375C6.97656 4.32812 6.67188 4.02344 6.67188 3.625C6.67188 3.22656 6.97656 2.92188 7.375 2.92188H23.6172C24.2734 2.92188 24.8594 3.20313 25.3047 3.67188C25.7969 4.23438 26.0312 5.05469 25.9375 5.875L24.4609 14.3125C24.3203 15.5312 23.2188 16.4922 22 16.4922L9.34375 17.4297C9.29688 17.4531 9.27344 17.4531 9.25 17.4531Z"
                fill="black"
              />
            </svg>{" "}
            0
          </p>
        </div>
      </section>
      <section className="showcase-headline flex justify-between">
        <div className="bg-[#F1F1F1] w-[50%] h-[642px] content-center ">
          <div className="discount w-[80px] h-[80px] rounded-[100px]  p-[5px] bg-[#F2BE1D] text-center text-white z-50 absolute left-[420px] top-[350px]">
            <p className="my-[18px] font-black text-[20px] ">-30%</p>{" "}
          </div>
          <Image src={couchimage} />
          <div></div>
          <p className="text-[#A71E1D] text-[40px] mx-[145px] ">FURNITURE</p>
          <h2 className="font-black text-[70px] m-[5px] my-[-15px]">
            WOOD STYLE
          </h2>
          <button className="bg-white font-black text-[16px] p-[8px] mx-[180px]">
            SHOP NOW
          </button>
        </div>
        <div className="w-[48%] p-[10px] flex flex-col
          space-around h-[200px]">
          <Image src={sofashow} />
          <div className="flex space-x-4  my-[10px] h-[250px]">
            <div className=" w-[50%] bg-[#F2F2F2] flex flex-col content-center">
              <div className="mx-[50px]">
                <p className="inline text-[30px]">SOFA</p>
                <p className="inline font-black text-[30px] text-[#00DAFF]"> ITALIA</p>
              </div>

              <Image src={sofa} />
            </div>
            <div className=" w-[48%]  bg-[#F2F2F2] ">
              <Image src={kede} className=" w-[200px] h-[250px]" />
              <div className="discount w-[60px] h-[60px] rounded-[100px]  p-[5px] bg-white text-center text-[#F2BE1D] z-50 absolute top-[650px] right-[120px] ">
                <p className="my-[15px] font-black text-[16px] ">-15%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='product-showcase space-y-4'>
        <div className="product-header">
          <ul className="space-x-4">
            <li className="inline font-black border-b-0 hover:border-b-2 border-white hover:border-[#413F40]">LATEST</li>
            <li className="inline font-black border-b-0 hover:border-b-2 border-white hover:border-[#413F40]">NEW PRODUCT</li>
            <li className="inline font-black border-b-0 hover:border-b-2 border-white hover:border-[#413F40]">POPULAR</li>
            <li className="inline font-black border-b-0 hover:border-b-2 border-white hover:border-[#413F40]">OFFERS</li>
            <li className="inline font-black border-b-0 hover:border-b-2 border-white hover:border-[#413F40]">GADGETS</li>
          </ul>
        </div>
        <div className="product-data flex flex-wrap justify-around">
          {data.map((data) => {

            return (
              <div key={data.name} className="product-item space-y-3  ">
                <Image src={data.img} width={270} height={200} className="border-[3px] border-solid border-[#D9D9D980] p-[5px]" />
                <div className="product-item-desc mx-[65px]">
                  <p className="font-bold">{data.name}</p>
                  <p className="text-[#C16C4F] text-[15px] font-bold">{data.price}</p>
                </div>
              </div>
            );
          })}

        </div>

      </section>
      <section className="new-product bg-[#F0F0F0] p-[7px] content-center flex justify-around">
        <Image src={'/image.png'} width={400} height={400} className="self-center" />
        <div className="new-product-desc space-y-4">
          <p className="font-black">NEW PRODUCT</p>
          <h1 className="font-black text-[45px]">AXEL- STOOL</h1>
          <p className="w-[500px]">A sleek and versatile addition to contemporary interiors. Crafted from sustainably sourced ash wood, its minimalist design exudes elegance and functionality. The AXEL Stool features a gently machined seat for optimal comfort, supported by sturdy yet slim tapered legs that provide stability without compromising on style.</p>
          <button className="bg-[#353638] text-[#FFFFFF] p-[5px]">SHOP NOW</button>
        </div>
      </section>
      <section className="offer flex flex-col space-y-3 ">
        <div className="offer-pag flex justify-between">
          <p className="font-black">OFFERS</p>
          <div className="pagination flex space-x-2">
            <span className="border-2 border-solid border-[#909090] p-[3px]"><svg width="18" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.09736 2.63036C9.63037 2.09737 9.63037 1.2332 9.09736 0.700214C8.56437 0.16721 7.70022 0.16721 7.16721 0.700214L0.799494 7.06787C-0.266497 8.13393 -0.266499 9.86221 0.799494 10.9283L7.17109 17.2998C7.70408 17.8328 8.56825 17.8328 9.10124 17.2998C9.63424 16.7668 9.63424 15.9026 9.10124 15.3697L4.09775 10.3661H28.6352C29.389 10.3661 30 9.75507 30 9.00127C30 8.24762 29.389 7.63645 28.6352 7.63645H4.09122L9.09736 2.63036Z" fill="#909090" />
            </svg>
            </span>
            <span className="border-2 border-solid border-[#909090] p-[3px] "><svg width="18" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9026 15.3696C20.3696 15.9026 20.3696 16.7668 20.9026 17.2998C21.4356 17.8328 22.2998 17.8328 22.8328 17.2998L29.2005 10.9321C30.2665 9.86607 30.2665 8.13779 29.2005 7.07173L22.8289 0.700188C22.2959 0.167225 21.4318 0.167225 20.8988 0.700188C20.3658 1.23315 20.3658 2.09736 20.8988 2.63032L25.9022 7.6339H1.36482C0.611031 7.6339 0 8.24493 0 8.99872C0 9.75238 0.611031 10.3635 1.36482 10.3635H25.9088L20.9026 15.3696Z" fill="#909090" />
            </svg>
            </span>
          </div>
        </div>
        <div className="offer-product flex justify-around">
          <div className="img1  w-[45%]">
            <div className="banner bg-[#D8474C] text-white w-[300px] z-[40] flex flex-wrap p-[5px] justify-around absolute ">
              <p className="text-[50px] font-bold">20%</p>
              <div className="banner-desc">
                <p>FREE SHIPPING 100KM</p>
                <p>12 MONTH WARRANTY</p>
                <p>3 DAY TRIAL</p>
              </div>
              <p className="font-bold text-[25px]">FOR HNG PREMIUM </p>
            </div>
            <Image src={'/img/waterchair.png'} width={600} height={40} className="s" />
          </div>
          <div className="img2 w-[25%] bg-[url('/img/sofa-show.jpg')] bg-no-repeat bg-cover text-white">
            <div>
              <p className="text-[40px]">LIVING ROOM</p>
              <p className="font-bold text-[40px]">FURNITURE</p>
              <p className="text-[#D8474C] text-[70px] " style={{ textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white' }}>-40%</p>
              <button className="bg-[#222222] text-white flex p-[5px]">BUY NOW <span><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.96912 6.73999C10.2891 6.73999 11.3691 7.80799 11.3691 9.13999C11.3691 9.58399 11.2371 9.99199 11.0331 10.34C11.0331 10.34 10.1691 10.1 8.96912 10.1C7.76912 10.1 6.90512 10.34 6.90512 10.34C6.70112 9.99199 6.56912 9.58399 6.56912 9.13999C6.56912 7.80799 7.64912 6.73999 8.96912 6.73999ZM16.1691 6.73999C17.5011 6.73999 18.5691 7.80799 18.5691 9.13999C18.5691 9.58399 18.4371 9.99199 18.2331 10.34C18.2331 10.34 17.3691 10.1 16.1691 10.1C14.9691 10.1 14.1051 10.34 14.1051 10.34C13.9011 9.99199 13.7691 9.58399 13.7691 9.13999C13.7691 7.80799 14.8371 6.73999 16.1691 6.73999ZM12.5691 23.18C17.0331 23.18 21.0051 20.348 22.4451 16.124L20.8611 15.572C19.6491 19.124 16.3131 21.5 12.5691 21.5C8.82512 21.5 5.48912 19.124 4.27712 15.572L2.69312 16.124C4.13312 20.348 8.10511 23.18 12.5691 23.18Z" fill="white" />
              </svg>
              </span>
              </button>
            </div>

          </div>
          <div className="img3 w-[25%] bg-[url('/img/OUTDOOR.jpeg')] bg-no-repeat bg-cover  text-white flex justify-center">
          <div className=" mt-[25px]">
            <p className="text-[35px]">OUTDOOR</p>
          <p className="text-[35px] font-bold">FURNITURE</p>
          <p>Free delivery on weekends</p>
          </div>
          </div>

        </div>
      </section>
    </div>
  );
}
