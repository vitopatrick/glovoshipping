import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useMemo, useState } from "react";
import { db } from "../firebase";
import { AnimatePresence, motion } from "framer-motion";
import { XCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ListOfShipments = () => {
  const [parcels, setParcels] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<string | number>();

  useMemo(() => {
    const controller = new AbortController();
    const getListOfParcels = async () => {
      try {
        const collectionRef = collection(db, "shipments");
        const data = await getDocs(collectionRef);
        const parcelsList = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setParcels((prevParcels) => [...prevParcels, ...parcelsList]);
      } catch (error) {
        console.error("Error fetching parcels:", error);
        // You might want to handle errors more appropriately
      }
    };

    getListOfParcels();

    // Cleanup function to handle component unmounting
    return () => controller.abort();
  }, []);

  const openModal = (id: string | number) => {
    setId(id);
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="py-2">
        {parcels &&
          parcels.map((parcel) => (
            <div
              className="bg-slate-100/20 flex md:items-center flex-col md:flex-row justify-between my-4 p-3 rounded shadow-sm space-y-2"
              key={parcel.id}
            >
              <div className="space-y-2">
                <h1 className="underline text-xl">{parcel.package_name}</h1>
                <p>{parcel.id}</p>
                <p>{parcel.package_description}</p>
              </div>
              {/* Actions */}
              <div>
                <button
                  className="bg-red-700 p-3 text-white rounded"
                  onClick={() => openModal(parcel.id)}
                >
                  Add Tracking Detail
                </button>
              </div>
            </div>
          ))}
      </div>
      <UpdateModal open={open} close={setOpen} id={id} />
    </>
  );
};

const UpdateModal = ({ open, close, id }: any) => {
  const resolver = new yup.ObjectSchema({
    details: yup.string().required(),
  });

  type FormValue = {
    details: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(resolver),
  });

  const pushToFireStore = async (formValue: FormValue) => {
    try {
      const ref = collection(db, "shipments", id, "tracking-details");

      await addDoc(ref, {
        details: formValue.details,
        date: serverTimestamp(),
      });

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AnimatePresence>
      <div
        className={
          open
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
          key={open}
          className="md:w-[30%] w-full p-4 rounded bg-white mx-auto relative"
        >
          <button className="absolute" onClick={() => close(!open)}>
            <XCircle strokeWidth={1} />
          </button>
          {/* form */}
          <form
            className="space-y-3 my-8"
            onSubmit={handleSubmit(pushToFireStore)}
          >
            <div className="flex gap-2 flex-col">
              <label htmlFor="details" className="text-slate-800">
                Tracking Details
              </label>
              <textarea
                placeholder="Item has left ...."
                {...register("details")}
                className="border border-neutral-300 p-3 h-40 text-slate-950"
              />
              <p className="text-red-500 text-sm">{errors.details?.message}</p>
            </div>
            <button className="bg-red-700 p-3 rounded">
              Add Tracking Detail
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ListOfShipments;
