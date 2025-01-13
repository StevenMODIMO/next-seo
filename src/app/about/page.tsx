import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="mx-4">
      <header className="font-semibold text-center py-2 sm:text-lg">
        About Us:
      </header>
      <p className="md:mx-28 lg:mx-96">
        Welcome to{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500">
          Next seo
        </span>{" "}
        , your trusted partner in transparency and trust. We are a dedicated
        platform aimed at simplifying legal jargon, ensuring that everyone can
        access and understand essential information about terms of service,
        privacy policies, and the ethical commitments of businesses worldwide.
        Our mission is to empower individuals and organizations to make informed
        decisions while fostering an environment of trust and accountability. At{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500">
          Next seo
        </span>{" "}
        , we believe clarity is key. Whether you’re a business seeking to draft
        clear and concise policies or a user navigating the fine print, we’re
        here to bridge the gap. Transparency, accessibility, and user education
        are at the heart of everything we do.
      </p>
    </div>
  );
}
