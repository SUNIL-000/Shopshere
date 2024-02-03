const Checkout = () => {
  return (
    <div className=" w-96 md:max-w-full bg-white mx-auto">
      <div className="p-6  shadow-lg sm:rounded-lg">
        <form>
          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 uppercase"
            >
              address
            </label>
            <div className="mt-2">
              <input
                placeholder="Enter adress"
                type="text"
                id="email"
                name="address"
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900 uppercase"
            >
              city
            </label>
            <div className="mt-2">
              <input
                placeholder="Enter adress"
                type="text"
                id="city"
                name="city"
                required
                className="block w-full  px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* state  */}
          <div className="sm:col-span-4">
            <label
              htmlFor="state"
              className="block text-sm font-medium leading-6 text-gray-900 uppercase"
            >
              state
            </label>
            <div className="mt-2">
              <input
                placeholder="Enter adress"
                type="text"
                id="state"
                name="state"
                required
                className="block w-full  px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* country  */}
          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900 uppercase"
            >
              Country
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm  sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option selected disabled>
                  select
                </option>
                <option value={"india"}>India</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="pincode"
              className="block text-sm font-medium leading-6 text-gray-900 uppercase"
            >
              pincode
            </label>
            <div className="mt-2">
              <input
                placeholder="Enter adress"
                type="number"
                id="pincode"
                name="pincode"
                required
                className="block w-full rounded-md  px-2 border-0 py-1.5 text-gray-900 shadow-sm focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button className="btn px-4 bg-red-400 font-bold ml-auto uppercase mt-2 drop-shadow-md">proceed</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
