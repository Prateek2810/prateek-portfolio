function Projects() {

const wordpressprojects = [
   {
    title: "🔐 Avacy CMP – Consent Management Platform",
    desc: "GDPR/CCPA compliant plugin that blocks trackers and manages cookie consent using Avacy CDN & SaaS.",
    tech: "WordPress, JavaScript, JSON, CDN integration",
    link: "https://wordpress.org/plugins/avacy/",
  }, 
  {
    title: "💳 OG Checkout – WooCommerce Payment Gateway",
    desc: "Secure WooCommerce credit-card payment integration plugin with global checkout support.",
    tech: "WordPress, WooCommerce, PHP, JavaScript",
    link: "https://wordpress.org/plugins/og-checkout/",
  },
  {
    title: "📦 Ship with iMile – WooCommerce Shipping",
    desc: "Auto-generates shipments, labels & tracking from WooCommerce to iMile logistics service.",
    tech: "WordPress, WooCommerce, PHP, REST API",
    link: "https://wordpress.org/plugins/ship-with-imile/",
  },
  {
    title: "🛍️ Taly – Shop Now Pay Later",
    desc: "Installment & deferred payment option at WooCommerce checkout with smooth messaging flow.",
    tech: "WordPress, WooCommerce, PHP, JavaScript",
    link: "https://wordpress.org/plugins/taly-shop-now-pay-later/",
  },
  {
    title: "🔌 Custom WooCommerce COD Charges Plugin",
    desc: "Adds extra charges based on cart value & shipping zone. Admin settings panel included.",
    tech: "WooCommerce, PHP, jQuery",
  },
  {
    title: "🌐 WooCommerce Payment Integration – OneGlobal",
    desc: "Custom WooCommerce plugin for OneGlobal Kuwait payment gateway with secure transactions.",
    tech: "WooCommerce, PHP, JavaScript",
    link: "https://github.com/OneGlobalKuwait/WooCommerce",
  },
  {
    title: "🛒 OG Money – Custom eCommerce Store",
    desc: "Built complete OGMoney store from scratch including frontend, backend, and WooCommerce payment integrations.",
    tech: "WordPress, WooCommerce, PHP, JavaScript",
    link: "https://ogmoney.com/",
  }, 
  {
    title: "🌱 Sou Eco Camp – Eco Retreat Booking Site",
    desc: "Developed a custom eco-retreat booking website from scratch with multilingual support and booking engine.",
    tech: "WordPress, WPML, PHP, JavaScript, Booking Plugins",
    link: "https://www.souecocamp.com/",
  },
  {
    title: "🏗️ RonakCo – Industrial Corporate Website",
    desc: "Designed and developed a multilingual corporate website for industrial automation with custom service pages.",
    tech: "WordPress, WPML, PHP, ACF, JavaScript",
    link: "https://www.ronakco.com/index.php/en/",
 }

];


const projects = [
   {
    title: "📦 OpenCart Shipping Tracker Extension",
    desc: "Official OpenCart plugin that enables advanced shipping tracking for Indian logistics.",
    tech: "OpenCart, PHP, REST API",
    link: "https://www.opencart.com/index.php?route=marketplace/extension/info&extension_id=45312",
  },

  {
    title: "📦 OpenCart Payment Integration – OneGlobal",
    desc: "Custom OpenCart plugin integrating OneGlobal Kuwait payments into checkout flow.",
    tech: "OpenCart, PHP, jQuery",
    link: "https://github.com/OneGlobalKuwait/OpenCart",
  },
  {
    title: "🧾 Magento 2 Payment Integration – OneGlobal",
    desc: "Payment gateway module for Magento 2 with secure API communication and admin controls.",
    tech: "Magento 2, PHP, XML",
    link: "https://github.com/OneGlobalKuwait/Magento2",
  },
  {
    title: "💳 Magento 1 Payment Module – OneGlobal",
    desc: "Legacy payment plugin built for Magento 1 with support for OneGlobal Kuwait.",
    tech: "Magento 1, PHP",
    link: "http://github.com/OneGlobalKuwait/Magento1",
  },
  {
    title: "🏑 Krono Polo – Luxury Polo Store",
    desc: "Developed full-featured luxury lifestyle eCommerce site from scratch with advanced filtering, cart, and custom theme.",
    tech: "Shopify Liquid, HTML, CSS, JavaScript",
    link: "https://kronopolo.com/",
  },
  {
    title: "🔌 Custom WooCommerce COD Charges Plugin",
    desc: "Adds extra charges based on cart value & shipping zone. Admin settings panel included.",
    tech: "WooCommerce, PHP, jQuery",
  },
  {
    title: "🎨 ACF-based Corporate Theme",
    desc: "Built custom theme with Advanced Custom Fields Pro for modular content and smooth UX.",
    tech: "WordPress, ACF Pro, PHP, SCSS",
  },
  {
    title: "🛒 OpenCart Multi-Vendor Extension",
    desc: "Modified OpenCart for vendor-specific logic, product approvals, and admin reporting.",
    tech: "OpenCart, PHP, MySQL",
  },
  {
    title: "📦 Magento Logistics Module",
    desc: "Shipping module integrating local courier APIs, syncing order status and printing labels.",
    tech: "Magento, PHP, XML",
  },
 
];



  return (
    <section className="bg-white px-6 py-10 rounded-lg shadow mb-6">
      <h2 className="text-4xl font-bold text-black mb-8 text-center">My Projects</h2>

     <p className="text-gray-700 dark:text-gray-300 mb-8 text-center max-w-4xl mx-auto">
  In addition to the showcased projects, I have worked with <strong>over 200 clients</strong> on a wide range of 
  <strong> theme development</strong>, <strong>plugin building</strong>, and <strong>advanced code customizations</strong> throughout my career. I’ve also handled client-specific tasks (2–3 projects each) using technologies like 
  <strong> YII</strong>, <strong>Laravel</strong>, <strong>PrestaShop</strong>, <strong>Shopify</strong>, and <strong>CodeIgniter</strong>, 
  which has given me a solid foundational understanding across these platforms.
</p>
 

      <hr className="mt-6 mb-6"></hr>

      <h2 className="text-4xl font-bold text-black mb-8 text-center">Wordpress & Woocommerce Projects</h2>

            {/* Grid layout here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wordpressprojects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0f2027] rounded-lg p-5 shadow hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white mb-2">{project.desc}</p>
            <p className="text-sm text-white mb-3">
              <strong>Tech Used:</strong> {project.tech}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-semibold"
              >
                🔗 View Plugin
              </a>
            )}
          </div>
        ))}
      </div>

      <hr className="mt-6 mb-6"></hr>

      <h2 className="text-4xl font-bold text-black mb-8 text-center">Other Projects</h2>

      {/* Grid layout here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0f2027] rounded-lg p-5 shadow hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white mb-2">{project.desc}</p>
            <p className="text-sm text-white mb-3">
              <strong>Tech Used:</strong> {project.tech}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-semibold"
              >
                🔗 View Plugin
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
