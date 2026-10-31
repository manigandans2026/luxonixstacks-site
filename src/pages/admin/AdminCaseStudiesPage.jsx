import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Plus,
  ExternalLink,
  Trash2,
  X,
  CheckCircle,
  Briefcase,
} from 'lucide-react';
import { caseStudiesList } from '../../data/caseStudies';
import FallbackImage from '../../components/common/FallbackImage';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function AdminCaseStudiesPage() {
  useDocumentTitle('Case Studies Management | Admin Portal', 'Manage case studies.');
  const [studies, setStudies] = useState(caseStudiesList);
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    category: 'HRTech',
    timeline: '100 Days',
    description: '',
  });

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this case study?')) {
      setStudies(studies.filter((s) => s.id !== id));
      setMessage('Case study removed from current session view.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.client) {
      alert('Please provide at least a Title and Client name.');
      return;
    }

    const newSlug = formData.title.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 20);
    const newStudy = {
      id: `case-${Date.now()}`,
      slug: newSlug,
      title: formData.title,
      client: formData.client,
      category: formData.category,
      timeline: formData.timeline,
      description: formData.description || 'Newly added portfolio case study.',
      image: '/assets/portfolio-payroll.svg',
      technologies: ['React.js', 'Node.js', 'Docker'],
      result: ['Modernized enterprise architecture', 'Delivered within scheduled milestone'],
    };

    setStudies([newStudy, ...studies]);
    setIsModalOpen(false);
    setFormData({
      title: '',
      client: '',
      category: 'HRTech',
      timeline: '100 Days',
      description: '',
    });
    setMessage('New case study successfully added to current session!');
    setTimeout(() => setMessage(''), 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-0">
        <Link
          to="/admin"
          className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-black mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Case Studies Management
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Review, add, and organize portfolio projects ({studies.length} active)
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-bold rounded-xl text-white bg-black hover:bg-gray-800 transition-colors shadow-sm self-start sm:self-auto"
          >
            <Plus className="h-4 w-4 mr-2" /> Add Case Study
          </button>
        </div>

        {message && (
          <div className="mb-6 p-4 rounded-xl bg-green-50 text-green-800 border border-green-200 flex items-center space-x-2 text-sm font-medium">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
            <span>{message}</span>
          </div>
        )}

        <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Preview
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Title & Description
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studies.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <FallbackImage
                        src={item.image}
                        alt={item.title}
                        className="h-10 w-14 rounded-lg object-cover border border-gray-200"
                        fallbackText={item.client}
                      />
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 max-w-xs truncate">
                      <div>{item.title}</div>
                      <div className="text-xs font-normal text-gray-500 truncate max-w-xs">
                        {item.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {item.client}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                      <Link
                        to={`/case-study/${item.slug}`}
                        target="_blank"
                        className="text-gray-500 hover:text-black inline-flex items-center"
                        title="View Live Page"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                        title="Delete from session"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal for adding a Case Study */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Add New Case Study</h3>
                  <p className="text-xs text-gray-500">In-memory portfolio demonstration</p>
                </div>
              </div>

              <form onSubmit={handleCreateSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Nexus – Cloud Logistics Platform"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Client Organization *
                  </label>
                  <input
                    type="text"
                    name="client"
                    required
                    value={formData.client}
                    onChange={handleInputChange}
                    placeholder="e.g., Nexus Global Freight Pvt Ltd"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      placeholder="e.g., Logistics / SaaS"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      Timeline
                    </label>
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      placeholder="e.g., 100 Days"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Project Overview / Summary
                  </label>
                  <textarea
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Brief architectural overview and business outcomes..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="pt-4 flex justify-end space-x-3 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors"
                  >
                    Save Case Study
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
