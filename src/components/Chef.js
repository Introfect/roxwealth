import React from 'react'

const Chef = ({chef}) => {
  return (
  <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
          {chef.name}
        </h2>
  
        <p class="hidden text-gray-500 md:mt-4 md:block">
         {chef.bio}
        </p>
  
        <div class="mt-4 md:mt-8">
          <a
            href="#"
            class="inline-block rounded bg-red-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
           {chef.signature_dish}
          </a>
        </div>
      </div>
    </div>
  
    <img
      alt="Violin"
      src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
    />
  </section>
  )
}

export default Chef