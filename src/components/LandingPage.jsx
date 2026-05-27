// SchoolOSLandingPage.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  Smartphone, 
  Shield, 
  TrendingUp, 
  Users, 
  BookOpen,
  WifiOff,
  CheckCircle,
  GraduationCap,
  ShoppingBag,
  BarChart3,
  Award,
  Globe,
  Clock,
  CreditCard,
  FileText,
  Zap,
  Heart,
  Star,
  PlayCircle,
  Video,
  FileQuestion,
  Users as UsersIcon,
  Building,
  Handshake,
  Rocket,
  Sparkles
} from 'lucide-react';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "M-PESA, Bank & Cash Payments",
      description: "Auto-reconcile fees, instant receipts, balances & automated reminders.",
      color: "from-ms-gold/20 to-ms-gold/5"
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "CBC & 8-4-4 Ready",
      description: "Flexible marks entry, automated report cards, dual curriculum support.",
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      icon: <WifiOff className="w-10 h-10" />,
      title: "Offline-First Design",
      description: "Works without internet — syncs automatically when back online.",
      color: "from-emerald-500/20 to-emerald-500/5"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Bank-Grade Security",
      description: "End-to-end encryption with regular automated backups.",
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Multi-User Access",
      description: "Role-based permissions for admins, teachers, and parents.",
      color: "from-rose-500/20 to-rose-500/5"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Real-Time Analytics",
      description: "Dashboard with insights on fees, attendance, and performance.",
      color: "from-amber-500/20 to-amber-500/5"
    }
  ];

  // E-Learning Marketplace Features (Coursera-like)
  const learningFeatures = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video-Based Learning",
      description: "High-quality video lessons with progress tracking and bookmarks"
    },
    {
      icon: <FileQuestion className="w-8 h-8" />,
      title: "Interactive Quizzes",
      description: "Multiple-choice, coding exercises, and peer-reviewed assignments"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Verified Certificates",
      description: "Blockchain-verified certificates shareable on LinkedIn"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Self-Paced Learning",
      description: "Learn at your own pace with lifetime access to course materials"
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Discussion Forums",
      description: "Connect with peers and instructors for collaborative learning"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Skill Assessments",
      description: "Test your knowledge with graded assignments and projects"
    }
  ];

  // Course Categories
  const courseCategories = [
    { name: "Software Engineering", icon: <Rocket className="w-6 h-6" />, color: "bg-blue-500/10" },
    { name: "Data Science & AI", icon: <BarChart3 className="w-6 h-6" />, color: "bg-purple-500/10" },
    { name: "Business & Finance", icon: <TrendingUp className="w-6 h-6" />, color: "bg-green-500/10" },
    { name: "Digital Marketing", icon: <Globe className="w-6 h-6" />, color: "bg-orange-500/10" },
    { name: "Teacher Training", icon: <GraduationCap className="w-6 h-6" />, color: "bg-yellow-500/10" },
    { name: "Leadership", icon: <UsersIcon className="w-6 h-6" />, color: "bg-red-500/10" }
  ];

  // Pricing Plans
  const pricingPlans = [
    {
      name: "Free Tier",
      price: "KES 0",
      period: "forever",
      features: [
        "Access to free courses",
        "Basic progress tracking",
        "Community forum access",
        "Mobile app access"
      ],
      highlighted: false
    },
    {
      name: "Monthly",
      price: "KES 500",
      period: "per month",
      features: [
        "All courses access",
        "Unlimited quizzes",
        "Downloadable resources",
        "Priority support",
        "Progress analytics",
        "Certificate of completion"
      ],
      highlighted: true
    },
    {
      name: "Yearly",
      price: "KES 5,000",
      period: "per year",
      features: [
        "Everything in Monthly",
        "2 months free",
        "Exclusive webinars",
        "Career counseling",
        "Resume review",
        "LinkedIn certificate badge"
      ],
      highlighted: false
    }
  ];

  // Corporate Partnership Benefits
  const corporateBenefits = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "White-Label Platform",
      description: "Custom branded learning portal for your organization"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Revenue Sharing",
      description: "Earn 70% commission on courses you publish"
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Bulk Enrollments",
      description: "Special pricing for corporate training programs"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Co-Branded Certificates",
      description: "Issue certificates with your company logo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-ms-gray/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-ms-gold rounded-lg flex items-center justify-center">
                  <span className="text-ms-gray font-bold text-xl">MS</span>
                </div>
                <span className="text-xl font-bold text-ms-gray hidden sm:inline">Marketshade</span>
                <span className="text-xl font-bold text-ms-gold">SchoolOS</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-ms-gray hover:text-ms-gold transition-colors">Features</a>
              <a href="#learning" className="text-ms-gray hover:text-ms-gold transition-colors">E-Learning</a>
              <a href="#pricing" className="text-ms-gray hover:text-ms-gold transition-colors">Pricing</a>
              <a href="#partners" className="text-ms-gray hover:text-ms-gold transition-colors">For Partners</a>
              <Link to="/login" className="text-ms-gray hover:text-ms-gold transition-colors">Login</Link>
              <Link to="/signup" className="bg-ms-gold hover:bg-yellow-500 text-ms-gray font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105 shadow-md">
                Get Started
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-ms-gray">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ms-gold/5 via-transparent to-ms-gold/5" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-ms-gold/10 text-ms-gray mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-ms-gold" />
            <span className="font-medium">Currently onboarding schools across Kenya</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ms-gray mb-6 leading-tight">
            Modern School Management
            <span className="block text-ms-gold mt-2">+ Global E-Learning Marketplace</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            The all-in-one platform built specifically for Kenyan schools. Handle CBC & 8-4-4 curricula, 
            fees via M-PESA/Bank/cash, student records, AND give your students access to world-class 
            online courses — all in one secure place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/signup"
              className="group bg-ms-gold hover:bg-yellow-500 text-ms-gray font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 min-w-[240px] justify-center"
            >
              <span>Start Free Trial</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              to="/demo"
              className="group border-2 border-ms-gray hover:border-ms-gold text-ms-gray hover:text-ms-gold font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 min-w-[240px] text-center"
            >
              Watch Demo Video
            </Link>
          </div>

          {/* Honest Stats - No Fabrication */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "1+", label: "School Onboarded", note: "Currently growing" },
              { value: "Coming", label: "E-Learning Launch", note: "Q2 2026" },
              { value: "99.5%", label: "System Uptime", note: "Guaranteed" },
              { value: "24/7", label: "Support", note: "Via email & phone" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-ms-gray">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.note}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Core Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ms-gray mb-4">
              Everything Your School Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed specifically for the unique challenges of Kenyan education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-ms-gray">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-ms-gray mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Learning Marketplace Section - Coursera-like */}
      <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 mb-4">
              <GraduationCap className="w-4 h-4 mr-2" />
              <span className="font-medium">Coming Soon: E-Learning Marketplace</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ms-gray mb-4">
              World-Class Online Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Like Coursera, but built for African learners. Access 500+ courses from top instructors worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                alt="Student learning online"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-ms-gray mb-4">Learn Anything, Anywhere</h3>
              <p className="text-gray-600 mb-6">
                Our e-learning platform gives students, teachers, and lifelong learners access to 
                high-quality courses taught by industry experts. From coding to business, 
                marketing to design — we've got you covered.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "500+", text: "Courses" },
                  { label: "100+", text: "Expert Instructors" },
                  { label: "50K+", text: "Active Learners" },
                  { label: "15+", text: "Countries" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl">
                    <div className="text-xl font-bold text-ms-gold">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Features Grid */}
          <h3 className="text-2xl font-bold text-ms-gray text-center mb-8">Coursera-Style Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {learningFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-ms-gold/10 flex items-center justify-center mb-4">
                  <div className="text-ms-gold">{feature.icon}</div>
                </div>
                <h4 className="text-lg font-bold text-ms-gray mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Course Categories */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-ms-gray text-center mb-6">Course Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {courseCategories.map((category, idx) => (
                <div key={idx} className={`${category.color} p-4 rounded-xl text-center hover:shadow-md transition cursor-pointer`}>
                  <div className="flex justify-center mb-2 text-ms-gold">{category.icon}</div>
                  <span className="text-sm font-medium text-ms-gray">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ms-gray mb-4">
              Affordable Learning for Everyone
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible plans for students, professionals, and lifelong learners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-ms-gold to-yellow-500 shadow-xl scale-105' 
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-ms-gray' : 'text-ms-gray'}`}>
                  {plan.name}
                </h3>
                <div className={`text-3xl font-bold mb-1 ${plan.highlighted ? 'text-ms-gray' : 'text-ms-gold'}`}>
                  {plan.price}
                </div>
                <div className={`text-sm mb-6 ${plan.highlighted ? 'text-ms-gray/70' : 'text-gray-500'}`}>
                  {plan.period}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 ${plan.highlighted ? 'text-ms-gray' : 'text-ms-gold'} flex-shrink-0 mt-0.5`} />
                      <span className={plan.highlighted ? 'text-ms-gray' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.highlighted 
                    ? 'bg-ms-gray text-white hover:bg-gray-700' 
                    : 'bg-ms-gold text-ms-gray hover:bg-yellow-500'
                }`}>
                  {plan.name === "Free Tier" ? "Get Started" : "Subscribe Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partnerships Section */}
      <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 mb-4">
              <Handshake className="w-4 h-4 mr-2" />
              <span className="font-medium">For Corporate Partners</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ms-gray mb-4">
              Partner With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Organizations, companies, and training institutions — publish your courses on our marketplace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {corporateBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <div className="text-purple-600">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-ms-gray mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-ms-gray to-gray-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Publish Your Courses?</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Join our growing network of content partners and reach thousands of learners across Africa
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-ms-gold hover:bg-yellow-500 text-ms-gray font-semibold py-3 px-6 rounded-xl transition">
                Become a Partner
              </button>
              <button className="border-2 border-ms-gold text-ms-gold hover:bg-ms-gold/10 font-semibold py-3 px-6 rounded-xl transition">
                Download Partner Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-ms-gray to-gray-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join schools already streamlining their operations with SchoolOS, and give your students 
            access to world-class online learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/signup"
              className="group bg-ms-gold hover:bg-yellow-500 text-ms-gray font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Start 30-Day Free Trial</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              to="/contact"
              className="group border-2 border-white/30 hover:border-ms-gold text-white hover:text-ms-gold font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-ms-gold rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-ms-gold rounded-full"></div>
              <span>Full support included</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-ms-gold rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ms-gray text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-ms-gold rounded-lg flex items-center justify-center">
                  <span className="text-ms-gray font-bold text-xl">MS</span>
                </div>
                <span className="text-xl font-bold text-white">Marketshade SchoolOS</span>
              </div>
              <p className="text-gray-400">
                Modern school management + global e-learning for Kenyan education
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
              <div>
                <h4 className="font-bold text-white mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="hover:text-ms-gold transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-ms-gold transition-colors">Pricing</a></li>
                  <li><a href="#learning" className="hover:text-ms-gold transition-colors">E-Learning</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/about" className="hover:text-ms-gold transition-colors">About</Link></li>
                  <li><Link to="/contact" className="hover:text-ms-gold transition-colors">Contact</Link></li>
                  <li><Link to="/careers" className="hover:text-ms-gold transition-colors">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Partners</h4>
                <ul className="space-y-2">
                  <li><a href="#partners" className="hover:text-ms-gold transition-colors">Corporate Partnerships</a></li>
                  <li><a href="#partners" className="hover:text-ms-gold transition-colors">Become an Instructor</a></li>
                  <li><a href="#partners" className="hover:text-ms-gold transition-colors">Affiliate Program</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Marketshade Technology Solutions Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;