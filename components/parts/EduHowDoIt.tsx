// components/parts/EduHowDoIt.tsx
export default function EduHowDoIt() {
    return (
      <section className="dark:text-gray-800 snap-always snap-center mt-6">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#219EBC]">
                <h3 className="text-3xl font-semibold">The Assistant you need</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                  We are here with you at each step of your journey to pursue education
                </span>
              </div>
            </div>
  
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                
                {/* Step 1 */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#219EBC] animate-from-bottom duration-500 opacity-0 translate-y-28">
                  <h3 className="text-xl font-semibold tracking-wide">Test Preparation</h3>
                  <p className="mt-3">
                    We will assist you for the preparation of international tests and qualifications
                  </p>
                </div>
  
                {/* Step 2 */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#219EBC] animate-from-bottom duration-500 opacity-0 translate-y-28">
                  <h3 className="text-xl font-semibold tracking-wide">Education Counseling</h3>
                  <p className="mt-3">
                    We provide assistance and guidance in making the right choices in your studies, educational plans, career aspirations, choice of stream and specialization, as well as the selection of college or university as per your interests and preferences.
                  </p>
                </div>
  
                {/* Step 3 */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#219EBC] animate-from-bottom duration-500 opacity-0 translate-y-28">
                  <h3 className="text-xl font-semibold tracking-wide">University Selection</h3>
                  <p className="mt-3">Choose a university that matches your career choice</p>
                </div>
  
                {/* Step 4 */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#219EBC] animate-from-bottom duration-500 opacity-0 translate-y-28">
                  <h3 className="text-xl font-semibold tracking-wide">Visa Processing</h3>
                  <p className="mt-3">
                    A comprehensive advisory service that assists you in obtaining the necessary visas and permits to enter and stay in a foreign country legally for education.
                  </p>
                </div>
  
                {/* Step 5 */}
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#219EBC] animate-from-bottom duration-500 opacity-0 translate-y-28">
                  <h3 className="text-xl font-semibold tracking-wide">Pre Departure Briefing</h3>
                  <p className="mt-3">
                    Pre-departure orientation addresses everything from practical concerns with passports and student visas, health and safety, and academics to cultural adjustment, intercultural learning, and diversity awareness. Includes info on housing, finances, transportation, and emergency contacts.
                  </p>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  