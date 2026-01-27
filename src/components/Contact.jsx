import Heading from "./Heading"
import React from 'react'
import { useForm } from "react-hook-form"
import Input from "./Input"
import TextArea from "./TextArea"
import emailjs from "@emailjs/browser"



const Contact = () => {

  const ServiceId="service_gxk4p2p"
  const PublicKey="vDQ1E1nNeJZ6n-wYY"
  const TemplateId="template_66yved7"


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitSuccessful,isSubmitting},
  
  } = useForm()



  const onSubmit = (data) =>{
    const Tamplateparams={
      from_name:data.name,
      from_email: data.email,
      to_name:"vansh",
      message:data.message
    }


    emailjs
      .send(ServiceId, TemplateId,Tamplateparams, PublicKey, {
        publicKey: PublicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <div id='contact'
      className=' w-full flex  px-16 flex-col md:flex-row md:gap-3 md:justify-around justify-between gap-2    md:h-screen   md:px-18'
    >
      <div
        className=' md:w-1/2 flex flex-col md:justify-start justify-center '>
        <Heading
          first={"Let's Work"}
          second={"Together"} />
        <div
          className='text-gray-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iste magnam soluta est non quaerat suscipit illum libero. Excepturi eaque maxime,
          doloributtons amet, pariatur tempoributtons rem cumque, maiores consequatur odit laboriosam.
        </div>

      </div>
      <div
        className=' mx-6 md:w-1/2 text-white'>
        <div
          className=" flex flex-col items-center px-3 h-6/7 rounded-2xl bg-slate-900">
          <Heading
            first={"Contact"}
            second={"Me!"} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex  gap-6 flex-col justify-center items-center">

              <Input
                type={"text"}
                name={"name"}
                label={"Name"}
                placeholder={"Enter your Name"}
                errors={errors}
                register={register}
              />
              <Input
                type={"email"}
                name={"email"}
                label={"Email"}
                placeholder={"Enter your Email"}
                errors={errors}
                register={register}
              />
              <TextArea
                type={"text"}
                name={"message"}
                label={"Message"}
                placeholder={"Enter Your Message"}
                errors={errors}
                register={register}
              />

              <input
                className="px-10 hover:text-slate-50 text-slate-950 font-bold py-2 bg-[#7CFF4D] cursor-pointer hover:scale-105 transition-all duration-75 rounded-2xl"
                type="submit"
                disabled={isSubmitSuccessful}
              />
              {isSubmitting && <div>Loading...</div> }
              {isSubmitSuccessful && <div>Submitted</div>}
            </div>

          </form>


        </div></div>

    </div>
  )
}

export default Contact
