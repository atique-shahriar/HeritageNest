import { IoArrowDownCircleOutline } from "react-icons/io5";

const FlatListed = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="flex flex-col bg-[#fdf0e7] p-4 w-full">
        <h3 className="text-[#D95D0F] font-bold text-4xl">2k+</h3>
        <p>New Flat Listed</p>
        <p className="mt-6 flex items-center justify-between text-[#ee6611]">
          <a
            href=""
            className="underline">
            View all
          </a>
          <IoArrowDownCircleOutline className="text-2xl"></IoArrowDownCircleOutline>
        </p>
      </div>

      <div className="flex flex-col bg-[#ecf5ff] p-4 w-full">
        <h3 className="text-[#0051A1] font-bold text-4xl">2k+</h3>
        <p>New Flat Listed</p>
        <p className="mt-6 flex items-center justify-between text-[#0059b1]">
          <a
            href=""
            className="underline">
            View all
          </a>
          <IoArrowDownCircleOutline className="text-2xl"></IoArrowDownCircleOutline>
        </p>
      </div>

      <div className="flex flex-col bg-[#fdf0e7] p-4 w-full">
        <h3 className="text-[#D95D0F] font-bold text-4xl">2k+</h3>
        <p>New Flat Listed</p>
        <p className="mt-6 flex items-center justify-between text-[#ee6611]">
          <a
            href=""
            className="underline">
            View all
          </a>
          <IoArrowDownCircleOutline className="text-2xl"></IoArrowDownCircleOutline>
        </p>
      </div>

      <div className="flex flex-col bg-[#ecf5ff] p-4 w-full">
        <h3 className="text-[#0051A1] font-bold text-4xl">2k+</h3>
        <p>New Flat Listed</p>
        <p className="mt-6 flex items-center justify-between text-[#0059b1]">
          <a
            href=""
            className="underline">
            View all
          </a>
          <IoArrowDownCircleOutline className="text-2xl"></IoArrowDownCircleOutline>
        </p>
      </div>
    </div>
  );
};

export default FlatListed;
