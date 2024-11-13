import React, { useState } from 'react';
import { ClipboardList } from 'lucide-react';
import { useFIR } from '../context/FIRContext';

const incidentTypes = [
  'Theft',
  'Assault',
  'Cyber Crime',
  'Missing Person',
  'Property Dispute',
  'Vehicle Theft',
];

const officers = [
  {
    name: 'Inspector Sethupathi Kumar',
    image: 'https://static.toiimg.com/thumb/imgsize-146352,msid-81091928,width-600,height-335,resizemode-75/81091928.jpg?w=400&h=400&fit=crop',
  },
  {
    name: 'SI Durai Singam',
    image: 'https://upperstall.com/wp-content/uploads/2015/03/Singam-II-header-1140x633.jpg?w=400&h=400&fit=crop',
  },
  {
    name: 'Inspector Theeran',
    image: 'https://static.toiimg.com/thumb/imgsize-45792,msid-95560546,width-600,height-335,resizemode-75/95560546.jpg?w=400&h=400&fit=crop',
  },
];

export default function LogIncident() {
  const { dispatch } = useFIR();
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    date: '',
    location: '',
    complainant: '',
    contact: '',
    officer: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedOfficer = officers.find(o => o.name === formData.officer);
    
    const newFIR = {
      id: `FIR/2024/${Math.floor(Math.random() * 9000) + 1000}`,
      title: `${formData.type} at ${formData.location}`,
      status: 'Active' as const,
      officer: formData.officer,
      officerImage: selectedOfficer?.image || officers[0].image,
      description: formData.description,
      date: formData.date,
      location: formData.location,
      complainant: formData.complainant,
      contact: formData.contact,
      linkedCases: [],
      type: formData.type,
    };

    dispatch({ type: 'ADD_FIR', payload: newFIR });
    setFormData({
      type: '',
      description: '',
      date: '',
      location: '',
      complainant: '',
      contact: '',
      officer: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <ClipboardList className="w-6 h-6" />
        Register FIR
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Complainant Name
            </label>
            <input
              type="text"
              value={formData.complainant}
              onChange={(e) => setFormData({ ...formData, complainant: e.target.value })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#13326F] focus:border-[#13326F]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#13326F] focus:border-[#13326F]"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Incident Type
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#13326F] focus:border-[#13326F]"
              required
            >
              <option value="">Select type</option>
              {incidentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Investigating Officer
            </label>
            <select
              value={formData.officer}
              onChange={(e) => setFormData({ ...formData, officer: e.target.value })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#13326F] focus:border-[#13326F]"
              required
            >
              <option value="">Select officer</option>
              {officers.map((officer) => (
                <option key={officer.name} value={officer.name}>
                  {officer.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#13326F] focus:border-[#13326F]"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Incident
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#13326F] focus:border-[#13326F]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#13326F] focus:border-[#13326F]"
              placeholder="Enter location"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#13326F] text-white py-2 px-4 rounded-lg hover:bg-[#0F2A5E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#13326F] focus:ring-offset-2"
        >
          Register FIR
        </button>
      </form>
    </div>
  );
}