const WorksProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery & Strategy",
      desc: "We start by deeply understanding your brand, goals, and target audience to lay a robust foundation for success.",
    },
    {
      id: "02",
      title: "Design & Innovation",
      desc: "Our creative team translates insights into compelling visual designs and intuitive user experiences.",
    },
    {
      id: "03",
      title: "Development & Execution",
      desc: "From pixel-perfect coding to rigorous testing, we bring designs to life with precision and efficiency.",
    },
    {
      id: "04",
      title: "Launch & Optimization",
      desc: "We ensure a seamless launch and provide ongoing support, continually optimizing for peak performance.",
    },
  ];

  return (
    <section className="flex flex-col gap-4 relative w-full py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-9xl font-cabinet">
            Workflow
          </h2>
          <p className="mt-8 text-2xl">
            A refined process engineered for precision, clarity, and
            meaningful digital impact.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-neutral-200 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative grid md:grid-cols-12 gap-10 py-20"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div className="md:col-span-2 relative">
                <span className="text-[8rem] md:text-[10rem] font-cabinet text-neutral-100 leading-none transition-all duration-700 group-hover:text-neutral-200">
                  {step.id}
                </span>
              </div>

              <div className="md:col-span-7 flex flex-col gap-6">
                <h3 className="text-4xl md:text-6xl font-cabinet tracking-tight transition-all duration-500 group-hover:translate-x-4">
                  {step.title}
                </h3>
                <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>

              <div className="md:col-span-3 flex items-start md:justify-end">
                <div className="h-px w-16 bg-black mt-6 transition-all duration-500 group-hover:w-32" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksProcess;
