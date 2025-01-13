import ContactCard from "@/components/cards/contact";
import Heading from "@/components/heading/heading";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import SelectInput from "@/components/ui/select-input";
import TextArea from "@/components/ui/text-area";
import React, { useState } from "react";
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

export default function ContactSection() {
  const [services, setServices] = useState<string[]>([]);
  const [budgets, setBudgets] = useState<string[]>([]);
  console.log(services, budgets);

  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/* Contact cards */}
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call me directly at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="+44 00 0000 0000"
              btnText="Call Now"
            />
            <ContactCard
              title="Chat with me"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="test@email.com"
              btnText="Email Now"
            />
          </div>
          {/* Contact form */}
          <div className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 py-5 px-[25px] shadow-md">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input type="text" placeholder="Full Name" icon={<FaUser />} />
              <Input
                type="email"
                placeholder="Email Address"
                icon={<MdEmail />}
              />
            </div>
            <div className="flex  items-center justify-between mb-4 gap-8">
              <Input type="text" placeholder="Subject" icon={<MdSubject />} />
            </div>
            {/* Multiple select wrapper */}
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">
                  What services are you in need for ?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/* Services */}
                  {servicesOptions.map((service) => (
                    <SelectInput
                      key={service.id}
                      id={service.id}
                      text={service.text}
                      type="checkbox"
                      selectedOptions={services}
                      setSelectedOptions={setServices}
                      allowMultiple
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Multiple select wrapper */}
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">What is your budget ?</h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/* Budget options */}
                  {budgetOptions.map((budget) => (
                    <SelectInput
                      key={budget.id}
                      id={budget.id}
                      text={budget.text}
                      type="radio"
                      selectedOptions={budgets}
                      setSelectedOptions={setBudgets}
                      allowMultiple
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Message input */}
            <TextArea
              placeholder="Tell us about your project"
              icon={<FaProjectDiagram />}
            />
            <div className="w-full flex justify-end ">
              <Button className="!w-44 py-3 text-xl">
                Send <SiMinutemailer />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

const servicesOptions = [
  {
    id: "Web Development",
    text: "Web Development",
  },
  {
    id: "Web Design",
    text: "Web Design",
  },
  {
    id: "SEO",
    text: "SEO",
  },

  {
    id: "Marketing",
    text: "Marketing",
  },
  {
    id: "AI & Integration",
    text: "AI & Integration",
  },
];

const budgetOptions = [
  {
    id: "between £1,000 and £5,000",
    text: "£1,000 - £5,000",
  },
  {
    id: "between £5,000 and £10,000",
    text: "£5,000 - £10,000",
  },
  {
    id: "between £10,000 and £20,000",
    text: "£10,000 - £20,000",
  },
  {
    id: "between £20,000 and £50,000",
    text: "£20,000 - £50,000",
  },
  {
    id: "£50,000+",
    text: "£50,000+",
  },
];
