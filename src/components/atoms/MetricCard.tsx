import React from "react";

interface Props {
  title: string;
  metric: string;
  cardColor: string;
}

const MetricCard = ({ title, metric, cardColor }: Props) => {
  return (
    <div className="w-full p-6 md:w-1/2 xl:w-1/3">
      <div
        className={`p-5 border-b-4 border-${cardColor}-600 rounded-lg shadow-xl bg-gradient-to-b from-${cardColor}-200 to-${cardColor}-100`}
      >
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className={`p-5 bg-${cardColor}-600 rounded-full`}>
              <i className="fa fa-wallet fa-2x fa-inverse"></i>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h5 className="font-bold text-gray-600 uppercase">
              {title || "Total Revenue"}
            </h5>
            <h3 className="text-3xl font-bold">
              {metric || "$3.250"}
              <span className={`text-${cardColor}-500`}>
                <i className="fas fa-caret-up"></i>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
