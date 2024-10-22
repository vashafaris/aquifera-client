import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from '../../shared/Button';
import { DEVICE_SIZE } from '../../../constants/device.constant';
import { COLOR } from '../../../constants/color.constant';

const Styled = styled.section`
  position: relative;
  height: 100vh;
  padding-top: 7rem;
  padding-left: 5%;
  background-color: ${COLOR.primary};
  color: #fff;

  display: flex;

  .img-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    max-width: 80%;
    transform: translateX(4%);

    @media (max-width: ${DEVICE_SIZE.laptop}) {
      display: none;
    }
  }

  .icon-container {
    position: relative;
    flex: 4;

    display: flex;
    align-items: center;

    @media (max-width: ${DEVICE_SIZE.laptop}) {
      display: none;
    }

    .img-container {
      flex: 1;
      position: relative;
      height: 70%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .info-container {
    position: relative;
    flex: 6;
    padding: 0 5%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 1.2rem;
      font-weight: bold;
    }

    h1 {
      font-size: 5.2rem;
      font-weight: bold;
      margin: 1.2rem 0;
    }
  }
`;

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      delay: 1,
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const Hero = () => (
  <Styled>
    <img src='/svg/home-bg-1.svg' alt='' className='img-background' />
    <div className='icon-container'>
      <div className='img-container'>
        <svg
          width='332'
          height='435'
          viewBox='0 0 332 435'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <mask
            id='mask0'
            mask-type='alpha'
            maskUnits='userSpaceOnUse'
            x='4'
            y='7'
            width='324'
            height='393'
          >
            <motion.path
              d='M166 11.1958C166 11.1958 8 158.085 8 262.011C8 344.001 69.0494 395.631 166 395.631C262.95 395.631 324 344.001 324 262.011C324 158.085 166 11.1958 166 11.1958Z'
              fill='url(#paint0_linear)'
              stroke='white'
              strokeWidth='8'
              strokeLinejoin='round'
            />
          </mask>
          <g mask='url(#mask0)'>
            <g opacity='0.8'>
              <motion.path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M187.057 327.341L187.685 325.208L185.423 322.824L181.905 320.315L175.246 321.946L184.041 327.467L187.057 327.341ZM213.317 326.588L218.343 320.566L218.468 318.182L217.84 316.551L210.678 319.813L207.16 324.706L206.281 327.341L207.035 328.345L213.317 326.588ZM168.587 310.277L166.577 313.037L162.682 313.163L159.918 317.68L163.687 317.805L168.587 316.676L176.88 315.17L175.372 311.657L170.974 312.41L168.587 310.277ZM203.893 310.277L197.36 313.163L192.585 313.79L188.313 311.406L182.659 313.037L182.408 315.923L191.706 316.927L202.511 314.669L203.893 310.277ZM104.005 299.737L103.126 296.852L100.236 296.224L94.7075 293.213L86.1636 292.711L81.0121 300.365L87.42 300.867L88.4252 304.38L100.99 307.642L104.005 306.638L109.157 307.391L117.072 310.403L123.606 311.908L130.893 312.536L137.301 312.285L144.714 315.421L153.007 312.41L144.714 307.642L134.286 306.262L132.024 301.118L119.083 297.228L117.449 300.49L104.005 299.737ZM288.202 295.22L288.453 291.456L286.945 289.072L285.312 291.833L283.804 294.593L284.181 300.616L288.202 295.22ZM236.687 273.263L234.928 270.628L227.766 271.004L229.023 274.392L233.923 275.898L236.687 273.263ZM259.429 270.252L251.764 267.993L243.095 268.369L241.21 272.761L246.11 273.012L250.131 272.51L255.911 273.137L261.816 276.4L259.429 270.252ZM285.814 254.819L284.809 251.807L273.501 248.545L269.857 251.18L260.308 253.062L263.198 257.077L269.48 258.583L272.119 263.225L282.548 263.351L283.05 265.358L278.024 265.233L270.234 268.118L275.511 272.008L275.386 275.521L276.893 278.407L279.532 277.78L281.794 273.89L292.097 281.293L297.876 281.92L311.195 288.696L314.085 295.346L315.341 304.003L310.692 306.262L307.174 312.787L316.095 312.536L318.105 310.277L325.016 311.908L330.795 318.433L332.68 292.335L333.937 266.362L326.398 264.856L321.246 261.97L315.341 259.21H309.059L300.766 263.978L294.609 272.51L287.448 267.742L285.814 254.819ZM222.992 234.241L221.735 232.485L214.825 238.256L206.658 238.633L197.737 237.503L192.208 235.119L186.303 241.142L184.795 244.404L181.152 256.45L180.021 262.723L177.005 267.993L179.016 273.388L181.905 273.514L182.659 281.168L180.272 288.57L183.162 290.954L187.685 289.7L188.062 278.282L187.811 268.997L192.585 266.613L191.706 274.392L196.606 279.035L195.601 282.171L197.234 284.304L204.27 281.293L200.501 287.818L203.139 290.578L207.035 288.194L207.411 283.05L201.506 273.765L202.888 271.004L196.48 260.841L202.763 257.704L206.029 253.062L209.045 254.191L209.673 250.552L196.48 253.187L192.585 256.826L186.303 249.8L187.434 243.777L193.59 242.522L205.276 242.146L212.06 243.777L217.463 242.146L222.992 234.241ZM247.367 236.625L246.613 233.363L242.467 232.61L241.838 228.218L239.577 231.104L238.32 237.503L240.456 247.792L243.22 252.811L245.231 251.807L242.341 247.667L243.472 242.773L247.115 243.526L247.367 236.625ZM170.849 230.979L171.979 227.34L166.577 219.812L170.346 212.534L164.064 211.28H156.022L153.887 220.314L151.374 223.074L147.981 234.241L142.327 235.872L135.542 233.614L132.15 234.367L128.129 238.382L123.606 237.88L119.083 239.385L114.183 234.994L112.926 229.599L108.78 234.868L108.026 242.271L109.031 249.298L112.298 256.073L115.816 258.332L116.695 268.997L122.475 270.001L126.998 269.499L129.511 273.388L137.93 270.502L141.448 273.012L146.473 273.514L148.986 278.407L157.153 274.769L158.158 277.654L161.3 265.484L161.676 257.453L168.587 252.058L168.336 244.781L170.597 239.385L179.016 238.382L170.849 230.979ZM84.5302 292.335L85.4097 280.038L87.5456 270.001L84.2789 264.982L79.1274 264.354L76.7401 259.837L75.6093 254.317L73.0964 254.066L69.0758 251.305L71.9657 244.781L66.5629 241.142L62.4165 234.492L56.3856 228.971L49.2237 228.846L42.3132 220.314L38.2926 216.926L32.6386 211.531L26.1051 203.751L15.0482 202.246L10.525 201.869L11.2789 205.884L18.9432 214.668L24.4716 219.184L28.3666 226.085L34.7745 231.104L37.5388 237.252L39.6747 244.153L45.8314 250.803L50.9828 261.97L54.3753 267.993L59.5268 274.518L62.2909 279.286L71.0861 285.81L76.7401 292.46L84.5302 292.335Z'
                fill='white'
                variants={pathVariants}
              />
              <motion.path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M144.211 209.523L147.604 213.664L148.986 210.903L152.378 211.154L152.504 206.01L152.63 202.12L146.85 206.512L144.211 209.523Z'
                fill='#040404'
                fillOpacity='0.51'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M105.764 96.4734L106.518 91.9565L109.031 88.4432L107.021 85.3064L103 85.1809L95.7127 87.4395L92.9485 90.9526L94.205 97.8536L100.362 100.363L105.764 96.4734ZM122.35 -150.079L114.685 -157.733L109.157 -162.375L104.382 -165.763L94.7076 -173.417L87.2945 -176.302L76.6147 -178.561L68.8247 -178.31L62.4167 -176.93L60.2807 -173.166L64.9296 -171.284L68.0707 -167.143L66.563 -164.634L66.6886 -156.478L69.0759 -153.09L63.5475 -148.197L54.3755 -151.083L55.1293 -145.311L55.5062 -137.532L58.8987 -134.269L61.9142 -135.273L68.6989 -134.018L71.8401 -136.904L78.2481 -134.395L87.2945 -129L88.174 -126.239L82.7713 -127.117L74.2274 -126.114L71.2118 -123.855L69.4529 -118.711L61.5372 -115.7L57.6422 -111.559L50.2291 -113.19L46.2085 -113.817L45.7059 -108.799L49.3497 -105.913L51.7368 -103.278L48.5957 -100.768L46.2085 -96.6278L40.0519 -93.8674L30.6285 -93.6165L21.5819 -90.8561L16.0536 -86.7155L12.0329 -89.225L4.24294 -89.0995L-7.44215 -93.8674L-14.3526 -94.9966L-22.394 -93.9929L-36.4662 -95.624L-43.3767 -95.4986L-49.282 -100.016L-55.4386 -107.167L-59.7106 -108.046L-69.6366 -112.814L-78.683 -113.943L-86.7244 -115.198L-90.4937 -118.585L-92.1272 -127.745L-99.4145 -134.018L-109.592 -136.904L-116.754 -141.045L-120.9 -146.566L-123.036 -145.938L-125.297 -140.668L-130.072 -139.916L-126.931 -132.136L-128.941 -128.623L-142.385 -131.133L-141.129 -117.205L-143.642 -115.449L-154.95 -112.437L-144.019 -99.0118L-147.662 -97.0042L-145.526 -92.6127L-145.778 -90.8561L-154.322 -86.59L-155.578 -83.5787L-163.619 -82.5749L-164.373 -77.5561L-171.535 -78.6853L-175.556 -77.1797L-180.581 -73.4155L-179.199 -71.5334L-180.456 -69.6514L-176.686 -62.2485L-174.676 -63.0013L-170.279 -61.2447L-169.525 -58.1079L-167.263 -53.4655L-165.504 -51.0815L-159.599 -47.3173L-155.955 -41.0437L-144.144 -37.7815L-134.595 -28.3711L-133.59 -21.8466L-129.821 -17.706L-129.067 -13.5654L-134.218 -14.6946L-130.198 -5.91162L-122.408 -0.892746L-111.728 4.62801L-109.341 2.74593L-103.435 5.25537L-95.3939 10.3997L-91.3732 11.529L-88.2321 15.4186L-82.578 16.9242L-76.2957 20.4375L-68.2546 22.3195L-60.0876 23.0724L-56.3182 21.3158L-54.4336 27.7148L-51.1667 21.6922L-47.8999 19.6846L-42.6229 21.5667L-38.9791 21.6922L-35.5867 23.9507L-30.3096 22.9469L-25.4093 16.9242L-18.7502 11.9054L-12.5936 13.7874L-8.573 10.5252L-4.1754 15.4186L-5.68309 18.8063L1.98125 19.9356L5.75061 19.4337L9.14313 24.0762L12.5355 25.9582L14.1689 32.1063L15.174 38.7563L10.0226 45.4064L10.902 54.8168L17.9383 53.562L20.8281 60.8394L25.477 62.4706L24.4718 68.9951L30.1259 72.0064L33.267 73.5121L38.0416 71.2536L38.7954 74.5158L39.6749 76.3979L43.3186 76.5234L40.9313 67.4894L44.3238 66.2347L47.7162 64.3526H53.119L59.7781 63.4743L64.9296 59.2083L68.6989 62.2196L75.2326 63.5998L74.9812 68.2422L78.7505 71.5045L86.1637 73.5121L89.1792 72.2573L98.8538 74.7668L97.7231 77.9036L100.487 83.6753L104.257 83.1734L105.262 74.7668L112.298 73.6375L121.344 69.6224L124.486 65.6073L127.375 68.2422L130.893 64.6035L138.558 63.7253L146.85 57.0752L154.766 49.6724L158.912 40.1365L161.802 29.5969L164.441 20.9394L167.959 20.312L167.833 13.9129L166.828 7.51385L162.054 5.00441L158.912 0.738373L162.431 -1.39467L160.42 -7.29181L153.635 -13.4399L146.85 -20.7173L141.071 -28.622L132.15 -33.0135L133.281 -38.7853L138.055 -42.8004L139.312 -47.1919L147.73 -49.4504L144.714 -53.7164L140.443 -53.9674L133.155 -57.1042L128.255 -51.3325L122.098 -53.7164L120.214 -57.3551L114.308 -58.6098L108.403 -64.1306L109.911 -67.8948L116.193 -68.2711L117.701 -73.4155L122.224 -78.9363L126.496 -81.6967L132.024 -77.5561L129.637 -72.2863L132.527 -69.1495L130.768 -65.3853L136.799 -67.6438L139.814 -71.2825L147.73 -73.6664L150.368 -78.6853L155.143 -82.9514L156.399 -88.4721L160.923 -85.9627L166.702 -85.7117L163.31 -89.8523L171.226 -93.1146L171.1 -97.5061L178.01 -92.9891L175.623 -96.8787L178.764 -97.0042L173.99 -106.164L168.085 -112.814L171.728 -115.574L180.272 -114.194L179.518 -121.722L176 -130.254L176.503 -133.14L174.869 -140.167L166.2 -137.908L162.933 -134.771H153.51L145.971 -142.049L134.789 -147.695L122.35 -150.079Z'
                fill='#040404'
                fillOpacity='0.51'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M90.184 132.233L83.6504 129.347L81.1375 134.742L74.9809 131.731L68.3218 130.476L59.4011 132.107L55.6317 138.632L58.2702 148.293L62.5422 156.574L65.8089 160.715L71.7142 161.844L77.6196 158.707L84.9069 158.08L81.3889 153.312L92.5712 147.164L92.4456 137.503L90.184 132.233Z'
                fill='#040404'
                fillOpacity='0.51'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M90.1841 132.233L90.4353 124.203L87.9224 118.556L81.8914 113.036L76.4887 106.009L69.3269 96.5988L60.1549 91.8309L61.7882 88.945L65.9345 86.812L62.1652 79.911L53.6212 79.7856L49.3494 72.6337L44.3236 66.2346L40.9311 67.4893L43.3184 76.5233L39.6746 76.3978L38.7952 74.5157L33.6438 79.6601L32.6385 82.6714L35.9053 85.0554L37.0361 89.8233L41.8107 90.1997L41.3081 98.6064L42.5645 105.758L49.2236 100.99L51.4853 102.496L55.5059 102.245L56.5111 99.4847L61.9139 99.9866L68.0704 106.511L69.7039 114.416L76.2373 121.317L76.8656 128.092L74.9809 131.731L81.1375 134.742L83.6504 129.347L90.1841 132.233Z'
                fill='#040404'
                fillOpacity='0.51'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M38.795 74.5157L38.0412 71.2535L33.2666 73.512L30.1255 72.0063L24.4715 68.995L25.4767 62.4705L20.8277 60.8393L17.938 53.562L10.9017 54.8167L10.0223 45.4063L15.1737 38.7563L14.1686 32.1063L12.5352 25.9581L9.1428 24.0761L5.75029 19.4336L1.98093 19.9355L3.11177 22.9468L1.10148 24.4525L2.73477 29.3459L-2.41665 27.9657L-10.081 33.4865L-8.95014 38.0035L-11.5887 44.7789L-11.2118 48.6686L-13.0965 55.1931L-18.8761 53.4365L-17.7453 61.7176L-18.8761 64.3525L-17.7453 67.7403L-20.7608 69.6223L-20.1326 75.394L-22.7711 74.1393L-21.3891 80.5384L-15.6094 87.0629L-11.3374 88.1922L-11.84 90.9526L-5.05517 100.237L-2.66788 107.64L-3.79872 117.553L0.72448 119.435L4.74522 120.188L12.0326 114.416L16.0533 110.526L19.9483 117.051L22.4612 127.214L25.7279 136.75L28.9947 140.89L29.246 149.548L32.0102 154.316L30.3767 160.339L31.5076 166.361L34.2718 158.08L37.5386 150.677L34.0205 143.4L33.7692 139.636L32.5128 135.244L27.2356 128.845L25.0997 124.83L27.2356 123.45L28.9947 116.423L25.3509 111.154L20.1995 105.382L15.8019 98.3554L18.5662 96.9752L20.4509 88.3176L25.3509 87.9412L28.869 84.428L32.6384 82.6714L33.6436 79.6601L38.795 74.5157Z'
                fill='#040404'
                fillOpacity='0.51'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M50.9832 196.098L45.078 192.585L43.9471 193.965L45.7062 197.353L45.2036 203.25L47.8421 207.516L49.0986 214.166L53.3705 219.561L54.3758 223.576L62.7939 229.85L69.5788 235.872L74.6046 235.245L74.7302 232.61L71.8403 225.584L69.2018 223.325L68.5736 218.557L67.8197 215.922L68.448 212.284L67.8197 206.888L64.553 201.493L60.1554 196.725L58.522 195.972L56.3861 199.235L51.7371 200.238L50.9832 196.098ZM175.372 209.9L173.864 206.01L178.639 205.508L179.016 202.497L172.985 199.987L168.21 197.854L167.708 194.341L163.813 190.326H160.923L157.782 196.6L152.63 202.12L152.505 206.01L152.379 211.154L148.987 210.903L147.604 213.664L144.212 209.523L140.945 214.542L136.171 220.816L127.752 222.572L124.737 224.078L123.606 230.853L118.078 232.359L112.926 229.599L114.183 234.994L119.083 239.386L123.606 237.88L128.129 238.382L132.15 234.367L135.543 233.614L142.327 235.872L147.981 234.241L151.374 223.074L153.887 220.314L156.023 211.28H164.064L170.346 212.535L175.372 209.9Z'
                fill='#040404'
                fillOpacity='0.51'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M228.143 178.406L227.389 175.52L226.384 171.505L220.353 167.741L221.358 173.889L216.458 174.14L215.579 177.653L210.302 179.786L207.537 176.273L204.019 179.284L199.747 181.417L197.36 188.193L198.742 190.577L203.642 186.06L207.035 186.436L208.92 183.049L213.694 186.813L211.809 190.702L214.197 196.474L222.74 201.117L224.499 197.352L221.861 191.455L224.876 187.44L228.018 195.47L229.902 188.193L229.148 183.801L228.143 178.406ZM209.925 163.6V155.947L205.401 163.6L206.03 158.331L202.26 158.707L201.883 163.726L200.376 165.984L199.119 168.117L203.894 173.638L205.904 171.254L207.663 166.235L209.925 163.6ZM172.105 171.254L175.372 165.734L179.644 161.342L177.759 154.817L174.744 162.722L171.1 168.243L166.326 173.262L163.31 178.783L172.105 171.254ZM193.968 150.677L195.475 154.441L195.35 158.582L195.978 162.22L200.124 159.836L203.14 156.449L202.888 153.186H198.365L193.968 150.677ZM219.097 148.544L216.835 145.533L210.05 145.407L215.076 151.43L215.453 154.441L211.307 153.814L212.814 158.707L214.95 159.084L215.83 164.73L218.971 162.973L216.835 157.954L216.332 155.319L221.987 157.452L219.097 148.544ZM190.324 141.267L187.56 138.381L181.529 138.13L185.801 144.152L189.319 148.167L190.324 141.267ZM182.283 97.8533H178.136L177.006 105.131L178.388 117.552L175.121 115.043L176.629 122.571L178.136 126.084L182.283 130.727L182.785 127.841L185.047 129.598L183.162 131.731L183.288 134.993L186.932 136.75L193.214 135.62L198.24 140.388L199.622 137.377L202.763 141.643L208.794 145.533L209.045 141.894L206.532 139.886L206.658 135.62L197.234 131.103L194.345 132.107L190.45 131.229L187.937 124.83L188.062 118.431L191.832 115.796L192.586 109.146L189.193 103.374L189.696 100.112L188.816 98.1042L186.932 100.112L182.283 97.8533Z'
                fill='#040404'
                fillOpacity='0.51'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M74.9806 131.731L76.8652 128.092L76.237 121.317L69.7035 114.416L68.0701 106.511L61.9136 99.9864L56.5108 99.4845L55.5055 102.245L51.4849 102.496L49.2233 100.99L42.5642 105.758L41.3077 98.6062L41.8103 90.1996L37.0357 89.8232L35.9049 85.0553L32.6381 82.6713L28.8688 84.4279L25.3506 87.9411L20.4506 88.3175L18.5659 96.9751L15.8016 98.3552L20.1992 105.382L25.3506 111.153L28.9944 116.423L27.2353 123.45L25.0994 124.83L27.2353 128.845L32.5125 135.244L33.769 139.636L34.0202 143.4L37.5383 150.677L34.2716 158.08L31.5073 166.361L29.874 174.015L29.497 178.908L31.0047 183.425L31.8843 178.657L35.528 182.547L39.5486 186.938L40.9307 190.953L43.9462 193.965L45.0771 192.585L50.9823 196.098L51.7362 200.238L56.3851 199.235L58.521 195.972L54.6261 191.832L50.3541 190.828L46.2079 186.311L44.4488 179.41L41.1821 172.133L36.5331 171.882L35.6537 166.11L37.4127 159.084L40.1769 147.415L39.9256 138.632L46.0821 138.506L45.7053 144.78L51.6106 144.654L58.2698 148.293L55.6313 138.632L59.4007 132.107L68.3214 130.476L74.9806 131.731Z'
                fill='#040404'
                fillOpacity='0.51'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M218.343 320.566L224.499 318.307L232.038 314.794L234.802 312.661L232.289 311.657L230.028 312.661L225.002 312.912L218.845 314.669L217.84 316.551L218.469 318.182L218.343 320.566Z'
                fill='#040404'
                fillOpacity='0.51'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M174.995 63.7251L176.503 50.9269L176.629 46.0335L172.985 43.6495L168.838 49.6722L166.451 57.5769L168.336 63.4741L173.362 70.2496L174.995 63.7251Z'
                fill='#040404'
                fillOpacity='0.51'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M86.1637 73.5121L78.7506 71.5046L74.9812 68.2423L75.2326 63.5999L68.6989 62.2197L64.9296 59.2084L59.7781 63.4744L53.119 64.3527H47.7162L44.3239 66.2348L49.3497 72.6338L53.6215 79.7857L62.1654 79.9112L65.9348 86.8122L61.7884 88.9452L60.1551 91.831L69.3272 96.5989L76.489 106.009L81.8917 113.036L87.9227 118.556L90.4357 124.203L90.1844 132.233L92.446 137.503L92.5716 147.164L81.3892 153.312L84.9072 158.08L77.6199 158.707L71.7145 161.844L77.3685 166.487L75.7352 171.882L78.625 176.901L86.9175 169.498L92.0691 162.848L99.7334 157.704L105.136 152.434L104.634 138.381L99.6078 123.701L94.4562 117.302L87.4201 112.283L79.3788 101.869L72.7197 93.4621L73.3479 87.9414L77.9967 80.4131L86.1637 73.5121Z'
                fill='#040404'
                fillOpacity='0.51'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M128.004 68.3674V68.1165V67.8655L127.501 67.6145H127.124L127.25 67.8655L127.753 68.4929L128.004 68.3674ZM126.371 68.3674L126.245 67.74L126.496 67.3636L125.366 67.74L125.24 68.1165V68.2419L125.491 68.3674H126.371ZM128.381 66.8618L128.255 66.4853L128.004 66.3598L127.878 65.9834L127.753 65.7325L127.376 65.607L127.124 65.4816H126.622L126.496 65.607H126.245L125.994 65.858V66.1089L125.366 66.6108V66.8618L125.742 67.1127L126.371 66.9872L127.124 67.2382L128.13 67.6145V67.3636V66.9872L128.381 66.8618Z'
                fill='#040404'
                fillOpacity='0.51'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M72.8452 234.994L72.9708 234.743L72.7196 234.492L72.3426 234.367L71.7144 234.116L70.9605 234.241L70.5835 234.994L71.7144 235.496L72.8452 234.994Z'
                fill='#040404'
                fillOpacity='0.51'
              />
            </g>
          </g>
          <path
            d='M166 8.88062L163.254 5.9724C164.795 4.51669 167.205 4.51669 168.747 5.9724L166 8.88062ZM166 8.88062C168.747 5.9724 168.748 5.97343 168.749 5.97504L168.756 5.98109L168.779 6.00338L168.869 6.0885C168.948 6.16318 169.064 6.27357 169.216 6.41895C169.52 6.7097 169.97 7.14039 170.554 7.70507C171.723 8.83443 173.432 10.4999 175.605 12.654C179.951 16.9619 186.152 23.2254 193.589 31.0644C208.46 46.7378 228.298 68.7321 248.146 94.0027C267.983 119.26 287.896 147.871 302.864 176.776C317.802 205.619 328 235.101 328 262.011C328 345.73 265.612 431 166 431C66.3887 431 4.00049 345.73 4.00049 262.011C4.00049 235.101 14.1988 205.619 29.136 176.776C44.1049 147.871 64.0171 119.26 83.8546 94.0027C103.703 68.7321 123.54 46.7378 138.411 31.0644C145.849 23.2254 152.049 16.9619 156.395 12.654C158.568 10.4999 160.278 8.83443 161.446 7.70507C162.031 7.14039 162.48 6.7097 162.785 6.41895C162.937 6.27357 163.053 6.16318 163.131 6.0885L163.221 6.00338L163.245 5.98109L163.251 5.97504C163.253 5.97343 163.254 5.9724 166 8.88062Z'
            stroke='white'
            strokeWidth='8'
            strokeLinejoin='round'
          />
          <defs>
            <linearGradient
              id='paint0_linear'
              x1='166'
              y1='11.1958'
              x2='166'
              y2='395.631'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#0F4C75' />
              <stop offset='1' stopColor='#0F4C75' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
    <div className='info-container'>
      <div className='main-container'>
        <p>FAKTANYA</p>
        <h1>
          Hari ini, sekitar 1,9 milliar orang di muka bumi masih hidup di area
          sulit air bersih.
        </h1>
        <div>
          <Button href='/mengapa-air'>Pelajari Lebih Lanjut</Button>
        </div>
      </div>
    </div>
  </Styled>
);

export default Hero;
