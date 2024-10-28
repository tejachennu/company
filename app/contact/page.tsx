// "use client";

// import { useState } from "react";

// import { zodResolver } from "@hookform/resolvers/zod";

// import { useForm } from "react-hook-form";

// import * as z from "zod";

// import { Checkbox } from "@/components/ui/checkbox";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { Button } from "@/components/ui/button";

// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// import { Input } from "@/components/ui/input";

// import { useToast } from "@/components/ui/use-toast";

// import { Textarea } from "@/components/ui/textarea";
// import { PiCheckLight, PiSmiley } from "react-icons/pi";
// import Navbar from "@/components/navbar";
// import { NextSeo } from 'next-seo';

// const FormSchema = z.object({
//   first_name: z.string(),
//   last_name: z.string(),
//   email: z.string().email(),
//   job_title: z.string(),
//   company_name: z.string(),
//   help: z.enum([
//     "Evaluate Nexus for my company",
//     "Learn More",
//     "Get a Quote",
//     "Other",
//   ]),
//   services: z.enum([
//     "Mobile App Develoment",
//     "Social Media Marketing",
//     "UI/UX Design",
//     "Branding",
//     "Website Development",
//   ]),
//   info: z.string(),
// });

// type FormValues = {
//   first_name: string;
//   last_name: string;
//   email: string;
//   job_title: string;
//   company_name: string;
//   help: "Evaluate Nexus for my company" | "Learn More" | "Get a Quote";
//   services:
//     | "Mobile App Develoment"
//     | "Social Media Marketing"
//     | "UI/UX Design"
//     | "Branding"
//     | "Website Development";
//   info: string;
//   terms: boolean;
// };

// export default function ContactForm() {
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const { toast } = useToast();

//   const form = useForm<FormValues>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       first_name: "",
//       last_name: "",
//       email: "",
//       job_title: "",
//       company_name: "",
//       help: "Learn More",
//       services: "Mobile App Develoment",
//       info: "",
//     },
//   });

//   async function onSubmit(data: z.infer<typeof FormSchema>) {
//     try {
//       setLoading(true);
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       if (!res.ok) {
//         throw new Error("Something went wrong");
//       }

//       setSubmitted(true);
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Something went wrong",
//       });
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <>
//       <NextSeo
//         title="Contact us | Nexus IT "
//         description="Nexus ITS is a full fledge modern and best performant websites development agency, a agency specializing in full-stack development, responsive design, and SEO."
//         canonical="https://nexusit.in/contact"
//         openGraph={{
//           url: 'https://nexusit.in/contact',
//           title: 'Contact us | Nexus IT - Arman kureshi',
//           description: 'Nexus IT is a leading provider of graphic design and web development services, dedicated to transforming your digital presence. Our talented team of designers and developers work collaboratively to create visually stunning and highly functional websites. We specialize in delivering custom web solutions and captivating graphic designs that align with your brand identity. From designing logos and marketing materials to building responsive websites and web applications, we ensure every project is executed with precision and creativity. Partner with us to enhance your brand’s online presence and achieve your business goals',
//           images: [{ url: 'https://github.com/Arman3712/nexus3/blob/main/public/images/Frame%2023.png?raw=true' }],
//         }}
//       />
      
//       <Navbar
//         scrollToWebsiteDesign={() => {}}
//         scrollToGraphicDesign={() => {}}
//         scrollToShopifyStores={() => {}}
//         scrollToBrands={() => {}}
//         scrollToServices={() => {}}
//       />
//     <div className=" w-full   md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
//       <div className="md:flex items-start justify-center md:py-20 px-6">
//         <div className="">
//           <div className="text-5xl font-medium  w-full md:w-2/3  pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//             Contact our sales team
//           </div>
//           <div
//             className="
              
//               py-4
//               text-gray-400
//                     "
//           >
//             Let&apos;s talk about how Nexus can help your team work better.
//           </div>

//           <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
//             <div className="flex gap-4 border-b ">
//               <div className=" font-normal pb-4 ">
//                 One flexible agency for your entire company to share knowledge,
//                 ship projects, and collaborate.
//               </div>
//             </div>

//             <div className="flex gap-4 border-b ">
//               <div className=" font-normal pb-4 ">
//                 Enterprise features to securely manage user access and security.
//               </div>
//             </div>

//             <div className="flex gap-4  ">
//               <div className=" font-normal pb-4 border-b">
//                 Dedicated support to work with you on your setup and help you
//                 build the best plan for your company.
//               </div>
//             </div>
//             <div className="flex gap-4 ">
//               <div className=" font-normal pb-4 border-b  text-[#260b33]">
//                 Phone* +91 88497 67778
//                 <br />
//                 <br />
//                 Email* info@nexusit.in
//               </div>
//             </div>
//           </div>
//         </div>

//         <Form {...form}>
//           {!submitted ? (
//             <form
//               onSubmit={form.handleSubmit(onSubmit)}
//               className="
//             space-y-4
//             h-full
//             border rounded-3xl p-10
//             md:w-1/3
            
            
                     
//                         "
//             >
//               <div className="md:flex items-center gap-6 ">
//                 <FormField
//                   control={form.control}
//                   name="first_name"
//                   render={({ field }) => (
//                     <FormItem className="items-center justify-center  w-full">
//                       <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                         First name *
//                       </FormLabel>
//                       <FormControl>
//                         <Input {...field} />
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="last_name"
//                   render={({ field }) => (
//                     <FormItem className="items-center justify-center  w-full">
//                       <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                         Last name *
//                       </FormLabel>
//                       <FormControl>
//                         <Input {...field} />
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem className="items-center justify-center  w-full">
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                       Email *
//                     </FormLabel>
//                     <FormControl>
//                       <Input {...field} />
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />


//               <FormField
//                 control={form.control}
//                 name="company_name"
//                 render={({ field }) => (
//                   <FormItem className="items-center justify-center  w-full">
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                       Phone Number ?
//                     </FormLabel>
//                     <FormControl>
//                       <Input {...field} />
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="services"
//                 render={({ field }) => (
//                   <FormItem className="items-center justify-center w-full">
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                     Services you are interested in
//                     </FormLabel>
//                     <Select
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select an option" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <div className="flex gap-4">
//                           <SelectItem value="Mobile App Develoment">
//                           Mobile App Develoment
//                           </SelectItem>
//                         </div>
//                         <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
//                         <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
//                         <SelectItem value="Branding">Branding</SelectItem>
//                         <SelectItem value="Website Development">Website Development</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="help"
//                 render={({ field }) => (
//                   <FormItem className="items-center justify-center  w-full">
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                       How can we help ?
//                     </FormLabel>
//                     <Select
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger
                        
                        
//                         >
//                           <SelectValue placeholder="Select an option" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <div className="flex gap-4">
//                           <SelectItem value="Evaluate Nexus for my company">
//                             Evaluate Nexus for my company
//                           </SelectItem>
//                         </div>
//                         <SelectItem value="Learn More">Learn More</SelectItem>
//                         <SelectItem value="Get a Quote">Get a Quote</SelectItem>

//                         <SelectItem value="Other">Other</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="info"
//                 render={({ field }) => (
//                   <FormItem className="items-center justify-center w-full">
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                       Anything else ?
//                     </FormLabel>
//                     <FormControl>
//                       <Textarea style={{ height: "100px" }} {...field} />
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />

//               <div className="flex gap-4 items-center">
//                 <div>
//                   <Checkbox
//                     className="
//                 outline
//                 border-2
//                 text-sm
//                 font-light
//                 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400
//                 "
//                   />
//                 </div>
//                 <div className="text-xs font-light  md:w-3/4 mb-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
//                   I agree to Nexus&apos; sending marketing communications related
//                   to Nexus
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <Button
//                   type="submit"
//                   className="
//                             text-sm
//                             font-light
                        
//                             "
//                   disabled={loading}
//                   onClick={() => form.handleSubmit(onSubmit)}
//                 >
//                   Submit
//                 </Button>
//               </div>
//             </form>
//           ) : (
//             <>
//               <div
//                 className="
//         text-xl 
        
//         md:text-2xl 
//         flex 
//         items-center
//         justify-center
//         flex-col
        

 
//         px-8

//         "
//               >
//                 <div className="w-80 py-20">
//                   <PiSmiley className="text-6xl text-[#6750c2] mx-auto" />

//                   <div className="text-gray-500 font-light  text-center justify-center mx-auto py-10">
//                     We&apos;ve received your inquiry and will be contacting you
//                     via Email or Phone shortly.
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </Form>
//       </div>
//     </div>
//   </>
//   );
// }


"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { PiSmiley } from "react-icons/pi";
import Navbar from "@/components/navbar";
import { NextSeo } from "next-seo";
import { db } from "@/firebase"; // Import Firestore
import { collection, addDoc } from "firebase/firestore"; // Firestore functions

const FormSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  job_title: z.string().optional(),
  company_name: z.string().optional(),
  help: z.enum([
    "Evaluate Nexus for my company",
    "Learn More",
    "Get a Quote",
    "Other",
  ]),
  services: z.enum([
    "Mobile App Development",
    "Social Media Marketing",
    "UI/UX Design",
    "Branding",
    "Website Development",
  ]),
  info: z.string().optional(),
  terms: z.boolean().refine(val => val === true, {
    message: "You must agree to marketing communications",
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Learn More",
      services: "Mobile App Development",
      info: "",
      terms: false,
    },
  });

  async function onSubmit(data: FormValues) {
    setLoading(true);
    try {
      // Add form data to Firestore
      const docRef = await addDoc(collection(db, "contacts"), data);
      console.log("Document written with ID: ", docRef.id);

      setSubmitted(true);
      toast({ title: "Success", description: "Form submitted successfully!" });
    } catch (error) {
      toast({ title: "Error", description: "Submission failed" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <NextSeo
        title="Contact Us | Nexus IT"
        description="Get in touch with Nexus IT for web development and design solutions."
        canonical="https://nexusit.in/contact"
        openGraph={{
          url: "https://nexusit.in/contact",
          title: "Contact Us | Nexus IT",
          description: "Nexus IT is your partner for professional web solutions.",
          images: [{ url: "https://github.com/Arman3712/nexus3/blob/main/public/images/Frame%2023.png?raw=true" }],
        }}
      />

      <Navbar />
      <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
  <div className="flex flex-col md:flex-row items-start justify-center md:py-20 px-6">
    
    {/* Left Section - Text Content */}
    <div className="text-center md:text-left space-y-4 md:space-y-8 md:w-1/2 lg:w-1/3">
      <h1 className="text-5xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Contact our sales team
      </h1>
      <p className="text-lg text-gray-300">
        Let's talk about how Nexus can help your team work better.
      </p>
    </div>

    {/* Right Section - Information Cards */}
    <div className="bg-[#f6f5f4] shadow-lg rounded-2xl p-6 md:ml-8 mt-6 md:mt-0 md:w-1/2 lg:w-1/3 space-y-6">
      {/* Card Item */}
      <div className="flex gap-4 border-b pb-4">
        <span className="text-gray-800 text-xl">💼</span>
        <p className="text-gray-700">
          One flexible agency for your entire company to share knowledge, ship projects, and collaborate.
        </p>
      </div>

      {/* Card Item */}
      <div className="flex gap-4 border-b pb-4">
        <span className="text-gray-800 text-xl">🔒</span>
        <p className="text-gray-700">
          Enterprise features to securely manage user access and security.
        </p>
      </div>

      {/* Card Item */}
      <div className="flex gap-4 border-b pb-4">
        <span className="text-gray-800 text-xl">🛠️</span>
        <p className="text-gray-700">
          Dedicated support to work with you on your setup and help you build the best plan for your company.
        </p>
      </div>

      {/* Contact Information */}
      <div className="flex flex-col text-center md:text-left space-y-2">
        <p className="text-[#260b33] font-semibold text-lg">📞 Phone: +91 88497 67778</p>
        <p className="text-[#260b33] font-semibold text-lg">📧 Email: info@nexusit.in</p>
      </div>
    </div>
  </div>
</div>

      

      <div className="w-full flex items-center justify-center bg-black/[0.96] antialiased py-12 px-4">

      
        <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800 text-center mb-4">Contact Our Sales Team</h1>
          <p className="text-gray-500 text-center mb-6">
            Let's discuss how Nexus can help enhance your digital presence.
          </p>

          <Form {...form}>
            {!submitted ? (
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Fields */}
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Field */}
                <FormField
                  control={form.control}
                  name="company_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone Number" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Services Dropdown */}
                <FormField
                  control={form.control}
                  name="services"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Services Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                          <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
                          <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                          <SelectItem value="Branding">Branding</SelectItem>
                          <SelectItem value="Website Development">Website Development</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Help Dropdown */}
                <FormField
                  control={form.control}
                  name="help"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How Can We Help?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an Option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Evaluate Nexus for my company">Evaluate Nexus</SelectItem>
                          <SelectItem value="Learn More">Learn More</SelectItem>
                          <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Additional Info Textarea */}
                <FormField
                  control={form.control}
                  name="info"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Any other details" {...field} rows={4} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Terms Checkbox */}
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start">
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        <p className="ml-2 text-sm text-gray-600">I agree to receive marketing communications from Nexus</p>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    className="w-full md:w-auto px-6 py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <PiSmiley className="text-5xl text-blue-500 mx-auto mb-4" />
                <p className="text-lg text-gray-700">Thank you! We will contact you soon.</p>
              </div>
            )}
          </Form>
        </div>
      </div>
    </>
  );
}
