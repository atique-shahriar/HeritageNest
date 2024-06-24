import { PropTypes } from "prop-types";

const TestimonialsCard = ({testiImage}) => {
  return (
    <div className="flex flex-col items-center space-y-6 py-8 px-10 bg-[#ecf5ff]">
      <div className="rating gap-4">
        <input
          type="radio"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input
          type="radio"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <div>
        <p className="text-[#818181] text-center">&quot;The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It&apos;s the peace of mind I was looking for.&quot;</p>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <img
          src={testiImage}
          className="w-10 h-10 rounded-[100%]"
          alt="Profile Photo"
        />
        <h6 className="text-[#111827] font-semibold text-xl">Tony Stark</h6>
        <p className="text-[#6b7290]">Marketing Mannager, XYZ</p>
      </div>
    </div>
  );
};

TestimonialsCard.propTypes = {
  testiImage: PropTypes.string,
};

export default TestimonialsCard;
