import React from "react";

const features = [
  {
    icon: (
      // Clock icon
      <svg width="24" height="24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#121417" strokeWidth="2" />
        <path
          d="M12 6v6l4 2"
          stroke="#121417"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Simple & Fast Interface",
  },
  {
    icon: (
      // User icon
      <svg width="24" height="24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#121417" strokeWidth="2" />
        <path
          d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4"
          stroke="#121417"
          strokeWidth="2"
        />
      </svg>
    ),
    label: "No Sign-Up Required",
  },
  {
    icon: (
      // File icon
      <svg width="24" height="24" fill="none">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          stroke="#121417"
          strokeWidth="2"
        />
        <path d="M8 2v4a2 2 0 002 2h4" stroke="#121417" strokeWidth="2" />
      </svg>
    ),
    label: "Professional Templates",
  },
  {
    icon: (
      // Dollar icon
      <svg width="24" height="24" fill="none">
        <path
          d="M12 2v20M17 7c0-2.21-2.24-4-5-4s-5 1.79-5 4c0 2.21 2.24 4 5 4s5 1.79 5 4c0 2.21-2.24 4-5 4s-5-1.79-5-4"
          stroke="#121417"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Start for Free",
  },
];

const WhyChooseUsSection: React.FC = () => (
  <section
    className="flex flex-col items-start px-4 pt-5 pb-3 w-full max-w-[960px] mx-auto"
    style={{
      paddingTop: 20,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 12,
    }}
  >
    <h2
      className="font-bold"
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        fontSize: 22,
        lineHeight: "28px",
        color: "#121417",
        marginBottom: 0,
      }}
    >
      Why Choose Us
    </h2>
    <div
      className="flex flex-col items-start w-full"
      style={{ padding: 16, gap: 12 }}
    >
      <div className="flex flex-col sm:flex-row items-stretch w-full gap-3 sm:gap-4 md:gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center bg-white border border-[#DEE0E3] rounded-lg flex-1 min-w-[160px] max-w-full sm:max-w-[223px] h-[74px] mb-3 sm:mb-0"
            style={{
              padding: 16,
              gap: 12,
            }}
          >
            <div className="flex flex-col items-start justify-center w-6 h-6 min-w-6 min-h-6">
              {feature.icon}
            </div>
            <div className="flex flex-col items-start justify-center flex-1">
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  lineHeight: "20px",
                  color: "#121417",
                }}
              >
                {feature.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
