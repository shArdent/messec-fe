import { useEffect, useState } from "react";
import pennib from "@/assets/pen-nib.svg";
import Modal from "./Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useIsUserLogin from "../hooks/useIsLogin";
import { UpdateUserFormData, UpdateUserSchema, User } from "../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField";
import { removeEmptyFields } from "../utils/helper";
import { updateUserData } from "../utils/fetch";

const EditModal = ({ userData }: { userData: User }) => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const { username } = useIsUserLogin();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateUserData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", username] });
      setIsEditOpen(false);
    },
    onError: () => {
      alert("gagal mengedit data user ");
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<UpdateUserFormData>({
    resolver: zodResolver(UpdateUserSchema),
  });

  const onSubmit = async (data: UpdateUserFormData) => {
    removeEmptyFields(data);
    mutation.mutate(data);
  };

  useEffect(() => {
    if (userData) {
      reset({
        email: userData.email,
        username: userData.username,
        name: userData.name,
        bio: userData.bio,
      });
    }
  }, [userData]);

  return (
    <div>
      <button
        onClick={() => setIsEditOpen(true)}
        className="text-sm font-normal flex items-center text-gray-500 gap-1"
      >
        <img src={pennib} alt="" width={15} className="opacity-80" />
        Edit Profil
      </button>

      <Modal
        isOpen={isEditOpen}
        closer={setIsEditOpen}
        containerStyle="bg-white p-8 rounded flex flex-col gap-8"
      >
        <h1 className="font-semibold text-xl">
          Lakukan perubahan pada data anda
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
          <div className="w-96 flex flex-col gap-3">
            <InputField
              id="email"
              type="text"
              name={"email"}
              label="Email"
              register={register}
              error={errors.email}
            />
            <InputField
              id="username"
              type="text"
              name={"username"}
              label="Username"
              register={register}
              error={errors.username}
            />
            <InputField
              id="name"
              type="text"
              name={"name"}
              label="Nama"
              register={register}
              error={errors.name}
            />
            <div className="flex flex-col gap-2">
              <label
                htmlFor={"bio"}
                className="font-semibold flex justify-between"
              >
                {"Bio"}{" "}
                {errors.bio && (
                  <span className="text-red-500 mt-1">
                    {errors.bio.message}
                  </span>
                )}
              </label>
              <textarea
                className="h-20 w-full px-2 border-2 border-slate-400 focus:ring-0 focus:outline-none focus:border-slate-500 rounded-lg"
                id={"bio"}
                {...register("bio")}
              />
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-3">
            <button
              type="submit"
              className="w-full py-2 bg-[#91A9FF] text-white font-semibold rounded"
            >
              Edit data
            </button>
            <button
              type="button"
              className="w-full py-2 text-[#91A9FF] font-semibold rounded"
              onClick={() => setIsEditOpen(false)}
            >
              Batalkan
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditModal;
