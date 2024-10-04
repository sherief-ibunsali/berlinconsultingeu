// pages/index.js
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto py-16 px-6 lg:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Berlin Consulting Services</h1>
            <p className="mt-4 text-lg text-gray-600">Your trusted partner for migration, visa, and business registration solutions.</p>
            <div className="mt-8">
              <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <Image
              src="/images/01-iMac-alesia-kazantceva-XLm6-fPwK5Q-unsplash.jpg"
              alt="Berlin city view"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-100 py-16" >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">Business Registration</h3>
              <p className="mt-4 text-gray-600">Helping entrepreneurs set up businesses in various countries.</p>
              <Link href="/business-registration" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
                Learn More
              </Link>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">Migration Assistance</h3>
              <p className="mt-4 text-gray-600">Comprehensive migration consulting for Australia, Canada, Europe, New Zealand, UK, USA </p>
              <Link href="/migration-services" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
                Learn More
              </Link>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">Visit (Business & Tourism) Visa</h3>
              <p className="mt-4 text-gray-600">Assisting with Australia, Canada, New Zealand Schengen (Europe), UK, USA Visit visa.</p>
              <Link href="/visa-services" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Client Testimonials */}
      <section className="bg-gray-200 py-16" >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-200">
                  <Image src="https://picsum.photos/200/300" alt="John Doe" height={100} width={100} className="w-16 h-16 rounded-full mx-auto" />
                </div>
                <p className="text-gray-700">&quot;Berlin Consulting made my migration process to Germany seamless and stress-free!&quot;</p>
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-900">- John Doe</p>
            </div>
            {/* Testimonial 2 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-700">"Professional and trustworthy services for visa and business registration."</p>
              <p className="mt-4 text-sm font-semibold text-gray-900">- Jane Smith</p>
            </div>
            {/* Testimonial 3 */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-700">"Highly recommended for anyone looking to move to Europe!"</p>
              <p className="mt-4 text-sm font-semibold text-gray-900">- Carlos Gonzales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges & Certifications */}
      <section className="bg-white py-16" >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">Trusted & Certified</h2>
          <div className="flex justify-center space-x-4">
            <Image
              src="https://picsum.photos/200/300"
              alt="Certificate 1"
              width={100}
              height={100}
            />
            <Image
              src="https://picsum.photos/200/300"
              alt="Certificate 2"
              width={100}
              height={100}
            />
            <Image
              src="https://picsum.photos/200/300"
              alt="Certificate 3"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16" >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Contact Us</h2>
          <p className="text-lg text-gray-700">Have any questions? Reach out to us via email or phone!</p>
          <div className="mt-8">
            <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}