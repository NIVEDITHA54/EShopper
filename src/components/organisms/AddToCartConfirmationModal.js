import { MdClose } from "react-icons/md";
import HorizontalProductCard from "../molecules/HorizontalProductCard";
import CardCarousel from "./CardCarousel";
import useFetch from "../../hooks/useFetch";
import Button from "../atoms/Button";

const Modal = ({ show, handleClose }) => {
  const carouselData = useFetch(
    "http://dump.dataplatform.shoes/20201005_frontend_assignment/cross_sell_products_for_362950.json"
  );

  if (!show) {
    return null;
  } else {
    return (
      <div className="overflow-y-auto overflow-x-scroll fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-5 rounded-t">
              <h3 className="text-gray-900 lg:text-2xl dark:text-white">
                Added to your shopping cart!
              </h3>
              <Button
                buttonData={{
                  className:
                    "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",
                  onClick: () => handleClose(),
                }}
              >
                <MdClose size={"2em"} />
              </Button>
            </div>
            <HorizontalProductCard />
            <div className="container p-6 mx-auto bg-white dark:bg-gray-800 text-left">
              <h4 className="title-font text-gray-500 tracking-widest">
                Matching items selected for you
              </h4>
              <h3 className="text-gray-900 title-font mb-1">
                Nothing is forgotten?
              </h3>
              <CardCarousel carouselData={carouselData} />
              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <Button
                  buttonData={{
                    className: "btn btn-grey",
                    onClick: () => handleClose(),
                    text: " Continue shopping",
                  }}
                />
                <Button
                  buttonData={{
                    className: "btn btn-blue",
                    onClick: () => handleClose(),
                    text: "To shoppingCart",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
