const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>

        <p className="mt-4 text-indigo-600 font-semibold">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;