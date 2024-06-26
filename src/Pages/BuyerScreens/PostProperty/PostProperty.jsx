const PostProperty = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto font-mont flex flex-col gap-4 md:flex-row justify-between text-center md:text-justify items-center py-10">
      <div>
        <p className="text-[#101828] font-semibold text-xl">Post your property for free</p>
        <p className="text-[#475467]">List it on Your Propriety and get genuine leads</p>
      </div>
      <div>
        <button
          className="font-semibold rounded-lg
         bg-[#f06224] text-white px-7 py-3 text-lg">
          Post Property
        </button>
      </div>
    </div>
  );
};

export default PostProperty;
