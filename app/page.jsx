import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />

      <section className="py-20 mt-12 bg-blue-50 dark:bg-fuchsia-950">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x-2 divide-blue-300">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center px-6 py-8">
                <div className="font-bold text-blue-600 dark:text-blue-400 mb-2 text-4xl">
                  {stat.value}
                </div>
                <div className="text-gray-700 dark:text-gray-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
            Everything you need to manage your finances.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="space-y-4 pt-5">
              <CardContent>
                {feature.icon}
                <h3 className="font-semibold text-xl my-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 bg-blue-50 dark:bg-fuchsia-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
            How It Works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:divide-x-2 lg:divide-y-0 divide-y divide-blue-300">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center px-6 py-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-xl mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
            What Our Users Say
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="space-y-4 pt-5">
              <CardContent>
                <div className="flex items-center mb-4">
                  <div>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-blue-300 w-20 h-20"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-200">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonial.quote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-15 bg-blue-600 dark:bg-indigo-950 ">
        <div className="container mx-auto px-4 mb-4 rounded-lg text-white">
          <h2 className="text-3xl font-bold text-center mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-center text-blue-100 max-w-2xl mx-auto mb-10">
            Join thousands of users who trust Finly to manage their finances.
          </p>
          <div className="flex justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="cursor-pointer animate-bounce">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
