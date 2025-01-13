import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of services",
};

export default function Page() {
  return (
    <div className="mx-4">
      <header className="font-semibold text-center py-2 sm:text-lg">
        Terms of service:
      </header>
      <p className="md:mx-28 lg:mx-96">
        Our Terms of Service are designed to ensure that your experience on
        <span className="px-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500">
          Next seo
        </span>{" "}
        is safe, productive, and fair. By using our platform, you agree to
        respect our guidelines, which aim to foster a collaborative and
        supportive community. These terms explain your rights and
        responsibilities as a user, detail our commitment to maintaining a
        secure and inclusive environment, and outline the limitations of our
        services. We encourage you to read these terms carefully to fully
        understand how our platform operates. We are committed to continuous
        improvement and welcome your feedback to help us evolve our terms to
        serve you better.
      </p>
    </div>
  );
}
