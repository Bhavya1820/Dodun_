import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../footer/footer'
import Front from './components/front'
import TechStack from './components/techStack'
import Client from '../home/client'
import GetTouch from './components/getTouch'

const animatedVideos = () => {
  const link="https://ik.imagekit.io/jncw2kb8u/Homepage-Background-Training-181334_1080x600.jpg?updatedAt=1739346348793"
  const pageName= "ANIMATED VIDEOS"

  const services = [
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-1.png?updatedAt=1738570820335",
      title: "Infographic Videos",
      description: "Turn data into visually compelling stories with infographic videos. These animations combine charts, icons, and statistics to present information in a clear, engaging format. Ideal for breaking down complex data, making it easy to understand and memorable for your audience."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-2.png?updatedAt=1738571019608",
      title: "Insta Reels",
      description: "Capture attention in seconds with short, engaging Insta Reels. These fast-paced, visually dynamic videos are perfect for showcasing products, promoting events, or sharing behind-the-scenes content. Ideal for increasing brand visibility and connecting with a wider audience on Instagram."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-3.png?updatedAt=1738571112180",
      title: "Ad Films and Posters",
      description: "Boost your brand’s visibility with striking ad films and posters. Ad films use compelling storytelling and visuals to deliver powerful messages, while posters offer eye-catching designs for quick impact. Both formats are perfect for driving engagement, promoting products, and enhancing your marketing campaigns."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-4.png?updatedAt=1738571210732",
      title: "Motion Graphics",
      description: "Bring static visuals to life with motion graphics, a perfect blend of animation and design. These dynamic videos use moving text, shapes, and graphics to communicate ideas in a visually appealing way. Ideal for enhancing presentations, explainer videos, and promotional content with sleek, professional animations."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-5.png?updatedAt=1738571290218",
      title: "2D & 3D Animation",
      description: "A traditional animation style where characters and objects are created in a two-dimensional space, moving along height and width. It’s commonly used in explainer videos, cartoons, and marketing ads."
    },
    {
      img: "https://ik.imagekit.io/jncw2kb8u/business-logo-6.png?updatedAt=1738571391557",
      title: "Product Demos & Tutorials",
      description: "simplify complex product features through engaging animations, making it easier for customers to understand functionality. They enhance user experience by visually demonstrating step-by-step usage, reducing confusion. These videos boost conversions by showcasing product benefits effectively."
    }
  ];
  return (
    <>
    <Navbar />
    <Front url={link} text={pageName} />
    {/* cards */}
    <div className="py-10 px-5 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Lineup of Specialized Animated Video Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-20">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 text-center transition-transform transform hover:scale-105">
            <img src={service.img} alt={service.title} className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h2>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    <TechStack />
    <GetTouch />
    <Client />
    <Footer />
    </>
  )
}

export default animatedVideos