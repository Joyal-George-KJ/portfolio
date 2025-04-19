const CardLoader = () => {
    return (
      <div className="mt-6 h-fit animate-pulse dark:bg-gray-800 bg-gray-200 p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center">
          <div className="h-4 w-32 bg-gray-400 dark:bg-gray-700 rounded"></div>
        </div>
  
        <div className="flex flex-wrap gap-6 mt-4">
          <div className="w-full lg:w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md"></div>
  
          <div className="w-full lg:w-full flex flex-col gap-4">
            <div className="h-6 w-3/4 bg-blue-300 dark:bg-blue-500 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-400 dark:bg-gray-600 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-400 dark:bg-gray-600 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-400 dark:bg-gray-600 rounded"></div>
            </div>
  
            <div className="flex gap-4 mt-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-6 bg-gray-400 dark:bg-gray-600 rounded-full"
                ></div>
              ))}
            </div>
  
            <div className="flex w-full gap-4 pt-4">
              <div className="w-28 h-10 bg-blue-300 dark:bg-blue-600 rounded-md"></div>
              <div className="w-28 h-10 bg-blue-400 dark:bg-blue-700 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardLoader;
  