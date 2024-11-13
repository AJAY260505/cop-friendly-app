import React from 'react';
import { Map, Navigation } from 'lucide-react';

const routes = [
  {
    id: 'A',
    name: 'Market Area Beat',
    checkpoints: ['Sadar Bazaar', 'Railway Station', 'Bus Stand'],
    officer: 'Head Constable Yadav',
    status: 'Active',
    officerImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
  },
  {
    id: 'B',
    name: 'Residential Beat',
    checkpoints: ['Sector 14', 'Sector 15', 'Metro Station'],
    officer: 'Constable Singh',
    status: 'Pending',
    officerImage: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop'
  },
  {
    id: 'C',
    name: 'Commercial Beat',
    checkpoints: ['IT Park', 'Mall Road', 'Industrial Area'],
    officer: 'Head Constable Gupta',
    status: 'Complete',
    officerImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop'
  },
];

export default function PatrolRoutes() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Map className="w-6 h-6" />
        Beat Patrol
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route) => (
          <div key={route.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={route.officerImage}
                alt={route.officer}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Beat {route.id}</h3>
                <p className="text-sm text-gray-600">{route.name}</p>
              </div>
            </div>
            <div className="space-y-2">
              {route.checkpoints.map((checkpoint, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#13326F]" />
                  <span className="text-sm text-gray-600">{checkpoint}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <span className="text-sm text-gray-500">{route.officer}</span>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full 
                ${route.status === 'Active' ? 'bg-green-100 text-green-800' : 
                route.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-gray-100 text-gray-800'}`}>
                {route.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}