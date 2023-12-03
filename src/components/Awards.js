import React from 'react'

const Awards = ({awards}) => {
  return (

  <section>
    <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div class="flex flex-col justify-center items-center gap-y-8 lg:items-center lg:gap-x-16">
        <div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
          <h2 class="text-3xl text-center font-bold mb-4">Awards</h2>

        </div>
  
        <div id='award' class="flex flex-col md:flex-row space-y-4 md:space-y-0  justify-evenly items-center ">
            {awards && awards.map((item)=>{
                return(
                    <a
                    class="  mx-4 rounded-xl border-2  border-red-500 p-4 shadow-sm hover:border-red-800 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/"
                  >
                    <span class="inline-block rounded-lg bg-gray-50 p-3">
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>
          
                    <h2 class="mt-2 text-red-500 font-bold">{item.award}</h2>
          
                    <p class=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      {item.organization}
                    </p>
                  </a>

                )
            })}

  
        </div>
      </div>
    </div>
  </section>
  )
}

export default Awards