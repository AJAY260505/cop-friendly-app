import React from 'react';
import { Bell, Calendar, Users, AlertCircle } from 'lucide-react';

const updates = [
  {
    id: 1,
    type: 'meeting',
    title: 'Morning Briefing',
    description: 'Daily briefing at 8 AM',
    date: '2024-03-15',
    priority: 'high',
  },
  {
    id: 2,
    type: 'schedule',
    title: 'Duty Roster Update',
    description: 'New duty roster has been issued',
    date: '2024-03-14',
    priority: 'medium',
  },
  {
    id: 3,
    type: 'alert',
    title: 'Special Drive',
    description: 'Special traffic enforcement drive',
    date: '2024-03-13',
    priority: 'low',
  },
];

export default function Updates() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Bell className="w-6 h-6" />
        Notifications
      </h2>
      <div className="space-y-4">
        {updates.map((update) => (
          <div
            key={update.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              {update.type === 'meeting' && (
                <Users className="w-5 h-5 text-[#13326F] flex-shrink-0" />
              )}
              {update.type === 'schedule' && (
                <Calendar className="w-5 h-5 text-green-500 flex-shrink-0" />
              )}
              {update.type === 'alert' && (
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              )}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">{update.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full 
                    ${update.priority === 'high' ? 'bg-red-100 text-red-800' : 
                    update.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-green-100 text-green-800'}`}>
                    {update.priority.charAt(0).toUpperCase() + update.priority.slice(1)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{update.description}</p>
                <p className="text-gray-400 text-xs mt-2">{new Date(update.date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}