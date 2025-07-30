import React from "react";

const TestimonialsSection: React.FC = () => (
  <section>
    <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
      Testimonials
    </h2>
    <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-stretch p-4 gap-3">
        {/* Testimonial 1 */}
        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDp8IwBS2HIV6NJHBMKX3eW8xVBP4vEUgbcJQ50Lhl5yCg3evVauTw9YTqjXijUn4srnYso5Fs992o78Uk_wTqXZPosOAegAfpftPm4kxPy1SHV0qFtuPx5p3I_5XYqKy7_RK6UdICFktNqOWr3ZW7HkEgFFuRcxmw3yhCH3vPCwgvudtOk7Z_znNlXA5bTap-FHltrYUftdAUSdT_tXS6VE3f49y5aJoVTaH-IrT5Pqe1OWaO3AnlU3BY8VLFZktOItKh-grvCtkXl')",
            }}
          ></div>
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              &quot;InvoiceGenius has saved me countless hours. It&apos;s
              incredibly easy to use and my clients love the professional look
              of the invoices.&quot;
            </p>
            <p className="text-[#60758a] text-sm font-normal leading-normal">
              Sarah Miller, Freelance Writer
            </p>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBv8ryjrbaiqX92fKbUtBGEYhJF0cl4nwQwm6ZjkrFn4xC6wXq3GiYMz-Tx6Ao-Y2DJHsbnzfKtQRKrrEcO5Ps1Q-qITwrO0_gJCMQAFc33NceuGrlbXitZ3Cnu6J7iDwKxdmUStSh3mxnPGY7cbYkc7gA6JoNom21PByhBqo-IcnWbO32RyBeyZ43dMgNestBxLOLVBnmfevZs8crQZDRQsTctARF_tsWAWCNM_07n_mEitB_oEdb59h9GlBi4tadb4-C3F_15xrZJ')",
            }}
          ></div>
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              &quot;I was struggling with invoicing until I found InvoiceGenius.
              The customizable templates are a game-changer.&quot;
            </p>
            <p className="text-[#60758a] text-sm font-normal leading-normal">
              David Chen, Web Developer
            </p>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7njcjqMdGvH93BkqOn5KDCo-W8Agj1sJKzl7eYwgNBElLZG4xMXvFNpBYyiEINsV4N8wjY0rTAr08ZHqo3rhsbAR3GeWmkWTq8-t47Uw0hft1WYrC7UC3k4lCncK2UKCLAmo2r5yDem1bCV_W6eF0wEp3566eJ5QL_Cnd66GkYMHBKjn1yrIknNS2xltvqzK0pTB0-CPiS2uLl6IUYdlO9Mh66LzidQwr2eTYnKx7dvDNSzHqumUDWRmuYX22Lo9kq8SklnUU3Ih-')",
            }}
          ></div>
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">
              &quot;The automated reminders feature has significantly reduced my
              late payments. InvoiceGenius is a must-have for any
              freelancer.&quot;
            </p>
            <p className="text-[#60758a] text-sm font-normal leading-normal">
              Emily Rodriguez, Graphic Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
