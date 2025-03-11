import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, GraduationCap, Award, ChevronDown, ChevronUp, Building2, Briefcase, Code, Calendar } from 'lucide-react';

function EducationCard({ 
  institution, 
  logo, 
  degree, 
  duration, 
  gpa, 
  details 
}: {
  institution: string;
  logo?: string;
  degree: string;
  duration: string;
  gpa?: string;
  details: {
    expectedDegree?: string;
    major?: string;
    coursework?: string[];
    minorDetails?: {
      title: string;
      gpa: string;
    };
  };
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4 flex-grow">
          {logo && (
            <img 
              src={logo} 
              alt={`${institution} logo`} 
              className="w-16 h-16 object-contain"
            />
          )}
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-blue-600">{institution}</h3>
            <p className="text-lg font-semibold text-gray-700 mt-1">{degree}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">{duration}</p>
            {gpa && (
              <div className="flex items-center mt-1 justify-end gap-1">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="font-semibold text-yellow-500">{gpa}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 w-full flex items-center justify-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
      >
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-4 border-t border-gray-200 pt-4">
          {details.expectedDegree && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700">Expected Degree</h4>
              <p className="text-gray-600">{details.expectedDegree}</p>
            </div>
          )}
          
          {details.major && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700">Major</h4>
              <p className="text-gray-600">{details.major}</p>
            </div>
          )}

          {details.minorDetails && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700">Minor</h4>
              <p className="text-gray-600">{details.minorDetails.title}</p>
              <div className="flex items-center mt-1 gap-1">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 font-semibold">{details.minorDetails.gpa}</span>
              </div>
            </div>
          )}
          
          {details.coursework && details.coursework.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700">Relevant Coursework</h4>
              <ul className="mt-2 grid grid-cols-2 gap-2">
                {details.coursework.map((course, index) => (
                  <li key={index} className="text-gray-600 text-sm">{course}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ExperienceCard({
  company,
  position,
  location,
  duration,
  details
}: {
  company: string;
  position: string;
  location: string;
  duration: string;
  details: string[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-blue-600">{company}</h3>
          <p className="text-lg font-semibold mt-1 text-gray-700">{position}</p>
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <Building2 className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 mt-1 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 w-full flex items-center justify-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
      >
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-2 border-t border-gray-200 pt-4">
          <ul className="list-disc list-inside space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="text-gray-600">{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  title,
  duration,
  description,
  link
}: {
  title: string;
  duration: string;
  description: string[];
  link: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-blue-600">{title}</h3>
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
      </div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 w-full flex items-center justify-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
      >
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-4 border-t border-gray-200 pt-4">
          <ul className="list-disc list-inside space-y-2">
            {description.map((detail, index) => (
              <li key={index} className="text-gray-600">{detail}</li>
            ))}
          </ul>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 mt-4"
            >
              <Github className="w-5 h-5" />
              <span>View Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Rest of the App component remains exactly the same */}
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Balaji Udayagiri
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              1st Year Masters Student at PennState
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Balaji-Udayagiri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-transform duration-200"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/balaji-udayagiri-51a759191/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-transform duration-200"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:udayagirigsbalaji@gmail.com"
                className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-transform duration-200"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white shadow-inner">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">About Me</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm a passionate about Computer Science and Mathematics with a keen interest in LLMs, CV and everything happening in the AI world. 
              I love working with modern technologies and am always eager to learn and grow in my field.
            </p>
            <div className="flex justify-center mt-8">
              <a
                href="https://drive.google.com/file/d/1ITP08Yevw6ipA5HSDjn6M_gHNBJZwQ-Z/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center space-x-2 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3 text-gray-800">
            <Briefcase className="w-8 h-8" />
            Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <ExperienceCard
              company="MathWorks"
              position="Engineer in Engineering Development Group"
              location="Hyderabad"
              duration="July 2023 – June 2024"
              details={[
                "Conducted comprehensive evaluation of Lane Detection Algorithms, assessing CLR-NET, RVLD, and CLRer-NET models. Identified RVLD as the top-performing algorithm, achieving superior results in F1-score and mIOU metrics.",
                "Implemented RVLD algorithm in MATLAB, enabling seamless integration with ScenarioGeneration.",
                "Streamlined the RoadRunner Testing Framework in Windows, thus eliminating the need for manual testing."
              ]}
            />
            <ExperienceCard
              company="Shopagain"
              position="Machine Learning Intern"
              location="Remote"
              duration="January 2023 – February 2023"
              details={[
                "Developed a machine learning model to predict the purchasing intent of an anonymous e-commerce browser.",
                "Extracted features from mouse activity and product views, achieving a 68% positive intent recall and 97% negative intent accuracy using an RF model across 5 e-commerce websites with turnover ranging from 100K- 1M USD."
              ]}
            />
            <ExperienceCard
              company="MathWorks"
              position="Engineering Development Group Intern"
              location="Hyderabad"
              duration="May 2022 – July 2022"
              details={[
                "Performed an in-depth analysis of lane tracking models JPDA and GNN, tuning their parameters for optimal performance and comparing the results against internal datasets.",
                "Investigated lane detection algorithms for the ScenarioBuilder workflow and identified CLR-NET, which combines high-level semantic features with low-level refinements for improved lane detection results."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3 text-gray-800">
            <GraduationCap className="w-8 h-8" />
            Education
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <EducationCard
              institution="The Pennsylvania State University"
              logo="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Penn_State_Nittany_Lions_logo.svg/1280px-Penn_State_Nittany_Lions_logo.svg.png"
              degree="M.S. in Computer Science and Engineering"
              duration="2024 - 2026"
              gpa="4.0/4.0"
              details={{
                expectedDegree: "Master of Science in Computer Science and Engineering",
                major: "Computer Science and Engineering",
                coursework: [
                  "CSE597-08 Foundations of Deep Learning",
                  "CSE584 Machine Learning",
                  "CSE597-03 Vision and Language",
                  "CSE586 Computer Vision II",
                  "CSE530 Computer Architecture",
                ]
              }}
            />
            <EducationCard
              institution="Indian Institute of Technology, Kharagpur"
              logo="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png"
              degree="Dual Degree (B.Tech + M.Tech)"
              duration="2018 - 2023"
              gpa="8.9/10"
              details={{
                major: "Electronics and Electrical Communication Engineering",
                minorDetails: {
                  title: "Computer Science and Engineering",
                  gpa: "8.8/10"
                },
                coursework: [
                  "Digital Signal Processing",
                  "VLSI Design",
                  "Computer Networks",
                  "Data Structures",
                  "Algorithms",
                  "Operating Systems"
                ]
              }}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3 text-gray-800">
            <Code className="w-8 h-8" />
            Featured Projects
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <ProjectCard
              title="Qiskit Chatbot"
              duration="2024"
              description={[
                "Developed a chatbot specialized in Qiskit and quantum computing",
                "Implemented using advanced NLP techniques and the Qiskit framework"
              ]}
              link="https://github.com/Balaji-Udayagiri/Qiskit-Chatbot/tree/dev"
            />
            <ProjectCard
              title="Kharagpur Data Science Hackathon by Axtria"
              duration="2024"
              description={[
                "Determined the optimal drug channel promotion for Healthcare Providers (HCPs), considering specific constraints.",
                "Trained an LSTM model to predict the next week’s Market Rx and the number of patients for each HCP.",
                "Developed a 5-layer neural network model to predict BrandRx, resulting the highest solution accuracy of 0.52415.",
                "Stood first among 700+ team in the hackathon."
              ]}
              link="https://colab.research.google.com/drive/12fi3vT8hyZAIiwKtlCLwfWb_AfUvmSn5?usp=sharing"
            />
            <ProjectCard
              title="Classification of Large Language Models (LLMs)"
              duration="Aug 2024 – Dec 2024"
              description={[
                "Developed a classifier to identify the LLM responsible for generating text completions from a set of truncated sentences, focusing on 5 models: GPT-2, GPT-Neo, Facebook OPT, Gemma2:2B, and Mistral-OpenOrca.",
                "Utilized SBERT embeddings to represent the generated text and trained a Fully Connected (FC) neural network for classification.",
                "Achieved an accuracy of 70.83% in model classification"
              ]}
              link="https://github.com/Balaji-Udayagiri/MLMidTerm"
            />
            <ProjectCard
              title="Rumour and Stance Classification on PHEME-RNR Dataset"
              duration="Sep 2021 – Nov 2021"
              description={[
                "Improved accuracy by 2% using stance classification in Tree LSTM-based rumor detection from a benchmark.",
                "Preprocessed PHEME dataset for 'Cascade-LSTM: A Tree-Structured Neural Classifier for Detecting Misinformation Cascades' by matching relevant features."
              ]}
              link="https://colab.research.google.com/drive/1KUYE_CakSY5P6kc0DIDj2iB_gysCCmyr?usp=sharing"
            />
            <ProjectCard
              title="Combating Online Hostile Posts in Regional Languages"
              duration="Feb 2021 – Apr 2021"
              description={[
                "Extracted hostile posts in Hindi from religious organizations on Twitter using Twitter API v2 and analyzed them.",
                "Built a hostile speech detection model using NLTK and PyTorch, created a dataset, and introduced a hate score"
              ]}
              link=""
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <a
            href="mailto:udayagirigsbalaji@gmail.com"
            className="text-blue-600 hover:text-blue-500 flex items-center justify-center space-x-2"
          >
            <Mail className="w-5 h-5" />
            <span>udayagirigsbalaji@gmail.com</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;