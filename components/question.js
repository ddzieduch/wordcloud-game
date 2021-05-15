export default function Question() {
  return (
    <div className="h-screen flex flex-wrap content-center justify-center">
      <div>
        <h2 className="text-2xl text-center font-bold my-6">Select animals</h2>
        <div className="md:w-3/5 h-2/3 m-2 mx-auto mb-6 border p-8 md:p-16 border-gray-200 rounded flex flex-wrap sm:space-x-24 font-bold">
          <span className="p-4 relative cursor-pointer text-gray-500">hole</span>
          <span className="p-4 relative cursor-pointer">sofa</span>
          <span className="p-4 relative cursor-pointer">pear</span>
          <span className="p-4 relative cursor-pointer text-green-500">
            <i className="-mt-4 absolute transform -translate-x-1/2 left-1/2">Good</i>
            tiger
          </span>
          <span className="p-4 relative cursor-pointer text-red-500">
            <i className="-mt-4 absolute transform -translate-x-1/2 left-1/2">Bad</i>
            oatmeal
          </span>
          <span className="p-4 relative cursor-pointer">square</span>
          <span className="p-4 relative cursor-pointer">nut</span>
          <span className="p-4 relative cursor-pointer">cub</span>
          <span className="p-4 relative cursor-pointer">shirt</span>
          <span className="p-4 relative cursor-pointer">tub</span>
          <span className="p-4 relative cursor-pointer">passenger</span>
          <span className="p-4 relative cursor-pointer text-green-500">
            <i className="-mt-4 absolute transform -translate-x-1/2 left-1/2">Good</i>cow
          </span>
        </div>
        <p className="text-center">
          <button
            className="text-center border border-blue-500 text-blue-500 rounded px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            check answers
          </button>
        </p>
      </div>
    </div>
  )
}
