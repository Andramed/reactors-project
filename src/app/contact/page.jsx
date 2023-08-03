'use client'
import { useForm } from "react-hook-form";
import axios from "axios";


const Page = () => {
    const {
            register,
            handleSubmit,
            formState: { isSubmitted },
        } = useForm({
            shouldUseNativeValidation: true,
        });   

    const onSubmit = (data) => {

        const params = new URLSearchParams({
            name: data.name,
            email: data.email,
            message:data.message
        }).toString();

        const url = "/api/sendEmail?" + params;
        axios.post(url,{},{}).then((res) => console.log(res));

    };

    return ( 
    <div className="flex flex-col md:flex-row gap-10 w-full items-center border p-10">
        <img className="object-cover w-full md:w-1/2 " src='imgContactUs/WeAreHereForYou.png'/>
        <div className="flex flex-col w-full md:w-1/2 gap-3">
            <h2 className="text-center text-4xl font-bold text-gray-500">
                Contact Us
            </h2>
            <form
                className="border rounded flex flex-col gap-2"
                onSubmit={handleSubmit(onSubmit)}>

                <input
                    type="text"
                    className="rounded p-2"
                    placeholder="name"
                    {...register('name')}
                />   
                <input
                    type="email"
                    className="rounded p-2"
                    placeholder="email"
                    {...register('email')}
                />   
                <textarea
                    className="rounded p-2 text-start"
                    rows="5"
                    placeholder="message"
                    {...register('message')}
                />
                <button
                    className="rounded bg-stone-800 p-2 text-stone-50"
                    type="submit">
                        Send
                </button>
            </form>
        </div>
    </div>);
}
export default Page;