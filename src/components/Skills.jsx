function Skills() {
  return (
<section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-10  max-w-4xl mx-auto rounded-2xl shadow-lg mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">Skills</h2>

      <div className="space-y-4">
        <div className="mb-4 leading-relaxed">
          <h3 className="text-xl font-medium text-gray-900 mb-2">🛠 WordPress & eCommerce</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>6+ years of experience in custom theme & plugin development</li>
            <li>WooCommerce customization — products, payments, shipping logic</li>
            <li>3rd-party API integration & advanced admin panels</li>
            <li>Security, SEO, caching & performance optimization</li>
          </ul>
        </div>

        <div className="mb-4 leading-relaxed">
          <h3 className="text-xl font-medium text-gray-900 mb-2">⚙️ Backend Development</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>8+ years with Core PHP (custom CMS, MVC, REST APIs)</li>
            <li>MySQL — schema design, joins, indexing & transactions</li>
            <li>Basic knowledge of Node.js & Express.js for APIs</li>
            <li>Experience with Yii Framework for modular apps</li>
          </ul>
        </div>

        <div className="mb-4 leading-relaxed">
          <h3 className="text-xl font-medium text-gray-900 mb-2">🎨 Frontend Development</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>HTML5, CSS3, JavaScript, jQuery — 8+ years</li>
            <li>React.js — 1 year (component UI, SPA apps)</li>
            <li>Responsive layouts, AJAX interactivity</li>
          </ul>
        </div>

        <div className="mb-4 leading-relaxed">
          <h3 className="text-xl font-medium text-gray-900 mb-2">🛒 E-Commerce Platforms</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>OpenCart (5 years) — modules, themes, multi-vendor</li>
            <li>Magento (2 years) — shipping & payment modules</li>
          </ul>
        </div>

        <div className="mb-4 leading-relaxed">
          <h3 className="text-xl font-medium text-gray-900 mb-2">🧪 Tools & Collaboration</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Version Control with Git (GitHub, GitLab)</li>
            <li>Agile/Scrum teams & client communication</li>
            <li>Code reviews, documentation, team mentorship</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
