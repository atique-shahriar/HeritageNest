import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FindPropertyDetails from "./FindPropertyDetails";

const FindProperty = () => {
  const propertyTab = [
    {id: 1, propertyName: "Buy"},
    {id: 2, propertyName: "Rent"},
    {id: 3, propertyName: "PG"},
    {id: 4, propertyName: "Plot"},
    {id: 5, propertyName: "Commercial"},
  ];

  return (
    <div className="relative font-inter">
      <div className="w-4/5 lg:w-8/12 border p-6 shadow-xl rounded-lg mx-auto bg-white absolute -top-48 left-1/2 transform -translate-x-1/2">
        <Tabs>
          <TabList className="flex gap-4 md:gap-8 border-b-2 border-[#0058b11c] ">
            {propertyTab.map((item) => (
              <Tab
                key={item.id}
                className="py-2 cursor-pointer selection:border-none"
                selectedClassName="py-2 cursor-pointer border-b-2 border-blue-500 text-blue-500 font-semibold">
                {item.propertyName}
              </Tab>
            ))}
          </TabList>

          {propertyTab.map((item) => (
            <TabPanel
              className=""
              key={item._id}>
              <FindPropertyDetails item={item.propertyName}></FindPropertyDetails>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default FindProperty;
