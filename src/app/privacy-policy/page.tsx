import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Page() {
  return (
    <div className="mx-4">
      <header className="font-semibold text-center py-2 sm:text-lg">
        Our privacy policy:
      </header>
      <p className="md:mx-28 lg:mx-96">
        Your privacy matters to us. At{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500">
          Next seo
        </span>{" "}
        , we are committed to protecting the personal information you share with
        us. Our Privacy Policy outlines the type of data we collect, how we use
        it, and the measures we take to safeguard it. We collect only the
        information necessary to provide you with the best possible experience
        on our platform. This includes data for improving our services,
        personalizing your experience, and ensuring the security of your
        account. Rest assured, your information is never shared with third
        parties without your consent. Transparency is central to our values, and
        we are always here to address any concerns about your privacy.
      </p>
    </div>
  );
}
