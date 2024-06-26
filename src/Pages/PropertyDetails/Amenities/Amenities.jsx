import clubsvg from "../../../../public/Images/Icons/club.svg";
import gymnasiumsvg from "../../../../public/Images/Icons/gymnasium.svg";
import liftsvg from "../../../../public/Images/Icons/lift.svg";
import powersvg from "../../../../public/Images/Icons/power.svg";

import parksvg from "../../../../public/Images/Icons/park.svg";
import reservedsvg from "../../../../public/Images/Icons/reserved.svg";
import securitysvg from "../../../../public/Images/Icons/security.svg";
import watersvg from "../../../../public/Images/Icons/water.svg";

import privatesvg from "../../../../public/Images/Icons/private.svg";
import servicesvg from "../../../../public/Images/Icons/service.svg";
import vaastusvg from "../../../../public/Images/Icons/vaastu.svg";
import visitorssvg from "../../../../public/Images/Icons/visitors.svg";

import intercomsvg from "../../../../public/Images/Icons/intercom.svg";
import laundrysvg from "../../../../public/Images/Icons/laundry.svg";
import maintenecesvg from "../../../../public/Images/Icons/maintenance.svg";
import wastesvg from "../../../../public/Images/Icons/waste.svg";

import dthsvg from "../../../../public/Images/Icons/dth.svg";
import internetsvg from "../../../../public/Images/Icons/internet.svg";
import joggingsvg from "../../../../public/Images/Icons/jogging.svg";
import pipedsvg from "../../../../public/Images/Icons/piped.svg";

import earlysvg from "../../../../public/Images/Icons/early.svg";
import indoorsvg from "../../../../public/Images/Icons/indor.svg";
import kidssvg from "../../../../public/Images/Icons/kids.svg";
import outdoorsvg from "../../../../public/Images/Icons/outdoor.svg";

import AmenitesCard from "./AmenitesCard";

const Amenities = () => {
  return (
    <div
      className="
    bg-[#f9fafb] border border-[#e5e7eb] rounded-lg p-6 mb-20">
      <h4 className="text-2xl font-medium mb-6 ">Amenities</h4>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10 p-2">
        <AmenitesCard
          image={powersvg}
          text={"Power Back Up"}></AmenitesCard>
        <AmenitesCard
          image={liftsvg}
          text={"Lift"}></AmenitesCard>
        <AmenitesCard
          image={clubsvg}
          text={"Club House"}></AmenitesCard>
        <AmenitesCard
          image={gymnasiumsvg}
          text={"Gymnasium"}></AmenitesCard>
        <AmenitesCard
          image={parksvg}
          text={"Park"}></AmenitesCard>
        <AmenitesCard
          image={reservedsvg}
          text={"Reserved Parking"}></AmenitesCard>
        <AmenitesCard
          image={securitysvg}
          text={"Security"}></AmenitesCard>
        <AmenitesCard
          image={watersvg}
          text={"Water Storage"}></AmenitesCard>
        <AmenitesCard
          image={privatesvg}
          text={"Private Terrace/Garden"}></AmenitesCard>
        <AmenitesCard
          image={vaastusvg}
          text={"Vaasstu Compliant"}></AmenitesCard>
        <AmenitesCard
          image={servicesvg}
          text={"Serviccce/Goods Lift"}></AmenitesCard>
        <AmenitesCard
          image={visitorssvg}
          text={"Visitor Parking"}></AmenitesCard>

        <AmenitesCard
          image={intercomsvg}
          text={"Intercom Facility"}></AmenitesCard>
        <AmenitesCard
          image={maintenecesvg}
          text={"Maintenance Staff"}></AmenitesCard>
        <AmenitesCard
          image={wastesvg}
          text={"Waste Disposal"}></AmenitesCard>
        <AmenitesCard
          image={laundrysvg}
          text={"Laundry Service"}></AmenitesCard>
        <AmenitesCard
          image={internetsvg}
          text={"Internet/Wi-Fi Connectivity"}></AmenitesCard>
        <AmenitesCard
          image={dthsvg}
          text={"DTH Television Facillity"}></AmenitesCard>
        <AmenitesCard
          image={pipedsvg}
          text={"Piped Gas"}></AmenitesCard>
        <AmenitesCard
          image={joggingsvg}
          text={"Jogging and Strolling Track"}></AmenitesCard>
        <AmenitesCard
          image={outdoorsvg}
          text={"Outdoor Tennis Courts"}></AmenitesCard>
        <AmenitesCard
          image={earlysvg}
          text={"Early Learning Centre"}></AmenitesCard>
        <AmenitesCard
          image={kidssvg}
          text={"Kids Play Area"}></AmenitesCard>
        <AmenitesCard
          image={indoorsvg}
          text={"Indoor Squash & Badminton Courts"}></AmenitesCard>
      </div>
    </div>
  );
};

export default Amenities;
