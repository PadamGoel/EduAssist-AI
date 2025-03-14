import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Book, Brain, FileText, BarChart3, MessageCircle, Search, Video } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle signup button click
  const handleSignupClick = () => {
    navigate('/signup');
  };

  // Function to handle login button click
  const handleLoginClick = () => {
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 font-sans">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">EduGenius</Link>
          </div>
          <div className="hidden md:flex space-x-10">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition">Testimonials</a>
          </div>
          <div>
            <button 
              onClick={handleSignupClick}
              className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition mr-4"
            >
              Sign Up
            </button>
            <button 
              onClick={handleLoginClick}
              className="border border-indigo-600 text-indigo-600 py-2 px-6 rounded-full hover:bg-indigo-50 transition"
            >
              Log In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Transform Teaching with 
              <span className="text-indigo-600"> AI-Powered</span> Assistance
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Automate grading, provide personalized feedback, and save countless hours with our intelligent education platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleSignupClick}
                className="bg-indigo-600 text-white py-3 px-8 rounded-full hover:bg-indigo-700 transition flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white text-indigo-600 py-3 px-8 rounded-full hover:bg-gray-100 transition">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/api/placeholder/600/400" 
              alt="AI Teaching Assistant Dashboard" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        {/* Content remains the same */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Powerful Features for Modern Education</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform helps teachers save time and improve student outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-indigo-600 p-3 rounded-lg inline-block">
                <FileText className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">AI-Based Assignment Grading</h3>
              <p className="mt-2 text-gray-600">
                Our AI scans written or typed assignments and automatically grades them, saving teachers hours of manual work.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-purple-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-purple-600 p-3 rounded-lg inline-block">
                <MessageCircle className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Personalized Feedback Generator</h3>
              <p className="mt-2 text-gray-600">
                AI analyzes student work and provides detailed feedback on mistakes and areas for improvement.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-green-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-green-600 p-3 rounded-lg inline-block">
                <Search className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Plagiarism & Grammar Checker</h3>
              <p className="mt-2 text-gray-600">
                AI checks for plagiarism and analyzes grammar and clarity in student writing, encouraging originality.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-red-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-red-600 p-3 rounded-lg inline-block">
                <Book className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Smart Quiz & Exam Evaluation</h3>
              <p className="mt-2 text-gray-600">
                Teachers can upload quizzes and exams, and AI automatically grades them, reducing marking time.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-yellow-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-yellow-600 p-3 rounded-lg inline-block">
                <Brain className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Adaptive Learning Suggestions</h3>
              <p className="mt-2 text-gray-600">
                AI recommends learning resources based on a student's weaknesses, providing personalized study materials.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-orange-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="bg-orange-600 p-3 rounded-lg inline-block">
                <BarChart3 className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">Teacher Dashboard</h3>
              <p className="mt-2 text-gray-600">
                A comprehensive dashboard that shows student progress, strengths, and weaknesses over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-indigo-50">
        {/* Content remains the same */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform simplifies the teaching process from start to finish
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center hover:shadow-lg transition">
              <div className="bg-indigo-100 inline-flex rounded-full p-3 mb-4">
                <span className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Upload Assignments</h3>
              <p className="text-gray-600">
                Teachers upload assignments through our intuitive dashboard or integrate with existing systems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center hover:shadow-lg transition">
              <div className="bg-indigo-100 inline-flex rounded-full p-3 mb-4">
                <span className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI analyzes student submissions for content, accuracy, and originality.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center hover:shadow-lg transition">
              <div className="bg-indigo-100 inline-flex rounded-full p-3 mb-4">
                <span className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Review & Distribute</h3>
              <p className="text-gray-600">
                Teachers review automated grades and feedback before distributing them to students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        {/* Content remains the same */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Educators Are Saying</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Teachers love how our platform transforms their classroom experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="Teacher" className="rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                  <p className="text-gray-600">High School English Teacher</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "This platform has saved me countless hours grading essays. The feedback it provides is surprisingly thorough and personalized."
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="Teacher" className="rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Michael Rodriguez</h4>
                  <p className="text-gray-600">Middle School Math Teacher</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The adaptive learning suggestions have been a game-changer for my students who were struggling with certain concepts."
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/60/60" alt="Teacher" className="rounded-full" />
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Jennifer Lee</h4>
                  <p className="text-gray-600">Elementary School Teacher</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The dashboard helps me quickly identify which students need extra attention. I can now spend more time teaching and less time on paperwork."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Teaching?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Join thousands of educators who are saving time and improving student outcomes with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={handleSignupClick}
              className="bg-white text-indigo-600 py-3 px-8 rounded-full hover:bg-gray-100 transition font-semibold"
            >
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white py-3 px-8 rounded-full hover:bg-indigo-700 transition font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">EduGenius</h3>
              <p className="text-gray-400">
                Transforming education with AI-powered assistance for teachers and personalized learning for students.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">AI Grading</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Feedback Generator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Plagiarism Checker</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Analytics Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Webinars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">info@edugenius.com</li>
                <li className="text-gray-400">1-800-EDU-GENIUS</li>
                <li className="text-gray-400">123 Learning Lane, Education City</li>
              </ul>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Video className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Book className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 EduGenius. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;