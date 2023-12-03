import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { XCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const addShipmentSchema = new yup.ObjectSchema({
  package_name: yup.string().required("Package Name is required"),
  package_description: yup.string().required("Package description is required"),
  delivery_date: yup.string().required("Delivery Date is required"),
  status: yup.string().required(),
});

type AddShipmentType = {
  package_name: string;
  package_description: string;
  delivery_date: string;
  status: string;
};

const AddShipmentPage = () => {
  // Modal State
  const [isOpen, setIsOpen] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  // use React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(addShipmentSchema),
  });

  // Add to firestore
  const addToDatabase = async (formValue: AddShipmentType) => {
    try {
      const collectionRef = collection(db, "shipments");

      const result = await addDoc(collectionRef, {
        ...formValue,
        createdAt: serverTimestamp(),
      });

      setTrackingId(result.id);

      setIsOpen(!isOpen);
    } catch (error) {
      console.log(error);
    }
  };

  // JSX
  return (
    <>
      <Navbar />
      <div className="font-body my-[8rem]">
        <form
          onSubmit={handleSubmit(addToDatabase)}
          className="md:w-[50%] w-[90%] mx-auto space-y-4"
        >
          {/* header */}
          <div>
            <h2 className="text-2xl underline font-bold font-body">
              Create Tracking ID
            </h2>
          </div>
          {/* Package Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="package Name" className="font-body">
              Package Name
            </label>
            <input
              type="text"
              {...register("package_name")}
              className="border-neutral-400/30 border p-3 rounded font-body"
            />
            <p className="text-red-600 text-sm capitalize">
              {errors.package_name?.message}
            </p>
          </div>
          {/* Package description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="package description" className="font-body">
              Package Description
            </label>
            <textarea
              {...register("package_description")}
              className="border-neutral-400/30 border p-3 rounded font-body"
            />
            <p className="text-red-600 text-sm capitalize">
              {errors.package_description?.message}
            </p>
          </div>
          {/* Delivery Date */}
          <div className="flex flex-col gap-2">
            <label htmlFor="Delivery Date" className="font-body">
              Delivery Date
            </label>
            <input
              type="date"
              {...register("delivery_date")}
              className="border-neutral-400/30 border p-3 rounded font-body"
            />
            <p className="text-red-600 text-sm capitalize">
              {errors.delivery_date?.message}
            </p>
          </div>
          {/* status */}
          <div className="flex flex-col gap-2">
            <label htmlFor="status" className="font-body">
              Status
            </label>
            <input
              type="text"
              {...register("status")}
              className="border-neutral-400/30 border p-3 rounded font-body"
            />
            <p className="text-red-600 text-sm capitalize">
              {errors.status?.message}
            </p>
          </div>
          {/* submit button */}
          <button
            type="submit"
            className="bg-blue-500 rounded p-3 text-white font-body"
          >
            Create Tracking ID
          </button>
        </form>
      </div>
      <Footer />
      <ResultModal isOpen={isOpen} close={setIsOpen} trackingId={trackingId} />
    </>
  );
};

const ResultModal = ({
  trackingId = "12345343121iowmv",
  isOpen = false,
  close,
}: any) => {
  return (
    <AnimatePresence>
      <div
        className={
          isOpen
            ? "fixed bg-black/40 top-0 bottom-0 right-0 left-0 flex items-center justify-center"
            : "hidden"
        }
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
          }}
          key={isOpen}
          className="md:w-[30%] w-full p-4 rounded bg-white mx-auto relative"
        >
          <button className="absolute" onClick={() => close(!isOpen)}>
            <XCircle strokeWidth={1} />
          </button>
          <h3 className="font-body uppercase text-xl text-center my-4 font-bold">
            Tracking ID
          </h3>
          <p className="font-mono text-center text-xl tracking-wider">
            {trackingId}
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AddShipmentPage;
