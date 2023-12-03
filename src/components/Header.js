import img1 from "../assets/four.png"


export const Header = ({amb,name}) => {
    return (
      <div className="flex flex-col justify-between items-center mx-auto lg:flex-row md:px-4  px-12">
        <div className=" mb-16 lg:mb-0  lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {name}
             
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
             {amb}
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white bg-red-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
        <div >
          <img
            src={img1}
            className="object-cover w-full  mx-auto lg:h-auto md:max-w-md scale-2"
            alt=""
          />
        </div>
      </div>
    );
  };