import universal from "../../assets/images/blocks_location.jpg";

const Blocks_location = () => {
  return (
    <div className="blocks_location">
      <div className="container">
        <div className="blocks_location_box">
          <div className="blocks_location_card_left">
            <img
              className="blocks_location_card_left_img"
              src={universal}
              alt=""
            />
            <div className="blocks_location_map_text">
              <p className="blocks_location_map_text_text">
                Tumor – zamonaviy yashash uchun mo‘ljallangan mukammal arxitektura namunasi. Sizni haqiqiy estetik zavq bag'ichlovchi, amaliy yechimlarga ega boʻlgan uyda yashashga taklif etamiz.{" "}
              </p>
              {/* <p className="blocks_location_map_text_text2">Xaritada ko‘rish</p> */}
            </div>
          </div>

          <div className="blocks_location_card_text">
            <h2 className="blocks_location_title">Majmua arxitekturasi</h2>
            <p className="blocks_location_text">
              Tumor turar-joy majmuasi arxitektura san’atining zamonaviy yutuqlarini o‘zida mujassam etgan. Har bir bino innovatsion arxitektura yondashuvi va noyob dizayn asosida quriladi.
              {" "}
            </p>
            <p className="blocks_location_text">
              Majmua tashqi ko‘rinishi bilan nafaqat jozibadorlikni, balki zamonaviylikni ham o‘zida ifodalaydi. Binoning ichki qismlari esa qulaylik va estetika talablariga mos ravishda yaratilgan bo'lib, u yerda har bir detal mukammal o‘ylangan.{" "}
            </p>
          </div>

          <div className="blocks_location_card_icons">
            <div className="blocks_location_card_icon">
              <div className="blocks_location_icon_text">
                <div className="blocks_location_svg_box">
                  <svg
                    className="blocks_location_svg_card"
                    width="81"
                    height="80"
                    viewBox="0 0 81 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2062_4684)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M47.2465 20.1344H15.6811V10.1322C15.6811 7.0196 6.52734 10.1322 6.52734 16.5853V60.5986C6.52734 63.8631 8.39971 66.3115 11.1231 67.64C12.7118 68.4182 14.1303 68.2853 16.362 68.2853C26.1021 68.2853 35.861 68.2853 45.6011 68.2853C44.542 69.8796 39.4545 73.8843 39.4545 75.0041C39.4545 75.5924 40.0029 75.972 40.2677 75.972H75.5211C76.202 75.972 76.4857 75.4026 76.4857 75.1559V39.911C76.4857 39.3226 76.0696 38.8102 75.5211 38.8102C74.462 38.8102 72.9868 41.2396 71.7007 42.0936V22.8864C71.7007 21.425 71.9277 20.3242 70.6038 20.1534C68.7693 19.9256 65.0056 20.1344 62.963 20.1344C64.1735 18.3313 68.826 15.01 69.2232 13.112C69.6582 11.0053 68.2586 9.88547 67.1617 8.78466C65.6108 7.22834 64.8922 6.01367 62.6794 6.01367C61.0529 6.01367 59.3507 8.19633 58.4051 9.12632L49.1756 18.3883C48.8541 18.73 47.7004 20.1344 47.2465 20.1344ZM60.2018 10.4169C60.5611 9.8855 62.2822 8.04449 62.963 8.04449C63.7006 8.04449 64.8354 9.44896 65.3271 9.92344C65.8 10.3979 67.1995 11.5557 67.1995 12.2959C67.1995 12.9791 65.3839 14.7063 64.8732 15.0479L60.2018 10.4169ZM56.9299 13.7193L58.632 11.9353L63.417 16.6801L61.6392 18.3883L56.9299 13.7193ZM38.7736 41.2396C38.1684 40.3286 34.4615 37.2159 34.2724 36.4378C34.8208 35.6216 38.5088 32.49 38.5088 31.9207C38.5088 30.9907 38.2062 30.687 37.2795 30.687C36.6932 30.687 34.5939 33.0404 34.1022 33.5339C33.0809 34.5588 31.9083 35.3939 31.4165 36.8743L29.0525 43.5551C28.939 43.8967 28.7877 44.3522 28.6742 44.6938C28.5229 45.1304 28.3338 45.51 28.2392 45.9085C27.3692 45.9085 26.4992 45.9085 25.6482 45.9085C25.0997 45.9085 24.3243 45.7946 24.0217 46.3261C23.7569 46.7816 23.7191 47.9583 24.8349 47.9583H53.5256C54.3388 47.9583 54.7927 46.364 53.7336 45.9655C53.2419 45.7757 34.0076 45.9085 33.3078 45.9085C33.7239 45.5479 34.8776 45.3012 35.5774 45.0355C39.8327 43.3843 38.5088 44.5989 41.6105 41.4863L57.5918 25.4487C58.1403 24.8982 58.6131 24.4238 59.1616 23.8734C59.4831 23.5507 60.4666 22.336 60.9016 22.336H69.5069V44.1434C69.5069 44.6369 62.4902 51.3936 62.0174 51.8491L56.2868 57.5999C55.814 58.0744 54.6036 58.9854 54.6036 59.7635C54.6036 60.4848 55.2088 60.8643 55.7762 60.7694C56.5327 60.6556 59.0292 57.8656 59.6344 57.2582C60.8448 56.0436 73.7812 42.9098 74.4242 42.4732V51.3936H72.3816C71.5116 51.3936 70.5471 53.5952 73.1949 53.5952H74.4242V56.6129H72.514C71.1523 56.6129 71.1523 58.6627 72.514 58.6627H74.4242V61.6805H72.9301C70.8686 61.6805 71.2279 63.8821 72.6653 63.8821H74.4431V66.8998C73.4218 66.8998 71.1712 66.5961 71.5116 68.1904C71.7575 69.2912 73.2705 69.0825 74.4431 69.0825V73.8843H43.1614C43.5585 73.2769 51.2182 65.7231 52.561 64.3945C52.9771 63.977 53.6958 63.5025 53.6958 62.7813C53.6958 62.1929 53.2797 61.6805 52.7312 61.6805C51.5019 61.6805 48.3624 66.1976 47.5302 66.1976H15.0003C12.012 66.1976 9.95055 64.9449 9.00492 62.4776C8.02145 59.9154 9.2697 57.1444 11.3312 55.7968C11.9742 55.3793 12.7686 55.0566 13.7142 54.8858C16.1729 54.4683 15.6811 55.607 15.6811 46.4399C15.6811 45.8706 15.2272 45.2063 14.7166 45.2063C13.2036 45.2063 13.4872 46.8575 13.4872 48.3569C13.4872 49.8183 13.4872 51.2797 13.4872 52.7411C11.7662 53.1397 10.8962 53.4054 9.5723 54.4493C9.15622 54.7909 8.96709 55.0756 8.56992 55.3603V18.6161C8.56992 16.4524 8.75905 14.8581 9.7236 13.5865C10.4801 12.5806 11.9553 11.3279 13.4872 11.1951V39.8541C13.4872 42.5492 13.2981 43.1375 14.849 43.1375C15.284 43.1375 15.6622 42.5492 15.6622 42.0367V22.2981H45.185C44.2961 23.6266 39.4545 27.4984 39.4545 28.5992C39.4545 29.3774 39.9462 29.7001 40.6838 29.7001C41.0999 29.7001 43.9368 26.6444 44.4096 26.1699L51.6532 18.9008C52.5232 18.0277 54.4712 15.864 55.3034 15.2947C55.8897 15.4465 59.7101 19.4512 59.9559 19.8118C59.7857 20.4381 55.3412 24.6515 54.7927 25.2019C53.5067 26.5305 39.4545 40.7841 38.7736 41.2396ZM33.043 38.5065L36.9013 42.3214L33.9887 43.3083L32.1163 41.3535C32.2865 40.9739 32.4 40.4614 32.5891 39.9679C32.7783 39.4935 32.9863 39.0569 33.043 38.5065Z"
                        fill="#201637"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M49.7093 55.7043H55.7116C56.0664 55.7043 56.2996 55.4711 56.2996 55.1162V49.185C56.2996 48.5665 55.813 48.5969 55.5696 48.5969C55.3161 48.5969 52.2339 51.8312 52.0007 52.0543L49.3646 54.6904C48.9185 55.1669 49.2227 55.7043 49.7093 55.7043ZM55.1134 50.5639L55.1336 54.6093H51.1085L55.1134 50.5639Z"
                        fill="#201637"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2062_4684">
                        <rect
                          width="72"
                          height="72"
                          fill="white"
                          transform="translate(4.5 4)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                Mualliflik arxitekturasi
              </div>


              <div className="blocks_location_icon_text">
                <div className="blocks_location_svg_box">
                  <svg
                    className="blocks_location_svg_card"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 28.8467C4.4473 28.5064 4.8946 28.1174 5.38888 27.85C19.4901 20.3633 33.6147 12.8766 47.6923 5.36568C48.5869 4.87941 49.3166 4.87941 50.2112 5.36568C58.0975 9.66813 66.0073 13.9461 73.9172 18.2001C74.6939 18.6132 75 19.148 75 20.0716C74.9764 29.9161 74.9764 39.785 75 49.6297C75 50.5046 74.7175 51.0394 73.9642 51.4284C59.6512 59.0122 45.3382 66.5962 31.0252 74.2044C30.3661 74.5691 29.7775 74.5934 29.0713 74.2287C21.0673 69.8778 13.0634 65.551 5.05941 61.1999C4.65909 60.9812 4.35319 60.6409 4 60.3491M72.6224 21.6274C72.2928 21.7975 72.0574 21.8948 71.8455 21.9919C58.5212 29.0655 45.1734 36.1389 31.8491 43.1881C31.3548 43.4555 31.2135 43.7472 31.2135 44.3062C31.2371 53.0084 31.2371 61.7347 31.2371 70.4369V71.2875C31.5432 71.1417 31.7078 71.0688 31.8962 70.9716C45.2912 63.8738 58.686 56.7517 72.0808 49.6781C72.5281 49.4351 72.6458 49.1677 72.6458 48.6816C72.6224 39.9309 72.6458 31.1559 72.6458 22.4051V21.6274H72.6224ZM6.40116 31.399C6.37759 31.5934 6.37759 31.6907 6.37759 31.788C6.37759 40.7331 6.37759 49.6783 6.35418 58.6234C6.35418 59.0609 6.5424 59.2311 6.87203 59.4255C14.005 63.266 21.1379 67.131 28.2474 70.996C28.4121 71.0931 28.6004 71.1661 28.8124 71.239C28.8124 71.0446 28.836 70.9715 28.836 70.8744C28.836 61.9534 28.8358 53.0327 28.8594 44.1117C28.8594 43.6499 28.6711 43.4555 28.318 43.2611C23.4449 40.6358 18.5955 38.0106 13.746 35.3854C11.2977 34.0485 8.89658 32.7602 6.40116 31.399ZM71.1864 19.5855C70.9744 19.4397 70.8803 19.3911 70.7627 19.3181C63.6296 15.4533 56.4966 11.6126 49.3873 7.74766C48.9635 7.52892 48.7046 7.67484 48.375 7.84494C35.0979 14.8942 21.7971 21.9434 8.51983 28.9925C8.30804 29.0898 8.0961 29.2356 7.83717 29.3815C8.11966 29.5516 8.3316 29.6487 8.51983 29.7703C15.441 33.5137 22.3621 37.2571 29.2831 41.0248C29.8247 41.3165 30.2484 41.3165 30.8134 41.0248C42.066 35.045 53.3186 29.0653 64.5949 23.0858C66.7371 21.9433 68.9029 20.7766 71.1864 19.5855Z"
                      fill="#201637"
                    />
                    <path
                      d="M64.4225 20.4788C64.4466 21.1185 64.0133 21.4385 63.508 21.7092C61.2457 22.8903 58.9833 24.0961 56.721 25.2773C54.4346 26.4831 52.1483 27.6643 49.8619 28.8947C49.164 29.2639 48.5623 29.2639 47.8644 28.8947C43.1713 26.3601 38.4782 23.85 33.7611 21.3646C33.2076 21.0693 32.7262 20.7495 32.7021 20.0358C32.7021 19.3468 33.1834 19.0023 33.7371 18.7069C38.406 16.2707 43.0991 13.8099 47.768 11.3244C48.5142 10.9308 49.164 10.9554 49.886 11.3737C54.3866 13.9575 58.8871 16.5414 63.3876 19.1252C63.9411 19.3959 64.4706 19.7159 64.4225 20.4788ZM47.5756 14.2774C43.9174 16.1969 40.3073 18.0918 36.6251 20.0358C40.3073 22.0045 43.8933 23.9239 47.5756 25.8926V14.2774ZM60.644 20.4049C57.082 18.3625 53.6405 16.3937 50.1268 14.3759V25.9172C53.6405 24.0715 57.058 22.2752 60.644 20.4049Z"
                      fill="#201637"
                    />
                    <path
                      d="M29.9331 21.6182C30.2862 21.7402 30.614 21.8378 30.9165 22.0087C35.7326 24.5962 40.5235 27.2081 45.3394 29.82C45.8438 30.0885 46.2976 30.4302 46.2976 31.0649C46.2976 31.7484 45.8438 32.0901 45.2889 32.3587C40.4982 34.7264 35.7074 37.1187 30.9165 39.5108C30.2609 39.8282 29.681 39.8282 29.0254 39.4863C24.0581 36.9477 19.0656 34.4335 14.0479 31.9192C13.5184 31.6508 13.0644 31.3091 13.0644 30.6743C13.0392 29.9909 13.5184 29.6492 14.0731 29.3806C19.0656 26.9152 24.0329 24.4252 29.0254 21.9354C29.328 21.789 29.6305 21.7158 29.9331 21.6182ZM28.622 24.9379C24.7894 26.842 21.0323 28.7215 17.1493 30.6498C21.0323 32.6271 24.8146 34.5311 28.622 36.4596V24.9379ZM42.3136 31.016C38.5818 28.9899 34.9761 27.0373 31.2948 25.0355V36.4839C35.0013 34.6776 38.5818 32.8712 42.3136 31.016Z"
                      fill="#201637"
                    />
                  </svg>
                </div>
                Xonalar o‘rtasidagi dеvorlar gazoblokdan
              </div>
              <div className="blocks_location_icon_text">
                <div className="blocks_location_svg_box">
                  <svg
                    className="blocks_location_svg_card"
                    width="73"
                    height="72"
                    viewBox="0 0 73 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.5 2.21537V69.7846C1.5 70.5062 1.97447 71 2.71471 71C4.13825 71 3.9295 69.6896 3.9295 68.2843V7.64677C4.06236 7.7987 3.9295 7.58976 4.11931 7.9126C4.21421 8.06453 4.17625 8.00756 4.29013 8.19747C4.44197 8.46334 4.4989 8.63423 4.63176 8.9001L12.0152 23.675C13.9892 27.6251 13.5716 25.9349 13.5716 30.2648V58.4661C13.5716 59.8904 13.3248 61.3337 14.7863 61.3337C15.5076 61.3337 16.001 60.8589 16.001 60.1183V27.5491H56.9989V60.1183C56.9989 60.8399 57.4734 61.3337 58.2137 61.3337C59.6372 61.3337 59.4284 60.0233 59.4284 58.618V30.2648C59.4284 25.8969 58.9919 27.663 60.9279 23.7889C61.4403 22.7444 68.615 8.15952 69.0705 7.64677V68.1324C69.0705 69.5567 68.8238 71 70.2852 71C71.0065 71 71.5 70.5252 71.5 69.7846V2.21537C71.5 1.49372 71.0255 1 70.2852 1H2.75271C1.97451 1 1.5 1.47473 1.5 2.21537ZM4.76464 3.44977L68.1405 3.41181L57.3785 25.0993L15.5265 25.1373L4.76464 3.44977Z"
                      fill="#201637"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 6.8982C10.5 8.23524 11.5752 9.89694 12.3167 11.4059L17.2293 21.5293C17.563 22.236 17.804 23 18.7494 23H55.5472C56.159 23 56.5853 21.9493 56.8263 21.4336L59.7183 15.4743C60.3856 14.0991 60.9603 12.8957 61.6277 11.5205C62.3692 9.99245 63.5 8.25436 63.5 6.91732C63.5 6.55441 62.9624 6.00048 62.6102 6.00048H11.3713C11.0191 5.98138 10.5 6.5353 10.5 6.8982ZM13.5958 8.42622H35.8228V13.2778H16.2468C15.7833 13.2778 15.6536 12.6857 15.4682 12.2654L13.5958 8.42622ZM57.7532 13.2778H38.1772V8.42622H60.4042L58.5874 12.17C58.4021 12.5711 58.2167 13.2778 57.7532 13.2778ZM17.1181 15.7035H35.8228V20.5551H19.769C19.2685 20.5551 18.7494 19.0462 18.3416 18.2249C17.9152 17.3463 17.5444 16.5247 17.1181 15.7035ZM54.231 20.5551H38.1772V15.7035H56.882C56.4556 16.5438 56.0848 17.3463 55.6584 18.2249C55.2691 19.008 54.713 20.5551 54.231 20.5551Z"
                      fill="#201637"
                    />
                  </svg>
                </div>
                Qulay <br /> rejalashtirish
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocks_location;
