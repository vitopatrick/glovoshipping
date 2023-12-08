import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const formSchema = new yup.ObjectSchema({
  trackingId: yup.string().required("Tracking ID is Required"),
});

type FormSchema = {
  trackingId: string;
};

const TrackShipmentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });

  const trackingId = watch("trackingId");

  const [shipment, setShipment] = useState<any>();
  const [isShipment, setIsShipment] = useState<boolean>(false);

  // Search Docs
  const searchDocs = async (formValue: FormSchema) => {
    try {
      const docRef = doc(db, "/shipments", formValue.trackingId);
      const data = await getDoc(docRef);

      if (data.exists()) {
        setShipment({ ...data.data(), id: data.id });
        setIsShipment(true);
      } else {
        setIsShipment(false);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Navbar />
      <Hero title="Track your Parcel here" />
      <div>
        {/* container */}
        <main className="md:w-[50%] w-full p-4 mx-auto">
          <form onSubmit={handleSubmit(searchDocs)}>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="track shipment"
                className="font-body  font-semibold text-2xl underline"
              >
                Track Shipment
              </label>
              <input
                type="text"
                {...register("trackingId")}
                className="bg-neutral-100/20 p-4 rounded font-body border "
                placeholder="Tracking ID"
              />
              <p className="font-body text-red-400">
                {errors.trackingId?.message}
              </p>
              <button className="bg-blue-500 text-white p-3  rounded font-body">
                Search
              </button>
            </div>
          </form>
          {/* parcel or shipment */}
          {isShipment && shipment ? (
            <div className="my-4 space-y-6">
              <div>
                <h1 className="font-body text-2xl underline">Parcel Details</h1>
              </div>
              {/* Tracking Id */}
              <div className="flex font-body justify-between items-center py-3 border-neutral-50/10 border-b-2">
                <h3>Tracking ID</h3>
                <p>{shipment.id}</p>
              </div>
              {/* parcel name */}
              <div className="flex font-body justify-between items-center py-3 border-neutral-50/10 border-b-2">
                <h3>Package Name</h3>
                <p>{shipment.package_name}</p>
              </div>
              {/* parcel description */}
              <div className="flex font-body justify-between items-center py-3 border-neutral-50/10 border-b-2">
                <h3>Description</h3>
                <p>{shipment.package_description}</p>
              </div>
              {/* Delivery Date */}
              <div className="flex font-body justify-between items-center py-3 border-neutral-50/10 border-b-2">
                <h3>Estimated Delivery Date</h3>
                <p>{shipment.delivery_date}</p>
              </div>
              {/* Send Name */}
              <div className="flex font-body justify-between items-center py-3 border-neutral-50/10 border-b-2">
                <h3>Name of sender</h3>
                <p>{shipment.name_of_sender}</p>
              </div>
              {/* Receiver Phone Number */}
              <div className="flex font-body justify-between items-center py-3 border-neutral-50/10 border-b-2">
                <h3>Receiver Phone Number</h3>
                <p>{shipment.receiver_phone_number}</p>
              </div>
              {/* Estimated Time of delivery */}
              <div className="flex font-body justify-between items-center py-3 border-neutral-50/10 border-b-2">
                <h3>Estimated time of delivery</h3>
                <p>{shipment.estimated_time_of_address}</p>
              </div>
              {/* Status */}
              <div className="flex font-body justify-between items-center py-3 border-neutral-50/10 border-b-2">
                <h3>Parcel Status</h3>
                <p>{shipment.status}</p>
              </div>
            </div>
          ) : (
            trackingId && (
              <div>
                <p className="font-body py-5 text-center capitalize">
                  Could not find parcel....
                </p>
              </div>
            )
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default TrackShipmentPage;
