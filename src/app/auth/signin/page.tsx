import React from "react";
import Header from "@/components/landingPageComponents/Header";

const SigninPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen h-screen bg-[#f8fafc] py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold mb-6 text-center text-[#111418]">
            Sign in to InvoiceGenius
          </h1>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-[#e2e4e7] rounded-md px-4 py-2 focus:outline-none focus:border-[#0c7bf2]"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-[#e2e4e7] rounded-md px-4 py-2 focus:outline-none focus:border-[#0c7bf2]"
            />
            <button
              type="submit"
              className="w-full h-10 rounded-lg bg-[#0c7bf2] text-white text-sm font-bold px-4 hover:bg-[#0864c7] transition mt-2"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-center mt-4 text-[#6b7280]">
            Don&apos;t have an account?{" "}
            <a href="/auth/signup" className="text-[#0c7bf2] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </main>
    </>
  );
};

export default SigninPage;
