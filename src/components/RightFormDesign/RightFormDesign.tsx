import classes from "./RightFormDesign.module.css"

interface RightFormDesignTypes {
  icon?: string;
  heading?: string
}

const RightFormDesign = ({ icon, heading }: RightFormDesignTypes) => {
  return (
    <div className={`${classes.design} h-full bg-primary flex justify-center items-center px-4 lg:px-24 py-8 text-white`}>
      <div>

      <div className="icon w-20 h-20 relative">
        <img src={icon} alt="icon" />
      </div>
      <h2 className="text-6xl font-medium font-['Inter'] leading-[72px]">
        {heading}
      </h2>
      <p className="text-gray-200 text-lg font-medium font-['Inter'] leading-7">
        Create a free account and get full access to all features for 30-days. No credit card needed. Get started in 2 minutes.
      </p>
      </div>
    </div>
  )
}

export default RightFormDesign