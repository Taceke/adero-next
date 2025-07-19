// components/parts/LetsTalk.tsx
export default function LetsTalk() {
    return (
      <section className="mt-20 mb-10 px-4 sm:px-10 bg-blue-100">
        <div className="min-h-[400px] relative h-full max-w-2xl mx-auto flex flex-col justify-center items-center text-center px-6 py-16">
          <h2 className="md:text-4xl text-3xl font-semibold mb-6">Do you have project in mind?</h2>
          <p>Lets talk about your project.</p>
          <a
            href="/contact_us"
            className="bg-cyan-600 hover:bg-[#023047] duration-300 text-white flex items-center transition-all font-semibold rounded-md px-5 py-2 mt-8"
          >
            Let's Talk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[14px] fill-current ml-2"
              viewBox="0 0 492.004 492.004"
            >
              <path d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z" />
            </svg>
          </a>
        </div>
      </section>
    );
  }
  