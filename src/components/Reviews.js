import React,{useState} from 'react'
import ReactStarRatings from 'react-star-ratings';
const Reviews = ({review}) => {
    const [rating, setRating] = useState(0);
  return (
    <section id='review' class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 class="text-center text-3xl font-bold mb-4">
      Read trusted reviews from our customers
    </h2>

    <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {review && review.map((item)=>{
            return(

      <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">

        <div class="flex items-center gap-4">
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            class="h-14 w-14 rounded-full object-cover"
          />

          <div>
              <p class="mt-0.5 text-lg font-medium text-gray-900">{item.customer_name}</p>
      <ReactStarRatings
        rating={item.rating}
        starRatedColor="red"
        changeRating={(newRating) => setRating(item.rating)}
        numberOfStars={5}
        name='rating'
        starDimension="20px"
        />
        <p>Current Rating: {item.rating}</p>

            {/* <div class="flex gap-0.5 text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
                </svg>
            </div> */}
          </div>
        </div>

        <p class="mt-4 text-gray-700">
          {item.comment}
        </p>
      </blockquote>
            )
        })}
        </div>

  </div>
</section>
  )
}

export default Reviews