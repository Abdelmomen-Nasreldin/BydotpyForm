
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { BsGlobe } from "react-icons/bs";

const loginFormSchema = z.object({
    name: z.string({required_error: "required"}).trim(),
    email: z.string({required_error: "required"}).trim().email(),
    phone: z.string({required_error: "required"}).trim(),
    password: z.string({required_error: "required"}).trim().min(5)
})

const StepOneForm = ({next}: {next: ()=>void} ) => {
    const [apiErrorMsg, setApiErrorMsg] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
   
    type formLoginSchema = z.infer<typeof loginFormSchema>;
    const { register, handleSubmit, formState: { errors } } = useForm<formLoginSchema>({
        resolver: zodResolver(loginFormSchema)
    });

    const onSubmit: SubmitHandler<formLoginSchema> = async (data) => {
        setApiErrorMsg(null)
        setIsLoading(true)
        console.log(data);
        next()
    }
    return (
        <section className="relative ">
            <div className="  py-12 sm:px-6 sm:py-16 ">
                
                {
                    apiErrorMsg &&
                    <h2 className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3">{apiErrorMsg}</h2>
                }

                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto my-8 max-w-md space-y-4">
                    {/* Name  */}
                    <div>
                        <label htmlFor="name" className="text-slate-700 text-sm font-medium leading-tight block mb-1.5">Name</label>

                        <div className="relative">
                            <input type="text" className="w-full px-3.5 py-2.5 bg-gray-50 rounded-lg shadow border border-gray-300"
                                placeholder="Enter Your Name"
                                {...register('name')}
                            />       
                        </div>
                        {/* error  */}
                        {errors.name?.message && <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3'>{errors.name?.message}</p>}
                    </div>
                    {/* Email  */}
                    <div>
                        <label htmlFor="email" className="text-slate-700 text-sm font-medium leading-tight block mb-1.5">Email</label>

                        <div className="relative">
                            <input type="email" className="w-full px-3.5 py-2.5 bg-gray-50 rounded-lg shadow border border-gray-300"
                                placeholder="Enter email"
                                {...register('email')}
                            />       
                        </div>
                        {/* error  */}
                        {errors.email?.message && <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3'>{errors.email?.message}</p>}
                    </div>
                    {/* Phone  */}
                    <div>
                        <label htmlFor="phone" className="text-slate-700 text-sm font-medium leading-tight block mb-1.5">phone</label>

                        <div className="relative">
                            <input type="tel" className="w-full px-3.5 py-2.5 bg-gray-50 rounded-lg shadow border border-gray-300"
                                placeholder="Enter phone"
                                {...register('phone')}
                            />       
                        </div>
                        {/* error  */}
                        {errors.phone?.message && <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3'>{errors.phone?.message}</p>}
                    </div>

                    {/* password  */}
                    <div>
                        <label htmlFor="password" className="text-slate-700 text-sm font-medium leading-tight block mb-1.5">Password</label>

                        <div className="relative">
                            <input type="password" className="w-full px-3.5 py-2.5 bg-gray-50 rounded-lg shadow border border-gray-300"
                                placeholder="Enter password"
                                {...register('password')}
                            />     
                        </div>
                        {/* error password  */}
                        {errors.password?.message && <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3'>{errors.password?.message}</p>}
                    </div >


                    <div className="flex items-center justify-center">
                        <button type="submit"
                            className=" w-full bg-primary text-white px-[18px] py-2.5 rounded-lg shadow border border-primary text-base font-semibold font-['Inter'] leading-normal">
                            {!isLoading &&
                                <span> Get started</span>
                            }
                            {
                                isLoading &&
                                <span>loading...</span>
                            }
                        </button>
                    </div>
                </form >
                <p className='text-slate-600 text-sm font-normal leading-tight text-center mx-auto '>
                Already have an account? <span className='text text-primary text-sm font-semibold leading-tight cursor-pointer'>Log in</span> <br />
                عربى <BsGlobe className="inline cursor-pointer"/>
                </p>

            </div >
        </section >
    )
}

export default StepOneForm