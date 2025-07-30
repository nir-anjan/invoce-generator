"use client";
import React, { useState } from "react";
import Header from "@/components/landingPageComponents/Header";
import { signIn } from "@/lib/auth";
import { useRouter } from "next/navigation";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    console.log("Sign in attempt", { email });
    try {
      const user = await signIn(email, password);
      console.log("Sign in successful", user);
      router.push("/dashboard");
    } catch (err) {
      console.error("Sign in error", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
    setLoading(false);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen h-screen bg-[#f8fafc] py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold mb-6 text-center text-[#111418]">
            Sign in to InvoiceGenius
          </h1>
          <form
            className="flex flex-col gap-4 text-black"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#e2e4e7] rounded-md px-4 py-2 focus:outline-none focus:border-[#0c7bf2]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#e2e4e7] rounded-md px-4 py-2 focus:outline-none focus:border-[#0c7bf2]"
              required
            />
            <button
              type="submit"
              className="w-full h-10 rounded-lg bg-[#0c7bf2] text-white text-sm font-bold px-4 hover:bg-[#0864c7] transition mt-2"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
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
