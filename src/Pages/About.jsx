import BackButton from "./BackButton";

const About = () => {
  return (
    <div className="py-12 px-6 min-h-screen">
      <div className="backbtn mb-16">
        <BackButton />
      </div>
      <div className="max-w-4xl mx-auto">
        <header className="text-start mb-12">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            About Rental X
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to Rental X, your go-to solution for premium car rentals!
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Rental X, we believe in providing an exceptional car rental
            experience. Founded on the principles of reliability, transparency,
            and customer satisfaction, we offer a wide range of high-quality
            vehicles to suit your needs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to revolutionize the car rental industry by offering
            a seamless and user-friendly platform. We are committed to providing
            top-notch customer service and ensuring that each rental experience
            exceeds expectations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Meet the Team
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white p-10 rounded-lg shadow-lg">
                <img
                  src="/logos/WhatsApp Image 2022-12-25 at 8.47.31 PM (1).jpg"
                  alt="Team Member"
                  className="w-28 h-28 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Yasir malik
                </h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We'd love to hear from you! Whether you have questions, feedback, or
            just want to say hello, feel free to reach out.
          </p>
          <div className="flex flex-col items-start">
            <a
              href="mailto:info@rentalx.com"
              className="text-blue-500 hover:underline mb-4"
            >
              malikoffical32@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
              Location
            </h2>
            <p className="text-gray-600">Mianwali Punjab, Pakistan</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
