import { createRef, RefObject, useEffect } from "react";
import toast from "react-hot-toast"

export const uploadImage = async (image: File) => {
    let data = new FormData();
    let tId = toast.loading("Uploading image...");
    data.append("file", image)
    data.append("upload_preset", `${process.env.preset}`)
    data.append("cloud_name", `${process.env.cloud_name}`)
    data.append("folder", 'nian-devs')
    const resp = await fetch(`https://api.cloudinary.com/v1_1/${process.env.cloud_name}/image/upload`, {
        method: "post",
        body: data
    })
    let res = await resp.json();
    toast.dismiss(tId);
    if (res.secure_url)
        toast.success("Image Uploaded successfully", { id: 'success' })
    else
        toast.error("Unable to Upload Image", { id: 'error' })
    return res.secure_url
}



export const useClickOutside = (handler: Function, ref: RefObject<any>) => {
    const domRef = ref || createRef();

    useEffect(() => {
        const localHandler = (e: { target: any; }) => {
            if (!domRef.current) return;
            if (!domRef.current.contains(e.target)) handler();
        };
        document.addEventListener("mousedown", localHandler);
        return () => document.removeEventListener("mousedown", localHandler);
    }, [domRef, handler]);

    return domRef;
};
