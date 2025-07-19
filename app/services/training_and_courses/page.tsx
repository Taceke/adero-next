// pages/courses.js
import React from "react";

export default function Courses() {
  return (
    <section className="snap-center snap-always">
      <div className="bg-[#F7F7F7] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-gray-800 dark:text-white text-4xl font-extrabold text-center mb-16">
            Discover Our <span className="underline text-cyan-500">Exclusive</span> Courses and Trainings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
            {/* Forex Trading Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-8">
                <ForexIcon />
                <h3 className="text-gray-800 dark:text-gray-200 text-xl font-semibold mb-3">Forex Trading</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  Aderoo Tech is collaborating with top traders to provide instruction for the forex class. 
                  We have taught over 200 students so far, and a significant number of them have made excellent progress.
                </p>
              </div>
            </div>

            {/* Crypto Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-8">
                <CryptoIcon />
                <h3 className="text-gray-800 dark:text-gray-200 text-xl font-semibold mb-3">Crypto</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  Working with crypto investors, Aderoo Tech is always striving to fully satisfy people's 
                  interest in life and is prepared to offer an online course about it.
                </p>
              </div>
            </div>

            {/* Life Coach Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="p-8">
                <LifeCoachIcon />
                <h3 className="text-gray-800 dark:text-gray-200 text-xl font-semibold mb-3">Life Coach</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  Aderoo Tech is highly enthusiastic about leaving a lasting legacy in our generation. 
                  As a result, we are thrilled to share our life coaching with you in every corner of the 
                  country, where it will have a positive impact.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// SVG Components
const ForexIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.01 31.9042V17.1982C4.01 15.4122 5.884 14.2242 7.534 14.9742L18.39 19.9482C19.6879 20.5385 20.7889 21.4892 21.5618 22.6873C22.3348 23.8854 22.7472 25.2804 22.75 26.7062V41.4982C22.75 43.2982 20.864 44.4842 19.216 43.7222L8.346 38.6502C7.05445 38.0573 5.95973 37.1069 5.19132 35.9114C4.42292 34.7159 4.01298 33.3254 4.01 31.9042Z" fill="#219EBC"/>
    <path d="M40.466 15.0122C42.116 14.2622 43.99 15.4502 43.99 17.2482V31.9542C43.987 33.3754 43.5771 34.7659 42.8087 35.9614C42.0403 37.1569 40.9456 38.1073 39.654 38.7002L28.784 43.7602C28.4078 43.9386 27.9926 44.0192 27.577 43.9945C27.1613 43.9697 26.7587 43.8405 26.4063 43.6187C26.0539 43.3969 25.7631 43.0898 25.561 42.7258C25.3589 42.3617 25.2519 41.9526 25.25 41.5362V26.7442C25.2555 25.3208 25.6692 23.9288 26.442 22.7334C27.2148 21.5381 28.3143 20.5895 29.61 20.0002L40.466 15.0122Z" fill="#219EBC"/>
  </svg>
);

const CryptoIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.272 24.234L21.08 29.064C22.552 29.434 27.088 30.906 27.76 28.182C28.46 25.34 23.742 24.604 22.272 24.234Z" fill="#219EBC" />
    <path d="M23.898 17.64L22.818 22.022C24.042 22.33 27.818 23.59 28.43 21.112C29.066 18.526 25.122 17.95 23.898 17.64Z" fill="#219EBC" />
    <path d="M24 4C13.0589 4 4 13.0589 4 24C4 34.9411 13.0589 44 24 44C34.9411 44 44 34.9411 44 24C44 13.0589 34.9411 4 24 4ZM32.716 21.15C32.675 21.9176 32.3809 22.65 31.8798 23.2328C31.3787 23.8157 30.6987 24.2163 29.946 24.372C30.4405 24.5733 30.888 24.8749 31.2602 25.2577C31.6324 25.6405 31.9213 26.0963 32.1086 26.5963C32.296 27.0963 32.3777 27.6296 32.3487 28.1628C32.3196 28.6959 32.1805 29.2173 31.94 29.694C30.768 33.078 27.986 33.364 24.286 32.656L23.388 36.296L21.218 35.748L22.104 32.158C21.544 32.018 20.968 31.8667 20.376 31.704L19.486 35.312L17.318 34.766L18.218 31.118C17.71 30.988 17.196 30.848 16.67 30.716L13.846 30.004L14.924 27.492L16.8086 27.9254C17.0143 27.8871 17.1997 27.7903 17.3486 27.6435C17.4975 27.4968 17.604 27.3067 17.658 27.1L19.93 17.492C19.9612 17.1896 19.8731 16.887 19.6844 16.6487C19.4958 16.4103 19.2215 16.2551 18.92 16.216L17.922 13.476L20.912 14.232C21.3607 14.3547 21.8227 14.464 22.296 14.572L23.184 10.97L25.354 11.516L24.482 15.048C25.064 15.184 25.65 15.318 26.222 15.462L27.086 11.952L29.256 12.5L28.366 16.104C31.106 17.058 33.11 18.49 32.716 21.15Z" fill="#219EBC" />
  </svg>
);

const LifeCoachIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.83 1.09814L0 7.42414L4.484 11.3001L1.094 14.9661L23.446 46.7841H23.674C18.424 28.0121 18.574 27.9281 14.782 14.5441L13.87 15.0701C13.374 15.3561 12.968 15.1221 12.968 14.5501V8.16814C11.96 4.64214 11.172 1.91614 10.94 1.09814H6.83Z" fill="#219EBC"/>
    <path d="M37.06 1.09814C36.828 1.91814 36.04 4.64214 35.032 8.16814V14.5501C35.032 15.1221 34.626 15.3561 34.132 15.0701L33.218 14.5421C29.424 27.9281 29.576 28.0121 24.326 46.7821C24.292 46.9221 24.446 46.9621 24.554 46.7821L46.906 14.9681L43.514 11.3001L48 7.42414L41.17 1.09814H37.06Z" fill="#219EBC"/>
  </svg>
);
