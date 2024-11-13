import React, { useState } from 'react';
import { Shield, Menu } from 'lucide-react';
import CaseFiles from './components/CaseFiles';
import LogIncident from './components/LogIncident';
import PatrolRoutes from './components/PatrolRoutes';
import Updates from './components/Updates';
import { FIRProvider } from './context/FIRContext';

function App() {
  const [activeTab, setActiveTab] = useState('cases');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'cases', name: 'FIR Records' },
    { id: 'incident', name: 'Register FIR' },
    { id: 'routes', name: 'Beat Patrol' },
    { id: 'updates', name: 'Updates' },
  ];

  return (
    <FIRProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-[#1A237E] text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Shield className="w-8 h-8 mr-2" />
                <div>
                  <h1 className="text-2xl font-bold">Tamil Nadu Police Department</h1>
                  <p className="text-sm">Serving and Protecting</p>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-col md:flex-row md:space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`px-3 py-4 text-sm font-medium ${
                      activeTab === item.id
                        ? 'text-[#1A237E] border-b-2 border-[#1A237E]'
                        : 'text-gray-500 hover:text-gray-700'
                    } transition-colors`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            {activeTab === 'cases' && <CaseFiles />}
            {activeTab === 'incident' && <LogIncident />}
            {activeTab === 'routes' && <PatrolRoutes />}
            {activeTab === 'updates' && <Updates />}
          </div>
        </main>

        <footer className="bg-white mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Tamil Nadu Police Department
            </p>
          </div>
        </footer>
      </div>
    </FIRProvider>
  );
}

export default App;