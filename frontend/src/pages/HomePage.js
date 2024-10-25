import Dashbord from "../ui/dashbord";
import Images from "../ui/images";
const HomePage = () => {
  return (
    <>
      <div className="dsb">
        {Dashbord({ title: "Home" })}
        <Images />
      </div>
    </>
  );
};
export default HomePage;
