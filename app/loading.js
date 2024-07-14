const MealsLoading = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
          <p className="text-lg font-semibold text-gray-700">Fetching Meals...</p>
        </div>
      </div>
    );
  };
  
  export default MealsLoading;
  