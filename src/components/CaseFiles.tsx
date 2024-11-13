import React, { useState } from 'react';
import { FileText, Search, Link as LinkIcon } from 'lucide-react';
import { useFIR } from '../context/FIRContext';

export default function CaseFiles() {
  const { state, dispatch } = useFIR();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [showLinkModal, setShowLinkModal] = useState(false);

  const filteredCases = state.cases.filter(
    case_ =>
      case_.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStatusChange = (id: string, newStatus: 'Active' | 'Closed' | 'Under Investigation' | 'Pending') => {
    dispatch({ type: 'UPDATE_STATUS', payload: { id, status: newStatus } });
  };

  const handleLinkCase = (sourceId: string, targetId: string) => {
    dispatch({ type: 'LINK_CASE', payload: { sourceId, targetId } });
    setShowLinkModal(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FileText className="w-6 h-6" />
          FIR Records
        </h2>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FIR..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#1A237E] focus:border-[#1A237E]"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {filteredCases.map((case_) => (
          <div key={case_.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <img
                src={case_.officerImage}
                alt={case_.officer}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">{case_.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{case_.description}</p>
                    {case_.linkedCases.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm text-blue-600">
                          Linked Cases: {case_.linkedCases.join(', ')}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <select
                      value={case_.status}
                      onChange={(e) => handleStatusChange(case_.id, e.target.value as any)}
                      className={`px-2 py-1 text-xs font-semibold rounded-full border-0
                        ${case_.status === 'Active' ? 'bg-yellow-100 text-yellow-800' : 
                        case_.status === 'Closed' ? 'bg-green-100 text-green-800' : 
                        case_.status === 'Under Investigation' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'}`}
                    >
                      <option value="Active">Active</option>
                      <option value="Closed">Closed</option>
                      <option value="Under Investigation">Under Investigation</option>
                      <option value="Pending">Pending</option>
                    </select>
                    <button
                      onClick={() => {
                        setSelectedCase(case_.id);
                        setShowLinkModal(true);
                      }}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                    >
                      <LinkIcon className="w-4 h-4" />
                      Link Case
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>FIR Number: {case_.id}</span>
                  <span>Investigating Officer: {case_.officer}</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <span>Complainant: {case_.complainant}</span>
                  <span className="mx-2">•</span>
                  <span>Contact: {case_.contact}</span>
                  <span className="mx-2">•</span>
                  <span>Date: {case_.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showLinkModal && selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Link Case</h3>
            <div className="space-y-4">
              {state.cases
                .filter(c => c.id !== selectedCase)
                .map(case_ => (
                  <button
                    key={case_.id}
                    onClick={() => handleLinkCase(selectedCase, case_.id)}
                    className="w-full text-left p-2 hover:bg-gray-50 rounded-lg"
                  >
                    <p className="font-medium">{case_.id}</p>
                    <p className="text-sm text-gray-600">{case_.title}</p>
                  </button>
                ))}
            </div>
            <button
              onClick={() => setShowLinkModal(false)}
              className="mt-4 w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}